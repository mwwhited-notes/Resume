---
name: position-fit-analysis
description: Score how well a specific job posting fits — technical match, experience match, culture match, and application accessibility — producing a composite score and an APPLY/CONSIDER/SKIP recommendation. Accepts one URL or a batch of many (no cap on batch size). Use when the user asks how well they fit a position, wants a job posting analyzed, or provides one or more job URLs to evaluate. Triggers on "how well do I fit this position {url}", "analyze this job posting", "score this position", "check my fit for {url}", "analyze all these positions" (batch mode). Also the automatic Phase 3 of the `job-search` skill for any posting whose company was approved in Phase 2.
---

# Position Fit Analysis

Scores a specific posting once its company has already cleared (or clears via the `company-research`
skill as part of this run) — this skill is about the *posting*, not the company; company-level
screening is a separate, prerequisite skill.

## Protocol This Orchestrates

`.claude/protocols/position-fit-analysis.md` — read it in full. For more than one URL, also read
`.claude/protocols/batch-position-analysis.md`, which describes the same scoring applied without a
cap on count — not a different pipeline, just "do this for every URL provided, all of them, not a
subset."

## Pipeline

### Phase 1 — Liveness and Exclusion Gate (Per Posting)

Before scoring anything:

1. **Fetch the posting.** If the URL is an aggregator mirror (Glassdoor, Ladders, Lensa, BeBee,
   RemoteRocketship, etc.) and the direct fetch is blocked, try the company's own careers-portal page
   for the same requisition instead.
2. **Date-math the posting before trusting a fetch.** An explicit posted date, a stated application
   deadline, or a relative age ("posted 5 months ago") settles liveness arithmetically — a >45-day-old
   posting with no evidence of a repost is expired now, don't wait for a failed fetch to confirm what
   the date already proved.
3. **If liveness can't be resolved after retry + date-math + cross-check**, log the posting as
   *Monitor Only* — it does not enter `apply-next.md` as a Possible Match/High Priority/Top Target
   regardless of how high everything else scores. A high composite score never overrides an unresolved
   liveness question.
4. **Location and comp screen — reuse the `job-search` skill's Phase 1 rules exactly, don't
   re-derive them:** no disclosed compensation = automatic exclusion, no exceptions. Remote needs
   $200K+; hybrid needs $250K+ *and* the 1-hour Baltimore commute (MARC Penn Line corridor included);
   on-site needs $350K+ *and* the same commute rule. Don't trust a "Remote" tag at face value if the
   posting also names a specific city — verify directly, this has produced false positives repeatedly.
5. **Company exclusion check.** If the company hasn't been researched yet, invoke the
   `company-research` skill now — don't score a posting whose employer might be excluded.
6. **Role-type screen:** ops-heavy (incident/problem/escalation management as the *primary* function)
   and PM/personnel-management-primary roles (no meaningful technical authority) are excluded outright,
   per the protocol's Phase 1 auto-rejects. Architecture-titled roles are stack-agnostic; development-
   titled roles should fit .NET/C# — a dev role requiring deep expertise in a materially different
   primary stack is a pass even with strong domain overlap.

### Phase 2 — Scoring (Only for Postings That Cleared Phase 1)

Score the four weighted categories from the protocol — Technical Match (35%), Experience Match (30%),
Culture & Approach Match (20%), Application Accessibility (15%) — each 1–10, composite calculated
per the protocol's formula. Cap the Accessibility sub-score at 2/10 if liveness was never fully
resolved, per the protocol's own rule — don't let a good technical story compensate for an unconfirmed
posting.

Write the analysis to `SearchResults/Jobs/Position_Analysis_{CompanyName}_{YYYYMMDD}.md` following the
protocol's exact template — position details, per-category scoring with evidence, composite score,
strengths, gaps, strategic application approach, and a clear APPLY/CONSIDER/SKIP recommendation.

### Batch Mode (Multiple URLs)

When given more than one URL: run Phase 1 and Phase 2 independently per posting — a failure or
low score on one doesn't block the others. No maximum count on how many postings get a full write-up;
`batch-position-analysis.md`'s "no artificial limits" principle applies to scoring and documentation,
not to the ≥7.5/10 materials-generation threshold (that gate belongs to the `job-search` skill's
`apply` mode, not to this skill). If the user wants materials generated for everything that scores
well, hand off to `job-search`'s `apply` mode rather than duplicating that logic here.

## What NOT to Automate

- **Never treat an unconfirmed posting as a lead.** Liveness ambiguity caps accessibility at 2/10 and
  keeps it out of the active pipeline regardless of every other score.
- **Never soften the comp-disclosure or commute rules to rescue an otherwise-attractive posting.**
  These are hard gates inherited from `job-search`'s screening, not negotiable per-posting.
- **User overrides a specific rejection at their own discretion** (e.g. "I don't want a Java position"
  even though it scored well) — record that as the final recommendation update, not a re-score.
