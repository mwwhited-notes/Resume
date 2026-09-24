---
name: personalized-learning-plan
description: Build a structured, personalized learning plan for any topic — assessing current knowledge level, defining learning objectives, curating resources, and organizing modules with hands-on exercises and progress tracking — stored under SearchResults/Lessons. Use when the user wants to learn about a specific topic in a structured way. Triggers on "I need to know more about {topic}", "help me learn {topic}", "create a learning plan for {topic}".
---

# Personalized Learning Plan

Turns "I need to know more about X" into a structured, trackable plan rather than an ad hoc
explanation — useful both for genuine skill-building and for the skill-gap follow-ups that
`job-search`'s Phase 5 and `self-audit` surface (a recurring skill gap found across several job
postings is exactly the kind of trigger this skill is meant to catch).

## Protocol This Orchestrates

`.claude/protocols/personalized-learning-plan.md` — read it in full.

## Pipeline

### Phase 1 — Topic & Knowledge Assessment
Define the topic's scope, assess current knowledge level (beginner/intermediate/advanced), identify
*why* the knowledge is needed (job requirement, interview prep, project application, curiosity — this
changes how deep and how fast the plan should go), and note time constraints.

### Phase 2 — Plan Design
Define 3–5 primary objectives plus supporting secondary objectives, with concrete practical
applications and measurable success criteria. Structure the learning path into modules, sequenced from
foundational to advanced, with built-in review/reinforcement checkpoints — not just a flat reading list.

### Phase 3 — Resource Curation
Curate primary sources (authoritative books/papers/docs), online courses, practical resources
(repos/datasets/tools), and community resources — organized into theoretical foundations, practical
applications, tools/technologies, and assessment materials per module.

### Phase 4 — Implementation Strategy
Convert modules into a concrete schedule (daily/weekly time allocation, per-module timeline,
checkpoint reviews, flexibility buffer) with active-learning components (hands-on exercises, a
note-taking structure, self-assessment methods) rather than passive reading.

### Phase 5 — Documentation
Write the full plan under `SearchResults/Lessons/{TopicName}/` per the protocol's directory structure
(`learning-plan.md`, `prerequisites.md`, `resources.md`, `modules/`, `exercises/`, `notes/`,
`progress-tracking.md`) using the protocol's exact templates.

### Phase 6 — Progress Tracking
Set up the mechanism for weekly review against milestones, self-testing, and plan adjustment based on
actual pace — this phase is about the *structure* for tracking, not a one-time report.

## What NOT to Automate

- **Don't manufacture a rigid schedule the user didn't ask for** — time commitment and pace come from
  Phase 1's actual stated constraints, not a default assumption.
- **If this was triggered by a skill-gap finding from `job-search` or `self-audit`,** say so explicitly
  in the plan's context section — it helps prioritize which module matters most for near-term
  application, not just long-term mastery.
