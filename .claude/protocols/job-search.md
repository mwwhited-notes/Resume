# Job Search Protocol - Comprehensive Market Analysis

## Purpose
This protocol provides a systematic approach to conducting comprehensive job searches across multiple platforms. The process creates detailed market analysis with rankings based on interest level and likelihood of success, automatically feeds high-quality opportunities into apply-next.md for tracking, and triggers targeted application creation for the best matches.

**IMPORTANT:** This protocol is designed to be reusable. All job titles, compensation requirements, and search criteria should be derived from:
- `resumes/master-resume.md` - Target job titles, skills, and experience
- `CLAUDE.md` - User preferences (compensation, location, exclusions)
- `./SearchResults/excluded-companies.md` - Company/industry exclusions

**Target List Files (in `./SearchResults/Targets/`):**
- `job-roles.md` - Target job titles derived from master resume
- `target-companies.md` - Companies to target by category
- `job-platforms.md` - Job search platforms to use

## When to Execute This Protocol
- Quarterly job market assessment
- When considering career transitions
- For salary benchmarking and market positioning
- Before major resume updates or career strategy planning
- When exploring new technology sectors or geographic markets

## Pre-Search Setup

### 1. Create SearchResults Directory Structure
```bash
mkdir -p ./SearchResults/Jobs
mkdir -p ./SearchResults/Targets
```

### 2. Verify Target List Files Exist
**CRITICAL:** Before proceeding, verify target list files exist in `./SearchResults/Targets/`:
- `job-roles.md` - Target job titles
- `target-companies.md` - Companies to target
- `job-platforms.md` - Job search platforms

**If any files are missing, execute the target list generation protocol:**
```
read protocols/target-list-generation.md and follow the protocol
```
Then return to this protocol.

**If files exist but are outdated (>90 days old), consider refreshing them.**

### 3. Company Exclusion Verification
**CRITICAL STEP:** Before executing any job search, review exclusion list to avoid excluded companies:

- **Read Exclusion List:** Review `./SearchResults/excluded-companies.md` for complete list of companies and industries to exclude
- **Industry Exclusions:** Apply all industry exclusions defined in the exclusion list
- **Company Exclusions:** Apply all specific company exclusions defined in the exclusion list
- **Investor Exclusions:** Apply investor/portfolio exclusions if defined in the exclusion list
- **DOGE/Trump/MAGA Alignment Exclusions:** Apply explicit board/management alignment exclusions (see `./SearchResults/doge-trump-maga-alignment-exclusions.md`)
- **Board Composition Verification:** Check board members against aligned individuals list before proceeding
- **Industry Classification:** Always identify company's primary industry before proceeding with analysis

**DOGE/Trump/MAGA Exclusion Criteria (UPDATED January 2026):**
- ✗ Any executive or board member who is Elon Musk, Sam Altman, Alexander Karp, Brian Armstrong, Peter Thiel, Marc Andreessen, or Ben Horowitz
- ✗ Any board member who publicly donated $100K+ to Trump, MAGA Inc., MAGA PACs, or Fairshake in 2024-2026
- ✗ Company described as "DOGE-aligned" or received DOGE recruitment involvement
- ✗ Founders Fund or a16z portfolio companies where aligned individuals hold voting board positions

**Note:** If no exclusion file exists, create `./SearchResults/excluded-companies.md` with user's exclusion preferences before proceeding.

### 4. Load Target Lists
**Read the target list files generated in Step 2:**
- **Job Roles:** `./SearchResults/Targets/job-roles.md` - Use these titles for search queries
- **Target Companies:** `./SearchResults/Targets/target-companies.md` - Reference for company targeting
- **Job Platforms:** `./SearchResults/Targets/job-platforms.md` - Platforms to search on

### 5. Master Resume Analysis & Understanding
**CRITICAL STEP:** After exclusion verification, thoroughly analyze the master resume to understand optimal job matching criteria:

- **Read Master Resume:** Complete analysis of `resumes/master-resume.md` to understand:
  - Target job titles and career tracks (extract from Professional Identity section)
  - Core technical skills and competencies (extract from Skills Matrix or Technical Skills section)
  - Key achievements and differentiators (extract from Achievements section)
  - Community validation metrics (NuGet, Stack Overflow, GitHub, etc. if applicable)
- **Read CLAUDE.md:** Extract user preferences including:
  - Work location requirements (remote, hybrid, on-site preferences)
  - Compensation requirements (salary minimums, hourly rates)
  - Travel tolerance
  - Other exclusions or preferences
- **Define Search Criteria:** Based on master resume analysis, identify:
  - Primary target job titles
  - Secondary/alternative job titles
  - Key technology focus areas
  - Experience level positioning

### 6. Define Search Criteria
**IMPORTANT:** Use the job titles from `./SearchResults/Targets/job-roles.md` for actual searches. The examples below are for reference only.

#### Example Executive Leadership Roles
- **C-Level Positions:** CTO, Chief Technology Officer, Chief Solutions Architect, Chief Digital Officer, VP Engineering
- **Fractional Executive:** Fractional CTO, Part-Time CTO, Technology Advisory, Strategic Technology Consultant
- **Technology Leadership:** Director of Engineering, Head of Engineering, Technology Director

#### Example Architecture Roles
- **Principal Architect:** Principal Solutions Architect, Principal Software Architect, Principal Enterprise Architect, Principal Platform Architect
- **Senior Architecture:** Senior Solutions Architect, Senior Software Architect, Senior Enterprise Architect
- **Specialized Architecture:** AI/ML Architect, Cloud Architect, Platform Architect, Integration Architect, Data Architect

#### Example Engineering Roles
- **Staff/Principal Engineering:** Staff Software Engineer, Principal Software Engineer, Distinguished Engineer
- **Technology Specialization:** Principal AI/ML Engineer, Senior Platform Engineer, Principal .NET Engineer
- **Consulting/Advisory:** Solutions Engineer, Pre-Sales Engineer, Technical Consultant, Technology Advisor

#### Technology Focus Areas (Derive from Master Resume Skills)
- **Extract from Skills Matrix:** Primary programming languages, frameworks, and platforms
- **Cloud & Infrastructure:** AWS, Azure, GCP, Kubernetes, Docker, etc.
- **Specializations:** AI/ML, Data Engineering, DevOps, Security, etc.

#### Work & Compensation Preferences (Extract from CLAUDE.md)
- **Work Preference:** Remote/hybrid/on-site preference from CLAUDE.md
- **Compensation Requirements:** Salary and hourly rate minimums from CLAUDE.md
- **Travel Tolerance:** Acceptable travel percentage from CLAUDE.md
- **Location:** Address for commute evaluation (if hybrid/on-site considered)
- **Other Exclusions:** Security clearance, specific industries, etc. from CLAUDE.md

## Job Search Platform Categories

### Category 1: Major Job Boards
Execute searches and create individual platform analysis files.

**Search Term Construction:** Build search queries using:
- Target job titles from master resume analysis (Step 3)
- Key technical skills from Skills Matrix
- Work preference terms (remote, hybrid, etc.)
- Technology keywords from master resume

#### LinkedIn Jobs
- **Search Terms:** [Primary job titles] + [key technologies] + [location preference] + [experience level]
- **Advanced Filters:** Work type preference, experience level, technology industry
- **Output File:** `SearchResults/Jobs/linkedin.md`
- **Focus:** Enterprise-scale opportunities, established companies

#### Indeed.com
- **Search Terms:** [Target job titles] + [technology keywords] + [location]
- **Advanced Filters:** Remote/hybrid, salary ranges, company size
- **Output File:** `SearchResults/Jobs/indeed.md`
- **Focus:** Broad market coverage, diverse company sizes

#### ZipRecruiter.com
- **Search Terms:** [Target job titles] + [technology keywords] + [location]
- **Advanced Filters:** Work type, salary ranges from CLAUDE.md, technology sector
- **Platform Advantage:** AI-powered matching, salary insights, mobile-optimized
- **Output File:** `SearchResults/Jobs/ziprecruiter.md`
- **Focus:** Rapid application process, recruiter connections, salary transparency

#### Dice.com
- **Search Terms:** [Target job titles] + [technology keywords] + [location]
- **Platform Advantage:** Tech-focused with 70,000+ job openings
- **Output File:** `SearchResults/Jobs/dice.md`
- **Focus:** Technical depth, established tech relationships

#### Glassdoor.com
- **Search Terms:** [Target job titles] + [technology keywords] + [location]
- **Platform Advantage:** Company reviews, salary insights, interview experiences
- **Output File:** `SearchResults/Jobs/glassdoor.md`
- **Focus:** Company culture insights, compensation transparency, interview preparation

#### Monster.com
- **Search Terms:** [Target job titles] + [technology keywords] + [location]
- **Platform Advantage:** Broad coverage, established relationships, diverse industries
- **Output File:** `SearchResults/Jobs/monster.md`
- **Focus:** Comprehensive market coverage, diverse company types and sizes

### Category 2: Executive Recruiting Firms
Research and document executive search opportunities.

**Reference:** `./SearchResults/Targets/target-companies.md` - Category 2: Executive Search Firms

#### Search Process
- Read target executive search firms from `./SearchResults/Targets/target-companies.md`
- Research each firm's technology practice
- Identify key recruiters and practice leaders
- Document typical client profiles and role requirements
- **Output File:** `SearchResults/Jobs/executive-recruiters.md`

### Category 3: Specialized Job Boards
Target specialized platforms based on candidate's field and skills.

**Reference:** `./SearchResults/Targets/job-platforms.md` - Specialized Platforms section

#### Platform Selection
Read `./SearchResults/Targets/job-platforms.md` to identify specialized platforms matching:
- Candidate's primary technical skills (e.g., AI/ML, .NET, DevOps)
- Target industry (e.g., healthcare, fintech, enterprise)
- Experience level (e.g., executive, startup, enterprise)

#### Search Process
- Read platforms from `./SearchResults/Targets/job-platforms.md`
- **Search Terms:** [Target job titles from job-roles.md] + [keywords from master resume] + [location preference from CLAUDE.md]
- **Focus:** Specialized opportunities matching candidate's expertise
- **Output File:** `SearchResults/Jobs/specialized-job-boards.md`

### Category 4: Major Consulting Firms & Fortune 500 Companies
Research technology leadership opportunities in consulting and Fortune 500 companies.

**Reference:** `./SearchResults/Targets/target-companies.md`
- Category 1: Major Consulting Firms
- Category 3: Enterprise Technology Companies

#### Research Process
1. Read target companies from `./SearchResults/Targets/target-companies.md`
2. Cross-reference all companies against `./SearchResults/excluded-companies.md`
3. Research career opportunities at non-excluded companies
4. Focus on positions matching job titles from `./SearchResults/Targets/job-roles.md`

#### Research Focus
- Technology leadership opportunities matching target job titles
- Work arrangement alignment (remote/hybrid/on-site per CLAUDE.md preferences)
- Compensation ranges for target positions
- Technology leadership roles and requirements
- Client engagement models and project types
- **Output File:** `SearchResults/Jobs/consulting-firms.md`

### Category 5: Remote-Specific Job Boards
Target platforms specializing in remote work opportunities.

**Reference:** `./SearchResults/Targets/job-platforms.md` - Remote-First Platforms section
**Reference:** `./SearchResults/Targets/target-companies.md` - Category 5: Remote-First Companies

#### Search Process
- Read platforms from `./SearchResults/Targets/job-platforms.md`
- **Search Terms:** [Target job titles from job-roles.md] + [key technologies from master resume] + remote
- **Focus:** 100% remote opportunities, distributed teams, flexible arrangements
- **Output File:** `SearchResults/Jobs/remote-job-boards.md`

### Category 6: Contractor & Freelance Platforms
Research high-value contractor and consulting opportunities.

**Reference:** `./SearchResults/Targets/job-platforms.md` - Contractor Platforms section

#### Search Process
- Read platforms from `./SearchResults/Targets/job-platforms.md`
- **Search Terms:** [Target job titles from job-roles.md] + consultant + [key technologies from master resume]
- **Focus:** High-value consulting engagements, fractional executive roles, specialized projects
- **Output File:** `SearchResults/Jobs/contractor-platforms.md`

#### Remote Job Market Focus
**Note:** Prioritize searches based on location preferences from CLAUDE.md. For remote-preferred candidates, prioritize remote positions and flag on-site requirements. For location-specific candidates, include geographic filters in searches.

## Search Execution Process

### Pre-Execution: Check Application History
**CRITICAL:** Before executing any job search, check existing applications to avoid duplicates:

1. **Read Applied-To File:** Review `./SearchResults/applied-to.md` if it exists
2. **Company Filter:** Identify companies already applied to within last 6 months
3. **Search Modification:** Exclude recently applied companies or note for reference
4. **Documentation:** Include application status context in research findings

### Step 1: Platform Research (Parallel Execution)
For each platform category, execute the following:

1. **Web Search Query Construction**
   - Combine platform name with target roles and technologies
   - Include location preferences from CLAUDE.md
   - Add current year for recent postings

2. **Search Execution**
   ```
   WebSearch: "[platform] [target roles] [technologies] [location] [year]"
   ```

3. **Results Analysis & Documentation**
   - Identify specific job opportunities with URLs
   - **MANDATORY LINK COLLECTION:** Capture direct URLs for all job postings, company career pages, and application links
   - **LINK VALIDATION REQUIRED:** Test all job posting URLs to verify they are still active and accessible
   - **URL EXPIRATION TRACKING:** Note date of link verification and mark expired/invalid links
   - Extract salary ranges and compensation details
   - Note key requirements and qualifications
   - Assess alignment with unique capabilities
   - **Cross-Reference Applications:** Check each opportunity against applied-to.md
   - **Mark Applied Status:** Note if previously applied to company/position
   - **EXCLUSION LIST VERIFICATION:** Cross-reference each company against `./SearchResults/excluded-companies.md` and mark excluded companies
   - **INVESTOR ASSOCIATION CHECK:** If investor exclusions are defined in exclusion list, verify company ownership/investment relationships
   - **CRITICAL:** Document all search results in individual platform files for comprehensive summary building

### Step 2: Competitive Advantage Analysis
For each platform, document how the candidate's profile provides competitive advantages.

#### Unique Differentiators (Extract from Master Resume)
Reference `resumes/master-resume.md` for unique differentiators:
- Key technical innovations and specializations
- Framework/library development or open source contributions
- Leadership experience and team influence
- Crisis resolution or turnaround expertise (if applicable)
- Technology risk management experience
- Any other distinctive capabilities from master resume

#### Community Validation (Extract from Master Resume)
Reference `resumes/master-resume.md` for current metrics:
- Package downloads (NuGet, npm, PyPI, etc.) if applicable
- Community platform reputation (Stack Overflow, GitHub, etc.)
- Open source achievements and contributions
- Speaking engagements or publications

### Step 3: Individual Search Results Documentation
**CRITICAL REQUIREMENT:** For each search executed, create individual platform documentation files to support comprehensive summary building.

#### Individual Platform Files Required
Create detailed analysis files for each platform including:

**File Naming Convention:** `SearchResults/Jobs/[platform-name].md`

**Required Platform Files:**
- `SearchResults/Jobs/linkedin.md` - LinkedIn Jobs platform analysis
- `SearchResults/Jobs/indeed.md` - Indeed.com platform analysis  
- `SearchResults/Jobs/ziprecruiter.md` - ZipRecruiter.com platform analysis
- `SearchResults/Jobs/dice.md` - Dice.com platform analysis
- `SearchResults/Jobs/glassdoor.md` - Glassdoor Jobs platform analysis (company insights + salaries)
- `SearchResults/Jobs/monster.md` - Monster.com platform analysis (broad coverage)
- `SearchResults/Jobs/executive-recruiters.md` - Executive recruiting firms analysis
- `SearchResults/Jobs/ai-ml-job-boards.md` - AI/ML specialized platforms analysis
- `SearchResults/Jobs/consulting-firms.md` - Major consulting and Fortune 500 analysis
- `SearchResults/Jobs/startup-platforms.md` - Startup and equity-focused platforms analysis
- `SearchResults/Jobs/remote-job-boards.md` - Remote-specific job boards analysis
- `SearchResults/Jobs/contractor-platforms.md` - Contractor and freelance platforms analysis

**Required Sections per Platform:**
1. **Search Query** - Exact search terms used
2. **Search Execution Date** - Date the search was performed (YYYY-MM-DD)
3. **Raw Search Results** - COMPLETE copy of all search results before any summarization
4. **Platform Overview** - Key features and specializations  
5. **Search Results Summary** - Number of positions found, key metrics
6. **Direct Job Opportunities** - Specific positions with URLs and details
   - **MANDATORY:** Include direct job posting URLs for each position
   - **MANDATORY:** Include URL verification status (ACTIVE/EXPIRED/INVALID) with verification date
   - **MANDATORY:** Include company career page URL as backup for each position
   - **PRIORITY:** Focus detailed analysis on positions with ACTIVE verified links
7. **Salary Analysis** - Compensation ranges discovered
8. **Key Requirements** - Common qualifications and technologies
9. **Market Analysis** - Trends, demand indicators, company types
10. **Competitive Advantages** - How unique profile fits platform opportunities
11. **Application Strategy** - Specific recommendations for platform
12. **Assessment** - Overall match quality and prioritization recommendations
13. **URL Verification Log** - Complete log of all URLs tested with verification dates and status

#### Search Results Documentation Process
For each WebSearch executed:
1. **Copy Full Search Results:** Preserve exact search results including all URLs and descriptions
2. **MANDATORY URL TESTING:** Use WebFetch tool to verify each job posting URL is active and accessible
3. **Link Status Documentation:** Mark each URL as ACTIVE, EXPIRED, or INVALID with verification date
4. **Active Job Validation:** For active links, confirm job posting contains relevant details (not generic company page)
5. **Extract Key Data Points:** Salary ranges, job counts, specific company mentions
6. **Identify Direct Opportunities:** Specific positions with verified active application links
7. **Analyze Market Intelligence:** Company hiring patterns, compensation trends
8. **Document Strategic Insights:** How results inform overall job search strategy

#### URL Validation Requirements
**CRITICAL LINK VERIFICATION PROTOCOL:**
- **Test Every Job URL:** Use WebFetch to verify each job posting link before including in documentation
- **Document Link Status:** Include verification status and date for all URLs
- **Active Link Priority:** Focus analysis on positions with verified active application links
- **Expired Link Handling:** Note expired positions but prioritize active opportunities
- **Alternative Access:** If direct job link expires, include company career page URL as backup
- **Verification Date:** All URLs must include date of last verification (YYYY-MM-DD format)

#### Platform Documentation Examples

**LinkedIn Search Results File:** `SearchResults/Jobs/linkedin.md`
```markdown
# LinkedIn Job Search Results

## Search Query Executed
"LinkedIn [target job title] [secondary title] [location preference] [year] [key technologies]"

## Search Results Summary
- **Total Results:** X+ [target job title] jobs
- **Salary Range:** $XXX-$XXX+ (based on market data)
- **Remote Options:** [availability assessment]
- **Key Companies:** Major tech companies, consulting firms

## Specific Opportunities Found
### Position 1: Principal Solutions Architect - [Company Name]
- **Job URL:** https://[direct-job-posting-url] 
- **URL Status:** ACTIVE (Verified: 2025-08-22)
- **Company Career Page:** https://[company-careers-url]
- **Salary:** $[range]
- **Location:** Remote
- **Key Requirements:** [requirements]
- **Application Deadline:** [date if available]

### Position 2: [Additional positions with same format]

## URL Verification Log
- Job URL 1: ACTIVE (Verified: 2025-08-22)
- Job URL 2: EXPIRED (Verified: 2025-08-22) - Position no longer available
- Job URL 3: ACTIVE (Verified: 2025-08-22)

## Market Intelligence
[Salary trends, hiring patterns, key requirements]
```

#### Mandatory Platform Files Creation
Execute searches and create individual files for:
- `SearchResults/Jobs/linkedin.md`
- `SearchResults/Jobs/indeed.md`
- `SearchResults/Jobs/consulting-firms.md`
- `SearchResults/Jobs/ai-ml-job-boards.md`
- `SearchResults/Jobs/fortune-500-tech.md`
- `SearchResults/Jobs/startup-platforms.md`

### Step 4: Dynamic Platform Discovery
During search execution, identify additional relevant platforms:

#### 2025 Additional Platforms Discovered
- **Built In:** https://builtin.com/jobs/remote - Tech jobs with new positions daily from top companies & startups
- **RemoteOK:** https://remoteok.com/ - 1M+ remote jobs, salary transparency (#OpenSalaries)
- **FlexJobs:** https://www.flexjobs.com/ - 66K+ Solutions Architect jobs, 68K+ Data Architect jobs
- **Wellfound (AngelList):** https://wellfound.com/ - 130K+ remote jobs, salary/equity upfront, direct hiring manager contact
- **Arc:** https://arc.dev/ - $60-100+/hour Enterprise Architecture developers
- **Toptal:** https://www.toptal.com/ - Top 3% freelance talent network
- **We Work Remotely:** https://weworkremotely.com/ - Advanced remote job search
- **Ladders:** Executive and senior-level positions including C-Suite roles (CFOs, CTOs), $100k+ jobs
- **Y Combinator Job Board:** Startup positions from YC portfolio companies
- **Upwork:** https://www.upwork.com/ - Solution architects $60-100+/hour, freelance opportunities
- **Gigster:** Platform of 700+ vetted developers/designers/PMs with full team assembly
- **CyberSeek:** Cybersecurity job search with government focus
- **4DayWeek:** Remote 4-day work week positions
- **NoDesk:** https://nodesk.co/remote-jobs/ - 10K+ remote jobs at 750+ companies

#### Platform Categories to Watch For
- **Specialized Technical:** AIJobs.fyi (10K+ AI/ML jobs), Scion Technical (award-winning IT staffing)
- **Consulting/Contracting:** Motion Recruitment (Top 15 US tech), Robert Half (300+ locations)
- **Executive Search Specialized:** Technology executive search firms, CTO placement specialists
- **Geographic Regional:** Local metro area tech companies (if hybrid/on-site preferred per CLAUDE.md)
- **Remote-First Platforms:** Contract/salary positions meeting compensation requirements from CLAUDE.md
- **Company Career Pages:** Direct applications to researched target companies

#### Protocol Update Process
When new relevant platforms are discovered:
1. Add platform to appropriate category in this protocol
2. Include platform URL and specialization focus
3. Define search terms specific to platform audience
4. Create new SearchResults/Jobs file for platform analysis

## Application Status Integration

### Application History Cross-Reference
When building comprehensive summary, integrate application tracking:

#### Application Status Indicators
- **Never Applied:** ✅ Available for application
- **Recently Applied:** ⏳ Applied within 6 months (note date)
- **Previously Applied:** 📋 Applied >6 months ago (may reapply)
- **Interview Process:** 🎯 Currently in interview pipeline
- **Rejected/Closed:** ❌ Previous application unsuccessful

#### Summary Integration Requirements
1. **Filter Applied Companies:** Separate new opportunities from previously applied
2. **Application Timeline:** Note timing of previous applications
3. **Reapplication Strategy:** Identify companies worth re-approaching
4. **Application Gap Analysis:** Highlight high-fit companies never applied to

## Summary and Ranking Process

### Step 5: Comprehensive Summary Creation - Built from Individual Platform Results
**CRITICAL:** Build comprehensive summary by aggregating all individual platform search result files.

#### Summary Building Process
1. **Read All Individual Platform Files:** Review each platform-specific documentation file created during search execution
2. **Aggregate Key Data Points:** Combine salary ranges, job counts, opportunities across all platforms  
3. **Cross-Platform Analysis:** Identify patterns, trends, and optimal opportunities spanning all searches
4. **Strategic Synthesis:** Develop unified strategy incorporating insights from all individual search results

#### Required Source Files for Summary Building
The comprehensive summary **MUST** be built from these individual platform files:
- `SearchResults/Jobs/linkedin.md` - LinkedIn search results and analysis
- `SearchResults/Jobs/indeed.md` - Indeed and major job boards analysis
- `SearchResults/Jobs/consulting-firms.md` - Strategic consulting firms research  
- `SearchResults/Jobs/ai-ml-job-boards.md` - AI/ML specialized platforms
- `SearchResults/Jobs/fortune-500-tech.md` - Major tech company opportunities
- `SearchResults/Jobs/startup-platforms.md` - Startup ecosystem research

**Output File:** `SearchResults/Jobs/comprehensive-job-search-[YYYYMMDD].md`

#### Ranking Methodology
Rank all platforms using dual criteria:

1. **Interest Level (1-10):** How appealing are the opportunities?
   - Role level and strategic impact
   - Technology innovation and cutting-edge focus
   - Company culture and work environment
   - Equity/compensation upside potential

2. **Likelihood Score (1-10):** Probability of successful placement?
   - Profile alignment with typical requirements
   - Competitive advantage strength
   - Market demand for unique capabilities
   - Network and referral potential

#### Tier Classification
- **Tier 1:** EXCEPTIONAL MATCH (Interest 8+ AND Likelihood 8+)
- **Tier 2:** STRONG MATCH (Interest 7+ AND Likelihood 7+)
- **Tier 3:** GOOD MATCH (Interest 6+ AND Likelihood 6+)

### Step 6: Strategic Recommendations
Include in summary:

#### Immediate Action Items (Next 30 Days)
- Top 3-5 specific opportunities to target
- Platform-specific application strategies
- Network activation and referral approaches

#### Medium-Term Strategy (30-90 Days)
- Secondary targets and backup opportunities
- Skill development or positioning adjustments
- Market relationship building activities

#### Positioning Strategy
- Key messaging for different platform types
- Salary negotiation ranges and expectations
- Geographic and remote work positioning

## Protocol Maintenance

### Quarterly Updates
- **New Platform Discovery:** Add newly found job sites to appropriate categories
- **Search Term Refinement:** Update based on market evolution
- **Competitive Analysis:** Refresh unique differentiators as technology evolves
- **Salary Benchmarking:** Update compensation ranges from market data

### Annual Review
- **Complete Protocol Assessment:** Full methodology review and improvement
- **Platform Effectiveness Analysis:** ROI analysis of different platforms
- **Market Trend Integration:** Major technology and industry trend incorporation
- **Career Strategy Alignment:** Ensure protocol supports long-term career goals

## Post-Search Integration and Application Workflow

### Step 6: Apply-Next.md Integration
**MANDATORY:** All high-quality opportunities identified during job search must be added to apply-next.md for systematic tracking and decision-making.

#### Add Jobs to Apply-Next.md Process
For each verified active opportunity with fit score ≥7.0/10:

1. **Update Apply-Next.md Entry:**
   ```markdown
   | # | URL | Company | Position | Match Score | Status | Application Materials | Notes |
   |---|-----|---------|----------|-------------|--------|---------------------|-------|
   | X | [job-url](verified-active-url) | Company Name | Position Title | X.X/10 | 🔍 Possible Match | - | Platform: [source], Salary: [range], Verified: [date] |
   ```

2. **Status Classification for Apply-Next.md:**
   - **🔍 Possible Match:** Initial discovery, fit score 7.0-7.9/10
   - **⭐ High Priority:** Strong match, fit score 8.0-8.9/10  
   - **🎯 Top Target:** Exceptional match, fit score 9.0+/10
   - **❌ No Match:** Below threshold or disqualifying factors

3. **Required Information per Entry:**
   - Verified active job URL (tested with WebFetch)
   - Company name and position title
   - Calculated fit score (1-10 scale)
   - Source platform (LinkedIn, Indeed, Dice, etc.)
   - Salary range if available
   - URL verification date
   - Key qualifying/disqualifying factors

### Step 7: Automatic Targeted Application Trigger
**CRITICAL WORKFLOW INTEGRATION:** For opportunities with fit score ≥8.5/10, automatically trigger targeted application protocol.

#### Targeted Application Auto-Execution
When jobs are added to apply-next.md with status "⭐ High Priority" or "🎯 Top Target":

1. **Execute Targeted Application Protocol:** 
   ```
   read protocols/targeted-application.md and execute all steps
   ```

2. **Focus on Top Opportunities:**
   - Prioritize fit scores 9.0+/10 for immediate execution
   - Process fit scores 8.5-8.9/10 within 48 hours
   - Consider fit scores 8.0-8.4/10 for weekly batch processing

3. **Application Material Creation:**
   - Generate targeted resume for each high-priority opportunity
   - Create customized cover letter highlighting relevant experience
   - Develop company-specific introduction/outreach message
   - Store all materials in `./resumes/targeted/` directory

4. **Update Apply-Next.md Status:**
   ```markdown
   | Status | Application Materials | Notes |
   |--------|---------------------|-------|
   | ✅ READY TO APPLY | [Resume](./resumes/targeted/...) \| [Cover Letter](./resumes/targeted/...) \| [Intro](./resumes/targeted/...) | Materials created [date] |
   ```

### Step 8: Application Tracking Integration
**SEAMLESS WORKFLOW:** Connect job search → apply-next.md → targeted applications → applied-to.md

#### Complete Application Workflow
1. **Job Discovery:** Job search protocol identifies opportunities
2. **Opportunity Evaluation:** Add to apply-next.md with fit scores
3. **Material Creation:** Generate targeted applications for high-priority matches
4. **Application Submission:** Submit applications using created materials
5. **Application Tracking:** Move to applied-to.md with submission date and status

#### Cross-Reference Requirements
- **Avoid Duplicates:** Check applied-to.md before adding to apply-next.md
- **Reapplication Logic:** Note companies applied to >6 months ago as potential reapplication candidates
- **Status Synchronization:** Keep apply-next.md and applied-to.md synchronized

### Step 9: Rejection Notification Handling
**EFFICIENCY PROTOCOL:** Handle rejection notifications without unnecessary file updates

#### Rejection Processing Workflow
1. **Initial Status Check:**
   ```bash
   # Search closed archive for company and position
   grep -i "company_name.*position_title" ./SearchResults/closed-archive.md
   ```

2. **Action Decision Tree:**
   - **Already Rejected → NO ACTION:** If position shows "Rejected" status, ignore duplicate notification
   - **Status is "Withdrawn" → UPDATE:** Change status from "Withdrawn" to "Rejected" with date
   - **Not in Archive → MOVE:** Check applied-to.md and move to closed-archive.md

3. **Duplicate Rejection Prevention:**
   - Companies send multiple rejection emails (automated + recruiter + system updates)
   - Only process first rejection notification
   - Subsequent rejections for same position require no action
   - Maintains clean tracking without redundant updates

#### Common Duplicate Scenarios
- **ATS Auto-Rejection** followed by recruiter courtesy email
- **Position filled notification** after initial rejection
- **Quarterly cleanup emails** for old applications
- **Multiple system notifications** from same company

## Success Metrics

### Quantitative Measures
- **Number of Quality Opportunities:** Target 20+ relevant positions per search
- **Apply-Next.md Conversion:** 50%+ of discovered opportunities added to apply-next.md
- **Targeted Application Generation:** 80%+ of high-priority opportunities receive custom materials
- **Application Submission Rate:** 60%+ of created targeted applications submitted within 1 week
- **URL Validation Success:** 95%+ of job URLs verified as active before inclusion
- **Salary Range Accuracy:** Compensation expectations aligned with market reality
- **Response Rate:** Track application-to-response ratios by platform
- **Time to Offer:** Measure efficiency of different platform approaches

### Qualitative Measures
- **Role Quality:** Strategic impact and technical challenge level
- **Cultural Fit:** Company culture and work environment alignment
- **Growth Potential:** Career advancement and learning opportunities
- **Work-Life Balance:** Remote work and travel requirement satisfaction
- **Application Material Quality:** Customization level and relevance to specific opportunities
- **Workflow Integration:** Seamless flow from discovery to application submission

## Documentation Standards

### File Naming Convention
- **Platform Analysis:** `SearchResults/Jobs/[platform-name].md`
- **Summary Report:** `SearchResults/Jobs/Summary.md`
- **Protocol Updates:** Update this file with new platforms and learnings

### Required Documentation Elements
- **Web Search URLs:** Include all search query URLs and references - MANDATORY for all research
- **Direct Job Links:** Specific position URLs when available - CRITICAL for application tracking
- **URL Verification Status:** ACTIVE/EXPIRED/INVALID status with verification date for all job links
- **Source Citations:** All data must include source URLs and links for verification
- **Company URLs:** Direct links to company career pages and job postings
- **Salary Data:** Compensation ranges and total package details with source attribution
- **Contact Information:** Recruiter or hiring manager details when available
- **Application Deadlines:** Time-sensitive opportunity tracking with source references
- **Research Links:** All WebSearch results, platform URLs, and reference materials

**CRITICAL REQUIREMENT:** Every piece of data, statistic, job posting, or market information MUST include proper source citation with URL links. This ensures data integrity and enables follow-up research and application tracking.

**MANDATORY LINK VALIDATION:** All job posting URLs must be tested using WebFetch tool to verify accessibility and current availability. Include verification date and status (ACTIVE/EXPIRED/INVALID) for each URL.

### Link Validation Tools and Methods

#### Required Tools for URL Verification
1. **WebFetch Tool:** Primary method for testing job posting URLs
   ```
   WebFetch: "[job-posting-url]" "Verify this job posting is still active and accessible"
   ```

2. **URL Testing Protocol:**
   - Test each job posting URL individually using WebFetch
   - Document response status (accessible, not found, redirected, etc.)
   - Note if URL leads to active job posting vs. generic company page
   - Record verification date in YYYY-MM-DD format

3. **Status Classification:**
   - **ACTIVE:** URL accessible, leads to specific job posting with application capability
   - **EXPIRED:** URL accessible but job posting removed or marked as closed
   - **INVALID:** URL not accessible, returns error, or leads to unrelated content
   - **REDIRECTED:** URL redirects to different page (note destination)

#### Link Validation Schedule
- **Initial Verification:** All URLs tested during initial job search execution
- **Pre-Application Verification:** Re-test URLs immediately before applying (within 24 hours)
- **Weekly Monitoring:** Re-verify high-priority opportunity URLs weekly
- **Monthly Archive Review:** Check status of all documented URLs monthly

---

**Last Updated:** 2025-12-25
**Next Scheduled Review:** 2026-03-25
**Protocol Version:** 2.0 - Made protocol reusable and generic; all user-specific content now references source documents (master-resume.md, CLAUDE.md, excluded-companies.md)

*This protocol is designed to be reusable for any job seeker. All job titles, compensation requirements, exclusions, and preferences should be derived from the user's master resume (resumes/master-resume.md), CLAUDE.md configuration, and exclusion list (SearchResults/excluded-companies.md). Execute systematically using TodoWrite to track progress through each category and platform. The goal is creating a comprehensive market analysis that enables strategic career decision-making based on data-driven insights and competitive positioning.*