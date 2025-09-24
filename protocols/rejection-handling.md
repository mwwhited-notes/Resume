# Rejection Handling Protocol
**Purpose:** Efficiently process job application rejections without creating duplicate entries or unnecessary file updates
**Created:** September 24, 2025

---

## Protocol Overview

This protocol provides a systematic approach to handling rejection notifications from companies, preventing duplicate entries, and maintaining clean application tracking. The primary goal is efficiency - ignore duplicate rejections to avoid unnecessary file operations.

## When to Execute This Protocol

Execute when:
- Receiving rejection emails from companies
- Processing batch rejection notifications
- Cleaning up application tracking files
- Handling automated ATS rejections
- Managing recruiter follow-up rejections

## Core Principle: Check Before Acting

**CRITICAL:** Always verify current status before making any changes. Most rejections are duplicates that require NO ACTION.

## Step-by-Step Rejection Processing

### Step 1: Initial Status Verification
```bash
# Search for the position in closed archive
grep -i "company_name.*position_title" ./SearchResults/closed-archive.md
```

### Step 2: Decision Tree

#### Scenario A: Already Rejected → NO ACTION REQUIRED
- **Status Shows:** "Rejected" in closed-archive.md
- **Action:** NONE - Ignore the rejection completely
- **Rationale:** Position already processed, no update needed
- **Example:** `| 2025-09-22 | Company | Position | Method | Rejected | Notes |`

#### Scenario B: Currently Withdrawn → UPDATE STATUS
- **Status Shows:** "Withdrawn" in closed-archive.md
- **Action:** Update status from "Withdrawn" to "Rejected"
- **Update Format:** Change status and add rejection date
- **Example:**
  - Before: `| Date | Company | Position | Method | Withdrawn | WITHDRAWN: 20+ days |`
  - After: `| Date | Company | Position | Method | Rejected | REJECTED: 2025-09-24 |`

#### Scenario C: In Active Applications → MOVE TO ARCHIVE
- **Status Shows:** Entry in applied-to.md
- **Action:** Move entry to closed-archive.md with "Rejected" status
- **Steps:**
  1. Copy entry from applied-to.md
  2. Add to closed-archive.md with rejection date
  3. Remove from applied-to.md
  4. Update archive counts

#### Scenario D: Not Found Anywhere → IGNORE
- **Status Shows:** No entry in any tracking file
- **Action:** NONE - Likely an old application or different email
- **Note:** May be from different email address or very old application

## Common Duplicate Rejection Patterns

### Pattern 1: Multi-System Notifications
Companies often send rejections from multiple systems:
- Initial ATS auto-rejection
- Recruiter courtesy follow-up
- HR system notification
- Position filled announcement

**Action:** Process first rejection only, ignore all subsequent

### Pattern 2: Batch Cleanup Emails
Quarterly or periodic rejection batches for old applications:
- "Spring cleaning" rejections
- System migration notifications
- Policy change announcements

**Action:** Check if already rejected, usually no action needed

### Pattern 3: Reposted Position Rejections
Same position reposted and rejected again:
- Position reopened after initial rejection
- Different requisition number, same role
- Contract-to-perm conversions

**Action:** Treat as duplicate if core position is same

## File Update Guidelines

### When TO Update Files
- Status change from "Withdrawn" to "Rejected"
- Moving active application to closed archive
- First rejection for a tracked position

### When NOT TO Update Files
- **Position already shows "Rejected" status**
- **Multiple rejections for same position**
- **Rejections for untracked positions**
- **System-generated duplicate notifications**

## Archive Management

### Updating closed-archive.md
When updates are necessary:

1. **Update Status Field:**
   ```markdown
   | Date | Company | Position | Method | Rejected | Notes |
   ```

2. **Update Summary Counts:**
   - Increment "Rejected Applications" count if new
   - Decrement "Withdrawn Applications" if status change
   - Keep total count accurate

3. **Maintain Sort Order:**
   - Keep chronological order within sections
   - Rejected applications in their own section

### Verification Commands
```bash
# Count total rejections
grep -c "| Rejected |" ./SearchResults/closed-archive.md

# Find specific company rejections
grep "CompanyName.*Rejected" ./SearchResults/closed-archive.md

# Check for duplicates
grep -c "CompanyName.*PositionTitle" ./SearchResults/closed-archive.md
```

## Quick Reference Decision Chart

| Current Status | Action Required | File Updates |
|---------------|-----------------|--------------|
| Already Rejected | NONE | NONE |
| Withdrawn | Update to Rejected | closed-archive.md only |
| In applied-to.md | Move to archive | Both files |
| Not found | NONE | NONE |
| Duplicate notification | NONE | NONE |

## Best Practices

### DO:
- Always check current status first
- Preserve original application dates
- Keep notes concise and factual
- Update counts when changes are made

### DON'T:
- Create duplicate rejection entries
- Process every rejection email
- Update files for duplicate notifications
- Add rejections for untracked positions

## Examples

### Example 1: Duplicate Rejection (NO ACTION)
```
Email: "Thank you for your interest in the Principal Architect position..."
Check: Position already shows "Rejected" in closed-archive.md
Action: NONE - Close email and move on
```

### Example 2: Status Update (UPDATE REQUIRED)
```
Email: "We've decided to move forward with other candidates..."
Check: Position shows "Withdrawn" in closed-archive.md
Action: Update status from "Withdrawn" to "Rejected" with current date
```

### Example 3: Active to Archive (MOVE REQUIRED)
```
Email: "After careful consideration, we won't be moving forward..."
Check: Position found in applied-to.md
Action: Move to closed-archive.md with "Rejected" status and date
```

## Protocol Maintenance

### Update Triggers
- Changes in tracking file structure
- New rejection notification patterns
- System automation improvements

### Version History
- v1.0: Initial protocol creation (2025-09-24)

---

**Protocol Success Indicator:** Rejection processed in under 30 seconds with no duplicate entries created