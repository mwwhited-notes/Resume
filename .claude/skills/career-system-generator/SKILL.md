---
name: career-system-generator
description: Bootstrap a complete career-management ecosystem for a professional from scratch — analyze their existing resume(s), research their industry/market context, and generate a master resume, resume portfolio, profile documents, and customized protocols equivalent to this system, adapted to their field. Use when someone wants a full career management system built for themselves (or for generating the generic virtual-recruiter-style template for someone else). Triggers on "generate a career management system for [name/me]", "build me a system like this one", "set up a full career management system".
---

# Career System Generator

A meta-protocol: it doesn't manage *this* candidate's career, it builds the equivalent system for
someone else (or rebuilds this one from scratch given only raw resumes as input). Distinct from
`master-resume-builder`, which only produces the resume itself via interview — this generates the
whole ecosystem: resumes, profiles, customized protocols, and market intelligence.

## Protocol This Orchestrates

`.claude/protocols/career-system-generator.md` — read it in full; it's long (7 phases), this skill
sequences it rather than restating every step.

## Pipeline

### Phase 1 — Intake and Analysis
Collect 1–3 existing resumes, extract professional identity (role, industry, experience breadth,
technical stack, leadership scope, achievement patterns), then research market context (industry
trends, compensation ranges, skill demand) via WebSearch. Output:
`analysis/professional-profile-extraction.md` and `analysis/market-context-analysis.md`.

### Phase 2 — Professional Identity Development
Synthesize a core value proposition, quantify achievements, map technical competencies, and research
industry-appropriate communication style (executive vs. senior-IC vs. management vs. specialist tone).
Output: `analysis/professional-identity-framework.md`, `documentation/industry-style-guide.md`.

### Phase 3 — Document Generation
Build the master resume (`resumes/master-resume.md`) as the gold-standard, all-target-titles source,
then the resume portfolio (10–12 variants: comprehensive/abbreviated/extended, ATS-optimized,
specialized-by-track, structured JSON/FRESH formats) and supporting profile documents
(`profiles/brief.md`, `profiles/introduction.md`, `profiles/executive-summary.md`, cover letter
template).

### Phase 4 — Protocol Customization
Adapt `consistency-check`, `job-search`, `company-research` and related protocols to the new
candidate's industry and preferences — this is where a generic-template output (e.g. for
`virtual-recruiter`) diverges from a personalized one: strip all personal identifiers and replace with
`[bracketed placeholders]` if building the generic template, keep them concrete if building for a real
named person. Also generate the industry-specific job-search framework (target platforms, search
terms, target company research).

### Phase 5 — Market Intelligence & Network Mapping
Industry trend research, competitive intelligence, professional-development framework, and
LinkedIn/industry network mapping — outputs under `analysis/`.

### Phase 6 — System Integration
Create the new candidate's equivalent of `CLAUDE.md` (personal context, preferences, protocol
triggers) and an industry-knowledge-base file, then validate: cross-reference every generated document
for consistency, confirm compensation/positioning aligns with the market research from Phase 1, and
test that the generated job-search/company-research protocols actually work with sample data.

### Phase 7 — Training & Handoff
Write a system-usage guide and a maintenance schedule (quarterly light review, annual full review) so
the new owner can run the system independently going forward.

## What NOT to Automate

- **Never carry this candidate's personal data (Matthew Whited's name, employer history, compensation
  figures, exclusion list) into a system being generated for someone else** — every fact in the output
  must derive from the new person's own provided resume(s) and research, not from this system's own
  CLAUDE.md/master-resume.md.
- **If generating the generic `virtual-recruiter` template specifically**, every personal identifier
  must be a placeholder — this is the one case where the output is deliberately depersonalized rather
  than built for a specific named individual.
