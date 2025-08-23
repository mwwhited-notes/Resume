# Rejection Tracking Protocol

**Created:** August 23, 2025  
**Purpose:** Systematic tracking and documentation of job application rejections  
**Files to Update:** ./SearchResults/applied-to.md and ./SearchResults/apply-next.md

## Protocol Trigger

This protocol is triggered when:
- User receives a rejection email/letter from a company
- User reports "I was rejected by [Company]"
- User forwards rejection communication
- Status update indicates application was declined

## Step-by-Step Execution

### Step 1: Extract Rejection Information
- **Company Name:** Identify the rejecting company
- **Position Title:** Note the specific role (if provided)
- **Rejection Date:** Today's date (format: YYYY-MM-DD)
- **Rejection Type:** 
  - Without interview (most common)
  - After interview
  - After assessment
  - Position filled/closed
- **Location:** City, State if mentioned
- **Method:** How application was submitted (LinkedIn, Direct, Indeed, etc.)

### Step 2: Update applied-to.md

#### 2.1 Search for Existing Entry
```bash
grep -n "Company Name" ./SearchResults/applied-to.md
```

#### 2.2 Update Application Status
If company found in applied-to.md:
- Change Status column from "Applied" to "Rejected"
- Add rejection date to Notes column: "Rejected MM/DD"
- Update summary counts at top of file:
  - Decrease "Active Applications" count by 1
  - Increase "Rejected/Closed" count by 1
  - Update "Last Updated" date

If company NOT found in applied-to.md:
- Add new entry to appropriate date section
- Set Status as "Rejected"
- Include all available information

#### 2.3 Update File Header
```markdown
**Last Updated:** [Today's Date]  
**Total Applications:** [No change or +1 if new]
**Active Applications:** [Decrease by 1]
**Rejected/Closed:** [Increase by 1]
```

### Step 3: Update apply-next.md

#### 3.1 Search for Company Entry
```bash
grep -n "Company Name" ./SearchResults/apply-next.md
```

#### 3.2 Update Job Status
If company found in apply-next.md:
- Add strikethrough to company name: `~~Company Name~~`
- Add strikethrough to position: `~~Position Title~~`
- Change Status to: `❌ REJECTED - MM/DD`
- Update Notes with rejection details
- Keep application materials links intact for reference

Example transformation:
```markdown
# Before:
| 43 | [URL] | Company | Position | 8.5/10 | ✅ APPLIED | Materials | Notes |

# After:
| 43 | [URL] | ~~Company~~ | ~~Position~~ | 8.5/10 | ❌ REJECTED - 8/23 | Materials | Rejected without interview |
```

#### 3.3 Update Summary Section
Navigate to "Analysis Status Summary" section and update:
- Add to "Recent Rejections" list with date
- Adjust any relevant counts

### Step 4: Special Cases

#### 4.1 Recruiter/Staffing Firm Rejections
If rejection is from a recruiter or staffing firm:
- Note as "On Hold" or "Rejected" based on message tone
- Include recruiter name if provided
- Note if they mention future opportunities

#### 4.2 Automated Rejections
For automated/bulk rejections (no response after 20+ days):
- Mark as "Rejected - No response after 20+ days"
- Batch update if multiple positions

#### 4.3 Position Closed/Filled
If position was filled or closed:
- Status: "Position Closed" or "Position Filled"
- Different from personal rejection

### Step 5: Documentation

Create brief change entry (if significant):
```markdown
# If documenting in change history
- Rejection tracking: Updated [Company] rejection in applied-to.md and apply-next.md
- Updated application counts: [X active, Y rejected]
```

### Step 6: Verification

Run quick verification:
1. Confirm both files updated
2. Verify counts are accurate
3. Check that rejection is properly marked

## Quick Reference Commands

```bash
# Find company in applied-to.md
grep -n "Company Name" ./SearchResults/applied-to.md

# Find company in apply-next.md  
grep -n "Company Name" ./SearchResults/apply-next.md

# Check current counts
head -15 ./SearchResults/applied-to.md
```

## Common Rejection Types & Codes

- **Rejected:** Generic rejection, no interview
- **Rejected - No Interview:** Explicitly rejected without interview
- **Rejected - Post Interview:** Rejected after interview process
- **Position Closed:** Job no longer available
- **Position Filled:** Someone else was hired
- **On Hold:** Recruiter keeping on file for future
- **Rejected - No Response:** No response after 20+ days

## Integration with Other Protocols

- **After rejection tracking:** Consider executing company-research.md if pattern emerges
- **Multiple rejections:** May trigger job-search.md for market repositioning
- **Skill gap identified:** Could trigger personalized-learning-plan.md

## Examples

### Example 1: Simple Rejection Email
```
User: "We will not be moving forward with your application for Solution Architect at TechCorp"

Actions:
1. Search applied-to.md for TechCorp
2. Update Status to "Rejected"
3. Add "Rejected 8/23" to Notes
4. Decrease active count by 1, increase rejected by 1
5. Search apply-next.md for TechCorp
6. Strikethrough company and position
7. Update status to ❌ REJECTED - 8/23
```

### Example 2: Rejection with Feedback
```
User: "Argano rejected me - said my qualifications don't match"

Actions:
1. Update applied-to.md with "Rejected - Not suited for role per company"
2. Update apply-next.md with strikethrough and detailed note
3. Consider if feedback suggests need for targeted skill development
```

## Metrics Tracking

Track rejection patterns:
- **By Platform:** LinkedIn, Indeed, Direct, etc.
- **By Role Type:** Principal, Senior, CTO, etc.
- **By Company Size:** Startup, Mid-size, Enterprise
- **By Domain:** FinTech, Healthcare, Retail, etc.
- **Time to Rejection:** Days from application to rejection

This data informs job search strategy adjustments.