# Target List Generation Protocol

## Purpose
Generate and update target lists (companies, job roles, platforms) based on master resume analysis. These lists are stored in `./SearchResults/Targets/` and are referenced by job search and application protocols.

**This protocol is designed to be reusable.** All generated content is derived from the candidate's master resume and preferences.

## Trigger Commands
Execute this protocol when:
- User requests: "generate target lists", "update target lists", "create job search targets"
- Called by another protocol that detects missing target files
- Quarterly refresh of target lists
- After significant master resume updates

## Target Files Generated

| File | Purpose | Source |
|:-----|:--------|:-------|
| `./SearchResults/Targets/job-roles.md` | Target job titles | Master resume Professional Identity |
| `./SearchResults/Targets/target-companies.md` | Companies to target | Master resume skills + industry |
| `./SearchResults/Targets/job-platforms.md` | Job search platforms | Master resume field + preferences |
| `./SearchResults/Targets/consulting-firms.md` | Consulting firms | Master resume consulting alignment |
| `./SearchResults/Targets/executive-search.md` | Executive search firms | Target job level |

---

## Protocol Steps

### Phase 1: Source Document Analysis

#### Step 1.1: Read Master Resume
```
Read resumes/master-resume.md
```
Extract:
- **Professional Identity:** Target job titles, career tracks, positioning
- **Skills Matrix:** Technical competencies, proficiency levels
- **Work History:** Industries worked in, company sizes, domains
- **Achievements:** Key differentiators, quantifiable results
- **Years of Experience:** Seniority level for role targeting

#### Step 1.2: Read User Preferences
```
Read CLAUDE.md
```
Extract:
- **Work Location:** Remote, hybrid, on-site preferences
- **Compensation:** Salary minimums, hourly rates
- **Industry Exclusions:** Industries to avoid
- **Company Exclusions:** Specific companies to avoid
- **Other Preferences:** Travel, clearance, company size

#### Step 1.3: Read Exclusion List
```
Read ./SearchResults/excluded-companies.md
```
Extract:
- Industry exclusions (fintech, blockchain, etc.)
- Company exclusions (specific companies)
- Investor exclusions (if applicable)

---

### Phase 2: Generate Job Roles File

#### Step 2.1: Create/Update `./SearchResults/Targets/job-roles.md`

**Structure:**
```markdown
# Target Job Titles

**Generated From:** Master Resume Analysis (`resumes/master-resume.md`)
**Last Updated:** [Current Date]
**Purpose:** Job titles to search for based on candidate's qualifications

---

## How This File Is Generated
[Explanation of derivation from master resume]

---

## Executive Leadership Roles
[Extract from master resume - C-level, VP, Director titles]

## Principal/Senior Architecture Roles
[Extract architecture titles matching skills]

## Engineering Leadership Roles
[Extract engineering titles matching experience]

## Specialized Roles
[Domain-specific roles based on skills matrix]

## Consulting & Advisory Roles
[If consulting experience present]

---

## Key Qualifications Summary
[Summary of unique value proposition from master resume]
```

---

### Phase 3: Generate Target Companies File

#### Step 3.1: Identify Target Industries
Based on master resume work history and skills:
- Extract industries where candidate has experience
- Identify adjacent industries where skills transfer
- Note industries to prioritize vs. explore

#### Step 3.2: Research and Populate Companies
For each relevant industry category:

1. **Major Consulting Firms** (if consulting skills present)
   - Strategic consulting with technology practices
   - Technology-focused consulting firms
   - Boutique consulting firms

2. **Executive Search Firms** (if targeting executive roles)
   - Firms specializing in technology executives
   - Industry-specific executive search

3. **Enterprise Technology Companies**
   - Fortune 500 with technology operations
   - Enterprise software companies
   - Cloud and infrastructure providers

4. **High-Growth Technology Companies**
   - Well-funded startups in relevant domains
   - Scale-ups with growth trajectory

5. **Remote-First Companies** (if remote preferred)
   - Companies known for remote culture

6. **Industry-Specific Targets**
   - Companies in candidate's domain expertise areas

#### Step 3.3: Cross-Reference Exclusions
Before adding any company:
```
Check against ./SearchResults/excluded-companies.md
```
Remove any companies that match exclusion criteria.

#### Step 3.4: Create/Update `./SearchResults/Targets/target-companies.md`

**Structure:**
```markdown
# Target Companies List

**Generated From:** Master Resume Analysis
**Last Updated:** [Current Date]

---

## Category 1: [Industry/Type]
| Company | Focus Area | Career Page | Notes |
|:--------|:-----------|:------------|:------|
| [Company] | [Specialty] | [URL] | [Alignment notes] |

[Repeat for each category]
```

---

### Phase 4: Generate Job Platforms File

#### Step 4.1: Identify Relevant Platforms
Based on master resume:
- **General platforms:** LinkedIn, Indeed, Glassdoor
- **Technical platforms:** Based on technology stack (e.g., .NET jobs for .NET developers)
- **Industry platforms:** Based on domain expertise
- **Executive platforms:** If targeting senior roles
- **Remote platforms:** If remote-first preference
- **Contractor platforms:** If contract work preferred

#### Step 4.2: Create/Update `./SearchResults/Targets/job-platforms.md`

**Structure:**
```markdown
# Job Search Platforms

**Generated From:** Master Resume Analysis + User Preferences
**Last Updated:** [Current Date]

---

## Primary Platforms
[Main job boards with usage notes]

## Specialized Platforms
[Platforms specific to candidate's field]

## Executive Platforms
[If targeting senior roles]

## Remote-First Platforms
[If remote preference]

## Contractor Platforms
[If contract preference]
```

---

### Phase 5: Validation and Finalization

#### Step 5.1: Validate All Files Created
```bash
ls -la ./SearchResults/Targets/
```

Ensure all required files exist:
- [ ] `./SearchResults/Targets/README.md`
- [ ] `./SearchResults/Targets/job-roles.md`
- [ ] `./SearchResults/Targets/target-companies.md`
- [ ] `./SearchResults/Targets/job-platforms.md`

#### Step 5.2: Cross-Reference Check
- All companies cross-referenced against exclusion list
- All job titles derived from master resume
- All platforms relevant to candidate's field

---

## Calling This Protocol From Other Protocols

### Check for Missing Files
Other protocols should include this check:

```markdown
### Pre-Requisite: Target Lists Verification
**Check for required target files:**
- `./SearchResults/Targets/job-roles.md`
- `./SearchResults/Targets/target-companies.md`
- `./SearchResults/Targets/job-platforms.md`

**If any files are missing:**
```
Execute: read protocols/target-list-generation.md and follow the protocol
```
Then return to this protocol.
```

### Example Integration
```markdown
### Step 1: Verify Target Lists Exist
Before proceeding with job search:
1. Check if `./SearchResults/Targets/` directory exists
2. Verify required files are present
3. If missing, execute target list generation protocol
4. Continue with job search using generated target lists
```

---

## Maintenance Schedule

- **Quarterly Update:** Refresh all target lists
- **After Resume Updates:** Regenerate if master resume changes significantly
- **Market Changes:** Update when industry or market shifts occur
- **Company Status Changes:** Remove companies that have layoffs, acquisitions, or exclusion triggers

---

## Quality Standards

- **All companies verified against exclusion list**
- **All job titles derived from master resume**
- **All platforms relevant to candidate's field and preferences**
- **Career page URLs validated and current**
- **Company information current (within 6 months)**

---

**Protocol Version:** 1.0
**Created:** December 25, 2025
**Related Protocols:** job-search.md, targeted-application.md, company-research.md
