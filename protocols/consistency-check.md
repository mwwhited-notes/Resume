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

### 2. Check Core Resume Files for Consistency
Review each file against master resume and career background:

**Core Resume Variants:**
- [ ] `resumes/comprehensive.md` - Full professional history with master resume accuracy
- [ ] `resumes/abbreviated.md` - Condensed version maintaining key achievements from master
- [ ] `resumes/extended.md` - Expanded format incorporating career background insights
- [ ] `resumes/ats/generic.txt` - ATS-optimized using master resume as source
- [ ] `resumes/ats/workday.md` - Workday system format with master resume data
- [ ] `resumes/ats/leverco.md` - Lever.co format using authoritative master content

**Consistency Requirements:**
- All professional experience must derive from master resume
- Career background insights should inform positioning and emphasis
- Technical achievements must maintain master resume accuracy
- Professional identity should reflect career background positioning
- Quantitative language follows style guide (general terms in presentation documents)

### 2a. Create/Update Specialized Single-Role Resumes
Create targeted resumes for each specific position type using master resume as authoritative source and career background for positioning insights:

**Executive Technology Leadership Track:**
- [ ] `resumes/specialized/fractional-cto.md` - Fractional CTO positioning with career background crisis resolution expertise
- [ ] `resumes/specialized/chief-solutions-architect.md` - Chief Solutions Architect focus emphasizing enterprise architecture mastery
- [ ] `resumes/specialized/enterprise-architect.md` - Enterprise Architect specialization highlighting Centers of Excellence leadership
- [ ] `resumes/specialized/vp-engineering.md` - VP Engineering positioning with technical leadership emphasis

**Strategic Architecture Leadership Track:**
- [ ] `resumes/specialized/principal-solutions-architect.md` - Principal Solutions Architect focus with AI/ML innovation leadership
- [ ] `resumes/specialized/solution-architect.md` - Solution Architect positioning emphasizing framework development
- [ ] `resumes/specialized/ai-ml-principal.md` - AI/ML Principal specialization highlighting custom algorithm development
- [ ] `resumes/specialized/staff-engineer.md` - Staff Engineer positioning with technical authority emphasis

**Crisis Resolution & Specialized Roles Track:**
- [ ] `resumes/specialized/technical-consultant.md` - Technology Consultant positioning with vendor-neutral advisory approach
- [ ] `resumes/specialized/performance-engineer.md` - Performance Engineering focus with optimization achievements
- [ ] `resumes/specialized/platform-architect.md` - Platform Architect positioning with DevOps and infrastructure expertise

**Source Requirements for Each Specialized Resume:**
- **Primary Source:** All content must derive from `resumes/master-resume.md` as authoritative reference
- **Positioning Context:** Use `documentation/career-background.md` for role-specific emphasis and hidden expertise
- **Technical Accuracy:** Maintain exact technical claims and achievement metrics from master resume
- **Professional Identity:** Adapt multi-track positioning from career background to single-role focus
- **Work History:** Complete employment chronology from master resume with role-relevant emphasis
- **Quantitative Language:** Follow style guide for presentation (general terms) vs. master (exact numbers)

**Key items to verify:**
- Position chronological ordering (most recent first)
- Accurate start/end dates for all positions
- Consistent job titles and company names
- Aligned achievement language and metrics
- Current contact information
- **Style compliance**: General quantitative language (650K+ not 652,868+)
- **Language consistency**: Natural, conversational terms vs. exact precision

### 3. Check Structured Resume Formats
- [ ] `ZZ_MatthewWhited-Resume-FRESH.yaml`
- [ ] `ZZ_MatthewWhited-Resume-JsonResume.json`

**Verify:**
- Date formatting consistency
- Position ordering matches gold standard
- Technical skills alignment

### 4. Update Brief and Summary Documents
Update all profile documents using master resume as authoritative source and career background for positioning:

**Profile Documents:**
- [ ] `profiles/brief.md` - Brief professional summary with master resume accuracy
- [ ] `profiles/brief-personal.md` - Personal brief incorporating career background insights
- [ ] `profiles/executive-summary.md` - Executive positioning using career background strategic context
- [ ] `profiles/introduction.md` - Professional introduction with master resume achievements

**Source-Based Update Requirements:**
- **Master Resume Integration:** All achievements, metrics, and professional history must derive from master resume
- **Career Background Positioning:** Professional identity and strategic positioning should reflect career background insights
- **Current Position Context:** Update "What I'm Working On" sections with latest information from master resume
- **Achievement Metrics:** Use master resume as source, apply style guide language (general terms for presentation)
- **Community Statistics:** NuGet downloads, Stack Overflow reputation, GitHub achievements from master resume
- **Technical Focus Areas:** AI/ML innovations, enterprise architecture, framework development from master resume
- **Hidden Expertise Integration:** Incorporate career background revelations (crisis resolution, vendor-neutral advisory, etc.)
- **Multi-Track Capability:** Reflect executive vs. strategic architecture positioning from career background
- **Style Alignment:** Apply general quantitative language per style guide (650K+ not 652,868+)
- **Natural Language:** Use conversational terms maintaining master resume accuracy

### 5. Verify Position Information Consistency
Ensure across ALL documents using master resume as authoritative source:

**Employment History Verification:**
- **Current Position:** Green Onion (February 2025 - Present) appears first chronologically per master resume
- **Recent Positions:** ERisk Services, Eliassen Group dates and details match master resume exactly
- **Complete Work History:** All positions from master resume properly represented with accurate dates
- **Out-of-Band Development:** Independent consulting (March 2015 - Present) properly positioned per master resume
- **Achievement Language:** Conservative, professional tone maintaining master resume accuracy
- **Technical Claims:** All validated against master resume technical innovation portfolio
- **Career Background Integration:** Position descriptions enhanced with career background context where appropriate
- **Multi-Track Positioning:** Each document reflects appropriate positioning (executive vs. strategic) from career background

### 6. Update Documentation
- [ ] Add entry to `../documentation/change-history-YYYYMMDD.md` (use current date) with changes made
- [ ] Update `../CLAUDE.md` with session summary and current status
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

## Quick Verification Commands
Use these to spot-check consistency:
```bash
# Check for position date consistency
grep -r "ERisk.*2025" *.md
grep -r "Green Onion.*Present" *.md

# Verify metric language consistency  
grep -r "75%" *.md  # Should return minimal results
grep -r "substantial" *.md  # Should be primary language

# Check quantitative language compliance (presentation docs should use general terms)
grep -r "652,868" *.md  # Should only appear in master-resume.md
grep -r "650K" *.md     # Should appear in presentation documents
grep -r "22,433" *.md   # Should only appear in master-resume.md
grep -r "22K" *.md      # Should appear in presentation documents

# Verify style guide compliance
grep -r "numerous teams" *.md      # Should replace "10-15 teams"
grep -r "extensive.*work items" *.md  # Should replace exact counts
```

## Success Criteria
✅ **Master Resume Authority**: All content derives from `resumes/master-resume.md` as authoritative source  
✅ **Career Background Integration**: Professional positioning reflects `documentation/career-background.md` insights  
✅ **Position Information Consistency**: All documents show identical employment history and dates from master resume  
✅ **Achievement Accuracy**: All technical claims and metrics validated against master resume  
✅ **Multi-Track Positioning**: Documents reflect appropriate executive vs. strategic positioning from career background  
✅ **Brief/Summary Currency**: Profile documents reflect current professional context from master resume  
✅ **Specialized Resume Completeness**: Single-role resumes created using master resume as source  
✅ **Documentation Updates**: Change history and CLAUDE.md updated with session details  
✅ **Style Guide Compliance**: General quantitative language in all presentation documents  
✅ **Master Resume Integrity**: Exact numbers preserved in master resume for validation  
✅ **Natural Communication**: Conversational, authentic tone throughout ecosystem

## Post-Update Validation
After completing updates:
1. Spot-check 3-4 random files for consistency
2. Verify current position appears first in all chronological listings
3. Confirm contact information is current across all documents
4. Review any custom/specialized resumes for alignment

---

**Usage Note:** This checklist should be executed systematically, using TodoWrite to track progress through each section. The goal is maintaining professional documentation ecosystem integrity using `resumes/master-resume.md` as the authoritative source and `documentation/career-background.md` for positioning insights across all 25+ professional documents.

**Critical Source Hierarchy:**
1. **Primary Authority:** `resumes/master-resume.md` - All professional experience, achievements, and technical claims
2. **Positioning Context:** `documentation/career-background.md` - Professional identity, hidden expertise, multi-track capability  
3. **Style Guidelines:** `documentation/style-guide.md` - Language preferences and presentation approach
4. **Derivative Documents:** All other resumes, profiles, and summaries must maintain fidelity to these sources