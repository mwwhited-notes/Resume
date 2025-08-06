# Resume Consistency Update Checklist

## Purpose
This document provides a systematic approach to ensure all resume files remain consistent with the gold standard (ZZ_MatthewWhited-Resume-GoldStandard.md) and contain current, accurate information.

## When to Use This Checklist
- After any changes to professional experience or positions
- When updating technical achievements or metrics
- Before important job applications or networking events
- Quarterly maintenance reviews
- After discovering any inconsistencies between documents

## Step-by-Step Update Process

### 1. Review Gold Standard Reference
- Read ZZ_MatthewWhited-Resume-GoldStandard.md completely
- Note current positions, dates, and key metrics
- Identify any new information that should be propagated

### 2. Check Core Resume Files for Consistency
Review each file against gold standard:
- [ ] `MatthewWhited-Resume.md`
- [ ] `MatthewWhited-ResumeAbbreviated.md` 
- [ ] `MatthewWhited-ResumeExtended.md`
- [ ] `MatthewWhited-ResumeATS.txt`
- [ ] `MatthewWhited-Resume-ATS-workday.md`
- [ ] `MatthewWhited-Resume-ATS-leverco.md`
- [ ] `MatthewWhited-Resume-PrincipalArchitectAI-ML.md`

**Key items to verify:**
- Position chronological ordering (most recent first)
- Accurate start/end dates for all positions
- Consistent job titles and company names
- Aligned achievement language and metrics
- Current contact information

### 3. Check Structured Resume Formats
- [ ] `ZZ_MatthewWhited-Resume-FRESH.yaml`
- [ ] `ZZ_MatthewWhited-Resume-JsonResume.json`

**Verify:**
- Date formatting consistency
- Position ordering matches gold standard
- Technical skills alignment

### 4. Update Brief and Summary Documents
- [ ] `_MatthewWhited-Brief.md`
- [ ] `_MatthewWhited-Brief-FirstPerson.md`
- [ ] `AAB_MatthewWhited-Summary.md`
- [ ] `AAB_MatthewWhited-FirstPerson.md`

**Key items to update:**
- Current position context in "What I'm Working On" sections
- Achievement metrics using consistent language
- Community statistics (downloads, reputation, etc.)
- Technical focus areas and innovations

### 5. Verify Position Information Consistency
Ensure across ALL documents:
- **Current Position:** Appears first chronologically
- **Recent Positions:** Proper end dates and ordering
- **Achievement Language:** Conservative, professional tone
- **Technical Claims:** All validated and consistent

### 6. Update Documentation
- [ ] Add entry to `../documentation/change-history.md` with date and changes made
- [ ] Update `../documentation/session-notes.md` with session summary and current status
- [ ] Note any new information learned for future gold standard updates

## Common Issues to Watch For
- **Position Ordering:** Current position should appear first
- **Date Accuracy:** Ensure all start/end dates are correct
- **Metric Consistency:** Use "substantial" instead of specific percentages
- **Missing Positions:** New roles should appear in all relevant documents
- **Technical Currency:** Skills and achievements should reflect latest work

## Quick Verification Commands
Use these to spot-check consistency:
```bash
# Check for position date consistency
grep -r "ERisk.*2025" *.md
grep -r "Green Onion.*Present" *.md

# Verify metric language consistency  
grep -r "75%" *.md  # Should return minimal results
grep -r "substantial" *.md  # Should be primary language
```

## Success Criteria
✅ All resume files show identical position information and dates  
✅ Brief/summary documents reflect current professional context  
✅ Achievement language is consistent and professionally conservative  
✅ Technical claims align across all formats  
✅ Documentation files updated with changes made  
✅ No outdated or conflicting information exists

## Post-Update Validation
After completing updates:
1. Spot-check 3-4 random files for consistency
2. Verify current position appears first in all chronological listings
3. Confirm contact information is current across all documents
4. Review any custom/specialized resumes for alignment

---

**Usage Note:** This checklist should be executed systematically, using TodoWrite to track progress through each section. The goal is maintaining the professional documentation ecosystem's integrity and accuracy across all 15+ files.