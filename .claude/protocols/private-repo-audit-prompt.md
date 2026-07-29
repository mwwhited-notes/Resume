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

**Protocol Version:** 1.1
**Created:** December 24, 2025
**Updated:** July 29, 2026 — Added high-water-mark commit tracking for incremental re-audits, clarified applicability to personal/OSS repos vs. company repos
**Purpose:** Enable systematic contribution documentation from private and personal repositories
