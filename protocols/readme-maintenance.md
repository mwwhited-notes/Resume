# Table of Contents Update Protocol

## Critical Instructions - ALWAYS FOLLOW

When user says "update the TOC" or "Table of Contents" OR when you realize TOC needs updating:

### MANDATORY PROTOCOL STEPS

1. **Read the Current TOC**
   ```
   Read /current/src/README.md
   ```

2. **Scan All Files for Changes**
   ```bash
   # Get list of all current files
   ls /current/src/ | grep -E "\.(md|txt|yaml|json)$"
   ```

3. **Identify Missing or Changed Files**
   - Compare current file list with TOC entries
   - Check for new files that need README entries (EXCLUDE internal directories: protocols/, analysis/, documentation/, SearchResults/, resumes/targeted/ - these are internal maintenance only)
   - Check for renamed/deleted files that need TOC updates
   - Verify all file descriptions are accurate

4. **Update File Counts and Metadata**
   - Count total professional documents
   - Update "Last Updated" date to current date
   - Verify validation status reflects current state
   - Update professional identity if changed

5. **Apply Gist URL Prefix to ALL Local Links**
   - **CRITICAL:** All local file links MUST use gist prefix
   - Format: `https://gist.github.com/mwwhited/a40bb3f3069cee86bedfdeccd4aff872#file-[filename]`
   - Convert filename to lowercase and replace periods with hyphens
   - Examples:
     - `resumes/comprehensive.md` → `./resumes/comprehensive.md`
     - `profiles/brief.md` → `./profiles/brief.md`
     - `resumes/master-resume.md` → `./resumes/master-resume.md`

6. **Verify Link Format Consistency**
   ```bash
   # Check for any remaining local links (should return no matches)
   grep -n "\]\([^\.]" /current/src/README.md
   ```

7. **Update Documentation Status**
   - Document changes in ../documentation/change-history-YYYYMMDD.md (use current date)
   - Update memory in ../CLAUDE.md if significant changes
   - Use TodoWrite to track progress through all steps

## File Naming Convention for Gist URLs

**Rule:** Convert filename to all lowercase, replace all periods with hyphens
- Keep underscores as underscores
- Keep regular hyphens as hyphens
- Only periods become hyphens

**Examples:**
- `MatthewWhited-Resume.md` → `matthewwhited-resume-md`
- `ZZ_MatthewWhited-Resume-FRESH.yaml` → `zz_matthewwhited-resume-fresh-yaml`
- `_MatthewWhited-Brief-FirstPerson.md` → `_matthewwhited-brief-firstperson-md`

## Quality Assurance Checklist

- [ ] All local file links use gist URL prefix
- [ ] File count matches actual file count
- [ ] Last updated date is current
- [ ] New files are properly categorized
- [ ] Removed files are deleted from TOC
- [ ] All descriptions are accurate and current
- [ ] External links (GitHub, etc.) remain unchanged
- [ ] Professional status reflects current positioning

## Common Triggers for TOC Updates

- New resume format created
- File renamed or deleted
- New documentation files added
- Professional positioning changes
- After major resume updates
- User explicitly requests TOC update

## CRITICAL REMINDER

**NEVER skip the gist URL prefix step.** All local links MUST work with the gist hosting. This is essential for the TOC to function as intended for external viewers.

## Emergency Protocol

If you encounter any issues:
1. Stop and read this file again
2. Follow each step systematically
3. Use TodoWrite to track your progress
4. Document any problems in ../CLAUDE.md
5. Ask user for clarification if needed

## Files and Directories to EXCLUDE from README/TOC

**ALWAYS EXCLUDE these from professional document listings:**
- `protocols/` - Internal workflow and process files
- `analysis/` - Technical validation and metrics (internal use)
- `documentation/` - Change history and session notes (internal)
- `SearchResults/` - Job search analysis and market research (internal)
- `CLAUDE.md` - Session memory file (internal)
- `.github/` - Repository automation (internal)

**Only include in README/TOC:**
- `resumes/` - All resume variants and formats
- `profiles/` - Supporting professional documents (briefs, summaries, cover letters)

**This protocol ensures the TOC remains accurate, functional, and focused on professional documents only.**