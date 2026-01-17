# Claude Memory - Resume Project

## Current Professional Context
- **User:** Matthew Whited
- **Professional Identity:** Principal Software Engineer/Architect, Fractional CTO & Crisis Resolution Specialist
- **Current Position:** Principal Software Engineer/Architect - Cadwell Industries (October 6, 2025 - Present)
- **Recent Contracts:** Green Onion (February 2025 - January 2026) - Completed
- **Previous Consulting:** Out-of-Band Development, LLC (March 2015 - October 2025)
- **Address:** 1221 N Calvert St, Baltimore, MD 21202 (Charles Village/Midtown)
- **Location:** /current/src

## Critical User Commands - MEMORIZED

### 1. "make sure everything is up to date"
**Required Response:** `read .claude/protocols/consistency-check.md and do what it says`

### 2. "update the TOC" or "Table of Contents"
**Required Response:** `read .claude/protocols/readme-maintenance.md and follow the protocol step-by-step`

### 3. Job search requests
**Required Response:** `read .claude/protocols/job-search.md and follow the protocol step-by-step`

### 4. Company research requests
**Required Response:** `read .claude/protocols/company-research.md and follow the protocol step-by-step`
- **CRITICAL: Always identify primary industry** to verify against exclusion list

### 5. Self-audit requests
**Required Response:** `read .claude/protocols/self-audit.md and follow the protocol step-by-step`

### 6. Career system generation requests
**Required Response:** `read .claude/protocols/career-system-generator.md and follow the protocol step-by-step`

### 7. Targeted application creation
**Required Response:** `read .claude/protocols/targeted-application.md and execute all steps`

### 8. Position fit analysis with URL: "how well do I fit this position {url}"
**Required Response:** `read .claude/protocols/position-fit-analysis.md and execute all steps`

### 9. Personalized learning plan creation: "I need to know more about {topic}"
**Required Response:** `read .claude/protocols/personalized-learning-plan.md and execute all steps`

### 10. Build a master resume from scratch
**Required Response:** `read .claude/protocols/master-resume-builder.md and execute all steps`

### 11. Generate target lists (companies, job roles, platforms)
**Required Response:** `read .claude/protocols/target-list-generation.md and execute all steps`

### 12. "refresh the virtual recruiter" or "update virtual-recruiter"
**Required Response:** Update the `./virtual-recruiter/` template project
**Location:** `./virtual-recruiter/` (gitignored, standalone template for sharing)
**Purpose:** Generic career management system template for others to use

**What this project is:**
- Standalone career resume management system template
- NO personal information - fully generic with placeholders
- Designed to be copied to a separate public repository
- Users run welcome-onboarding protocol to populate their own data

**Key structure:**
- `./virtual-recruiter/CLAUDE.md` - Self-contained AI instructions (no knowledge of this project)
- `./virtual-recruiter/.private/` - Private data directory (designed as git submodule)
- `./virtual-recruiter/protocols/` - 10 generic protocols adapted from this project
- `./virtual-recruiter/protocols/templates/` - Document templates

**When refreshing/updating:**
1. Review protocols in this project for improvements
2. Adapt changes to generic versions (remove all personal info)
3. Update corresponding files in `./virtual-recruiter/protocols/`
4. Ensure NO references to: Matthew, Whited, Cadwell, Green Onion, Baltimore, specific metrics (796K, 22K), specific salaries ($180K, $85/hr), specific exclusions
5. All user-specific content must use `[bracketed placeholders]`
6. Test by reading `./virtual-recruiter/CLAUDE.md` - should be self-explanatory to fresh Claude instance

**Files to check when updating:**
- Protocols: Compare `./protocols/*.md` with `./virtual-recruiter/protocols/*.md`
- Templates: `./virtual-recruiter/protocols/templates/*.md`
- Main docs: CLAUDE.md, README.md, README_SETUP.md
- Subdir READMEs: resumes/, .private/, documentation/, profiles/, analysis/

## Key Professional Metrics - REFERENCE
**Current metrics available in:** analysis/stackoverflow-metrics.md and analysis/technical-review.md
- Stack Overflow: 22,433+ reputation, C# Gold Badge
- NuGet Downloads: 796K+ across 42 packages
- Community Impact: 600+ solutions, 4.7M developer reach
- Leadership: 125+ developers influenced

## Metrics Policy for Resumes - CRITICAL
**ONLY PUBLIC METRICS may be included in resumes:**

**✅ ALLOWED (Public Metrics):**
- NuGet downloads (public packages on nuget.org)
- Stack Overflow reputation (publicly visible)
- GitHub achievements (Arctic Code Vault, Pull Shark, etc.)
- Personal public repository statistics (commit counts from personal projects)
- Public community impact metrics

**❌ NEVER INCLUDE (Private/Company Metrics):**
- Commit counts from company/private repositories
- Pull request counts from company work
- Lines of code from company projects
- Percentage contributions to company codebases
- Internal repository statistics

**Rationale:** Private repository metrics are confidential company information. Only publicly verifiable metrics should appear in resumes.

## Documentation Files Reference
- **Gold Standard:** resumes/master-resume.md (authoritative source)
- **Career Background:** documentation/career-background.md (comprehensive exclusion criteria and industry focus)
- **Manager Introduction:** SearchResults/Introduction.md (personal/professional background for workplace introductions)
- **Exclusion List:** SearchResults/excluded-companies.md (comprehensive company exclusions)
- **Application Tracking:** SearchResults/applied-to.md (active applications only)
- **Closed Applications:** SearchResults/closed-archive.md (rejected/withdrawn/closed positions)
- **Professional Contacts:** SearchResults/contacts.md (positive relationships for future opportunities)
- **External Findings:** SearchResults/External/ (private repository audit imports and integration log)
- **All Protocols:** protocols/ directory (step-by-step procedures)
- **Style Guide:** documentation/style-guide.md
- **Search Results:** SearchResults/ directory organized by topic

## User Preferences - CRITICAL
- **Work Location:** 100% REMOTE ONLY (unless Baltimore MD metro area)
- **Compensation:** $180K+ salary OR $85+/hour minimum
- **Travel:** Up to 25% acceptable
- **Security Clearance:** NOT interested
- **Architecture Role Flexibility:** Programming language less critical - comfortable with Go, Java, Python, C#/.NET

**COMPREHENSIVE EXCLUSION CRITERIA:**
**Full details in:** SearchResults/excluded-companies.md
- **Industry Exclusions:** Fintech, blockchain/cryptocurrency, cannabis, marketing/advertising, government contractors
- **Big Tech Exclusions:** Meta, Alphabet, Amazon, Netflix, Oracle (too old for big tech culture)
- **Cultural Exclusions:** Microsoft Corporation, Salesforce (CEO/culture not aligned)
- **Investor Exclusions:** 1500+ companies associated with Peter Thiel, Elon Musk, Marc Andreessen, Sam Altman
- **Professional Standards:** Age-appropriate environments valuing senior expertise

## File Path Format - MEMORIZED
- **Format:** Relative paths with `./` prefix
- **Examples:** `resumes/master-resume.md` → `./resumes/master-resume.md`

## Parameters System - CRITICAL
**Privacy-Related Data Storage:**
All sensitive personal, employment, compensation, and preference information is stored in separate parameter files to enable protocol sharing without exposing private data.

**Parameter Files Location:** `./SearchResults/Parameters/`
- `personal-info.md` - User identity, location, family, interests
- `employment.md` - Current/past employment details
- `compensation.md` - Salary requirements, work preferences
- `metrics.md` - Public metrics (safe for resumes)
- `preferences.md` - Industry focus, exclusion criteria
- `README.md` - System documentation
- `PROTOCOL-UPDATE-GUIDE.md` - Implementation guide

**Protocol Update Status:**
All 7 active protocols have been updated to use placeholders instead of hardcoded values:
✅ `application-tracking.md` - Uses [User Name] placeholder
✅ `career-development.md` - Uses [User Name] placeholder
✅ `career-system-generator.md` - Uses [User Name] placeholder
✅ `consistency-check.md` - Uses [User_Last_Name] and [Current_Employer] placeholders
✅ `external-findings-import.md` - Uses [Consulting Company] placeholder
✅ `readme-maintenance.md` - Uses [LastName] placeholder
✅ `self-audit.md` - Uses [User Name] placeholder

## Markdown Table Formatting - MEMORIZED
**All tables must have properly aligned columns with consistent whitespace:**
- Pad all cells so columns align visually in raw markdown
- Use alignment markers in separator row: `:---` (left), `:---:` (center), `---:` (right)
- Center-align numeric columns (Years, Dates)
- Left-align text columns (Names, Descriptions, Evidence)

**Example:**
```markdown
| Skill                    | Years |  Last Used  |     Level     | Evidence                    |
|:-------------------------|:-----:|:-----------:|:-------------:|:----------------------------|
| C#                       |  20+  |   Current   |   Expert (5)  | 796K+ NuGet downloads       |
| .NET Framework/.NET Core |  20+  |   Current   |   Expert (5)  | .NET 9.0 adoption           |
```

## Key Constraints & Preferences
- **DO NOT relocate** (travel up to 25% acceptable)
- **Gold standard authority:** ALL changes start with updating gold standard first
- **Systematic approach:** Use protocols and verification commands
- **Documentation:** Track all changes in daily change history files

## Current Professional Identity
Principal Software Engineer/Architect at Cadwell Industries specializing in medical device software and healthcare technology. Fractional CTO, Principal Solutions Architect & Crisis Resolution Specialist with validated technical authority. Crisis resolution positioning demonstrates ability to rescue failing projects (77% cost reduction, 1-week delivery after 12-month failures). Self-taught programming excellence with anti-hype philosophy based on decades of pattern recognition.

**Industry Focus & Exclusions:** Targeting enterprise technology, healthcare technology, manufacturing/logistics, and traditional software companies. Age-appropriate professional environments that value senior technical expertise over youth-oriented cultures.

## Current Employment Status - January 2026
- **Cadwell Industries:** CURRENT POSITION - Principal Software Engineer/Architect (Started October 6, 2025)
  - Medical device software development for backend communication and synchronization (Cadwell/Cadlink)
  - Healthcare technology with FDA compliance considerations
- **Green Onion:** COMPLETED CONTRACT (February 2025 - January 2026) - Application rescue and modernization project

## Resume Strategy - MEMORIZED
**Full details in:** resumes/master-resume.md
- **Executive Track:** Fractional CTO, Chief Solutions Architect, Enterprise Architect
- **Technical Track:** Principal Solutions Architect, Solution Architect, Technical Leadership
- **Multi-Track Capability:** Master resume supports both executive and senior IC positioning

## Search Results Reference
**Organized directory structure:** SearchResults/
- Jobs/ - market analysis and opportunities
- Companies/ - detailed company analyses
- targeted/ - complete application packages
- Portfolio/ - self-audit and presence analysis
- Targets/ - dynamically generated target lists (job roles, companies, platforms)
- External/ - private repository audit imports

## Important Session Notes

### December 24-25, 2025
✅ **Comprehensive Internet Profile Audit:** Reviewed GitHub (mwwhited), all organizations, NuGet, Stack Overflow, LinkedIn
✅ **NuGet Metrics Discovery:** Found actual downloads 796K+ (was reporting 657K), packages 42 (was 20)
✅ **Private Repository Audit System Created:**
  - Created `protocols/private-repo-audit-prompt.md` for auditing private repos
  - Created `protocols/external-findings-import.md` for importing findings
  - Created `SearchResults/External/` directory with integration-log.md and processed/ subfolder
✅ **Skills Gap Analysis:** Added 25+ missing technologies discovered in audits
✅ **Metrics Updated:** 45+ files updated with 796K+/42 packages
✅ **Total Integration:** 53+ bullet points added across all sections
✅ **Documentation:** Created change-history-20251224.md with complete session log

### November 18, 2025
✅ **Comprehensive Resume Ecosystem Update:** Updated all 34 resume and profile files with detailed Cadwell Industries and Green Onion employment information
✅ **Cadwell Industries Position Enhancement:** Added comprehensive technical details (WPF, .NET 4.8, SQLite, WiX installer) and responsibilities (peer reviews, grooming, unit testing, architectural review, FDA-regulated medical device software)
✅ **Green Onion Position Enhancement:** Added code generation framework development detail to application rescue and modernization work
✅ **Files Updated:**
  - Core resumes: comprehensive.md, abbreviated.md, extended.md (3 files)
  - ATS files: All 7 ATS resume files
  - Specialized resumes: All 13 specialized resume files
  - Other resumes: icims-ats-optimized-resume.md, simplified.md (2 files)
  - Profiles: All 6 active profile documents
✅ **Consistency Verification:** Verified 14 files with Cadwell position, 23 files with Green Onion position, 25 files mentioning code generation framework, 22 files with Cadwell technology details
✅ **Documentation Updates:** Created change-history-20251118.md documenting all ecosystem updates

### October 14, 2025
✅ **Professional Contacts Tracking System:** Created ./SearchResults/contacts.md for tracking positive professional relationships
✅ **Contact Tracking Protocols:** Updated rejection-handling.md, application-status-management.md, and targeted-application.md to reference contacts tracking
✅ **Atmosera - Patrick Stearns:**
  - Final interview completed after reschedule (company no-showed 9/24, rescheduled and completed)
  - Position filled internally, offered background check for future opportunities
  - Declined background check to avoid pending contract/personal info on file
  - Added Patrick Stearns to contacts.md (patrick.stearns@atmosera.com)
✅ **Lantern - Paul Ficca:**
  - Paul followed up on Staff Software Engineer (Architecture - USA) position
  - Position originally sent to hiring manager 9/15, withdrawn 10/1 after 20+ days
  - Declined on 10/14 due to accepting Cadwell position
  - Updated closed-archive.md with follow-up interaction
✅ **Application Rejections Processed:**
  - Nymbus Solutions Architect: Updated rejection date to 10/14 (already withdrawn 8/21 for fintech exclusion)
  - Archive counts updated: Rejected 130→131, Withdrawn 340→339

### October 13, 2025
✅ **Manager Introduction Document:** Created comprehensive background document at ./SearchResults/Matthew_Whited_Manager_Introduction.md for new Cadwell manager
✅ **Personal Information Documentation:** Added family, pets, hobbies, travel, entertainment, and food preferences to career background
✅ **Career Counselor Protocol Enhanced:** Updated ./protocols/career-counselor.md with Step 2.5 for personal information gathering
✅ **Youth Programs Clarification:** Corrected Eagle Scout and Venture Scouts to show as standalone programs (not school-related) across all documents
✅ **Personal Details Captured:**
  - Family: Married to research scientist (virology specialist)
  - Pets: Buddy (orange American Shorthair cat), Q (Blue Heeler dog)
  - Hobbies: Photography, electronics, game development, scuba diving, mountain biking, fencing
  - Travel: Utah, New Mexico, Vietnam, Cambodia, Saba (planning European vacation)
  - Entertainment: Star Trek/sci-fi, superhero movies, electronic/alt-rock music, technical books
  - Food: Doesn't like seafood
✅ **Documentation Updates:** Updated career-background.md, master-resume.md, and new manager introduction file with consistent information

### October 6, 2025
✅ **Started at Cadwell Industries:** Principal Software Engineer/Architect position
✅ **Resume Updates:** All resumes updated with new position
✅ **Out-of-Band Development:** Updated end date to October 2025
✅ **Green Onion:** Continuing as concurrent contract
✅ **Profile Updates:** All profile documents made generic for general use
✅ **Career Skills:** Created comprehensive skills list at ./profiles/career-skills.md

### September 3, 2025
✅ **Major Pipeline Refinement:** Closed 89+ applications, archived 215 positions for ATS optimization
✅ **Industry Exclusions Enhanced:** Added comprehensive exclusion criteria across all categories
✅ **Protocol Updates:** All protocols enhanced with mandatory industry classification
✅ **Active Applications:** 248 high-quality applications focused on appropriate industries
✅ **Performance Optimization:** 51% file size reduction in main tracking through archival system

---

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.