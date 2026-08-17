---
name: master-resume-builder
description: Build a comprehensive master resume from scratch through structured intake of existing resumes plus targeted, field-specific interview questions — then generate the target lists that depend on it. Use when the user wants a master resume built or wants to be interviewed to construct one. Triggers on "build a master resume for me", "help me create a master resume", "I need a comprehensive resume", "interview me to build my resume".
---

# Master Resume Builder

Builds *the resume itself* through an intake-plus-interview process — narrower in scope than
`career-system-generator` (which builds the whole ecosystem: protocols, profiles, market intelligence,
not just the resume) and different in kind from `consistency-check` (which maintains an *existing*
master resume rather than constructing the first one).

## Protocol This Orchestrates

`.claude/protocols/master-resume-builder.md` — read it in full.

## Pipeline

### Phase 1 — Intake and Gap Analysis
Ask for existing resume(s) in any form (pasted text, file path, multiple versions). Extract basic
info, classify the candidate into a professional category (Technology/Engineering, Executive/
Leadership, Healthcare, Finance, Sales/Marketing, Operations, Creative, Education, Legal, or
Generalist — multiple can apply), and identify what's missing: quantified achievements, technical
skills depth, leadership scope, community contributions, thought leadership, credentials.

### Phase 2 — Field-Specific Interview
Ask the category-appropriate deep-dive questions from the protocol (e.g. for Technology/Engineering:
stack proficiency ratings, architecture/design experience, technical leadership scope, open-source/
community contributions), plus the universal questions every category gets (employment gaps,
education/credentials, leadership philosophy, career goals/preferences, personal brand/differentiation).
**Adapt questions to the actual field rather than asking every category's question set** — skip what
doesn't apply, go deeper where it does, and keep it conversational rather than a rigid interrogation.
Push for real numbers wherever a claim is fuzzy.

### Phase 3 — Master Resume Construction
Create the directory structure (`resumes/`, `profiles/`, `documentation/`, `SearchResults/Targets/`)
and build `resumes/master-resume.md` per the protocol's exact section structure (contact info, table
of contents, professional status & availability, professional identity & core value proposition,
quantifiable achievements, skills matrix with proficiency ratings, complete work history, education/
certifications, leadership/mentorship, community contributions). Also create `CLAUDE.md` (user
preferences and context) and `SearchResults/excluded-companies.md` (industries/companies to avoid) as
supporting documents from the same interview material.

### Phase 4 — Validation and Handoff
Review the draft with the candidate — accuracy, completeness, correct achievement metrics, whether the
professional summary actually captures them — and iterate on feedback. Once confirmed, hand off to the
`target-list-generation` skill to produce the job-roles/target-companies/job-platforms files this
resume now supports.

## What NOT to Automate

- **Never include an unverifiable metric.** Push for a real number during the interview; if the
  candidate can't produce one, use qualitative language rather than inventing a figure.
- **Don't skip the validation pass** — Phase 4's review-and-iterate step is where interview
  transcription errors and misremembered details get caught, not after the resume is already in use.
- **Complete work history is non-negotiable** — no omitted positions, even when the interview focused
  heavily on recent/relevant roles.
