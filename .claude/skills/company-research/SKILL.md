---
name: company-research
description: Research a company for career fit — business model, tech stack, culture, and the mandatory Glassdoor/Blind work-life-balance check — but gate all of that behind a fast, cheap Phase 0 exclusion check first (existence, named blacklist, PE/VC/dual-class/DOGE-alignment). Use when the user asks to research a company, look into a company, or find out about a company's fit before applying. Triggers on "research [Company]", "do some research on [Company]", "look into [Company]", "what does [Company] do and why would I want to work there", "find information about [Company]". Also the automatic Phase 2 of the `job-search` skill for any company surviving inline screening.
---

# Company Research

This skill exists because company research used to mean running the *full* protocol — business
model, tech stack, culture, the mandatory WLB check — on every candidate, even ones that turn out to
be VC-backed, PE-owned, or already-blacklisted five minutes in. That's expensive and slow. The fix,
learned the hard way across many sessions: **check the fast, cheap disqualifiers first, and only pay
for the full research pass on companies that actually clear them.**

## Protocol This Orchestrates

`.claude/protocols/company-research.md` — read it in full. This skill is the automation layer that
enforces running it in the right order, not a restatement of its content.

## Pipeline

### Phase 0 — Fast Exclusion Pre-Check (ALWAYS RUN FIRST)

This is the whole point of doing this as a skill rather than ad hoc: never skip straight to the full
research battery.

1. **Existence check.** Fetch the company's primary domain. Parked/for-sale/no-content → reject
   immediately, write a one-line note, stop.
2. **Named exclusion check.** Quick scan of `SearchResults/excluded-companies.md`'s company blacklist,
   recruiting/staffing-firm list, and IT-staff-aug/consulting list. Already listed → stop.
3. **PE/VC/dual-class/political ownership check (1–2 targeted searches, not the full battery).**
   Current policy is broad, not narrow — re-read the actual exclusion file rather than trusting memory
   of an earlier session, since these rules have changed shape multiple times:
   - **VC-backed at any stage** (Seed through Series D+, unicorn or not) is a hard exclude — this is
     broader than just PE/LBO firms, confirmed policy as of the "nothing to do with VC or PE" ruling.
   - **PE majority or combined-institutional-majority ownership** is a hard exclude, even where
     founders retain day-to-day operational control (see the PointClickCare precedent).
   - **Dual-class or multi-class share structures** (any unequal per-share voting rights, any
     severity) are a hard exclude — a governance objection, not a performance one.
   - **DOGE/Trump/MAGA alignment** covers named individuals on the board/C-suite AND corporate
     donations (not just personal-executive donations) to the inaugural fund, White House
     Ballroom/other Trump-branded projects, or MAGA-aligned PACs — this scope was explicitly broadened
     mid-session once; don't revert to checking personal donations only.
   - **Named-individual family/portfolio exclusions** (e.g. the Larry Ellison family) cover pending,
     not-yet-closed acquisitions too if the deal is agreed and shareholder-approved — don't wait for
     a deal to formally close before excluding.
4. If Phase 0 finds anything disqualifying (or the company can't be confirmed to exist) — **stop
   immediately.** Write a short exclusion note, not the full template, and skip straight to reporting
   back. Do not spend a single additional search on tech stack, culture, or WLB for a company already
   excluded on ownership/political grounds.
5. Only proceed to the full protocol below if Phase 0 genuinely clears.

### Phase 1+ — Full Research (Only If Phase 0 Clears)

Run `company-research.md`'s remaining phases in full: business model & market position, technology
stack & engineering, culture & opportunities, and the **mandatory** Glassdoor/Blind/layoffs.fyi
work-life-balance check with its auto-reject triggers (sub-3.0 Glassdoor with WLB called out, 996-style
overtime patterns documented by multiple reviewers, recent mass layoffs). This last check is not
optional even when everything else looks clean — it has independently killed otherwise-approved
companies before (see EvenUp).

Write the analysis to `SearchResults/Companies/{CompanyName}_{YYYYMMDD}.md` per the protocol's exact
template. Check `SearchResults/applied-to.md` for prior application history and note it in the report.

## Ambiguous Calls Go to the User

Some Phase 0 findings won't be clean yes/no — a single-source report, a majority-but-not-quite-single
PE stake, an unclear revenue split between defense and civilian work. Follow the precedent already
established in `excluded-companies.md`: when genuinely thin evidence points toward exclusion, flag it
for a user decision rather than deciding unilaterally in either direction. Don't manufacture false
confidence by rounding an ambiguous case to a clean verdict.

## Response Format

Keep the chat summary short regardless of how much research happened: exclusion status
(approved/excluded and on what specific grounds), overall interest level if approved, and the 2–3
biggest decision factors. The full detail lives in the written file, not the chat reply.
