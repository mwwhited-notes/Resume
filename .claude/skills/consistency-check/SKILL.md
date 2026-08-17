---
name: consistency-check
description: Audit every resume, profile, and ATS-format file for consistency against the master resume — dates, positions, achievement language, style-guide compliance — and fix what's out of sync. Use when the user wants everything checked for consistency or brought up to date across the resume ecosystem. Triggers on "make sure everything is up to date", "check resume consistency", "audit all my resumes", "is everything in sync with the master resume".
---

# Consistency Check

This is the skill behind CLAUDE.md's memorized command: "make sure everything is up to date" →
run this. Making it a skill instead of a remembered trigger phrase means the full file-discovery
sweep actually happens every time, rather than depending on recalling the right phrase-to-protocol
mapping.

## Protocol This Orchestrates

`.claude/protocols/consistency-check.md` — read it in full, including its file-discovery commands.

## Pipeline

### Phase 1 — Load Sources of Truth

Read, in this priority order: `resumes/master-resume.md` (authoritative for all professional facts —
exact numbers live here only), `documentation/career-background.md` (positioning context, hidden
expertise), `documentation/style-guide.md` (language rules — general/conversational terms in every
presentation document, exact numbers reserved for the master resume alone).

### Phase 2 — Comprehensive File Discovery (Don't Skip Files)

Run the protocol's discovery commands rather than checking only the files you remember existing —
new specialized resumes, ATS variants, or profile documents get added between sessions:

```bash
find resumes/ -name "*.md" -o -name "*.yaml" -o -name "*.json" -o -name "*.txt"
find profiles/ -name "*.md"
```

Check every file found against: correct chronological ordering (current position first), accurate
dates matching the master resume exactly, consistent job titles/company names, style-guide-compliant
language (general terms outside the master resume, not exact percentages), current contact info, and
— for `resumes/specialized/*.md` — a matching `*-cover-letter.md` file for every specialized resume.

### Phase 3 — Positioning Consistency

Verify the master-resume-vs-everything-else split: the master resume alone shows the full multi-track
positioning (every target title); every other file targets the single current primary title only.
Run the protocol's grep-based spot checks rather than eyeballing a sample — e.g. confirming the
current primary target title appears in every non-master file, and that superseded positioning
language doesn't linger in files that should have been updated.

### Phase 4 — Fix What's Out of Sync

Update files directly rather than just reporting drift — this protocol's whole purpose is
maintenance, not just diagnosis. Missing cover letters get created from the paired resume + career
background; stale dates/titles get corrected against the master resume; style violations get rewritten
to general language.

### Phase 5 — Post-Update Validation

Re-run the discovery + positioning-consistency commands after fixes to confirm they actually landed,
and spot-check 3–4 random files across different directories by hand.

## What NOT to Automate

- **Never edit the master resume to match a derivative document** — the master resume is the
  authority; drift always gets resolved by updating the derivative, never the other direction.
- **Never silently drop a file from the sweep** because it looks unusual or unfamiliar — the discovery
  commands exist precisely so nothing gets skipped by assumption.
- **Report what changed**, don't just say "everything's consistent now" — list the specific files
  touched and what was wrong, so drift patterns are visible over time.
