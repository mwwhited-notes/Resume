#!/usr/bin/env node

/**
 * Career Portal Scraper
 *
 * Many corporate career portals (Workday, Greenhouse, Eightfold, Phenom People,
 * Oracle Cloud Recruiting, custom SPAs) render job listings via client-side
 * JavaScript. A plain HTTP fetch only sees the empty page shell, so it cannot
 * confirm whether matching roles exist. This script uses Playwright to load
 * each page in a real (headless) browser, let the JS render, and then search
 * the rendered text for senior engineering/architecture titles.
 *
 * Usage:
 *   npm install        (one-time; also downloads the Chromium browser)
 *   node career-portal-scraper.js [--input companies.json] [--output results.json]
 *
 * Input file format: JSON array of { company, ticker, url }.
 * Output file format: JSON array of per-company results, each with:
 *   { company, ticker, url, status, matches: [...], error }
 * where status is one of: "matched", "no-match", "unreachable".
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const TITLE_PATTERN = /\b(principal|staff|chief|distinguished|enterprise)\b.{0,40}\b(architect|engineer)\b|\b(architect|engineer)\b.{0,40}\b(principal|staff|chief|distinguished)\b/i;
const COMP_PATTERN = /\$[\d,]+(?:\.\d+)?\s*[KkMm]?\s*(?:\/\s*yr|\/\s*year|\/\s*hr|\/\s*hour)?\s*(?:-|to|–)\s*\$?[\d,]+(?:\.\d+)?\s*[KkMm]?\s*(?:\/\s*yr|\/\s*year|\/\s*hr|\/\s*hour)?/i;

// Search-box selectors and search-query URL patterns to try, roughly in order
// of how common they are across major ATS platforms.
const SEARCH_QUERY = 'principal architect staff engineer';
const URL_SEARCH_PATTERNS = [
  (u) => `${u}${u.includes('?') ? '&' : '?'}q=${encodeURIComponent(SEARCH_QUERY)}`,
  (u) => `${u}${u.includes('?') ? '&' : '?'}search=${encodeURIComponent(SEARCH_QUERY)}`,
  (u) => `${u}${u.includes('?') ? '&' : '?'}keyword=${encodeURIComponent(SEARCH_QUERY)}`,
];
const SEARCH_BOX_SELECTORS = [
  'input[type="search"]',
  'input[placeholder*="search" i]',
  'input[aria-label*="search" i]',
  'input[name*="keyword" i]',
];

const NAV_TIMEOUT_MS = 25000;
const RENDER_WAIT_MS = 4000;

function extractMatches(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const matches = [];
  for (let i = 0; i < lines.length; i++) {
    if (TITLE_PATTERN.test(lines[i])) {
      const context = lines.slice(Math.max(0, i - 1), i + 3).join(' | ');
      const compMatch = context.match(COMP_PATTERN);
      matches.push({
        title_line: lines[i],
        context,
        compensation: compMatch ? compMatch[0] : null,
      });
    }
  }
  // De-duplicate near-identical matches (same title line repeated across
  // paginated/re-rendered content).
  const seen = new Set();
  return matches.filter((m) => {
    const key = m.title_line.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function tryInteractiveSearch(page) {
  for (const selector of SEARCH_BOX_SELECTORS) {
    const box = page.locator(selector).first();
    try {
      if (await box.count() > 0 && await box.isVisible({ timeout: 1000 })) {
        await box.fill(SEARCH_QUERY);
        await box.press('Enter');
        await page.waitForTimeout(RENDER_WAIT_MS);
        return true;
      }
    } catch {
      // Selector not present/interactable — try the next one.
    }
  }
  return false;
}

async function scrapeCompany(browser, entry) {
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
  });
  const page = await context.newPage();
  const result = { company: entry.company, ticker: entry.ticker, url: entry.url, status: 'unreachable', matches: [], error: null, urlTried: entry.url };

  try {
    await page.goto(entry.url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });
    await page.waitForTimeout(RENDER_WAIT_MS);

    let text = await page.innerText('body').catch(() => '');
    let matches = extractMatches(text);

    // If nothing matched yet, try interacting with an in-page search box.
    if (matches.length === 0) {
      const interacted = await tryInteractiveSearch(page);
      if (interacted) {
        text = await page.innerText('body').catch(() => '');
        matches = extractMatches(text);
      }
    }

    // If still nothing, try a couple of common search-query URL patterns.
    if (matches.length === 0) {
      for (const buildUrl of URL_SEARCH_PATTERNS) {
        const searchUrl = buildUrl(entry.url);
        try {
          await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });
          await page.waitForTimeout(RENDER_WAIT_MS);
          text = await page.innerText('body').catch(() => '');
          matches = extractMatches(text);
          if (matches.length > 0) {
            result.urlTried = searchUrl;
            break;
          }
        } catch {
          // This URL pattern didn't work for this site — try the next one.
        }
      }
    }

    result.matches = matches;
    result.status = matches.length > 0 ? 'matched' : 'no-match';
  } catch (err) {
    result.status = 'unreachable';
    result.error = err.message;
  } finally {
    await context.close();
  }

  return result;
}

async function main() {
  const args = process.argv.slice(2);
  const inputFlag = args.indexOf('--input');
  const outputFlag = args.indexOf('--output');
  const inputPath = inputFlag >= 0 ? args[inputFlag + 1] : path.join(__dirname, 'companies.json');
  const outputPath = outputFlag >= 0 ? args[outputFlag + 1] : path.join(__dirname, `scrape-results-${new Date().toISOString().slice(0, 10)}.json`);

  const companies = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  const browser = await chromium.launch({ headless: true });
  const results = [];

  // Modest concurrency — enough to be fast without hammering any single
  // host or getting bot-blocked en masse.
  const CONCURRENCY = 4;
  let cursor = 0;

  async function worker() {
    while (cursor < companies.length) {
      const entry = companies[cursor++];
      process.stderr.write(`[${cursor}/${companies.length}] ${entry.company}...\n`);
      const result = await scrapeCompany(browser, entry);
      results.push(result);
      process.stderr.write(`  -> ${result.status}${result.matches.length ? ` (${result.matches.length} matches)` : ''}${result.error ? ` (${result.error})` : ''}\n`);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
  await browser.close();

  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  const summary = {
    total: results.length,
    matched: results.filter((r) => r.status === 'matched').length,
    noMatch: results.filter((r) => r.status === 'no-match').length,
    unreachable: results.filter((r) => r.status === 'unreachable').length,
  };
  process.stderr.write(`\nDone. ${JSON.stringify(summary)}\nResults written to ${outputPath}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
