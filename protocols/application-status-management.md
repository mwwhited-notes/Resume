# Application Status Management Protocol

**Created:** September 6, 2025  
**Purpose:** Standardized approach for managing application status changes and archival  
**Key Principle:** Any self-initiated removal from consideration = Withdrawn status

---

## Core Status Philosophy

### Withdrawn vs Rejected
- **WITHDRAWN:** User removes themselves from consideration for ANY reason
  - No response after 20+ days
  - Company/industry exclusions
  - Position no longer of interest
  - Application errors/duplicates
  - User decision to remove candidacy

- **REJECTED:** Company actively declines candidacy
  - Explicit rejection communication received
  - Company chooses other candidates
  - Company states "not moving forward"
  - Position filled by someone else

### Status Consistency Rule
**All self-initiated removals from consideration are classified as WITHDRAWN, regardless of the underlying reason**

---

## Active Applications Management

### File Structure
- **Primary Tracking:** `./SearchResults/applied-to.md` (active applications only)
- **Archive:** `./SearchResults/closed-archive.md` (all closed applications)

### Status Transitions

#### From Applied to Withdrawn
**Triggers:**
- No response after 20+ days
- User identifies company/industry exclusion
- User decides to remove from consideration
- Duplicate application cleanup
- Position requirements changed

**Process:**
1. Remove entry from `applied-to.md`
2. Add entry to `closed-archive.md` under "Withdrawn Applications" section
3. Update application counts in both files
4. **No strikethrough formatting needed** (separate files)

#### From Applied to Rejected
**Triggers:**
- Explicit rejection email/communication
- Company notification of non-selection
- Interview process ends with declination

**Process:**
1. Remove entry from `applied-to.md`
2. Add entry to `closed-archive.md` under "Rejected Applications" section
3. Update application counts in both files
4. Include rejection reason in notes

---

## Archive File Management

### Closed Archive Structure
```markdown
## Archive Summary
- **Total Archived Applications:** [Total count]
- **Rejected Applications:** [Count of company-initiated declinations]
- **Withdrawn Applications:** [Count of user-initiated removals]
- **Position Closed:** [Count of positions no longer available]
- **Duplicate Entries:** [Count of duplicate application cleanup]

## Rejected Applications ([Count] total)
*Applications that were reviewed by companies but not selected for advancement*

## Withdrawn Applications ([Count] total)
*Applications withdrawn due to any user-initiated removal from consideration*
```

### Entry Format (No Strikethrough)
Since entries are moved to separate archive files, **no strikethrough formatting** is needed:

```markdown
| Date | Company | Position | Method | Status | Notes |
| 2025-09-06 | AT&T | Lead Software Engineer | LinkedIn | Withdrawn | No response after 22+ days |
| 2025-09-06 | TechCorp | Senior Architect | Direct | Rejected | Company chose other candidates |
```

---

## Protocol Steps

### Step 1: Identify Status Change Type
Determine if status change is:
- **User-initiated removal** → WITHDRAWN
- **Company-initiated declination** → REJECTED
- **Position eliminated** → POSITION CLOSED

### Step 2: Update Active Tracking
1. **Read** `./SearchResults/applied-to.md`
2. **Locate** the application entry
3. **Remove** entry from active tracking
4. **Update counts** in summary section

### Step 3: Archive Application
1. **Read** `./SearchResults/closed-archive.md`
2. **Add entry** to appropriate section (Withdrawn/Rejected/Position Closed)
3. **Update archive counts** in summary
4. **No formatting changes** needed (clean entry)

### Step 4: Count Reconciliation
Verify that:
- Active applications count decreased
- Archive count increased by same amount
- Total applications across both files remains consistent

### Step 5: Contact Tracking (When Applicable)
If rejection/withdrawal involved positive professional interaction:
1. **Evaluate relationship quality:**
   - Professional and responsive communication
   - Expressed interest in future opportunities
   - Offered to keep in contact
   - Positive interview/discussion experience
2. **Record contact in** `./SearchResults/contacts.md`
3. **Include details:**
   - Name and title
   - Company and position context
   - Contact information (email/LinkedIn)
   - Notes on interaction quality
   - Future opportunity potential

---

## Special Cases

### No Response After 20+ Days
- **Status:** Withdrawn
- **Reason:** "No response after [X]+ days"
- **Batch Processing:** Can process multiple at once
- **Classification:** User-initiated removal (withdrawal)

### Industry/Company Exclusions
- **Status:** Withdrawn
- **Reason:** "[Industry] exclusion" or "[Company] exclusion"
- **Examples:** "Fintech industry exclusion", "Microsoft exclusion policy"

### Duplicate Applications
- **Status:** Withdrawn
- **Reason:** "Duplicate application cleanup"
- **Archive Location:** Separate "Duplicate Entries" section

### Rejection After Withdrawal
If company rejects an already-withdrawn application:
- **Keep as Withdrawn** (first status takes precedence)
- **Add note:** "Rejected [date] after withdrawal"
- **No count change** (already archived)

---

## Integration with Other Protocols

### Application Tracking Protocol
- Update to use new withdrawn/rejected distinction
- Remove strikethrough formatting requirements
- Focus on clean status transitions

### Rejection Tracking Protocol
- Update to distinguish company-initiated rejections
- Maintain separate processing for explicit rejections
- Archive to appropriate section based on initiation

### Job Search Protocol
- Account for withdrawn vs rejected in success metrics
- Consider withdrawn applications as neutral outcomes
- Focus rejection analysis on company-initiated declinations

---

## Success Metrics

### Application Outcome Categories
1. **Active Applications:** Still in consideration
2. **Interview Pipeline:** Active interview processes
3. **Withdrawn Applications:** User-initiated removals (neutral outcome)
4. **Rejected Applications:** Company-initiated declinations (actionable feedback)
5. **Successful Outcomes:** Offers, acceptances

### Analysis Focus
- **Response Rate:** (Interviews + Rejections) / (Total - Withdrawn)
- **Interview Conversion:** Interviews / Company Responses
- **Quality Metrics:** Focus on company-engaged applications
- **Strategy Adjustment:** Based on rejection patterns, not withdrawal patterns

---

## File Maintenance

### Monthly Cleanup
- Batch process 20+ day no-response applications
- Update industry exclusions based on new research
- Reconcile counts across all tracking files
- Maintain archive organization and summaries

### Data Integrity
- Verify total application counts remain consistent
- Check for duplicate entries across files
- Ensure proper status classification
- Maintain chronological organization in archives

---

## Quick Reference Commands

### Status Change Processing
```bash
# Find application in active tracking
grep -n "Company Name" ./SearchResults/applied-to.md

# Check archive for existing entries
grep -n "Company Name" ./SearchResults/closed-archive.md

# Update count verification
head -15 ./SearchResults/applied-to.md
head -15 ./SearchResults/closed-archive.md
```

### Batch Processing (20+ day withdrawals)
1. Identify applications from [date] or earlier
2. Move all entries to withdrawn section
3. Update counts in single batch
4. Document batch processing date

---

## Response Format

After status update:
- **Confirmation:** "[Company] moved to [withdrawn/rejected] status"
- **Counts:** Updated application totals
- **Archive Location:** Confirm proper archive placement
- **Next Steps:** Relevant follow-up actions if applicable

This protocol ensures clean, consistent application lifecycle management with proper distinction between user and company-initiated status changes.