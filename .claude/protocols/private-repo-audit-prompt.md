# Private Repository Contribution Audit Prompt

## Purpose
Use this prompt in private repositories to gather contribution data for import into the master resume system.

## Applicability
This protocol applies to any repository being audited for resume content — private company repos, personal repos, and open-source forks alike. The output template and quality bar are the same regardless of source. The only difference is what's safe to disclose:
- **Company/client repos:** repo path and internal names must stay out of the audit file (see Prohibited Content rules in `external-findings-import.md`).
- **Personal/OSS repos:** repo path, remote URL, and identifying details are safe to include since there's no employer confidentiality concern.

---

## High-Water Mark Tracking

To avoid re-analyzing an entire repository's history on every audit pass, each audit records the exact commit it was run against. Future audits of the same repository diff from that point forward instead of starting over.

### Watermark File
`./SearchResults/External/audit-watermarks.md` — one row per audited repository:

```markdown
| Repository | Path | Branch | Commit Hash | Audit Date | Audit File |
|:-----------|:-----|:-------|:-------------|:-----------|:-----------|
| dotex      | C:\repo\oobdev\dotex | main | abc1234 | 2026-07-29 | contribution-audit-dotex-20260729.md |
```

### Before Running the Audit
1. Check `./SearchResults/External/audit-watermarks.md` for an existing row matching this repository.
2. **No prior watermark:** run a full-history audit as described below.
3. **Prior watermark exists:** run an incremental audit:
   - `git log <watermark-hash>..HEAD` (and `git diff <watermark-hash>..HEAD --stat`) scoped to the same author(s) as before.
   - Only report NEW contributions since the watermark — don't re-derive metrics already captured in the prior audit file.
   - Name the output `contribution-audit-[repo-name]-[YYYYMMDD]-incremental.md` and note the prior audit file it builds on.
   - If nothing changed since the watermark (`git log` empty), skip the audit and just note "no new commits since [hash]" — don't create an empty file.

### After Running the Audit
Record the current `HEAD` commit hash (`git rev-parse HEAD`) and branch (`git branch --show-current`) for the repository as a new row in the watermark table (update the existing row if one exists, rather than duplicating it).

---

## Prompt to Run in Private Repositories

Copy and paste the following prompt when opening Claude Code in a private repository:

```
I need you to audit my contributions to this repository for resume documentation. Please analyze and provide a structured report with the following information:

## Repository Analysis Required

### 1. Basic Repository Info
- Repository name and purpose
- Repository path and current branch (omit path if this is a company/client repo — see Applicability above)
- HEAD commit hash at time of audit (`git rev-parse HEAD`) — this becomes the high-water mark
- Primary programming languages and percentages
- Total commits (by me if identifiable)
- Date range of my contributions
- My role/relationship to this repository (owner, contributor, maintainer)

### 2. Technical Contributions
For each significant feature or component I contributed:
- **Feature/Component Name:**
- **Technical Description:** (1-2 sentences)
- **Technologies Used:** (languages, frameworks, libraries)
- **Innovation Level:** (EXCEPTIONAL/HIGH/MODERATE/LOW)
- **Commit Count:** (if determinable)
- **Business Impact:** (if known)

### 3. Quantifiable Metrics
- Lines of code contributed (approximate)
- Number of files created/modified
- Pull requests opened/merged
- Issues resolved
- Test coverage added

### 4. Technical Patterns Demonstrated
- Architecture patterns used (microservices, event-driven, etc.)
- Design patterns implemented
- Performance optimizations
- Security considerations
- CI/CD contributions

### 5. Resume-Ready Bullet Points
Generate 3-5 bullet points suitable for a resume, following this format:
- **Action verb + Technical achievement + Quantifiable result/impact**
- Example: "Architected event-driven messaging system handling 10K+ messages/day with 99.9% reliability"

### 6. Skills Validated
List specific technical skills this repository demonstrates proficiency in.

## Output Format

Please structure the output as markdown that can be directly imported into my resume documentation system. Use this template:

---

## [Repository Name] - Contribution Analysis

**Analysis Date:** [Date]
**Repository Path:** [Path or "omitted — client repo"]
**Branch / HEAD Commit (high-water mark):** [branch] @ [commit hash]
**Repository Type:** [Original/Fork/Collaborative]
**My Role:** [Owner/Primary Contributor/Contributor]
**Date Range:** [Start - End]

### Technical Summary
[2-3 sentence overview]

### Key Contributions
1. **[Feature Name]** - [Description] - [Technologies] - [Impact]
2. ...

### Quantifiable Metrics
| Metric | Value |
|--------|-------|
| Commits | X |
| Files Modified | X |
| Languages | X, Y, Z |

### Resume Bullet Points
- Bullet 1
- Bullet 2
- Bullet 3

### Skills Demonstrated
- Skill 1
- Skill 2

### Innovation Assessment
**Level:** [EXCEPTIONAL/HIGH/MODERATE/LOW]
**Justification:** [Why this rating]

---

Important Notes:
- Be accurate - do not overstate contributions
- Distinguish between original work and modifications to existing code
- If this is a fork, clearly note what modifications were made vs. original code
- Focus on verifiable, quantifiable achievements
- Use professional language suitable for executive-level review
```

---

## How to Use This Prompt

1. Check `./SearchResults/External/audit-watermarks.md` for a prior watermark on this repository (see High-Water Mark Tracking above)
2. Open Claude Code in the repository
3. Copy the prompt above (adjusted to full-history or incremental per the watermark check)
4. Paste and run it
5. Save the output to a file named `contribution-audit-[repo-name]-[YYYYMMDD].md` (or `-incremental.md`)
6. Copy the file to `./SearchResults/External/` in the resume repository
7. Update `./SearchResults/External/audit-watermarks.md` with the new HEAD commit hash
8. Run the import protocol: `read protocols/external-findings-import.md and follow the protocol`

---

## File Storage

All private repository audits should be saved to:
```
./SearchResults/External/contribution-audit-[repo-name]-[YYYYMMDD].md
```

## Import Process

See `protocols/external-findings-import.md` for the complete import protocol.

---

## Sample Integration

If the audit reveals a significant contribution like:

```markdown
### Resume Bullet Points
- Architected distributed caching layer reducing API latency by 65%
- Implemented CQRS pattern processing 50K+ events daily with zero data loss
```

Add to the appropriate employer section in master-resume.md:
```markdown
- **Distributed Caching Architecture:** Designed and implemented caching layer achieving 65% API latency reduction
- **Event-Driven CQRS Implementation:** Built event processing system handling 50K+ daily events with zero data loss
```

---

## Repositories to Audit

Use this checklist to track which private repositories need auditing:

- [ ] Private repo 1 - [Description]
- [ ] Private repo 2 - [Description]
- [ ] Client work repo - [Client name]
- [ ] ...

---

## Batch/Collection Audit (Multiple Submodules Under One Parent Repo)

Some personal work lives as a parent repo with many git submodules (e.g. `C:\repo\_learning`, which holds 15 independent public repos as submodules). Auditing a collection like this is the same single-repo logic above, run once per submodule, plus two things a single-repo audit doesn't need: a way to skip submodules that haven't changed, and one consolidated cross-reference at the end instead of N disconnected audit files. First done as a full pass 2026-09-10 against `C:\repo\_learning` (15 submodules) — this section codifies what worked.

### Steps

1. **Enumerate submodules** — `git submodule status` (or `ls`, plus `git remote get-url origin` and `git log -1` per directory) against the parent repo. Record each submodule's name, remote URL, and current HEAD commit hash before doing anything else.

2. **Check every submodule against the watermark table** (`SearchResults/External/audit-watermarks.md`) — this is where the per-repo triage happens:
   - **HEAD matches the existing watermark exactly:** genuinely unchanged. Skip the audit entirely — just note "unchanged" in the watermark table with today's re-check date, don't write an audit file for a repo with zero new commits.
   - **Watermarked but HEAD has moved:** run an incremental audit (`git log <watermark>..HEAD`) per the single-repo process above.
   - **Never watermarked, and the commit history/README suggests real, substantive, still-active work** (recent commits, non-trivial file count, not obviously a finished tutorial): run a full first-time audit.
   - **Never watermarked, but the repo is a finished/stale learning exercise** (a book's companion-code repo, a completed tutorial series, a coding-challenge practice repo) — check first whether it's genuinely original work or an unmodified copy (a 1-2-commit history where commit #1 is "First commit" and the only other commit is a README/license edit is a strong signal it's an unmodified publisher/course code-drop, not an attempt — verify with `git log --oneline --reverse` before assuming either way). For repos confirmed low-value this way, use a **lighter-touch assessment**: a few sentences in the consolidated synthesis document (see step 4), not a full per-repo audit file. This distinction — full audit file vs. a paragraph in the synthesis — is what keeps a 15-submodule pass tractable; writing a full formal audit for a repo that's just an unmodified book-code mirror produces a file with no real content.

3. **Before auditing anything, check for a genuinely sensitive-naming or content concern** if a repo's origin looks work-adjacent (e.g. a project or package named after a current/former employer that was later renamed for personal/public use) — grep the full tracked-file history for the employer/client name (`git grep -il "<name>"`), not just the current HEAD, and confirm the rename (if any) was actually complete. Report this explicitly in the audit even when it resolves clean — it's a check worth recording as having been done, not just silently passing.

4. **Write ONE consolidated cross-reference synthesis file**, not just the per-repo audit files — `SearchResults/Portfolio/learning-repos-audit-{YYYYMMDD}.md` (or a name matching the collection being audited). This is the actual deliverable a human will read; the per-repo audit files in `SearchResults/External/` are the evidence trail behind it. The synthesis must:
   - Cross-reference every finding against **both** `resumes/master-resume.md` (what's currently claimed) and the most recent Portfolio GitHub/self-audit file (what was already flagged as undocumented) — don't just list findings in isolation.
   - Call out any place a *prior* Portfolio audit's recommendation doesn't hold up against the actual repo contents (this happened in the 2026-09-10 pass: the 2026-08-17 audit recommended citing two repos as "hands-on language-design experience" that turned out to be unmodified publisher source code) — a synthesis that only ever confirms prior findings isn't doing its job.
   - Explicitly separate genuinely resume-worthy differentiators from completed-but-low-value learning exercises — don't let volume (15 repos, most of them real work of some kind) inflate the ones that aren't.
   - Flag any resume claim that's now **stale** given new commits, not just missing claims — the 2026-09-10 pass's biggest single finding wasn't an undocumented repo, it was a previously-accurate resume claim ("design-only, no implementation") that had quietly become false after 5 weeks of unaudited commits. A repo already cited in the resume is not therefore safe to skip re-checking.
   - Close with a short, ordered "if you only do three things" summary for whoever next edits the resume — the full table is reference material, but a synthesis that makes someone read all of it to find the actionable part has failed at being a synthesis.

5. **Do not edit `master-resume.md` itself** as part of this audit, even when a finding is unambiguous (like a stale claim). Recommend the specific edit and roughly where it belongs in the synthesis file; the resume edit is a separate, deliberate step for the user to review before it happens — this audit protocol's job is to surface accurate findings, not to silently rewrite claims about the candidate's own work.

6. **Update the watermark table once, covering every submodule touched** in the same pass, rather than one file edit per repo — add unchanged repos too (with a note, not a new audit file) so the table stays a complete map of "everything in this collection and when it was last checked," not just the ones with new commits.

### Why the org-page GitHub audit isn't a substitute for this

`self-audit.md`'s GitHub organization research (WebFetch against an org's repo-listing page) is a different, complementary check — it verifies what's *publicly visible and how it's described*, this protocol verifies *what actually changed at the code level*. They can disagree: the 2026-08-17 self-audit's org-page scan of `Mwwhited-BookLearning` missed 6 of the org's 15 actual repos (a WebFetch pagination gap, not a real absence) — a purely local `_learning` submodule enumeration would have caught the gap immediately. Run both; treat a mismatch between them as a signal to re-check the org-page scan (pagination, API fallback), not as evidence the local checkout is wrong. See `self-audit.md`'s "Organization and Collaborative Project Research" section for the cross-reference note added there.

---

**Protocol Version:** 1.2
**Created:** December 24, 2025
**Updated:** July 29, 2026 — Added high-water-mark commit tracking for incremental re-audits, clarified applicability to personal/OSS repos vs. company repos
**Updated:** September 10, 2026 — Added "Batch/Collection Audit" section for multi-submodule parent repos, based on the first full pass against `C:\repo\_learning` (15 submodules). Key additions: skip-if-unchanged triage against the watermark table, a lighter-touch assessment tier for confirmed low-value repos (unmodified book/course code drops), a naming/content-sensitivity check step, and a requirement to produce one consolidated cross-reference synthesis file per collection pass rather than only per-repo audit files.
**Purpose:** Enable systematic contribution documentation from private and personal repositories
