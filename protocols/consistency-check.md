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

### 1. Review Gold Standard Reference and Style Guidelines
- Read resumes/master-resume.md completely
- Read documentation/style-guide.md for language preferences
- Note current positions, dates, and key metrics
- Understand dual approach: exact numbers in master, general language in others
- Identify any new information that should be propagated

### 2. Check Core Resume Files for Consistency
Review each file against gold standard:
- [ ] `resumes/comprehensive.md`
- [ ] `resumes/abbreviated.md` 
- [ ] `resumes/extended.md`
- [ ] `resumes/ats/generic.txt`
- [ ] `resumes/ats/workday.md`
- [ ] `resumes/ats/leverco.md`

### 2a. Create/Update Specialized Single-Role Resumes
Create targeted resumes for each specific position type from master resume:

**Executive Technology Leadership Track:**
- [ ] `resumes/specialized/fractional-cto.md` - Fractional CTO positioning
- [ ] `resumes/specialized/chief-solutions-architect.md` - Chief Solutions Architect focus
- [ ] `resumes/specialized/enterprise-architect.md` - Enterprise Architect specialization

**Strategic Architecture Leadership Track:**
- [ ] `resumes/specialized/principal-solutions-architect.md` - Principal Solutions Architect focus
- [ ] `resumes/specialized/solution-architect.md` - Solution Architect positioning
- [ ] `resumes/specialized/ai-ml-principal.md` - AI/ML Principal specialization

**Each specialized resume should:**
- Focus exclusively on ONE job title
- Emphasize relevant experience and achievements for that specific role
- Use role-appropriate language and positioning
- Maintain master resume accuracy while targeting single position type

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
- [ ] `profiles/brief.md`
- [ ] `profiles/brief-personal.md`
- [ ] `profiles/executive-summary.md`
- [ ] `profiles/introduction.md`

**Key items to update:**
- Current position context in "What I'm Working On" sections
- Achievement metrics using consistent language
- Community statistics (downloads, reputation, etc.)
- Technical focus areas and innovations
- **Style alignment**: Apply general quantitative language per style guide
- **Natural language**: Use conversational terms (600+ solutions, 22K+ reputation)

### 5. Verify Position Information Consistency
Ensure across ALL documents:
- **Current Position:** Appears first chronologically
- **Recent Positions:** Proper end dates and ordering
- **Achievement Language:** Conservative, professional tone
- **Technical Claims:** All validated and consistent

### 6. Update Documentation
- [ ] Add entry to `../documentation/change-history-YYYYMMDD.md` (use current date) with changes made
- [ ] Update `../CLAUDE.md` with session summary and current status
- [ ] Note any new information learned for future gold standard updates

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
✅ All resume files show identical position information and dates  
✅ Brief/summary documents reflect current professional context  
✅ Achievement language is consistent and professionally conservative  
✅ Technical claims align across all formats  
✅ Documentation files updated with changes made  
✅ No outdated or conflicting information exists  
✅ **Style guide compliance**: General quantitative language in all presentation documents  
✅ **Master resume integrity**: Exact numbers preserved for validation  
✅ **Natural communication**: Conversational, authentic tone throughout

## Post-Update Validation
After completing updates:
1. Spot-check 3-4 random files for consistency
2. Verify current position appears first in all chronological listings
3. Confirm contact information is current across all documents
4. Review any custom/specialized resumes for alignment

---

**Usage Note:** This checklist should be executed systematically, using TodoWrite to track progress through each section. The goal is maintaining the professional documentation ecosystem's integrity and accuracy across all 15+ files.