---
name: application-lifecycle
description: Handle every stage of a job application's life — recording a new application, updating status (interview/offer), processing a rejection or withdrawal, and archiving — as one consistent workflow against the same tracking files. Use whenever the user reports applying to a company, getting an interview, receiving a rejection or offer, or wants application status cleaned up. Triggers on "I applied to [Company]", "I sent my resume to [Company]", "I got an interview at [Company]", "I got an offer from [Company]", "I was rejected by [Company]", forwarded rejection emails, and general application-status cleanup requests.
---

# Application Lifecycle

Four separate protocols — `application-tracking.md`, `rejection-handling.md`, `rejection-tracking.md`,
and `application-status-management.md` — all read and write the same two files
(`SearchResults/applied-to.md` and `SearchResults/closed-archive.md`, plus `SearchResults/contacts.md`
for positive contacts) for what is really one object's lifecycle, not four separate workflows. This
skill is the single entry point; which event fires just determines which branch below runs.

## Protocols This Orchestrates

Read all four before acting — this skill sequences them, it doesn't restate their content:
1. `.claude/protocols/application-tracking.md` — new application intake
2. `.claude/protocols/application-status-management.md` — the authoritative Withdrawn-vs-Rejected
   philosophy and archive structure; when the other three protocols disagree on formatting, this one
   wins, it's the most recently authored
3. `.claude/protocols/rejection-handling.md` — the duplicate-detection decision tree
4. `.claude/protocols/rejection-tracking.md` — field extraction detail for rejection notices

## Core Philosophy (Governs Every Branch Below)

**Any self-initiated removal from consideration = Withdrawn, regardless of the underlying reason.**
No response after 20+ days, a newly-discovered exclusion, losing interest, duplicate cleanup — all
Withdrawn. **Rejected** is reserved for the company actively declining candidacy. Don't blur this
distinction even when a rejection email arrives for something the user had already mentally written
off — check which one actually applies before writing either label.

## Event Branches

### New Application ("I applied to [Company]")

1. **Exclusion check first.** If the company is on `excluded-companies.md`, tell the user and do NOT
   add it to tracking — a tracked application to an excluded company is a bug, not a record.
2. **Duplicate check.** Search `applied-to.md` for the company (case-insensitive). If found, ask
   whether this is a new application or an update to the existing one — don't silently duplicate.
3. **Add the entry** to `applied-to.md` (date defaults to today unless the user states otherwise).
   If a matching entry already exists in `apply-next.md` with `❓ Match - Materials Created` status,
   update it to `✅ APPLIED - [date]` rather than creating a second record.
4. **Cross-reference:** note whether company research exists in `SearchResults/Companies/` and whether
   targeted materials exist in `SearchResults/targeted/`; suggest running the `company-research` skill
   if neither exists yet — a tracked application with zero research on file is worth flagging, not
   silently accepting.

### Status Update — Interview / Offer

Update the existing `applied-to.md` entry's status field in place (`Interview Scheduled`, `Offer
Received`, etc.). No archival at this stage — these are still-open outcomes.

### Rejection Notice (Email, Forwarded Message, or "I was rejected by [Company]")

**Check current status before touching any file — most rejection emails are duplicates that need
zero file changes.**

1. `grep` for the company/position in `closed-archive.md` first, then `applied-to.md` if not found there.
2. Follow this decision tree exactly (do not skip straight to "add a rejected entry"):
   - **Already shows "Rejected" in the archive → NO ACTION.** Close it out, this is a duplicate
     notification (companies routinely send 2–4 rejection emails from different systems for one
     decision). Don't re-write a file that's already correct.
   - **Shows "Withdrawn" in the archive → update that entry's status to "Rejected"** with today's
     date — a rejection arriving after a self-initiated withdrawal still gets recorded as a company
     decision if it's genuinely a new, later communication (but see the "Rejection After Withdrawal"
     special case below if the timing suggests it's just catching up on an old decision).
   - **Found in `applied-to.md` (still active) → move it to `closed-archive.md`** under "Rejected
     Applications," remove from `applied-to.md`, update counts in both files.
   - **Not found anywhere → NO ACTION.** Likely a different email address, a very old application, or
     an untracked position. Don't create a new archive entry from a rejection alone with no prior
     tracked application — that produces a rejected-but-never-applied record, which is nonsensical.
3. **Rejection-after-withdrawal special case:** if an already-Withdrawn entry gets a rejection, keep
   the Withdrawn status (first status takes precedence) and just append a note — don't overwrite it to
   Rejected, since the user already self-removed before the company acted.
4. **Positive contact check.** If the rejection (or the process leading to it) involved a genuinely
   positive interaction — responsive, professional, explicit interest in future roles, an offer to stay
   in touch — record the person in `SearchResults/contacts.md` with name, title, company, contact
   info, and interaction notes. Don't do this reflexively for form-letter rejections.

### Batch / Periodic Cleanup

For 20+ day no-response applications: batch-move to `closed-archive.md` as Withdrawn (not Rejected —
this is a self-initiated removal, the company never acted), update counts once for the whole batch
rather than file-by-file, and note the batch processing date.

## File Mechanics (Applies Across All Branches)

- **No strikethrough formatting anywhere** — `applied-to.md` and `closed-archive.md` are separate
  files, so a closed entry simply moves rather than getting struck through in place.
- **Count reconciliation is mandatory after every change:** active count decreases by exactly what the
  archive count increases by. Verify this before considering the update done, not after the fact.
- **`apply-next.md` entries** (if the position has one) get their own status marker updated in the
  same pass — `❌ REJECTED - MM/DD` or similar — but this is a secondary, optional update; the
  authoritative record is `applied-to.md`/`closed-archive.md`.

## What NOT to Automate

- **Never process a rejection without checking current status first.** The single most common failure
  mode this skill exists to prevent is re-processing (and duplicating) a rejection that's already
  correctly archived.
- **Never guess at Withdrawn vs. Rejected** — if the trigger message is ambiguous about who initiated
  the removal, ask rather than pick one.
- **Never silently invent a tracked application from a bare rejection notice** with nothing in
  `applied-to.md` or `closed-archive.md` to anchor it.
