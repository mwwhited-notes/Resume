# Master Resume Builder Protocol

## Purpose
Build a comprehensive master resume for any professional through structured intake and targeted interview questions. This protocol starts with the candidate's existing resume(s) and systematically gathers additional information through field-specific questions to create a complete master resume document.

**This protocol is designed to be reusable for any candidate.** All questions and structure adapt based on the candidate's field, experience level, and career focus.

## Trigger Commands
Execute this protocol when:
- "build a master resume for me"
- "help me create a master resume"
- "I need a comprehensive resume"
- "interview me to build my resume"

---

## Phase 1: Initial Resume Intake

### Step 1.1: Request Existing Resume(s)
Ask the candidate to provide their existing resume(s):

**Prompt:**
> "Please share your current resume(s). You can:
> - Paste the text directly
> - Provide a file path to read
> - Share multiple versions if you have them
>
> I'll analyze what you have and then ask targeted questions to fill in gaps and build a comprehensive master resume."

### Step 1.2: Analyze Provided Resume(s)
For each resume provided:

1. **Extract Basic Information**
   - Name and contact information
   - Current/most recent position
   - Years of experience (calculate from work history)
   - Primary industry/field

2. **Identify Professional Category**
   Based on the resume, classify the candidate into one or more categories:

   | Category | Indicators |
   |:---------|:-----------|
   | Technology/Engineering | Software, IT, engineering roles, technical skills |
   | Executive/Leadership | C-suite, VP, Director titles, P&L responsibility |
   | Healthcare | Medical, clinical, healthcare administration |
   | Finance/Accounting | Financial roles, CPA, banking, investment |
   | Sales/Marketing | Revenue roles, marketing, business development |
   | Operations/Manufacturing | Supply chain, logistics, production |
   | Creative/Design | Design, creative, media roles |
   | Education/Research | Academic, research, training roles |
   | Legal/Compliance | Legal, regulatory, compliance roles |
   | Other/Generalist | Mixed or non-specific background |

3. **Identify Gaps and Missing Information**
   Check for presence of:
   - [ ] Complete work history with dates
   - [ ] Quantified achievements with metrics
   - [ ] Technical skills/competencies
   - [ ] Education and certifications
   - [ ] Leadership experience
   - [ ] Community/volunteer contributions
   - [ ] Publications/speaking/thought leadership
   - [ ] Professional affiliations

4. **Note Field-Specific Elements Missing**
   Based on the category, identify field-specific elements to explore.

---

## Phase 2: Field-Specific Interview Questions

### Step 2.1: Ask Category-Specific Questions

Based on the professional category identified, ask targeted questions from the relevant sections below.

---

### Technology/Engineering Questions

**Technical Skills Deep Dive:**
1. "What programming languages, frameworks, and platforms do you work with? Rate your proficiency in each (expert/advanced/proficient/familiar)."
2. "Describe your experience with cloud platforms (AWS, Azure, GCP). Which services have you used?"
3. "What databases and data technologies have you worked with?"
4. "Any experience with DevOps, CI/CD, containerization, or infrastructure as code?"
5. "What AI/ML, data science, or emerging technologies have you worked with?"

**Architecture & Design:**
1. "What architectural patterns have you designed or implemented (microservices, event-driven, etc.)?"
2. "Describe a complex technical problem you solved and how you approached it."
3. "Have you created frameworks, libraries, or reusable components used by other developers?"

**Technical Leadership:**
1. "Have you led technical teams? How many developers have you mentored or managed?"
2. "Any experience with technical strategy, roadmaps, or technology selection decisions?"
3. "Have you conducted code reviews, established coding standards, or run training programs?"

**Open Source & Community:**
1. "Do you contribute to open source? What projects?"
2. "Any packages published (npm, NuGet, PyPI, etc.)? Download counts?"
3. "Stack Overflow, GitHub, or other community platform contributions?"

---

### Executive/Leadership Questions

**Leadership Scope:**
1. "What is the largest team you've managed directly? Indirectly?"
2. "What is the largest budget you've been responsible for?"
3. "Have you reported to a CEO or Board? In what capacity?"
4. "What strategic initiatives have you led or driven?"

**Business Impact:**
1. "What is the most significant cost reduction or revenue increase you've driven? Quantify if possible."
2. "Have you led M&A integration, due diligence, or major organizational changes?"
3. "What P&L responsibility have you held?"

**Stakeholder Management:**
1. "What level of stakeholders do you regularly interact with (Board, C-suite, VP, etc.)?"
2. "Experience with investor relations, board presentations, or external communications?"
3. "How do you handle organizational conflict or difficult stakeholder situations?"

---

### Healthcare Questions

**Clinical/Technical:**
1. "What clinical systems or healthcare technologies have you worked with (EHR, PACS, etc.)?"
2. "Any experience with medical devices, diagnostics, or life sciences technology?"
3. "Certifications in healthcare (RN, MD, clinical informatics, etc.)?"

**Regulatory & Compliance:**
1. "Experience with FDA regulations, HIPAA, or other healthcare compliance?"
2. "Have you participated in audits, inspections, or regulatory submissions?"
3. "Any experience with clinical trials or research protocols?"

**Patient/Population Impact:**
1. "What patient populations or outcomes have you improved?"
2. "Experience with quality improvement, patient safety, or clinical outcomes?"

---

### Finance/Accounting Questions

**Technical Expertise:**
1. "What financial systems, ERP platforms, or tools have you worked with?"
2. "Experience with financial modeling, forecasting, or analysis?"
3. "Certifications (CPA, CFA, CFP, etc.)?"

**Scope & Impact:**
1. "What is the largest budget or portfolio you've managed?"
2. "Experience with audits, compliance, or regulatory filings?"
3. "Have you led financial transformation, system implementations, or process improvements?"

---

### Sales/Marketing Questions

**Revenue Performance:**
1. "What is the largest deal you've closed? Largest quota you've exceeded?"
2. "What revenue growth have you driven? Quantify with percentages or dollar amounts."
3. "Experience with enterprise sales, channel sales, or specific sales methodologies?"

**Marketing Impact:**
1. "What marketing campaigns have you led? What were the results (ROI, leads, conversions)?"
2. "Experience with digital marketing, demand generation, or brand development?"
3. "Any experience building marketing teams or agencies?"

---

### Common Questions (All Categories)

**Work History Gaps:**
1. "Are there any gaps in your employment history? What were you doing during those times?"
2. "Any short-term roles or contract positions not on your resume?"

**Education & Credentials:**
1. "Degrees, certifications, or licenses not listed on your resume?"
2. "Ongoing education, courses, or professional development?"
3. "Any teaching, training, or mentoring roles?"

**Leadership Philosophy:**
1. "How would you describe your leadership style?"
2. "What's your approach to building and motivating teams?"
3. "How do you handle conflict or difficult situations?"

**Career Goals & Preferences:**
1. "What types of roles are you targeting?"
2. "Work arrangement preference (remote, hybrid, on-site)?"
3. "Geographic preferences or restrictions?"
4. "Compensation expectations (salary range, hourly rate for consulting)?"
5. "Industries or company types you want to target or avoid?"

**Personal Brand:**
1. "What makes you unique compared to others in your field?"
2. "What are you known for professionally?"
3. "What problems do you solve better than anyone else?"

---

## Phase 3: Master Resume Construction

### Step 3.1: Create Directory Structure
```bash
mkdir -p ./resumes
mkdir -p ./profiles
mkdir -p ./documentation
mkdir -p ./SearchResults/Targets
```

### Step 3.2: Build Master Resume Document
Create `resumes/master-resume.md` with the following structure:

```markdown
# [Candidate Name] - Master Resume

## Contact Information
[Name, email, phone, location, LinkedIn, portfolio sites]

---

## Table of Contents
[Generate based on sections included]

---

## Professional Status & Availability
- **Work Authorization:** [Status]
- **Work Preference:** [Remote/Hybrid/On-site]
- **Compensation Range:** [Salary/hourly expectations]
- **Availability:** [Notice period, start date]
- **Travel:** [Tolerance percentage]

---

## Professional Identity & Core Value Proposition
[2-3 paragraph summary of who they are and what they offer]

### Target Positions
[List 3-5 target job titles]

### Core Differentiators
[3-5 bullet points on what makes them unique]

---

## Quantifiable Achievements
[Key metrics and accomplishments with numbers]

---

## Skills Matrix
[Organized by category with proficiency ratings]

| Skill | Years | Proficiency | Evidence |
|:------|:-----:|:-----------:|:---------|
| [Skill] | [X] | [Expert/Advanced/Proficient] | [Proof] |

---

## Work History & Professional Experience
[Complete chronological work history with achievements]

---

## Education & Certifications
[Degrees, certifications, ongoing education]

---

## Leadership & Mentorship Experience
[Team leadership, mentoring, training]

---

## Community Contributions
[Open source, speaking, publications, volunteer work]

---

## Additional Information
[Anything else relevant to their field]
```

### Step 3.3: Create Supporting Documents
Based on the interview, also create:
- `CLAUDE.md` - User preferences and project context
- `./SearchResults/excluded-companies.md` - Companies/industries to avoid
- `./SearchResults/Targets/job-roles.md` - Target job titles

---

## Phase 4: Validation and Refinement

### Step 4.1: Review with Candidate
Present the master resume to the candidate and ask:
1. "Is all the information accurate?"
2. "Is anything missing that should be included?"
3. "Are the achievement metrics correct?"
4. "Does the professional summary capture who you are?"

### Step 4.2: Iterate as Needed
Make any corrections or additions based on feedback.

### Step 4.3: Generate Target Lists
Execute target list generation protocol to create:
- Job roles file
- Target companies file
- Job platforms file

```
read protocols/target-list-generation.md and follow the protocol
```

---

## Quality Standards

### Interview Guidelines
- **Adapt questions to their field** - Skip irrelevant questions, go deeper on relevant ones
- **Quantify everything** - Push for numbers, percentages, dollar amounts
- **Explore gaps** - Don't leave sections empty without trying to fill them
- **Be conversational** - Make it feel like a discussion, not an interrogation

### Document Standards
- **Consistent formatting** - Follow markdown table formatting rules
- **Complete information** - All sections should have content
- **Accurate metrics** - Only include verifiable numbers
- **Professional language** - Match their industry's communication style

---

## Success Criteria
- [ ] Master resume contains all major sections
- [ ] Work history is complete with dates and achievements
- [ ] Skills are rated with proficiency levels
- [ ] Target positions are identified
- [ ] User preferences are documented in CLAUDE.md
- [ ] Target lists are generated for their field

---

**Protocol Version:** 1.0
**Created:** December 25, 2025
**Related Protocols:** career-counselor.md, career-system-generator.md, target-list-generation.md
