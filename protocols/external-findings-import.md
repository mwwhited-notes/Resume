# External Findings Import Protocol

## Purpose
This protocol imports contribution audits from private repositories into the master resume system, ensuring consistent integration and verification of external technical contributions.

## Trigger Commands
Execute this protocol when the user requests:
- "import external findings"
- "import private repo audits"
- "process external contributions"
- "update resume from external audits"

---

## Protocol Steps

### Phase 1: Discovery and Validation

#### Step 1.1: Scan External Findings Directory
```
List all files in ./SearchResults/External/
```
Identify files matching pattern: `contribution-audit-*.md`

#### Step 1.2: For Each Audit File, Validate Structure
Required sections:
- [ ] Repository Name and Type (Original/Fork/Collaborative)
- [ ] My Role (Owner/Primary Contributor/Contributor)
- [ ] Technical Summary
- [ ] Key Contributions
- [ ] Quantifiable Metrics
- [ ] Resume Bullet Points
- [ ] Skills Demonstrated
- [ ] Innovation Assessment

Flag incomplete audits for user review before proceeding.

---

### Phase 2: Contribution Classification

#### Step 2.1: Determine Integration Target
For each audit, classify where contributions should be integrated:

| Repository Type | Integration Target |
|----------------|-------------------|
| Employer project | Work History → Appropriate employer section |
| Personal project | Personal Projects & Technical Innovations |
| Consulting/Contract | Work History → Out-of-Band Development or specific client |
| Open source contribution | Community Contributions section |

#### Step 2.2: Identify Employer Association
Match repository to employer based on:
- Date range of contributions
- Client/project name in audit
- User confirmation if unclear

**Current Employers (for reference):**
- Cadwell Industries (October 2025 - Present)
- Green Onion (February 2025 - Present)
- Out-of-Band Development, LLC (March 2015 - October 2025)
- Eliassen Group/Lightwell (September 2015 - October 2024)
- ERisk Services (November 2024 - August 2025)
- Prior employers per master resume

---

### Phase 3: Resume Integration

#### Step 3.1: Read Current Master Resume
```
Read resumes/master-resume.md
```

#### Step 3.2: Extract Resume-Ready Content
From each audit, extract:
1. **Bullet points** - Verify they follow format: Action verb + Technical achievement + Quantifiable result
2. **Skills** - Cross-reference with existing skills sections
3. **Metrics** - Verify quantifiable claims are reasonable

#### Step 3.3: Draft Integration Points
For each contribution, prepare:

```markdown
### [Employer/Project Section]

**New bullet point to add:**
- [Extracted bullet point from audit]

**Skills to verify are listed:**
- [Skill 1]
- [Skill 2]

**Metrics to update:**
- [Any aggregate metrics that should change]
```

#### Step 3.4: Present Changes for Approval
Show user a summary of proposed changes before making edits:

```markdown
## Proposed Resume Updates from External Audits

### Source: [audit filename]
**Target Section:** [Work History - Employer Name / Personal Projects]

**Additions:**
1. [Bullet point 1]
2. [Bullet point 2]

**Skills Validated:**
- [Skill list]

Proceed with integration? [Y/N]
```

---

### Phase 4: Execute Integration

#### Step 4.1: Update Master Resume
After user approval:
1. Add bullet points to appropriate employer/project section
2. Verify skills are listed in Technical Skills section
3. Update any aggregate metrics if applicable

#### Step 4.2: Update Career Background
If the audit reveals context not in career-background.md:
1. Add project context to appropriate section
2. Note any hidden expertise or patterns discovered

#### Step 4.3: Mark Audit as Processed
After successful integration, rename or move the audit file:
```
./SearchResults/External/contribution-audit-[repo]-[date].md
→ ./SearchResults/External/processed/contribution-audit-[repo]-[date].md
```

---

### Phase 5: Verification

#### Step 5.1: Run Consistency Check
```
read protocols/consistency-check.md and do what it says
```

#### Step 5.2: Create Integration Log
Append to `./SearchResults/External/integration-log.md`:

```markdown
## [Date] - External Findings Integration

### Files Processed
- contribution-audit-[repo1]-[date].md → [Target section]
- contribution-audit-[repo2]-[date].md → [Target section]

### Changes Made
- Added X bullet points to [Employer] section
- Added Y skills to Technical Skills
- Updated Z metrics

### Verification Status
- [ ] Master resume updated
- [ ] Consistency check passed
- [ ] Files moved to processed/
```

---

## Quality Standards

### Bullet Point Requirements
- Must start with strong action verb
- Must include specific technical detail
- Should include quantifiable result when possible
- Must be verifiable from audit data

### Metric Accuracy
- Do not inflate numbers beyond audit documentation
- Round appropriately (thousands to "K+", etc.)
- Note source of metrics in integration log

### Innovation Claims
- EXCEPTIONAL: Novel solutions, first-of-kind implementations
- HIGH: Complex integrations, significant performance improvements
- MODERATE: Solid implementations following best practices
- LOW: Maintenance, minor enhancements, bug fixes

Only claim innovation levels supported by audit evidence.

---

## File Organization

```
./SearchResults/External/
├── contribution-audit-[repo]-[date].md    # Pending audits
├── processed/                              # Completed imports
│   └── contribution-audit-[repo]-[date].md
└── integration-log.md                      # Import history
```

---

## Error Handling

### Incomplete Audit
If audit is missing required sections:
1. Note missing sections
2. Ask user to re-run audit prompt in source repository
3. Do not proceed with partial integration

### Conflicting Information
If audit conflicts with existing resume data:
1. Flag the conflict
2. Present both versions to user
3. User decides which is authoritative
4. Document decision in integration log

### Duplicate Content
If audit contains content already in resume:
1. Note the duplication
2. Skip duplicate items
3. Only integrate net-new information

---

**Protocol Version:** 1.0
**Created:** December 24, 2025
**Related:** `protocols/private-repo-audit-prompt.md`
