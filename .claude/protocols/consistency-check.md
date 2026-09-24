# Resume Consistency Update Checklist

## Purpose
This document provides a systematic approach to ensure all resume files remain consistent with the gold standard (resumes/master-resume.md), create specialized single-role resumes for each position type, and follow the preferred writing style guidelines (documentation/style-guide.md) while containing current, accurate information.

## When to Use This Checklist
- After any changes to professional experience or positions
- When updating technical achievements or metrics
- Before important job applications or networking events
- Quarterly maintenance reviews
- After discovering any inconsistencies between documents

## Step-by-Step Update Process

### 1. Review Gold Standard References and Style Guidelines
- **Read Master Resume:** Complete analysis of `resumes/master-resume.md` as authoritative source for all professional information
- **Read Career Background:** Review `documentation/career-background.md` for comprehensive context, hidden expertise, and positioning insights
- **Read Style Guidelines:** Review `documentation/style-guide.md` for language preferences and communication approach
- **Note Current Status:** Current positions, dates, key metrics, and recent achievements
- **Understand Dual Approach:** Exact numbers in master resume, general language in presentation documents
- **Identify Propagation Needs:** New information from master resume and career background that should be reflected across ecosystem

### 2. Check ALL Resume Files for Consistency
Review each file against master resume and career background. **IMPORTANT:** Check ALL .md, .yaml, and .json files under ./resumes directory:

**Core Resume Variants:**
- [ ] `resumes/comprehensive.md` - Full professional history with master resume accuracy
- [ ] `resumes/abbreviated.md` - Condensed version maintaining key achievements from master
- [ ] `resumes/extended.md` - Expanded format incorporating career background insights

**ATS Resume Files:**
- [ ] `resumes/ats/generic.txt` - ATS-optimized using master resume as source
- [ ] `resumes/ats/workday.md` - Workday system format with master resume data
- [ ] `resumes/ats/leverco.md` - Lever.co format using authoritative master content
- [ ] `resumes/ats/master-resume-ats.txt` - Comprehensive ATS format showing all target titles
- [ ] `resumes/ats/principal-solutions-architect-ats.txt` - Principal Solutions Architect ATS format
- [ ] `resumes/ats/enterprise-architect-ats.txt` - Enterprise Architect ATS format
- [ ] `resumes/ats/fractional-cto-ats.txt` - Fractional CTO ATS format
- [ ] **All other .md and .txt files in resumes/ats/** - Check systematically

**Structured Resume Formats:**
- [ ] `resumes/formats/fresh-schema.yaml` - FRESH schema format with current data
- [ ] `resumes/formats/json-resume.json` - JSON Resume schema with current data
- [ ] **All other .yaml and .json files in resumes/** - Check systematically

**Consistency Requirements:**
- All professional experience must derive from master resume
- Career background insights should inform positioning and emphasis
- Technical achievements must maintain master resume accuracy
- Professional identity should reflect career background positioning
- Quantitative language follows style guide (general terms in presentation documents)

### 2a. Create/Update Specialized Single-Role Resumes with Matching Cover Letters
Create targeted resumes for each specific position type using master resume as authoritative source and career background for positioning insights. **CRITICAL:** Each specialized resume MUST have a matching cover letter with `-cover-letter` appended to the filename.

**Current Specialized Resumes (./resumes/specialized/):**
- [ ] `fractional-cto.md` + `fractional-cto-cover-letter.md` - Fractional CTO positioning with crisis resolution expertise
- [ ] `chief-solutions-architect.md` + `chief-solutions-architect-cover-letter.md` - Chief Solutions Architect focus emphasizing enterprise architecture mastery
- [ ] `enterprise-architect.md` + `enterprise-architect-cover-letter.md` - Enterprise Architect specialization highlighting Centers of Excellence leadership
- [ ] `vp-engineering.md` + `vp-engineering-cover-letter.md` - VP Engineering positioning with technical leadership emphasis
- [ ] `principal-solutions-architect.md` + `principal-solutions-architect-cover-letter.md` - Principal Solutions Architect focus with AI/ML innovation leadership
- [ ] `solution-architect.md` + `solution-architect-cover-letter.md` - Solution Architect positioning emphasizing framework development
- [ ] `ai-ml-principal.md` + `ai-ml-principal-cover-letter.md` - AI/ML Principal specialization highlighting custom algorithm development
- [ ] `staff-engineer.md` + `staff-engineer-cover-letter.md` - Staff Engineer positioning with technical authority emphasis
- [ ] `platform-architect.md` + `platform-architect-cover-letter.md` - **PRIMARY TARGET:** Principal Platform Architect positioning with DevOps and infrastructure expertise
- [ ] `technical-consultant.md` + `technical-consultant-cover-letter.md` - Technology Consultant positioning with vendor-neutral advisory approach
- [ ] `Enterprise_AI_ML_[User_Last_Name]_Resume.md` + `Enterprise_AI_ML_[User_Last_Name]_Resume-cover-letter.md` - Enterprise AI/ML specialization
- [ ] `High_Growth_Tech_[User_Last_Name]_Resume.md` + `High_Growth_Tech_[User_Last_Name]_Resume-cover-letter.md` - High Growth Tech specialization
- [ ] `[User_Last_Name]-Enterprise-Architect-Resume.md` + `[User_Last_Name]-Enterprise-Architect-Resume-cover-letter.md` - Enterprise Architect specialization

**See:** `./SearchResults/Parameters/personal-info.md` for user name to substitute in filenames
- [ ] **All other .md files in resumes/specialized/** - Check systematically for consistency with matching cover letters

**Cover Letter Requirements:**
- **Filename Convention:** [resume-name]-cover-letter.md (e.g., `platform-architect-cover-letter.md`)
- **Content Source:** Derived from master resume achievements and career background positioning
- **Role-Specific Focus:** Emphasize relevant experience and value proposition for specific position type
- **Professional Tone:** Follow style guide language preferences and communication approach
- **Quantitative Language:** Use general terms per style guide (substantial, significant vs. exact numbers)
- **Complete Alignment:** Cover letter must align with corresponding specialized resume content
- **Crisis Resolution Emphasis:** Highlight specific crisis resolution examples relevant to target role

**Targeted Application Resumes:**
- [ ] **All .md files in resumes/targeted/** - Check for consistency with master resume and current positioning

**CRITICAL: Master Resume vs Other Resume Positioning Strategy**
- **Master Resume:** Must list ALL target job titles showing multi-track capability (Principal Enterprise Architect, Principal Solutions Architect, Fractional CTO, Principal Platform Architect & Crisis Resolution Specialist)
- **All Other Resume Documents:** Must target SINGLE title only (currently Principal Solutions Architect)
- **Profile Documents:** Must target SINGLE title only (currently Principal Solutions Architect)
- **Rationale:** Master resume serves as authoritative source showing all capabilities, while presentation documents focus on single target for clarity and impact

**Source Requirements for Each Specialized Resume:**
- **Primary Source:** All content must derive from `resumes/master-resume.md` as authoritative reference
- **Positioning Context:** Use `documentation/career-background.md` for role-specific emphasis and hidden expertise
- **Technical Accuracy:** Maintain exact technical claims and achievement metrics from master resume
- **Professional Identity:** Adapt multi-track positioning from career background to single-role focus
- **Complete Work History:** **MUST include complete employment chronology** from master resume - minimum of job titles and years for entire career, with role-relevant emphasis for key positions
- **Quantitative Language:** Follow style guide for presentation (general terms) vs. master (exact numbers)

**CRITICAL: Complete Career History Requirement**
- All resumes MUST include complete career history section with job titles and years
- Cannot omit any positions from employment chronology 
- Must show career progression from Systems Engineer (2000) through current position
- Can emphasize relevant positions with detailed descriptions while maintaining complete timeline

**Key items to verify:**
- Position chronological ordering (most recent first)
- Accurate start/end dates for all positions
- Consistent job titles and company names
- Aligned achievement language and metrics
- Current contact information
- **Style compliance**: General quantitative language (reference master resume for current metrics)
- **Language consistency**: Natural, conversational terms vs. exact precision

### 3. Check Structured Resume Formats (DEPRECATED - covered in Section 2)
**Note:** These files are now covered in the comprehensive resume file review in Section 2.

### 4. Update ALL Profile Documents
Update all profile documents using master resume as authoritative source and career background for positioning. **IMPORTANT:** Check ALL .md files under ./profiles directory:

**Profile Documents:**
- [ ] `profiles/brief.md` - Brief professional summary with master resume accuracy
- [ ] `profiles/brief-personal.md` - Personal brief incorporating career background insights
- [ ] `profiles/executive-summary.md` - Executive positioning using career background strategic context
- [ ] `profiles/introduction.md` - Professional introduction with master resume achievements
- [ ] **All other .md files in profiles/** - Check systematically for consistency with current Principal Solutions Architect positioning

**Source-Based Update Requirements:**
- **Master Resume Integration:** All achievements, metrics, and professional history must derive from master resume
- **Career Background Positioning:** Professional identity and strategic positioning should reflect career background insights
- **Single Title Profile Focus:** Profile documents must target single title (Chief Solutions Architect) - no multi-title positioning
- **Current Position Context:** Update "What I'm Working On" sections with latest information from master resume
- **Achievement Metrics:** Use master resume as source, apply style guide language (general terms for presentation)
- **Community Statistics:** NuGet downloads, Stack Overflow reputation, GitHub achievements from master resume
- **Technical Focus Areas:** AI/ML innovations, enterprise architecture, framework development from master resume
- **Hidden Expertise Integration:** Incorporate career background revelations (crisis resolution, vendor-neutral advisory, etc.)
- **Resume Multi-Track Capability:** Specialized resumes can target multiple architecture disciplines (Platform, Enterprise, Solutions)
- **Profile vs Resume Strategy:** Profiles maintain single-title focus while resumes provide comprehensive specialization coverage
- **Style Alignment:** Apply general quantitative language per style guide (reference master resume for current metrics)
- **Natural Language:** Use conversational terms maintaining master resume accuracy

### 5. Verify Position Information Consistency
Ensure across ALL documents using master resume as authoritative source:

**Employment History Verification:**
Reference `resumes/master-resume.md` for authoritative employment dates. Verify:
- **Current Position:** First chronologically (most recent position from master resume)
- **Active Contracts:** Any concurrent contract work appears with correct dates per master resume
- **Recent Positions:** All dates and details match master resume exactly
- **Complete Work History:** All positions from master resume properly represented with accurate dates
- **Employment End Dates:** Verify all "Present" vs. specific end dates match master resume
- **Achievement Language:** Conservative, professional tone maintaining master resume accuracy
- **Technical Claims:** All validated against master resume technical innovation portfolio
- **Career Background Integration:** Position descriptions enhanced with career background context where appropriate
- **Multi-Track Positioning:** Each document reflects appropriate positioning (executive vs. strategic) from career background

### 6. Update Documentation
- [ ] Update `../CLAUDE.md` with session summary and current status if needed
- [ ] Note any new information learned for future master resume updates
- [ ] Document any career background insights that should be reflected in future resume updates
- [ ] Record any positioning discoveries that enhance professional identity across ecosystem

## Common Issues to Watch For
- **Position Ordering:** Current position should appear first
- **Date Accuracy:** Ensure all start/end dates are correct
- **Metric Consistency:** Use "substantial" instead of specific percentages
- **Missing Positions:** New roles should appear in all relevant documents
- **Technical Currency:** Skills and achievements should reflect latest work
- **Quantitative Language:** Exact numbers only in master resume, general language elsewhere
- **Style Violations:** Corporate speak, exact precision, or overly technical jargon
- **Natural Flow:** Ensure conversational, authentic tone throughout

## Comprehensive File Discovery Commands
Use these to systematically find all files that need review:
```bash
# Find ALL resume files that need checking
find resumes/ -name "*.md" -o -name "*.yaml" -o -name "*.json" -o -name "*.txt"

# Find ALL profile files that need checking  
find profiles/ -name "*.md"

# Check for specific file types in resumes directory
find resumes/ -name "*.md" | sort
find resumes/ -name "*.yaml" | sort
find resumes/ -name "*.json" | sort

# List all ATS files specifically
find resumes/ats/ -type f | sort

# List all specialized files specifically
find resumes/specialized/ -name "*.md" | sort

# Check specialized resume cover letter pairs
find resumes/specialized/ -name "*-cover-letter.md" | sort

# Find specialized resumes without matching cover letters
for resume in $(find resumes/specialized/ -name "*.md" ! -name "*-cover-letter.md"); do
  cover_letter="${resume%-*.md}-cover-letter.md"
  if [[ ! -f "$cover_letter" ]]; then
    echo "Missing cover letter: $cover_letter for resume: $resume"
  fi
done

# List all targeted files specifically
find resumes/targeted/ -name "*.md" | sort
```

## Quick Verification Commands
Use these to spot-check consistency across ALL discovered files:
```bash
# Check for position date consistency across ALL resume and profile files
# Replace [Current_Employer] and [Contract_Company] with values from SearchResults/Parameters/employment.md
find resumes/ profiles/ -name "*.md" -exec grep -l "[Current_Employer].*Present" {} \;
find resumes/ profiles/ -name "*.md" -exec grep -l "[Previous_Employer].*[Year]" {} \;

# Verify target job title consistency (should be Principal Solutions Architect in non-master files)
find resumes/ profiles/ -name "*.md" ! -name "master-resume.md" -exec grep -l "Principal Solutions Architect" {} \;
find resumes/ profiles/ -name "*.md" ! -name "master-resume.md" -exec grep -l "Fractional CTO" {} \; # Should be minimal

# Check quantitative language compliance across ALL markdown files
# Reference master-resume.md for current NuGet download count, then verify consistency
grep "NuGet.*downloads" resumes/master-resume.md  # Get current metric from master
find resumes/ profiles/ -name "*.md" -exec grep -l "NuGet.*downloads" {} \;  # Find all files with metric

# Verify Principal Solutions Architect positioning across files
find resumes/ profiles/ -name "*.md" -exec grep -l "Platform Architecture Excellence" {} \;

# Check for outdated package download numbers by comparing to master resume
# Master resume is authoritative - all other files should match its general format
```

## Success Criteria
✅ **Comprehensive File Coverage**: ALL .md, .yaml, .json files under ./resumes/ and ALL .md files under ./profiles/ reviewed and updated  
✅ **Master Resume Authority**: All content derives from `resumes/master-resume.md` as authoritative source  
✅ **Career Background Integration**: Professional positioning reflects `documentation/career-background.md` insights  
✅ **Position Information Consistency**: All documents show identical employment history and dates from master resume  
✅ **Achievement Accuracy**: All technical claims and metrics validated against master resume  
✅ **Principal Solutions Architect Focus**: All non-master files target Principal Solutions Architect exclusively  
✅ **Multi-Track Master Resume**: Master resume shows all target job titles (Principal Solutions Architect, Fractional CTO, Principal Solutions Architect & Crisis Resolution Specialist)  
✅ **ATS File Optimization**: All ATS files updated with current positioning and comprehensive keyword coverage  
✅ **Structured Format Currency**: YAML and JSON resume formats updated with current data  
✅ **Profile Document Consistency**: All profile documents reflect current Principal Solutions Architect positioning  
✅ **Specialized Resume Completeness**: All specialized resumes updated with current skills and positioning  
✅ **Specialized Cover Letter Completeness**: Each specialized resume has matching cover letter with role-specific positioning
✅ **Targeted Resume Currency**: All targeted application resumes consistent with current positioning
✅ **Style Guide Compliance**: General quantitative language in all presentation documents  
✅ **Master Resume Integrity**: Exact numbers preserved in master resume for validation  
✅ **Natural Communication**: Conversational, authentic tone throughout ecosystem

## Post-Update Validation
After completing updates, run comprehensive validation:

### 1. File Discovery Validation
```bash
# Verify all files were discovered and reviewed
find resumes/ -name "*.md" -o -name "*.yaml" -o -name "*.json" -o -name "*.txt" | wc -l
find profiles/ -name "*.md" | wc -l
```

### 2. Positioning Consistency Validation
```bash
# Verify Principal Solutions Architect is primary target (except master resume)
find resumes/ profiles/ -name "*.md" ! -name "master-resume.md" -exec grep -L "Principal Solutions Architect" {} \;  # Should return no results

# Verify master resume contains all target titles
grep -c "Principal Solutions Architect\|Fractional CTO\|Principal Platform Architect" resumes/master-resume.md  # Should be 3+
```

### 3. Spot-Check Random Files
1. Select 3-4 random files from different directories for manual review
2. Verify current position appears first in all chronological listings
3. Confirm contact information is current across all documents
4. Check quantitative language compliance (metrics match master resume)
5. Verify Platform Architecture Excellence positioning in core differentiators

### 4. Specialized Resume Cover Letter Validation
```bash
# Check that all specialized resumes have matching cover letters
for resume in $(find resumes/specialized/ -name "*.md" ! -name "*-cover-letter.md"); do
  cover_letter="${resume%-*.md}-cover-letter.md"
  if [[ ! -f "$cover_letter" ]]; then
    echo "MISSING: $cover_letter for resume: $resume"
  else
    echo "FOUND: Cover letter pair for $(basename $resume)"
  fi
done

# Count specialized resumes vs cover letters
resume_count=$(find resumes/specialized/ -name "*.md" ! -name "*-cover-letter.md" | wc -l)
cover_letter_count=$(find resumes/specialized/ -name "*-cover-letter.md" | wc -l)
echo "Specialized resumes: $resume_count, Cover letters: $cover_letter_count"
```

### 5. Comprehensive File Alignment Check
```bash
# Run the verification commands from the Quick Verification Commands section
# Document any files that need additional updates
```

---

**Usage Note:** This checklist should be executed systematically, using TodoWrite to track progress through each section. The goal is maintaining professional documentation ecosystem integrity across ALL files using comprehensive file discovery and validation. **CRITICAL:** Must check ALL .md, .yaml, .json files under ./resumes/ and ALL .md files under ./profiles/ - no file should be missed.

**Comprehensive File Coverage Requirements:**
- **Resume Files:** ALL .md, .yaml, .json, .txt files in resumes/ directory and subdirectories
- **Profile Files:** ALL .md files in profiles/ directory
- **Specialized Files:** ALL files in resumes/specialized/, resumes/ats/, resumes/targeted/, resumes/formats/
- **Validation:** Use file discovery commands to ensure no files are missed

**Critical Source Hierarchy:**
1. **Primary Authority:** `resumes/master-resume.md` - All professional experience, achievements, and technical claims (shows ALL target job titles)
2. **Positioning Context:** `documentation/career-background.md` - Professional identity, hidden expertise, multi-track capability  
3. **Style Guidelines:** `documentation/style-guide.md` - Language preferences and presentation approach
4. **Current Target:** Principal Solutions Architect for all non-master files (single title focus)
5. **Derivative Documents:** ALL other files must maintain fidelity to these sources while targeting Principal Solutions Architect exclusively