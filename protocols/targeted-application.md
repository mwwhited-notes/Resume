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
4. **Execute comprehensive company research per protocols/company-research.md for each selected position**
5. Create targeted application materials for each selected position using company research insights
6. Store all materials in ./SearchResults/targeted/ directory

#### Step 1.1: Execute Job Search Protocol
```bash
# Follow existing job search protocol
read protocols/job-search.md and execute all steps
```
- **EXCLUSION LIST VERIFICATION FIRST:** Review `./SearchResults/excluded-companies.md` and exclude all companies per exclusion list
- **Check Application History:** Review `./SearchResults/applied-to.md` and `./SearchResults/apply-next.md` to avoid duplicates
- **Already Applied Check:** If position found in either tracking file, respond with "Already applied to [Company] - [Position] on [Date]" and skip this position
- **Excluded Company Check:** If company found in exclusion list, respond with "Skipping [Company] - on exclusion list" and skip this position
- Use all existing job search methodology
- Apply user preferences from CLAUDE.md (location, compensation minimums, exclusions)
- Focus on positions with direct application links
- Filter out companies applied to within last 6 months
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
Ensure selected positions meet all criteria from CLAUDE.md:
- ✅ Work arrangement matches preferences (remote/hybrid/on-site per CLAUDE.md)
- ✅ Compensation meets minimums specified in CLAUDE.md
- ✅ Meets any exclusion criteria (e.g., no clearance, specific industries) from CLAUDE.md
- ✅ Direct application process available
- ✅ Job posting is current (within 30 days)
- ✅ **Not Previously Applied:** Verify against both applied-to.md and apply-next.md (no application within 6 months)
- ✅ **Commute Analysis:** For on-site/hybrid positions, verify company address and calculate commute time from user's address in CLAUDE.md

### Phase 3: Company Research Execution

#### Step 3.1: Execute Company Research Protocol
For each selected position, execute comprehensive company research:

```bash
# Follow company research protocol for each target company
read protocols/company-research.md and execute all steps
```

**Required Research Areas:**
- **Business Model & Market Position:** Core services, revenue model, market position, recent strategic moves
- **Technology Stack & Engineering:** Technology choices, architecture decisions, engineering culture, scale metrics
- **Culture & Opportunities:** Remote work policies, company values, hiring philosophy, growth trajectory
- **Strategic Alignment:** How company mission/values align with candidate's expertise and career goals

**Research Output Requirements:**
- Create company analysis document: `./SearchResults/Companies/{CompanyName}_{YYYYMMDD}.md`
- Include application context noting targeted position and strategic recommendations
- Document specific company language, values, and technology terminology for application materials

#### Step 3.2: Research Integration Planning
For each company researched:

**Extract Key Insights for Application Materials:**
- **Company-Specific Language:** Terminology, values, mission statements, technology names
- **Strategic Initiatives:** Recent news, product launches, market expansion, technology investments
- **Culture Indicators:** Work environment, team structure, innovation approach, remote work policies
- **Technology Alignment:** Specific platforms, tools, methodologies mentioned in company materials
- **Competitive Positioning:** How company differentiates itself, market challenges, growth opportunities

**Application Positioning Strategy:**
- **Value Proposition Alignment:** Connect candidate's background to company's specific strategic needs
- **Language Integration:** Use company's terminology and phrases naturally in application materials
- **Problem-Solution Fit:** Position candidate's unique expertise and experience to address company's stated challenges
- **Cultural Alignment:** Demonstrate understanding of company values and work environment preferences

### Phase 4: Directory Structure Creation

#### Step 4.1: Create Target Directory
```bash
mkdir -p ./SearchResults/targeted
```

#### Step 4.2: File Naming Convention
**Format:** `{CandidateName}-{CompanyName}-{JobTitle}-{resume|coverletter|intro}.md`
**Storage Location:** `./SearchResults/targeted/`

**Examples (using placeholder name):**
- `./SearchResults/targeted/[Name]-Acme-Principal-Architect-resume.md`
- `./SearchResults/targeted/[Name]-Acme-Principal-Architect-coverletter.md`
- `./SearchResults/targeted/[Name]-Acme-Principal-Architect-intro.md`

**Naming Rules:**
- Use candidate's name from master resume
- Replace spaces with hyphens in company and job titles
- Use proper case for company names (Acme, TechCorp, not acme)
- Abbreviate long job titles reasonably (Principal-Solutions-Architect-AI-ML)
- Maximum filename length of 100 characters

### Phase 5: Targeted Resume Creation

#### Step 5.1: Resume Analysis and Positioning
For each selected position:

1. **Job Posting Analysis:**
   - Extract key required skills and experience
   - Identify preferred qualifications
   - Note company culture indicators
   - Document specific technologies mentioned
   - Identify decision-maker language/priorities

2. **Company Research Integration:**
   - **Reference Company Analysis:** Use insights from `./SearchResults/Companies/{CompanyName}_{YYYYMMDD}.md`
   - **Strategic Alignment:** Position experience to address company's specific challenges and strategic initiatives
   - **Language Integration:** Incorporate company-specific terminology, values, and mission language naturally
   - **Technology Focus:** Emphasize technologies and methodologies mentioned in company research
   - **Culture Alignment:** Adapt professional narrative to match company culture and work environment

3. **Master Resume Mapping:**
   - Map master resume experience to job requirements AND company strategic needs
   - Identify most relevant achievements for this role and company context
   - Select appropriate quantified metrics that resonate with company's scale and challenges
   - Choose relevant technical skills emphasis based on company's technology stack and direction

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
# [Candidate Name from Master Resume]
## [Job Title from Posting] | [Company-Specific Value Proposition]

---

## Contact Information
[Standard contact information from master resume - consistent across all resumes]

---

## Executive Summary
[Customized 3-4 sentence summary directly addressing job requirements]

### Core Value Proposition for [Company Name]
[3-4 bullet points specifically addressing how background matches their needs]

---

## Professional Experience
[COMPLETE work history from master resume - ALL positions included]
[Emphasis on relevant achievements for target role]
[Quantified results that match job posting priorities]
[Use company's language and terminology where appropriate]
[Maintain chronological accuracy and include all employment dates]

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

**CRITICAL REQUIREMENT - Complete Work History:**
- **MUST include ALL positions from master resume** - no omissions allowed
- **Maintain chronological accuracy** - all dates must match master resume exactly
- **Preserve employment timeline integrity** - no gaps or missing positions
- **Include complete company names and titles** - maintain professional record accuracy
- **Emphasize relevant achievements** while keeping full work history visible

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

#### Step 5.3: Quick Intro Template with Company Research Integration
```markdown
# Quick Introduction - [Candidate Name]
**{Company} {Position Title}**

I'm a [Primary Job Title from master resume] with [X]+ years of [relevant domain] experience, having recently [specific relevant achievement that aligns with company's strategic needs from research]. My background includes [relevant leadership/technical experience] while achieving [specific accomplishment that addresses company's stated challenges]. I'm particularly drawn to [Company]'s [specific mission/initiative/technology from company research] and see a perfect opportunity to apply my deep experience with [relevant domain/technology matching company's technology stack] to [specific company challenge/strategic initiative from research]. My unique combination of [technical innovation/community authority] and proven business impact—demonstrated through [specific metric that resonates with company's scale and market]—positions me to drive meaningful results for [Company]'s [relevant strategic goal/growth initiative from research].
```

**Company Research Integration Requirements:**
- **Strategic Alignment:** Reference specific company initiatives, market expansion, or technology investments from research
- **Technology Match:** Mention specific technologies, platforms, or methodologies identified in company analysis
- **Challenge Addressing:** Connect experience to specific challenges or opportunities identified in company research
- **Scale Relevance:** Use metrics and achievements that match the company's scale and market position
- **Mission Connection:** Reference company's mission, values, or strategic direction from research findings

### Phase 6: Cover Letter Generation

#### Step 6.1: Cover Letter Research Integration
For each position:
- **Reference Company Analysis:** Use comprehensive insights from `./SearchResults/Companies/{CompanyName}_{YYYYMMDD}.md`
- **Strategic Context:** Recent news, product launches, market expansion, technology investments from company research
- **Culture & Values:** Work environment, innovation approach, mission alignment from research findings
- **Technology Alignment:** Specific platforms, methodologies, and technical challenges identified in company analysis
- **Hiring Manager Research:** LinkedIn research if possible, team structure understanding
- **Strategic Challenges:** Industry challenges this role would address based on company's competitive positioning

#### Step 5.2: Cover Letter Structure
```markdown
# Cover Letter - [Candidate Name]
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
[Candidate Name]
[Email from master resume] | [Phone from master resume] | [LinkedIn from master resume]

---

**Attachments:** Resume, Portfolio Links (if relevant)
```

#### Step 6.3: Cover Letter Customization Requirements
**Company Research Integration:**
- **Strategic Initiatives:** Reference specific company developments, product launches, or market expansion from research
- **Language & Terminology:** Use company's specific terminology, mission language, and technology names from research
- **Problem-Solution Alignment:** Address specific pain points and challenges identified in company analysis
- **Culture Demonstration:** Show understanding of company values, work environment, and innovation approach from research
- **Competitive Positioning:** Position candidate's experience to address company's stated market challenges and growth opportunities

**Role-Specific Elements:**
- Address every "required" qualification from job posting
- Connect experience to their specific technology stack
- Explain how background solves their stated challenges
- Position unique differentiators as competitive advantages

### Phase 6: Quality Assurance and Validation

#### Step 6.1: Content Validation Checklist
For each resume and cover letter pair:

**Resume Validation:**
- ✅ **COMPLETE WORK HISTORY:** All positions from master resume included with no omissions
- ✅ All dates and positions match master resume exactly
- ✅ **Employment timeline integrity:** No gaps or missing positions from chronological history
- ✅ Technical achievements remain quantified and verifiable
- ✅ **Company Research Integration:** Company-specific terminology, values, and strategic initiatives incorporated naturally
- ✅ **Technology Alignment:** Technologies and methodologies from company research emphasized appropriately
- ✅ Professional narrative flows logically for target audience and company culture
- ✅ Contact information and links consistent
- ✅ Length appropriate (2-3 pages) - complete history may require additional length
- ✅ ATS-friendly formatting maintained

**Cover Letter Validation:**
- ✅ Addresses specific job requirements mentioned in posting
- ✅ **Company Knowledge Demonstration:** References specific company initiatives, strategic moves, or technology investments from research
- ✅ **Language Integration:** Uses company's terminology, mission language, and technology names naturally
- ✅ **Strategic Alignment:** Positions experience to address company's specific challenges and opportunities
- ✅ Uses professional, company-appropriate tone matching company culture
- ✅ Quantifies relevant achievements that resonate with company scale and market
- ✅ Includes clear call-to-action
- ✅ Error-free grammar and spelling
- ✅ Length appropriate (1 page maximum)

**Quick Intro Validation:**
- ✅ **Strategic Relevance:** References specific company mission, technology stack, or strategic initiatives from research
- ✅ **Challenge Addressing:** Connects experience to specific company challenges or opportunities identified in research
- ✅ **Scale Alignment:** Uses metrics and achievements appropriate for company's size and market position
- ✅ Professional tone suitable for networking and outreach
- ✅ Length appropriate (single paragraph, 4 sentences maximum)

#### Step 6.2: Consistency Check
- ✅ Resume and cover letter tell coherent story
- ✅ Achievements cited in both documents align
- ✅ Contact information identical across documents
- ✅ Professional tone consistent between documents
- ✅ No contradictions in dates, positions, or claims

### Phase 7: Application Strategy Documentation

#### Step 7.1: Update Application Tracking
**CRITICAL:** Before creating strategy document, update central application tracker:

1. **Update Applied-To File:** Add each application to `./SearchResults/applied-to.md`
2. **Use Application Tracking Protocol:** Follow `protocols/application-tracking.md` for each application
3. **Document Application Method:** Note "Targeted Application Protocol" as source

#### Step 7.2: Create Application Strategy Document
**File:** `./SearchResults/targeted/Application_Strategy_[YYYYMMDD].md`

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

### Phase 8: Rejection Handling Protocol

#### Step 8.1: Process Rejection Notifications
**When receiving rejection emails or notifications:**

1. **Check Existing Status First:**
   ```bash
   # Search for the company and position in closed archive
   grep -i "company_name.*position_title" ./SearchResults/closed-archive.md
   ```

2. **Duplicate Rejection Handling:**
   - **If Already Rejected:** Ignore the duplicate rejection notification completely - no action needed
   - **If Status is "Withdrawn":** Update to "Rejected" with current date
   - **If Not Found:** Check applied-to.md and move to closed-archive.md with rejection status

3. **No Action Required for Duplicates:**
   - Companies often send multiple rejection emails (automated systems, recruiter follow-ups)
   - If position already shows as "Rejected" in closed-archive.md, take no action
   - Prevents unnecessary file updates and maintains clean tracking

#### Step 8.2: Track Positive Professional Contacts
**When rejection or withdrawal involves positive professional interaction:**

1. **Evaluate Relationship Quality:**
   - Professional and responsive communication throughout process
   - Expressed interest in future opportunities or keeping in touch
   - Positive interview or discussion experience
   - Recruiter/hiring manager offered to maintain contact

2. **Record Contact in** `./SearchResults/contacts.md`

3. **Include Contact Details:**
   - Name, title, and company
   - Contact information (email, LinkedIn)
   - Position context and interaction notes
   - Future opportunity potential
   - Quality of interaction and professionalism

4. **When to Track Contacts:**
   - Recruiter offered future collaboration despite position being filled
   - Hiring manager expressed interest in keeping connected
   - Professional relationship developed during interview process
   - Company suggested background check for future opportunities
   - Positive technical discussions or mutual professional respect established

### Phase 9: Execution Summary

#### Step 8.1: Output Verification
Ensure all files created:
- Resume and cover letter for each selected position
- Application strategy document
- All files follow proper naming convention
- All files stored in ./SearchResults/targeted/ directory

#### Step 8.2: Success Criteria
- **Quality:** Each resume/cover letter pair specifically addresses job requirements
- **Completeness:** All selected positions have both resume and cover letter
- **Accuracy:** All information verifiable against master resume
- **Customization:** Clear differentiation between applications based on company/role
- **Professionalism:** Error-free, properly formatted, professional presentation

### Phase 9: Learning Gap Analysis & Suggested Skills Update

#### Step 9.1: Update Suggested Learning File
**File:** `./SearchResults/Lessons/suggested.md`

**Identify and Document Learning Opportunities:**
1. **Gap Analysis:** Compare job requirements against candidate's current expertise (from master resume) across all targeted positions
2. **Technology Assessment:** Note specific technologies, frameworks, or certifications mentioned but not in candidate's background
3. **Priority Classification:** Categorize gaps as High/Medium/Low priority based on:
   - Frequency of appearance across target positions
   - Compensation impact potential
   - Learning difficulty and time investment
   - Market trend relevance and strategic importance

**Suggested Learning Entry Format:**
```markdown
### [Priority Level] Priority
- **[Technology/Skill Name]**
  - **Source:** [Company] [Position] - [requirement type: required/preferred]
  - **Gap:** [Specific gap description]
  - **Learning Focus:** [What specifically to learn]
  - **Business Value:** [Why this skill matters for career advancement]
  - **Estimated Effort:** [Time investment estimate]
```

**Update Strategy:**
- **Add New Gaps:** Technologies not currently tracked in suggested.md
- **Update Existing:** Increase priority if technology appears in multiple high-value positions
- **Cross-Reference:** Note which positions are driving specific learning needs
- **Trend Analysis:** Track which technologies are becoming more common in target applications

### Phase 10: User Summary and Next Steps

#### Step 10.1: Provide Executive Summary
- Number of positions selected and why
- Key differentiators emphasized for each application
- Recommended application timeline
- Specific positioning strategy for each company
- Learning opportunities identified for future positioning

#### Step 10.2: Application Guidance
- Optimal application submission timing
- Follow-up communication strategies
- Interview preparation recommendations
- Network activation opportunities
- Suggested skill development priorities based on market analysis

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
./SearchResults/targeted/
├── Application_Strategy_YYYYMMDD.md
├── [CandidateName]-[Company1]-[Role1]-resume.md
├── [CandidateName]-[Company1]-[Role1]-coverletter.md
├── [CandidateName]-[Company2]-[Role2]-resume.md
├── [CandidateName]-[Company2]-[Role2]-coverletter.md
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
- **Protocol Version:** 2.0 (Made generic and reusable)
- **Last Updated:** December 25, 2025
- **Next Review:** March 25, 2026
- **Update Frequency:** Quarterly or as needed based on market changes

---

**Protocol Completion Indicator:** User receives executive summary with targeted applications ready for immediate submission, including specific application strategy and timeline for optimal results.

**Note:** This protocol is designed to be reusable. All candidate-specific information (name, contact, preferences, exclusions) should be derived from master resume (resumes/master-resume.md) and CLAUDE.md configuration.