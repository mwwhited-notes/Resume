#!/usr/bin/env node

/**
 * Web Research Tool - HTML to Markdown Converter
 * Node.js implementation for cross-platform compatibility
 * Replaces WebFetch requests with HTML retrieval and markdown conversion
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

/**
 * Fetch HTML content from URL
 * @param {string} url - Target URL to fetch
 * @returns {Promise<string>} HTML content
 */
function fetchHTML(url) {
    return new Promise((resolve, reject) => {
        const parsedUrl = new URL(url);
        const client = parsedUrl.protocol === 'https:' ? https : http;
        
        const options = {
            hostname: parsedUrl.hostname,
            port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
            path: parsedUrl.pathname + parsedUrl.search,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; research-bot)',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            },
            timeout: 30000
        };

        const req = client.request(options, (res) => {
            // Handle redirects
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                fetchHTML(res.headers.location).then(resolve).catch(reject);
                return;
            }

            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
                return;
            }

            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(data);
            });
        });

        req.on('error', reject);
        req.on('timeout', () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });

        req.end();
    });
}

/**
 * Convert HTML to basic Markdown
 * Simple conversion without external dependencies
 * @param {string} html - HTML content to convert
 * @returns {string} Markdown content
 */
function htmlToMarkdown(html) {
    let markdown = html;

    // Remove script and style elements
    markdown = markdown.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    markdown = markdown.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    
    // Convert headings
    markdown = markdown.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1');
    markdown = markdown.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '## $1');
    markdown = markdown.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '### $1');
    markdown = markdown.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '#### $1');
    markdown = markdown.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '##### $1');
    markdown = markdown.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '###### $1');

    // Convert paragraphs
    markdown = markdown.replace(/<p[^>]*>/gi, '');
    markdown = markdown.replace(/<\/p>/gi, '\n\n');

    // Convert line breaks
    markdown = markdown.replace(/<br[^>]*>/gi, '\n');

    // Convert bold and italic
    markdown = markdown.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
    markdown = markdown.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
    markdown = markdown.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
    markdown = markdown.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

    // Convert links
    markdown = markdown.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

    // Convert lists
    markdown = markdown.replace(/<ul[^>]*>/gi, '');
    markdown = markdown.replace(/<\/ul>/gi, '\n');
    markdown = markdown.replace(/<ol[^>]*>/gi, '');
    markdown = markdown.replace(/<\/ol>/gi, '\n');
    markdown = markdown.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');

    // Convert code
    markdown = markdown.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');
    markdown = markdown.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '```\n$1\n```');

    // Convert images
    markdown = markdown.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, '![$2]($1)');
    markdown = markdown.replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, '![]($1)');

    // Remove remaining HTML tags
    markdown = markdown.replace(/<[^>]+>/g, '');

    // Decode HTML entities
    markdown = markdown.replace(/&amp;/g, '&');
    markdown = markdown.replace(/&lt;/g, '<');
    markdown = markdown.replace(/&gt;/g, '>');
    markdown = markdown.replace(/&quot;/g, '"');
    markdown = markdown.replace(/&#39;/g, "'");
    markdown = markdown.replace(/&nbsp;/g, ' ');

    // Clean up whitespace
    markdown = markdown.replace(/\n\s*\n\s*\n/g, '\n\n');
    markdown = markdown.replace(/^\s+|\s+$/g, '');

    return markdown;
}

/**
 * Main function to fetch URL and convert to markdown
 * @param {string} url - Target URL
 * @param {string} prompt - Research prompt
 */
async function convertUrlToMarkdown(url, prompt) {
    try {
        console.log(`Retrieving content from: ${url}`);
        
        const html = await fetchHTML(url);
        console.log('Converting HTML to Markdown...');
        
        const markdown = htmlToMarkdown(html);
        
        console.log('\n=== CONVERTED MARKDOWN CONTENT ===');
        console.log(markdown);
        console.log('\n=== RESEARCH PROMPT ===');
        console.log(prompt);
        console.log('');
        
        return markdown;
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length !== 2) {
        console.log('Usage: node web-research.js <URL> <RESEARCH_PROMPT>');
        console.log('Example: node web-research.js "https://example.com" "Find company information"');
        process.exit(1);
    }
    
    const [url, prompt] = args;
    
    convertUrlToMarkdown(url, prompt).then(() => {
        console.log('Research complete. Apply the above prompt to analyze the converted content.');
    });
}

module.exports = {
    fetchHTML,
    htmlToMarkdown,
    convertUrlToMarkdown
};