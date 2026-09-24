---
name: target-list-generation
description: Generate or refresh the target lists (job titles, target companies, job platforms) that job-search and application protocols read from, derived from the master resume and CLAUDE.md preferences. Use when the user asks to generate or update target lists, or when another skill detects the target files are missing or stale. Triggers on "generate target lists", "update target lists", "create job search targets", "regenerate the target companies list".
---

# Target List Generation

Produces the reference files that `job-search`, `position-fit-analysis`, and `master-resume-builder`
all read from — this is infrastructure for those skills, not usually invoked for its own sake, but
it's a standalone skill because "the target list is stale" is a real, independently-triggerable state.

## Protocol This Orchestrates

`.claude/protocols/target-list-generation.md` — read it in full.

## Pipeline

### Phase 1 — Source Analysis

Read `resumes/master-resume.md` (Professional Identity, Skills Matrix, Work History, Achievements,
years of experience) and `CLAUDE.md` (location, compensation, industry/company exclusions, other
preferences). Read `SearchResults/excluded-companies.md` in full — don't rely on a cached
understanding of exclusion scope, it has changed shape (and grown considerably) across past sessions.

### Phase 2 — Generate `SearchResults/Targets/job-roles.md`

Executive leadership, principal/senior architecture, engineering leadership, specialized, and
consulting/advisory role titles, all derived from the master resume — not invented titles.

### Phase 3 — Generate `SearchResults/Targets/target-companies.md` (Active Targets Only)

For each relevant category (enterprise technology, high-growth, remote-first, industry-specific,
consulting firms/executive search if applicable), populate companies **and cross-reference every one
against `excluded-companies.md` AND `SearchResults/Targets/removed-targeted-companies.md`** before
including it — this is the step most likely to silently go stale, since the exclusion file changes far
more often than the target list gets regenerated. A company that was fine six months ago may now be
VC-backed, dual-class, or have a fresh political finding; don't assume a name surviving in an old list
is still clean. Checking the removed-companies file matters just as much as the main exclusion policy
file — some removals are target-list-specific (a remote-policy failure, a WLB-floor miss) and never
needed a full write-up in `excluded-companies.md`.

**`target-companies.md` holds active/approved targets only.** When an already-listed company gets
newly excluded, move its row into `removed-targeted-companies.md` under the matching reason section
(grouped by reason, not by which category originally found it) — never leave a struck-through row in
place in the active file. This is what keeps the active file fast to scan as the removed-company count
grows.

### Phase 4 — Generate `SearchResults/Targets/job-platforms.md`

General, technical, industry, executive, remote-first, and contractor platforms as relevant to the
candidate's field and preferences.

### Phase 5 — Validate

Confirm all target files exist and that every company in the target-companies file has been checked
against the current exclusion list, not an assumed-still-valid prior pass.

## What NOT to Automate

- **Don't silently drop the exclusion cross-reference to save time.** Skipping Phase 3's per-company
  check is exactly how a stale, since-excluded company ends up back in active search results.
- **Don't invent job titles or companies not grounded in the master resume / real research** — every
  entry needs a traceable source.
- **Don't leave removed companies struck-through in `target-companies.md`.** Move them to
  `removed-targeted-companies.md` under the matching reason section instead — the whole point of the
  two-file split is an active list that stays fast to scan, not a growing list of dead rows.
