# Private Repository Contribution Audit Prompt

## Purpose
Use this prompt in private repositories to gather contribution data for import into the master resume system.

---

## Prompt to Run in Private Repositories

Copy and paste the following prompt when opening Claude Code in a private repository:

```
I need you to audit my contributions to this repository for resume documentation. Please analyze and provide a structured report with the following information:

## Repository Analysis Required

### 1. Basic Repository Info
- Repository name and purpose
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

1. Open Claude Code in the private repository
2. Copy the prompt above
3. Paste and run it
4. Save the output to a file named `contribution-audit-[repo-name]-[YYYYMMDD].md`
5. Copy the file to `./SearchResults/External/` in the resume repository
6. Run the import protocol: `read protocols/external-findings-import.md and follow the protocol`

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

**Protocol Version:** 1.0
**Created:** December 24, 2025
**Purpose:** Enable systematic contribution documentation from private repositories
