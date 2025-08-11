# Self-Audit Protocol

## Purpose
This protocol systematically evaluates Matthew Whited's online professional presence by researching all linked profiles and repositories from the master resume, identifying gaps between documented achievements and actual online evidence, and recommending resume enhancements to better reflect demonstrated technical abilities and professional experience.

## Trigger Commands
Execute this protocol when the user requests:
- "audit my online presence"
- "check what's missing from my resume"
- "search on me" or "do a search on me"
- "validate my professional claims"
- "find what I'm not highlighting in my resume"

## Protocol Steps

### Phase 1: Initialize Audit (TodoWrite Required)
Create todo list with these tasks:
1. Extract all profile links and references from master resume
2. Research each online profile and repository systematically
3. Analyze technical achievements and contributions not documented in resume
4. Identify professional experience gaps and missing accomplishments
5. Generate comprehensive findings report with enhancement recommendations
6. Create summary of key missing elements for immediate resume updates

### Phase 2: Profile Link Extraction

#### Read Master Resume
**Source File:** `resumes/master-resume.md` (gold standard)

#### Extract All External References
Document the following categories:
- **Professional Profiles:** LinkedIn, Stack Overflow, GitHub, etc.
- **Code Repositories:** Individual GitHub repositories and projects
- **Package Registries:** NuGet packages, NPM packages
- **Professional Websites:** Personal sites, portfolio pages
- **Community Contributions:** Blog posts, articles, speaking engagements
- **Certifications/Credentials:** Professional certifications and validations

#### Create Reference Inventory
**Output File:** `./SearchResults/Portfolio/profile-inventory_{YYYYMMDD}.md`
Format each reference with:
- URL and platform type
- Current resume description/mention
- Expected content type
- Research priority (High/Medium/Low)

### Phase 3: Systematic Online Research

#### Research Methodology
For each extracted reference, execute comprehensive analysis:

**WebSearch/WebFetch Process:**
1. **Direct Profile Analysis**
   ```
   WebFetch: [profile_url] "Analyze technical achievements, projects, metrics, contributions, and professional activities"
   ```

2. **Repository Deep Dive** (for GitHub repos)
   ```
   WebFetch: [repo_url] "Summarize project purpose, technical complexity, innovation level, commit activity, and documentation quality"
   ```

3. **Package Analysis** (for NuGet/NPM)
   ```
   WebFetch: [package_url] "Extract download statistics, usage metrics, technical description, and dependency information"
   ```

4. **Community Contribution Assessment**
   ```
   WebFetch: [profile_url] "Document reputation metrics, answer quality, expertise areas, and community impact"
   ```

#### Documentation Requirements
**Output Files:** `./SearchResults/Portfolio/[platform-name]_analysis_{YYYYMMDD}.md`

**Required Analysis Sections:**
1. **Platform Overview** - Type and professional relevance
2. **Quantifiable Metrics** - Downloads, reputation, contributions, reach
3. **Technical Content Analysis** - Projects, technologies, complexity levels
4. **Professional Activities** - Leadership, mentoring, community involvement
5. **Innovation Evidence** - Unique solutions, thought leadership, cutting-edge work
6. **Resume Gap Analysis** - What's online but not documented in resume
7. **Enhancement Opportunities** - Specific additions that would strengthen resume

### Phase 4: Cross-Reference Analysis

#### Compare Resume Claims vs. Online Evidence
**Process:**
1. **Verification Check** - Validate all resume claims against online evidence
2. **Completeness Assessment** - Identify achievements present online but missing from resume
3. **Quantification Opportunities** - Find specific metrics not currently highlighted
4. **Technical Depth Analysis** - Discover technical capabilities not adequately represented

#### Gap Categories
- **Missing Projects** - Significant repositories or contributions not mentioned
- **Understated Achievements** - Accomplishments minimized in current resume
- **Quantifiable Metrics** - Download counts, community reach, contribution volumes not included
- **Technical Innovations** - Unique solutions or approaches not highlighted
- **Leadership Evidence** - Community influence, mentorship, knowledge sharing not documented
- **Professional Recognition** - Awards, badges, certifications not emphasized

### Phase 5: Findings Compilation

#### Create Comprehensive Report
**Output File:** `./SearchResults/Portfolio/comprehensive-findings_{YYYYMMDD}.md`

**Required Sections:**

```markdown
# Professional Self-Audit Findings
**Audit Date:** [Current Date]  
**Scope:** Complete online presence analysis and resume gap assessment

---

## Executive Summary
[3-4 sentence overview of key findings and opportunities]

---

## Profile Analysis Summary

### [Platform Name]
**URL:** [profile_url]  
**Current Resume Reference:** [how it's currently mentioned]  
**Key Findings:**
- [Quantifiable metrics and achievements]
- [Technical contributions not highlighted]
- [Professional activities not documented]

**Resume Enhancement Opportunities:**
- [Specific additions recommended]
- [Metric updates suggested]
- [Technical depth improvements]

---

## Gap Analysis

### Missing Technical Achievements
- [Technical projects/innovations not in resume]
- [Programming languages/technologies understated]
- [Architecture decisions and outcomes not documented]

### Understated Professional Impact
- [Community contributions minimized]
- [Leadership activities not highlighted]
- [Mentorship and knowledge sharing not emphasized]

### Quantification Opportunities
- [Specific metrics that could be added]
- [Download statistics and reach numbers]
- [Community reputation and influence scores]

---

## Priority Recommendations

### High Priority (Immediate Resume Updates)
1. [Most significant missing achievement]
2. [Critical quantification opportunity]
3. [Major technical capability not represented]

### Medium Priority (Next Resume Revision)
1. [Important but secondary additions]
2. [Professional activities to highlight]
3. [Technical depth improvements]

### Low Priority (Future Consideration)
1. [Minor enhancements]
2. [Emerging capabilities to develop]
3. [Long-term positioning opportunities]

---

## Specific Resume Enhancements

### Professional Summary Updates
- [Suggested additions to summary section]

### Technical Skills Additions
- [Technologies/frameworks to add]
- [Specializations to emphasize]

### Experience Section Improvements
- [Quantified achievements to add]
- [Technical innovations to highlight]

### Projects Section Enhancements
- [Missing projects to include]
- [Project descriptions to expand]

---

**Analysis Confidence:** [High/Medium/Low]  
**Sources Analyzed:** [Number of profiles/repositories researched]  
**Update Frequency:** [Recommended review schedule]
```

#### Create Quick-Reference Summary
**Output File:** `./SearchResults/Portfolio/missing-elements-summary_{YYYYMMDD}.md`

**Format:**
- **Top 5 Missing Achievements** - Ranked by impact potential
- **Top 3 Quantification Opportunities** - Specific metrics to add
- **Technical Capabilities Underrepresented** - Skills not adequately highlighted
- **Immediate Action Items** - Changes to make in next resume update

### Phase 6: Task Management
- Mark each research phase as completed immediately after finishing
- Update todo status in real-time
- Only mark comprehensive report as completed after all files are written
- Track progress through each profile/repository systematically

### Phase 7: Response Format
Provide executive summary focusing on:
- **Most significant gaps** (3-5 key findings)
- **Immediate opportunities** (specific resume additions)
- **Strategic positioning** (how changes improve competitive advantage)
- **Next steps** (prioritized action plan)

## Quality Standards
- **Comprehensive:** Cover all linked profiles and significant online presence
- **Evidence-Based:** All recommendations supported by specific online findings
- **Actionable:** Provide specific resume text suggestions where possible
- **Strategic:** Focus on enhancements that improve competitive positioning
- **Current:** Use most recent online data and activity

## File Organization
**Directory:** `./SearchResults/Portfolio/`
**Naming Convention:** 
- Profile analyses: `[platform-name]_analysis_{YYYYMMDD}.md`
- Comprehensive report: `comprehensive-findings_{YYYYMMDD}.md`
- Quick reference: `missing-elements-summary_{YYYYMMDD}.md`
- Profile inventory: `profile-inventory_{YYYYMMDD}.md`

## Success Criteria
- Complete analysis of all resume-linked profiles and repositories
- Identification of significant achievements missing from current resume
- Specific, actionable recommendations for resume enhancement
- Quantifiable metrics and evidence to support all recommendations
- Strategic assessment of how changes improve market positioning

## Maintenance Schedule
- **Quarterly:** Quick audit for new achievements and contributions
- **Semi-Annual:** Comprehensive review following this full protocol
- **Annual:** Complete online presence assessment with market positioning analysis

---

**Protocol Version:** 1.0  
**Created:** August 10, 2025  
**Last Updated:** August 10, 2025  
**Next Review:** November 10, 2025