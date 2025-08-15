# Targeted Job Application Protocol
**Purpose:** Complete job search to targeted resume and cover letter generation
**Output:** Ready-to-submit application materials for highest-probability opportunities

---

## Protocol Overview

This protocol combines comprehensive job search with immediate application material generation, creating targeted resumes and cover letters for the best-matching positions with highest acceptance probability. Each opportunity receives customized materials optimized for that specific role and company.

## When to Execute This Protocol

Execute when user requests:
- "do a targeted job search"
- "find jobs and create applications for them"
- "create targeted resumes and cover letters"
- Any variation requesting job search with application materials

## Protocol Steps

### Phase 1: Job Search Execution (TodoWrite Required)

Create todo list with these initial tasks:
1. Execute comprehensive job search per protocols/job-search.md
2. Analyze and rank opportunities by match probability
3. Select top 5-8 highest probability positions
4. Create targeted application materials for each selected position
5. Store all materials in ./resumes/targeted/ directory

#### Step 1.1: Execute Job Search Protocol
```bash
# Follow existing job search protocol
read protocols/job-search.md and execute all steps
```
- Use all existing job search methodology
- Apply user preferences (remote priority, $180K+/$85+hr, no clearance)
- Focus on positions with direct application links
- Document results in SearchResults/Jobs/ directory

#### Step 1.2: Probability Assessment Matrix
For each position found, evaluate:

**Technical Match (1-10):**
- AI/ML requirements alignment
- .NET/C# technology stack match
- Enterprise architecture needs
- Framework development relevance

**Experience Match (1-10):**
- Required years of experience
- Leadership/management requirements
- Industry experience alignment
- Specific skill requirements

**Culture/Company Match (1-10):**
- Company size preference alignment
- Remote work culture
- Technology innovation focus
- Growth stage compatibility

**Application Accessibility (1-10):**
- Direct application process available
- Clear job requirements posted
- Reasonable application process
- Active recruiting indicators

### Phase 2: Position Selection and Prioritization

#### Step 2.1: Calculate Composite Scores
For each position: `(Technical Match + Experience Match + Culture Match + Application Accessibility) / 4`

#### Step 2.2: Select Top Candidates
- **Primary Selection:** Top 5 positions with composite score ≥ 8.0
- **Secondary Selection:** Next 3 positions with composite score ≥ 7.0 (if needed)
- **Maximum:** No more than 8 positions per execution to maintain quality

#### Step 2.3: Final Validation
Ensure selected positions meet all criteria:
- ✅ Remote work available
- ✅ Compensation ≥ $180K/$85hr
- ✅ No security clearance required
- ✅ Direct application process available
- ✅ Job posting is current (within 30 days)
- ✅ **Commute Analysis:** For on-site/hybrid positions in Baltimore metro, verify company address and calculate commute time from 1221 N Calvert St, Baltimore, MD 21202

### Phase 3: Directory Structure Creation

#### Step 3.1: Create Target Directory
```bash
mkdir -p ./resumes/targeted
```

#### Step 3.2: File Naming Convention
**Format:** `MatthewWhited-{CompanyName}-{JobTitle}-{resume|coverletter|intro}.md`

**Examples:**
- `MatthewWhited-Microsoft-Principal-AI-ML-Architect-resume.md`
- `MatthewWhited-Microsoft-Principal-AI-ML-Architect-coverletter.md`
- `MatthewWhited-Microsoft-Principal-AI-ML-Architect-intro.md`
- `MatthewWhited-IntelliPro-Principal-AI-ML-Engineer-resume.md`
- `MatthewWhited-IntelliPro-Principal-AI-ML-Engineer-coverletter.md`
- `MatthewWhited-IntelliPro-Principal-AI-ML-Engineer-intro.md`

**Naming Rules:**
- Replace spaces with hyphens in company and job titles
- Use proper case for company names (Microsoft, IntelliPro, not microsoft)
- Abbreviate long job titles reasonably (Principal-Solutions-Architect-AI-ML)
- Maximum filename length of 100 characters

### Phase 4: Targeted Resume Creation

#### Step 4.1: Resume Analysis and Positioning
For each selected position:

1. **Job Posting Analysis:**
   - Extract key required skills and experience
   - Identify preferred qualifications
   - Note company culture indicators
   - Document specific technologies mentioned
   - Identify decision-maker language/priorities

2. **Master Resume Mapping:**
   - Map master resume experience to job requirements
   - Identify most relevant achievements for this role
   - Select appropriate quantified metrics
   - Choose relevant technical skills emphasis

#### Step 4.2: Resume Customization Strategy
**Base Template:** Use master resume as authoritative source
**Customization Areas:**
- **Professional Summary:** Rewrite to match job posting language and priorities
- **Core Competencies:** Reorder and emphasize skills matching job requirements
- **Experience Emphasis:** Highlight most relevant roles and achievements
- **Technical Skills:** Prioritize technologies mentioned in job posting
- **Keywords:** Integrate job posting terminology naturally

#### Step 4.3: Resume Structure
```markdown
# Matthew Whited
## [Job Title from Posting] | [Company-Specific Value Proposition]

---

## Contact Information
[Standard contact information - consistent across all resumes]

---

## Executive Summary
[Customized 3-4 sentence summary directly addressing job requirements]

### Core Value Proposition for [Company Name]
[3-4 bullet points specifically addressing how background matches their needs]

---

## Professional Experience
[Master resume experience with emphasis on relevant achievements]
[Quantified results that match job posting priorities]
[Use company's language and terminology where appropriate]

---

## Technical Excellence
[Skills section prioritized for this specific role]
[Technologies mentioned in job posting emphasized]

---

## Education & Certifications
[Standard section - consistent across applications]

---

## Community Impact & Recognition
[Standard metrics with any company-specific relevance noted]
```

### Phase 5: Quick Intro Generation

#### Step 5.1: Quick Intro Purpose and Structure
**Purpose:** Brief, first-person introduction for networking and initial outreach
**Format:** Single paragraph (4 sentences max) in first person
**Usage:** LinkedIn messages, networking events, informal conversations

#### Step 5.2: Quick Intro Content Structure
1. **Role/expertise summary** with years of experience
2. **Relevant experience highlight** specific to target company/role
3. **Company/position interest alignment** demonstrating research
4. **Value proposition or unique differentiator** (community authority, specific achievements)

#### Step 5.3: Quick Intro Template
```markdown
# Quick Introduction - Matthew Whited
**{Company} {Position Title}**

I'm a Principal Solutions Architect with 20+ years of AI/ML engineering experience, having recently [specific relevant achievement that aligns with company needs]. My background includes [relevant leadership/technical experience] while achieving [specific accomplishment relevant to role]. I'm particularly drawn to [Company]'s [specific mission/initiative/technology] and see a perfect opportunity to apply my deep experience with [relevant domain/technology] to [specific company challenge/opportunity]. My unique combination of [technical innovation/community authority] and proven business impact—demonstrated through [specific metric like NuGet downloads, Stack Overflow reputation, cost optimizations]—positions me to drive meaningful results for [Company]'s [relevant team/initiative/goal].
```

### Phase 6: Cover Letter Generation

#### Step 5.1: Cover Letter Research
For each position:
- **Company Research:** Recent news, culture, values, strategic initiatives
- **Hiring Manager:** LinkedIn research if possible
- **Team/Department:** Understanding of reporting structure and team dynamics
- **Strategic Challenges:** Industry challenges this role would address

#### Step 5.2: Cover Letter Structure
```markdown
# Cover Letter - Matthew Whited
**Position:** [Job Title]  
**Company:** [Company Name]  
**Date:** [Current Date]

---

**[Hiring Manager Name]**  
**[Title if known]**  
**[Company Name]**  

Dear [Hiring Manager Name / Hiring Team],

## Opening Paragraph
[Hook: Specific company/role connection + unique value proposition]
[1-2 sentences max, compelling and specific]

## Body Paragraph 1: Technical Alignment
[2-3 specific achievements that directly address job requirements]
[Use company's language and priorities]
[Quantified results relevant to their challenges]

## Body Paragraph 2: Strategic Value
[How background addresses company's strategic needs]
[Leadership/innovation relevant to their growth stage]
[Community authority/network value if relevant]

## Closing Paragraph
[Enthusiasm for role and company]
[Next steps and availability]
[Professional closing]

Sincerely,  
Matthew Whited  
[Email] | [Phone] | [LinkedIn]

---

**Attachments:** Resume, Portfolio Links (if relevant)
```

#### Step 5.3: Cover Letter Customization Requirements
**Company-Specific Elements:**
- Reference recent company news, initiatives, or challenges
- Use company's terminology and language style
- Address specific pain points this role would solve
- Demonstrate knowledge of company culture/values

**Role-Specific Elements:**
- Address every "required" qualification from job posting
- Connect experience to their specific technology stack
- Explain how background solves their stated challenges
- Position unique differentiators as competitive advantages

### Phase 6: Quality Assurance and Validation

#### Step 6.1: Content Validation Checklist
For each resume and cover letter pair:

**Resume Validation:**
- ✅ All dates and positions match master resume exactly
- ✅ Technical achievements remain quantified and verifiable
- ✅ Company-specific keywords incorporated naturally
- ✅ Professional narrative flows logically for target audience
- ✅ Contact information and links consistent
- ✅ Length appropriate (2-3 pages)
- ✅ ATS-friendly formatting maintained

**Cover Letter Validation:**
- ✅ Addresses specific job requirements mentioned in posting
- ✅ Demonstrates knowledge of company and role
- ✅ Uses professional, company-appropriate tone
- ✅ Quantifies relevant achievements
- ✅ Includes clear call-to-action
- ✅ Error-free grammar and spelling
- ✅ Length appropriate (1 page maximum)

#### Step 6.2: Consistency Check
- ✅ Resume and cover letter tell coherent story
- ✅ Achievements cited in both documents align
- ✅ Contact information identical across documents
- ✅ Professional tone consistent between documents
- ✅ No contradictions in dates, positions, or claims

### Phase 7: Application Strategy Documentation

#### Step 7.1: Create Application Tracking Document
**File:** `./resumes/targeted/Application_Strategy_[YYYYMMDD].md`

```markdown
# Targeted Application Strategy - [Date]

## Selected Positions Summary
| Company | Position | Match Score | Compensation | Application Link |
|---------|----------|-------------|--------------|------------------|
| [Company] | [Role] | [Score] | [Salary] | [URL] |

## Application Timeline
- **Week 1:** [Positions 1-3]
- **Week 2:** [Positions 4-6]
- **Week 3:** [Positions 7-8]

## Follow-up Strategy
[Timeline for application follow-ups and networking activities]

## Success Metrics
[Tracking approach for application success]
```

### Phase 8: Execution Summary

#### Step 8.1: Output Verification
Ensure all files created:
- Resume and cover letter for each selected position
- Application strategy document
- All files follow proper naming convention
- All files stored in ./resumes/targeted/ directory

#### Step 8.2: Success Criteria
- **Quality:** Each resume/cover letter pair specifically addresses job requirements
- **Completeness:** All selected positions have both resume and cover letter
- **Accuracy:** All information verifiable against master resume
- **Customization:** Clear differentiation between applications based on company/role
- **Professionalism:** Error-free, properly formatted, professional presentation

### Phase 9: User Summary and Next Steps

#### Step 9.1: Provide Executive Summary
- Number of positions selected and why
- Key differentiators emphasized for each application
- Recommended application timeline
- Specific positioning strategy for each company

#### Step 9.2: Application Guidance
- Optimal application submission timing
- Follow-up communication strategies
- Interview preparation recommendations
- Network activation opportunities

---

## Protocol Quality Standards

### Customization Depth Requirements
**Minimum Customization per Application:**
- Job posting analysis with 5+ specific requirement matches
- Company research with 2+ recent initiatives/news references
- 3+ quantified achievements directly relevant to role
- Role-specific technical skills emphasis
- Company culture/values alignment demonstration

### Professional Standards
**Each Application Must:**
- Maintain complete technical accuracy
- Preserve all quantified achievements from master resume
- Use professional, error-free language
- Follow consistent formatting standards
- Include proper contact information and links
- Demonstrate clear understanding of role and company

### File Organization Standards
**Directory Structure:**
```
./resumes/targeted/
├── Application_Strategy_YYYYMMDD.md
├── MatthewWhited-[Company1]-[Role1]-resume.md
├── MatthewWhited-[Company1]-[Role1]-coverletter.md
├── MatthewWhited-[Company2]-[Role2]-resume.md
├── MatthewWhited-[Company2]-[Role2]-coverletter.md
└── [Additional company applications...]
```

---

## Success Metrics and Tracking

### Application Success Indicators
- **Response Rate:** Target 60%+ response rate from targeted applications
- **Interview Rate:** Target 40%+ progression to interview stage
- **Quality Score:** Each application scores 8.0+ on customization depth
- **Timeline Adherence:** Applications submitted within planned timeline

### Continuous Improvement
- **Track success rates by company type/size**
- **Monitor which customization approaches yield best results**
- **Refine targeting criteria based on application outcomes**
- **Update protocol based on market feedback and success patterns**

---

## Protocol Maintenance

### Update Triggers
- **Market Changes:** Significant shifts in job market or compensation ranges
- **Success Pattern Analysis:** Quarterly review of application success rates
- **New Platform Discovery:** Addition of new job search platforms or methods
- **User Preference Changes:** Any changes to work preferences or requirements

### Version Control
- **Protocol Version:** 1.0 (Initial Creation)
- **Last Updated:** August 11, 2025
- **Next Review:** November 11, 2025
- **Update Frequency:** Quarterly or as needed based on market changes

---

**Protocol Completion Indicator:** User receives executive summary with targeted applications ready for immediate submission, including specific application strategy and timeline for optimal results.