---
name: job-search
description: Run the full job-search pipeline end to end — search for openings, screen them against every exclusion rule, and for anything that survives, automatically chain into company research and then position-fit analysis, finishing with one comprehensive report. Pass "apply" as an argument to continue past the report and generate resume/cover-letter/intro materials for every qualifying (≥7.5/10) candidate, with no cap on how many. Use when the user asks to search for jobs, run a job search, find openings, or look for positions — this is the "do it all the way through" version of job-search.md, not just the raw search step. Triggers on "do a job search", "search for jobs", "find me jobs", "look for openings", "run the job search", "job search today"; the apply mode additionally triggers on "do a targeted job search", "find jobs and create applications for them", "create targeted resumes and cover letters", "analyze all these positions and create materials".
---

# Job Search Pipeline

This skill exists because `job-search.md` already documents that a discovered opportunity should
automatically chain into `company-research.md` and then `position-fit-analysis.md` — but without
this skill, that chaining only happens if someone remembers to ask for each step in turn. Invoking
this skill means: run the whole pipeline, unattended, and hand back one finished report.

`targeted-application.md` and `batch-position-analysis.md` describe what is really the same pipeline
at a second depth — search, score, *then also* generate application materials for everything that
qualifies — not a separate pipeline. Rather than re-run Phases 0–3 from scratch under a different
skill (which is what happens if `targeted-application.md` is followed literally: its own Phase 1 says
"read job-search.md and execute all steps," re-triggering company-research and position-fit-analysis
that may have just run), this skill absorbs both as an optional continuation: pass `apply` as the
skill argument to go all the way to application materials in one pass. Default (no argument) stops at
the report, same as before.

## Protocols This Orchestrates

Read each of these in full before running the phase it governs — this skill does not restate their
content, only the order and automation layer on top:

1. `.claude/protocols/job-search.md` — search execution, exclusion screening, LinkedIn MCP usage
2. `.claude/protocols/company-research.md` — Phase 0 fast-exclusion check, then full research if it clears (or invoke the `company-research` skill directly, which wraps the same logic)
3. `.claude/protocols/position-fit-analysis.md` — per-posting scoring once the company is approved (or invoke the `position-fit-analysis` skill directly)
4. `.claude/protocols/target-list-generation.md` — only if `SearchResults/Targets/target-companies.md` is missing or stale (or invoke the `target-list-generation` skill directly)
5. **`apply` mode only:** `.claude/protocols/targeted-application.md` and `.claude/protocols/batch-position-analysis.md` — resume/cover-letter/intro generation and tracking. Skip their own Phase 1 (re-running the search) entirely — Phases 0–3 below already covered it.

## Pipeline

### Phase 0 — Preflight

1. **MCP health check.** Run `claude mcp get linkedin`. If not `✔ Connected`:
   - Check Docker Desktop is running (`docker info`); start it if not (`"/c/Program Files/Docker/Docker/Docker Desktop.exe"`, wait for `docker info` to succeed).
   - Start the container if stopped: `docker start linkedin-mcp`.
   - If tools still don't appear in this session after the container is healthy, tell the user a session restart is needed and stop — don't proceed on a broken connection. (This has been the single most common blocker in past runs; don't skip the check.)
2. **Incremental search window.** Read the "Last MCP Search Run" date at the top of `SearchResults/Jobs/linkedin.md`. Compute the gap to today:
   - 0 days → `date_posted: past_24_hours`
   - 1–7 days → `date_posted: past_week`
   - 8–30 days → `date_posted: past_month`
   - >30 days or no prior date → full `past_month` sweep, no narrower option exists on the API
   - After the run, update that date to today.
3. **Load exclusion state.** Read `SearchResults/excluded-companies.md` and `CLAUDE.md`'s User Preferences in full — don't rely on memory of prior sessions' rules, they change frequently (dual-class, VC/PE, corporate-donation scope, etc. have all been added or broadened across past sessions).

### Phase 1 — Search & Inline Screen

Run `job-search.md`'s search step across the target job titles in `SearchResults/Targets/job-roles.md`
(regenerate via `target-list-generation.md` first if missing/stale). For every result, apply — in this
order, cheapest checks first, so obviously-dead results don't consume later checks:

1. **Named/company-blacklist check** against `excluded-companies.md` (includes recruiting/staffing
   agencies, IT staff-aug/consulting firms, dual-class companies, VC/PE-backed companies, and the
   individual company blacklist).
2. **Posting age** — hard exclude anything older than 30 days.
3. **Compensation disclosed?** No listed compensation = automatic exclusion, no exceptions, regardless
   of how good the title/company looks. This has been the single biggest filter in every past run —
   don't soften it.
4. **Comp floor for the stated arrangement:**
   - Remote: $200K+
   - Hybrid: $250K+ **and** within a 1-hour commute of the home address in `CLAUDE.md` (includes the
     MARC Penn Line corridor, not just driving distance)
   - On-site: $350K+ **and** the same 1-hour commute rule
   - **Do not trust a "Remote" tag at face value if the listing also names a specific city, or if the
     tag comes from a tool/scraper rather than the employer's own explicit language.** Verify directly
     before treating anything hybrid-shaped as remote — this has produced false positives repeatedly
     (Dexcom, DocuSign, and BlackLine all turned out to be hybrid despite an initial "remote" tag).
5. **Role-type screen:** architecture-titled roles (Principal/Chief/Enterprise/Solutions Architect,
   etc.) are stack-agnostic. Development-titled roles (Software Engineer, Staff/Principal Software
   Engineer) should be screened for a .NET/C# fit — a development role requiring deep expertise in a
   materially different primary stack (e.g. core Java/JVM internals) is a pass even with strong domain
   overlap. Ops-heavy and PM/personnel-management-primary roles are excluded per
   `position-fit-analysis.md`'s Phase 1 checks.
6. **Fresh company?** If the surviving posting's company has no existing analysis in
   `SearchResults/Companies/`, or the existing one predates a policy change, don't wait to be asked —
   move it into Phase 2 automatically.

If a company's own career page doesn't disclose compensation on the listing page, and
`SearchResults/Jobs/career-portal-scraper.js` exists, it's worth running for a compensation check
against detail pages (many ATS platforms only show pay-transparency bands on the individual posting,
not the search-results card) — but treat any location tag it reports with the same suspicion as rule 4
above; verify hybrid-looking "remote" results directly before trusting them.

### Phase 2 — Company Research (Automatic)

For every company that survived Phase 1's inline screen, run `company-research.md`'s **Phase 0 fast
pre-check first** (existence, named exclusion, PE/VC ownership) — this is cheap and kills most
candidates immediately without burning a full research pass. Only continue to the full company-research
protocol (business model, tech stack, culture, the mandatory Glassdoor/Blind WLB check) for companies
that clear Phase 0.

Do this **without waiting for the user to ask** — a company surviving Phase 1 is the trigger, per
`job-search.md`'s own chaining table. If the company was already researched and approved earlier in
the same broad sweep (e.g. it's on the vetted S&P 500/NASDAQ target list), skip straight to Phase 3
rather than re-running research that's already on file.

### Phase 3 — Position Fit Analysis (Automatic)

For every posting whose company was approved in Phase 2, run `position-fit-analysis.md` in full —
liveness verification, the scoring rubric, and the written analysis document. Again, don't wait to be
asked; a company-approved posting with a URL is the trigger.

### Phase 4 — Comprehensive Report

Compile everything from Phases 1–3 into `SearchResults/Jobs/comprehensive-job-search-{yyyyMMdd}.md`
(today's date), following the structure already established in
`SearchResults/Jobs/comprehensive-job-search-20260817.md`:

- Summary table (qualifying candidates / rejected-with-detail / screened-out-inline counts)
- One section per qualifying candidate (APPLY), with source, URL, comp, and why it survives every rule
- One section per company/posting that got a **full** company-research or position-fit-analysis pass
  but was ultimately rejected, with the specific disqualifying finding
- A condensed list of everything screened out inline in Phase 1, grouped by rejection reason (agency,
  no comp, below floor, named exclusion, etc.) — don't write a full paragraph per rejection, a grouped
  list is enough detail for these
- A Methodology section noting: search tool(s) used, date window, any tool failures/quota issues hit
  and how they were handled, and any newly-discovered unreliable-tagging patterns (like the
  remote/hybrid mislabeling above) so the next run inherits the lesson

Update the "Last MCP Search Run" date in `SearchResults/Jobs/linkedin.md` as the final step.

### Phase 5 — Application Materials (Only If Invoked With `apply`)

Skip this phase entirely on a default invocation. When the skill is invoked with `apply`:

1. **Threshold, no cap.** Every posting scored ≥7.5/10 in Phase 3 qualifies — per
   `batch-position-analysis.md`, there is no maximum count (this supersedes the older 5–8 cap
   language in `targeted-application.md`; more recent protocol wins). If zero positions cleared
   Phase 3, say so and stop — don't lower the threshold to manufacture candidates.
2. **Duplicate check first.** For each qualifying position, check `SearchResults/applied-to.md` and
   `SearchResults/apply-next.md` for an existing entry before creating materials. Already-applied
   positions get skipped with a one-line note, not new materials.
3. **Generate materials per `targeted-application.md`'s Phase 5 templates:** resume, cover letter,
   and quick intro, using the master resume as the exclusive content source and the Phase 2
   company-research findings for language/positioning integration. File naming and location per that
   protocol: `SearchResults/targeted/{CandidateName}-{Company}-{JobTitle}-{resume|coverletter|intro}.md`
   (this directory lives under `SearchResults/`, which is private per the wrapper repo's publication
   rules — targeted materials are never public).
3a. **Ground-truth qualification check, while drafting — not before.** `position-fit-analysis.md`'s
   composite score is a category-weighted estimate; actually writing the tailored resume against the
   real job description's specific requirements is a stricter, more concrete test. While drafting each
   position's materials, check honestly whether the master resume — even after the best legitimate
   tailoring/emphasis — actually demonstrates the position's stated requirements. If it doesn't (the
   fit was overestimated by the composite score, or the tailored resume would have to overstate
   qualifications to look like a match), **stop drafting that position's materials.** Do not produce
   the misleading resume. Instead, reclassify the position: per the `application-lifecycle` skill's
   Withdrawn-vs-Rejected philosophy, this is **Withdrawn** (self-determined, before any employer
   acted), not Rejected (that term is reserved for an employer decision) — invoke `application-lifecycle`
   to record it that way, with a note citing the specific gap discovered during drafting, rather than
   leaving it in the active pipeline or silently skipping it.
4. **Track every qualifying position that survived 3a** — add to `apply-next.md` with status `❓ Match
   - Materials Created`, score, compensation, and material file links (invoke the `application-lifecycle`
   skill's conventions for this, don't hand-roll a different format).
5. **Write the batch summary** at `SearchResults/targeted/Batch_Analysis_{yyyyMMdd}.md` per
   `batch-position-analysis.md`'s template (counts, qualifying-positions table, application strategy,
   next steps) — this is in addition to, not instead of, the Phase 4 comprehensive report. Note any
   positions reclassified to Withdrawn in 3a here too, so the count reconciles.
6. **Learning-gap pass:** per `targeted-application.md`'s Phase 9, note any recurring skill/technology
   gaps found across the qualifying positions in `SearchResults/Lessons/suggested.md` — a 3a
   reclassification is itself a strong learning-gap signal (the specific stated requirement that didn't
   hold up), worth feeding in here even more than a merely-weak score would be.

## What NOT to Automate

- **Never auto-apply.** Materials generation (`apply` mode) still only produces drafts — actually
  submitting an application is always a separate, explicit user decision. "Apply mode" is a naming
  collision with "submit an application"; it means "prepare materials," nothing more.
- **Never silently soften a rule to produce more candidates.** If a whole run turns up zero qualifying
  candidates, say so plainly (it has happened before) rather than relaxing comp-disclosure, commute, or
  exclusion criteria to manufacture a result.
- **Never finish drafting a resume that overstates fit just because a score said to.** Phase 5's 3a
  check exists specifically to catch this — a composite score is an estimate, not a guarantee, and
  producing polished-but-misleading materials is worse than reclassifying the position as Withdrawn.
- **Ambiguous exclusion calls still go to the user**, not a unilateral decision — e.g. a company whose
  disqualifying evidence is genuinely thin (a single-source report, an unclear ownership split) should
  be flagged for a decision, following the pattern already established for prior close calls (PE-adjacent
  ownership splits, disputed government-contractor revenue share, etc.) — see `excluded-companies.md`
  for the running precedent on how those got resolved.
