---
name: self-audit
description: Audit the candidate's real online presence (GitHub, Stack Overflow, NuGet, LinkedIn, personal sites) against what the resume actually claims, and surface achievements that are demonstrable online but missing or understated in the resume. Use when the user wants their professional presence validated or wants to know what their resume is leaving out. Triggers on "audit my online presence", "check what's missing from my resume", "search on me", "do a search on me", "validate my professional claims", "find what I'm not highlighting in my resume".
---

# Self-Audit

Finds the gap between "what the resume says" and "what's actually demonstrable online" — this is a
validation pass against reality, not a rewrite of the resume itself (that's `consistency-check`'s job
once gaps are identified).

## Protocol This Orchestrates

`.claude/protocols/self-audit.md` — read it in full.

## Pipeline

### Phase 1 — Extract Every Reference

Pull every external URL from `resumes/master-resume.md` *and* `documentation/career-background.md` —
the second source often has profiles/repos mentioned in career context that never made it into the
resume itself, which is exactly the kind of gap this audit exists to catch. Build the inventory at
`SearchResults/Portfolio/profile-inventory_{yyyyMMdd}.md`, prioritized by likely impact.

### Phase 2 — Research Each Reference

For GitHub: don't stop at the profile page — follow into individual repos, commit history, and
(for any organizations) contributor graphs to assess real technical leadership, not just presence.
For Stack Overflow: the highest-voted answers specifically, for expertise depth and communication
style. For package registries (NuGet/NPM): download counts and usage metrics. For LinkedIn: recent
posts/articles for thought-leadership evidence, not just the profile summary.

Write one file per platform: `SearchResults/Portfolio/{platform-name}_analysis_{yyyyMMdd}.md`,
covering quantifiable metrics, technical depth, professional activities, and — critically — what's
visible online that the current resume doesn't mention at all.

### Phase 3 — Gap Analysis

Cross-reference every resume claim against what Phase 2 actually found, in both directions:
unverifiable claims (resume says something online evidence doesn't support) and undocumented
achievements (online evidence of something the resume never mentions). Categorize gaps: missing
projects, understated achievements, unused quantifiable metrics, undemonstrated technical depth,
unclaimed leadership/mentorship evidence.

### Phase 4 — Findings and Priority Recommendations

Write `SearchResults/Portfolio/comprehensive-findings_{yyyyMMdd}.md` (full findings, per-platform
detail, prioritized recommendations) and
`SearchResults/Portfolio/missing-elements-summary_{yyyyMMdd}.md` (top 5 missing achievements, top 3
quantification opportunities, immediate action items) per the protocol's exact templates.

### Phase 5 — Draft Concrete Master Resume Edits

A bullet-point recommendation ("update your download count") still leaves the actual editing work to
a separate pass. Close that gap: for every High and Medium priority item from Phase 4, draft the
**actual suggested text** — quote the current line from `resumes/master-resume.md` verbatim, then show
the proposed replacement, so the user is looking at a real edit to approve, not a to-do item to
translate themselves later.

Write this to `SearchResults/Portfolio/suggested-resume-edits_{yyyyMMdd}.md`:

```markdown
# Suggested Master Resume Edits — {date}
Source: comprehensive-findings_{yyyyMMdd}.md

## [Section name, e.g. "Community Impact Metrics"]
**Master resume line ~{N}:**
> {exact current text, quoted verbatim}

**Suggested replacement:**
> {drafted new text}

**Why:** {one line — the specific audit finding driving this change}

[repeat per item]
```

Low-priority items and anything genuinely unverified (LinkedIn/Discord-type findings) don't need a
drafted edit — list those as open questions instead, since there's no verified text to propose yet.

### Phase 6 — Ask, Then Apply, Then Offer to Sync

Don't stop at handing over a file of drafted edits and waiting to be asked again later — that's the
exact gap Phase 5 was added to close, and leaving the loop open at the last step defeats the point.
Once Phase 5's document exists:

1. **Ask directly whether to apply the drafted edits** (all of them, or a subset) — present it as a
   real choice, not a rhetorical one, but don't make the user separately re-request what was just
   drafted for exactly this purpose.
2. **If yes, apply them** to `resumes/master-resume.md` using the exact quoted before/after text from
   Phase 5 — this is the one point where editing the master resume directly *is* in scope for this
   skill, specifically because it's now an approved, reviewed edit rather than a blind suggestion.
3. **After applying, ask whether to run `consistency-check`.** Any change to the master resume creates
   drift against every derivative document (specialized resumes, ATS formats, profiles) the moment
   it's saved — `consistency-check` exists precisely to propagate that. Don't silently run it
   unprompted (it's a separate skill with its own scope), but do proactively surface it as the obvious
   next step rather than leaving the user to remember it's needed.
4. **Open-question items** (Phase 5's low-priority/unverified list) don't get applied even if the user
   says yes to "apply the drafted edits" — there's no drafted text for those, by design; surface them
   again as still-open rather than silently dropping them.

## What NOT to Automate

- **Don't apply Phase 5's drafted edits without asking first**, even though applying *is* in scope for
  this skill once approved (see Phase 6) — draft quality never substitutes for the explicit go-ahead.
- **Don't run `consistency-check` unprompted** after applying edits — offer it, don't assume it.
- **Every recommendation needs a specific online source**, not a vague "you should mention your
  leadership more" — cite the repo, the answer, the metric.
