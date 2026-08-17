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

## What NOT to Automate

- **Never edit the master resume directly as part of this skill** — self-audit produces
  recommendations; folding a finding into the actual resume is a separate, explicit follow-up (hand
  off to a normal resume-editing pass, or `consistency-check` once the addition is decided).
- **Every recommendation needs a specific online source**, not a vague "you should mention your
  leadership more" — cite the repo, the answer, the metric.
