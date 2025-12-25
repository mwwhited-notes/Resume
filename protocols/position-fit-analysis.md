# Position Fit Analysis Protocol

## Purpose
Analyze individual job postings provided by URL to determine fit quality and automatically create targeted application materials for positions meeting threshold criteria.

## Execution Steps

### Phase 1: Position Data Extraction and Exclusion Verification
1. **URL Fetch and Analysis**
   - Use WebFetch to retrieve job posting content from provided URL
   - **CRITICAL:** Verify position is still open/active - if closed or expired, immediately report status and stop analysis
   - Extract key position details: company name, job title, location, compensation
   - Identify technical requirements, experience levels, and key responsibilities
   - Note application process details and timeline requirements

2. **MANDATORY EXCLUSION VERIFICATION**
   - **CRITICAL:** Check company against `./SearchResults/excluded-companies.md` BEFORE proceeding with analysis
   - **INDUSTRY CLASSIFICATION:** Identify primary industry (fintech, blockchain, cannabis, marketing/advertising, government contractor)
   - **If company is excluded:** Immediately stop analysis and report: "This company is on the exclusion list due to [specific reason: industry/investor association/company exclusion]. Analysis cannot proceed."
   - **Verify investor associations:** Check against investor exclusions in `./SearchResults/excluded-companies.md`
   - **Verify company exclusions:** Check against specific company exclusions in `./SearchResults/excluded-companies.md`
   - **Only proceed if company is approved:** Continue with company intelligence phase

2. **Company Intelligence**
   - **EXECUTE COMPANY RESEARCH PROTOCOL:** Use `read protocols/company-research.md and follow the protocol step-by-step`
   - Research company background, mission, technology stack, and culture
   - Identify recent company news, growth trajectory, and strategic initiatives
   - Determine company size, stage, and market positioning
   - Note any existing connections or network overlap
   - Store company research results in `./SearchResults/Companies/{CompanyName}_{YYYYMMDD}.md`

### Phase 2: Comprehensive Fit Assessment

#### Technical Match Analysis (Weight: 35%)
- **Core Technologies:** Direct alignment with required technical skills
- **Platform Expertise:** Match with required platforms, frameworks, databases
- **Architecture Experience:** Alignment with system design and architecture requirements
- **Scale Requirements:** Experience with required volume, performance, complexity
- **Innovation Level:** Match with cutting-edge vs proven technology preferences
- **Programming Language Flexibility:** For architecture roles, evaluate conceptual and pattern alignment rather than specific language requirements - comfortable with Go, Java, Python, C#/.NET and other modern languages

#### Experience Match Analysis (Weight: 30%)
- **Role Level:** Alignment with seniority and responsibility level
- **Domain Experience:** Relevant industry and business domain knowledge
- **Team Leadership:** Management, mentoring, and influence requirements match
- **Project Scope:** Experience with similar project complexity and impact
- **Performance History:** Track record alignment with success metrics

#### Culture & Approach Match (Weight: 20%)
- **Work Style:** Remote/hybrid preferences alignment
- **Company Values:** Mission and values compatibility assessment
- **Growth Stage:** Startup vs enterprise culture preferences
- **Innovation Culture:** Technology adoption and innovation approach alignment
- **Collaboration Style:** Team structure and communication preferences

#### Application Accessibility (Weight: 15%)
- **Application Process:** Direct application vs referral requirements
- **Response Likelihood:** Company reputation for candidate responsiveness
- **Competition Level:** Estimated applicant volume and competition
- **Network Connections:** Existing connections or warm introduction opportunities
- **Hiring Timeline:** Urgency and timeline compatibility

### Phase 3: Scoring and Decision Matrix

#### Scoring Scale (1-10 for each category)
- **9-10:** Exceptional fit, ideal opportunity
- **7-8:** Strong fit, high success probability
- **5-6:** Moderate fit, worth considering with positioning
- **3-4:** Weak fit, significant gaps
- **1-2:** Poor fit, not recommended

#### Composite Score Calculation
- Technical Match × 0.35
- Experience Match × 0.30  
- Culture Match × 0.20
- Application Accessibility × 0.15
- **Threshold for Auto-Application:** ≥7.5/10

### Phase 4: Detailed Analysis Report

#### Create Position Analysis Document
File: `./SearchResults/Jobs/Position_Analysis_{CompanyName}_{YYYYMMDD}.md`

**Required Content:**
```markdown
# Position Fit Analysis - {Position Title}

## Position Details
- **Company:** {Company Name}
- **Position:** {Job Title}
- **Location:** {Work Arrangement}
- **Compensation:** {If Available}
- **URL:** {Original Job Posting URL}
- **Analysis Date:** {YYYY-MM-DD}

## Comprehensive Fit Assessment

### Technical Match Analysis (Score: X.X/10)
- Core technology alignment assessment
- Platform and framework expertise match
- Architecture and scale experience relevance
- Innovation level compatibility

### Experience Match Analysis (Score: X.X/10)
- Role level and responsibility alignment
- Domain and industry experience relevance
- Leadership and team influence requirements match
- Project complexity and impact alignment

### Culture & Approach Match (Score: X.X/10)
- Work arrangement and location preferences
- Company mission and values alignment
- Growth stage and culture compatibility
- Innovation and technology adoption approach

### Application Accessibility (Score: X.X/10)
- Application process complexity and directness
- Competition level and response likelihood
- Network connections and referral opportunities
- Hiring timeline and urgency compatibility

## Composite Fit Score: X.X/10

## Key Strengths for This Position
- List specific advantages and strong matches
- Highlight unique differentiators
- Note exceptional alignment areas

## Potential Challenges or Gaps
- Identify any requirement mismatches
- Note areas requiring strategic positioning
- Suggest mitigation approaches

## Strategic Application Approach
- Recommended positioning and messaging
- Key points to emphasize in application materials
- Optimal timing and follow-up strategy

## Recommendation: [APPLY/CONSIDER/SKIP]
```

### Phase 5: Strategic Analysis Report

#### Company Research Analysis
**Execute comprehensive company search and analysis:**

1. **Company Intelligence Gathering**
   - **EXECUTE COMPANY RESEARCH PROTOCOL:** Use `read protocols/company-research.md and follow the protocol step-by-step`
   - Research company background, business model, technology stack, culture, and recent strategic moves
   - Document market position, funding status, growth trajectory, and competitive landscape
   - Store comprehensive company research in `./SearchResults/Companies/{CompanyName}_{YYYYMMDD}.md`

2. **Technology Stack Intersection Analysis**
   - **Master Resume Technology Mapping:** Compare position requirements against master resume technical expertise
   - **Alignment Assessment:** Identify direct technology matches, adjacent skills, and learning opportunities
   - **Gap Analysis:** Document any significant technology or experience gaps
   - **Transferable Skills:** Highlight how existing expertise applies to position requirements

#### Position-Company Fit Assessment Report
**Create comprehensive analysis document:** `./SearchResults/Jobs/Position_Analysis_{CompanyName}_{YYYYMMDD}.md`

**Required Analysis Sections:**

**Technology Intersection:**
- Direct technology matches between master resume and position requirements
- Adjacent/transferable technology skills and how they apply
- Architecture patterns and methodologies alignment
- Scale and complexity experience relevance

**Experience Alignment:**
- Role level and responsibility match assessment
- Domain experience relevance and transferability  
- Leadership/technical track alignment with position requirements
- Project complexity and impact alignment

**Company Culture & Mission Fit:**
- Company values alignment with professional approach and background
- Work environment preferences match (remote, office, hybrid)
- Company growth stage alignment with career preferences
- Mission and product alignment with interests and expertise

**Strategic Advantages:**
- Unique differentiators that provide competitive advantage
- Specific achievements from master resume that demonstrate value
- Network connections or market knowledge that add strategic value
- Innovation experience that matches company strategic direction

**Potential Challenges & Mitigation:**
- Technology gaps and learning curve requirements
- Experience mismatches and how to address positioning
- Company culture concerns and adaptation requirements
- Market/industry unfamiliarity and knowledge gaps

**Pros & Cons Assessment:**
- **PROS:** Specific advantages and strong alignment areas
- **CONS:** Challenges, gaps, or potential concerns
- **OVERALL ASSESSMENT:** Recommendation with reasoning

**Strategic Recommendation:**
- **Interest Level:** HIGH/MODERATE-HIGH/MODERATE/MODERATE-LOW/LOW
- **Application Timing:** Immediate, wait for learning, or skip with reasoning  
- **Positioning Strategy:** How to present background for maximum advantage
- **Learning Priorities:** Skills to develop for optimal positioning

### Phase 6: Strategic Recommendations & Next Steps

#### Application Strategy Guidance
**Based on analysis results:**

1. **High Interest (8.0+ fit):** 
   - Immediate application recommended
   - Priority networking and connection outreach
   - Consider creating targeted application materials separately

2. **Moderate Interest (6.0-7.9 fit):**
   - Consider application after skill development
   - Monitor company for better-fitting opportunities
   - Network building and information gathering

3. **Low Interest (<6.0 fit):**
   - Skip application unless strategic learning opportunity
   - Note company for future monitoring
   - Document reasons for low fit

#### Learning Opportunities Documentation
**Update Skills Development Tracking:**
- Add identified learning gaps to `./SearchResults/Lessons/suggested.md`
- Prioritize learning based on market demand patterns
- Cross-reference learning needs across multiple position analyses
- Track technology trends for strategic skill development

#### Learning Gap Analysis & Suggested Skills Update
**Update Suggested Learning File:** `./SearchResults/Lessons/suggested.md`

**Identify and Document Learning Opportunities:**
1. **Gap Analysis:** Compare job requirements against candidate's current expertise (from master resume)
2. **Technology Assessment:** Note specific technologies, frameworks, or certifications mentioned but not in candidate's background
3. **Priority Classification:** Categorize gaps as High/Medium/Low priority based on:
   - Frequency of appearance across positions
   - Compensation impact potential
   - Learning difficulty and time investment
   - Market trend relevance

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
- **Trend Analysis:** Track which technologies are becoming more common in target positions

## User Experience Flow

**Input:** "how well do I fit this position {URL}"

**Expected Response:**
1. "I'll analyze this position for strategic fit and create a comprehensive assessment."
2. [Execute Company Research Protocol]
3. [Execute Position Analysis]
4. [Present Fit Score and Strategic Analysis Summary]
5. [Present Technology Intersection, Experience Alignment, and Culture Fit]
6. [Present Pros/Cons and Strategic Recommendations]
7. "Analysis complete - strategic assessment and company research stored for reference."

## Quality Standards
- All analysis must reference specific job posting requirements
- Scores must be supported by concrete evidence and examples
- **Company research protocol must be executed for all analyses**
- **Master resume must be used as authoritative source for all capability assessments**
- Strategic analysis must include technology intersection, experience alignment, and culture fit
- Pros/cons assessment must be objective and actionable
- Learning opportunities must be documented for skills development tracking
- All storage must follow established file naming conventions