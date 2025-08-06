# Repository Restructure Implementation Plan

## Overview
Complete restructure of professional resume repository to modern git structure while preserving all protocol functionality and memory commands.

## Target Directory Structure
```
/
├── README.md                          # Main table of contents
├── resumes/
│   ├── master-resume.md              # Gold standard (was ZZ_*-GoldStandard.md)
│   ├── comprehensive.md              # Main resume
│   ├── abbreviated.md                # Short version  
│   ├── extended.md                   # Detailed version
│   ├── ats/
│   │   ├── generic.txt              # ATS plain text
│   │   ├── workday.md               # Workday-specific
│   │   └── leverco.md               # Lever.co-specific
│   ├── specialized/
│   │   └── ai-ml-principal.md       # AI/ML role-specific
│   └── formats/
│       ├── fresh-schema.yaml        # FRESH format
│       └── json-resume.json         # JSON Resume standard
├── profiles/
│   ├── executive-summary.md          # Professional summary
│   ├── introduction.md               # First-person intro
│   ├── brief.md                      # Executive brief
│   ├── brief-personal.md             # First-person brief
│   └── cover-letter.md               # Template
├── protocols/                        # Protocol files preserved
│   ├── career-review.md              # Career coaching protocol
│   ├── career-development.md         # Career path tracking
│   ├── consistency-check.md          # Update all protocol
│   ├── readme-maintenance.md         # TOC update protocol
│   └── portfolio-strategy.md         # Project write-up guidance
├── analysis/
│   ├── technical-review.md           # Code validation
│   ├── stackoverflow-metrics.md     # Community contributions
│   └── profile-validation.md        # Link analysis
├── documentation/
│   ├── change-history.md             # Change tracking
│   └── session-notes.md              # Claude memory
└── .github/
    └── workflows/                    # Future automation potential
```

---

## PHASE 1: Create Directory Structure
- [ ] 1.1: Create main directories: `resumes/`, `profiles/`, `protocols/`, `analysis/`, `documentation/`
- [ ] 1.2: Create resume subdirectories: `resumes/ats/`, `resumes/specialized/`, `resumes/formats/`
- [ ] 1.3: Create `.github/workflows/` for future automation
- [ ] 1.4: Verify all directories created successfully

---

## PHASE 2: Move Content Files (Low Risk)

### Resume Files
- [ ] 2.1: Move `ZZ_MatthewWhited-Resume-GoldStandard.md` → `resumes/master-resume.md`
- [ ] 2.2: Move `MatthewWhited-Resume.md` → `resumes/comprehensive.md`
- [ ] 2.3: Move `MatthewWhited-ResumeAbbreviated.md` → `resumes/abbreviated.md`
- [ ] 2.4: Move `MatthewWhited-ResumeExtended.md` → `resumes/extended.md`
- [ ] 2.5: Move `MatthewWhited-ResumeATS.txt` → `resumes/ats/generic.txt`
- [ ] 2.6: Move `MatthewWhited-Resume-ATS-workday.md` → `resumes/ats/workday.md`
- [ ] 2.7: Move `MatthewWhited-Resume-ATS-leverco.md` → `resumes/ats/leverco.md`
- [ ] 2.8: Move `MatthewWhited-Resume-PrincipalArchitectAI-ML.md` → `resumes/specialized/ai-ml-principal.md`
- [ ] 2.9: Move `ZZ_MatthewWhited-Resume-FRESH.yaml` → `resumes/formats/fresh-schema.yaml`
- [ ] 2.10: Move `ZZ_MatthewWhited-Resume-JsonResume.json` → `resumes/formats/json-resume.json`

### Profile Files
- [ ] 2.11: Move `AAB_MatthewWhited-Summary.md` → `profiles/executive-summary.md`
- [ ] 2.12: Move `AAB_MatthewWhited-FirstPerson.md` → `profiles/introduction.md`
- [ ] 2.13: Move `_MatthewWhited-Brief.md` → `profiles/brief.md`
- [ ] 2.14: Move `_MatthewWhited-Brief-FirstPerson.md` → `profiles/brief-personal.md`
- [ ] 2.15: Move `ZA_MatthewWhited-CoverLetter.md` → `profiles/cover-letter.md`

### Update README.md
- [ ] 2.16: Update all file links in README.md to new relative paths
- [ ] 2.17: Verify all README.md links point to existing files

---

## PHASE 3: Move Protocol Files (HIGH RISK - Critical Path)

⚠️ **CRITICAL: Test each protocol after moving and updating**

### Move Protocol Files
- [ ] 3.1: Move `tools/CAREER_COACH.md` → `protocols/career-review.md`
- [ ] 3.2: Move `tools/CAREER_PATH.md` → `protocols/career-development.md`
- [ ] 3.3: Move `tools/UPDATE_ALL.md` → `protocols/consistency-check.md`
- [ ] 3.4: Move `tools/UPDATE_TOC.md` → `protocols/readme-maintenance.md`
- [ ] 3.5: Move `tools/WRITE_UP.md` → `protocols/portfolio-strategy.md`

### Update Protocol Cross-References
- [ ] 3.6: Update `protocols/career-review.md` - change `CAREER_PATH.md` → `career-development.md`
- [ ] 3.7: Update `protocols/consistency-check.md` - change `CHANGE_HISTORY.md` → `documentation/change-history.md`
- [ ] 3.8: Update `protocols/consistency-check.md` - change `../CLAUDE.md` → `../documentation/session-notes.md`
- [ ] 3.9: Update `protocols/readme-maintenance.md` - change `../CLAUDE.md` → `../documentation/session-notes.md`

### Update Memory Commands (CRITICAL)
- [ ] 3.10: Update CLAUDE.md - change `read tools/UPDATE_ALL.md` → `read protocols/consistency-check.md`
- [ ] 3.11: Update CLAUDE.md - change `read tools/UPDATE_TOC.md` → `read protocols/readme-maintenance.md`
- [ ] 3.12: Update all other protocol references in CLAUDE.md

---

## PHASE 4: Move Analysis & Documentation Files

### Analysis Files
- [ ] 4.1: Move `tools/CODE_REVIEW.md` → `analysis/technical-review.md`
- [ ] 4.2: Move `tools/STACK_OVERFLOW.md` → `analysis/stackoverflow-metrics.md`
- [ ] 4.3: Move `tools/SEARCH_HISTORY.md` → `analysis/profile-validation.md`

### Documentation Files  
- [ ] 4.4: Move `tools/CHANGE_HISTORY.md` → `documentation/change-history.md`
- [ ] 4.5: Move `CLAUDE.md` → `documentation/session-notes.md`

### Update References
- [ ] 4.6: Update CLAUDE.md references to analysis files
- [ ] 4.7: Update protocol files that reference analysis files
- [ ] 4.8: Remove empty `tools/` directory

---

## PHASE 5: Validation and Testing

### Path Validation
- [ ] 5.1: Verify all relative paths in README.md work correctly
- [ ] 5.2: Test that all files exist at their new locations
- [ ] 5.3: Check for any broken internal references

### Protocol Testing
- [ ] 5.4: Test career-review protocol functionality
- [ ] 5.5: Test consistency-check protocol functionality  
- [ ] 5.6: Test readme-maintenance protocol functionality
- [ ] 5.7: Verify memory commands work with new paths

### Final Updates
- [ ] 5.8: Update documentation/session-notes.md with new structure information
- [ ] 5.9: Update documentation/change-history.md with restructure details
- [ ] 5.10: Clean up any remaining references to old paths

---

## PHASE 6: Protocol Dependency Validation

### Memory Commands
- [ ] 6.1: Test "make sure everything is up to date" command
- [ ] 6.2: Test "update the TOC" command  
- [ ] 6.3: Verify all protocol cross-references work

### Protocol Functionality
- [ ] 6.4: Validate career coaching workflow
- [ ] 6.5: Validate consistency checking workflow
- [ ] 6.6: Validate README maintenance workflow
- [ ] 6.7: Validate portfolio strategy workflow

---

## PHASE 7: Memory Update

### Session Notes Update
- [ ] 7.1: Update memory with new repository structure
- [ ] 7.2: Update protocol command references
- [ ] 7.3: Update file reference mapping
- [ ] 7.4: Document successful restructure completion

---

## Risk Mitigation Checkpoints

**After Phase 2:** Verify content files moved successfully
**After Phase 3:** ⚠️ **CRITICAL CHECKPOINT** - Test all protocol functionality
**After Phase 4:** Verify no broken references remain
**After Phase 5:** Complete system validation
**After Phase 6:** Protocol dependency confirmation
**After Phase 7:** Final memory synchronization

---

## Success Criteria
✅ All files successfully moved to new structure
✅ All relative paths work correctly  
✅ All protocol functionality preserved
✅ Memory commands function with new paths
✅ Professional git repository structure achieved
✅ No broken references or dependencies