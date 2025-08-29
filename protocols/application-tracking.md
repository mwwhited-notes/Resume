# Application Tracking Protocol

## Purpose
This protocol standardizes tracking and recording job applications to maintain a comprehensive record of Matthew Whited's application activity and prevent duplicate applications.

## Trigger Commands
Execute this protocol when the user states:
- "I applied to [Company Name]"
- "I applied to [Company Name] for [Job Title]"
- "I submitted an application to [Company]"
- "I sent my resume to [Company]"
- "I applied for [Job Title] at [Company]"

## Protocol Steps

### Phase 1: Parse Application Information
Extract the following information from user input:
- **Company Name:** Extract company name (normalize capitalization)
- **Job Title:** Extract specific position if mentioned
- **Application Date:** ALWAYS use current date (today) unless user explicitly specifies a different date
- **Application Method:** Infer from context (direct, recruiter, job board, etc.) or default to "Direct"

### Phase 2: Exclusion Verification and Duplicate Checking
Before adding entry, execute verification:

1. **EXCLUSION LIST CHECK:**
   - **Read exclusion list:** Review `./SearchResults/excluded-companies.md` 
   - **If company is excluded:** Alert user: "[Company] is on the exclusion list due to [investor association]. Cannot track application to excluded company."
   - **Stop processing:** Do not add excluded company to tracking files

2. **Check for Duplicates (if company approved):**
   - **Read existing applied-to.md file**
   - **Search for company name** (case-insensitive)
   - **If duplicate found:**
     - Alert user: "You previously applied to [Company] on [Date] for [Position]. Would you like to add this as a new application or update the existing entry?"
     - Wait for user confirmation before proceeding
   - **If no duplicate found:** Proceed to Phase 3

### Phase 3: Update Tracking Files

#### Update Applied-To File
**File Location:** `./SearchResults/applied-to.md`

#### Update Apply-Next File (if entry exists)
**File Location:** `./SearchResults/apply-next.md`

**Check for Apply-Next Entry:**
1. **Read apply-next.md file** to check if the company/position exists
2. **If entry found with "❓ Match - Materials Created" status:**
   - Update status to "✅ APPLIED - [Date]"
   - Add compensation details if available
   - Preserve all other entry information
3. **If no entry found:** Continue with standard applied-to.md update only

#### File Structure (if creating new file):
```markdown
# Job Applications Tracker
**Last Updated:** [Current Date]  
**Total Applications:** [Count]

---

## Application Summary
- **Active Applications:** [Count]
- **Interview Stage:** [Count]  
- **Rejected/Closed:** [Count]
- **Offer Stage:** [Count]

---

## Applications by Date

### [Current Month Year]

| Date | Company | Position | Method | Status | Notes |
|------|---------|----------|--------|--------|-------|
| [entries] |

### [Previous Months as needed]
```

#### Add New Entry Format:
```markdown
| YYYY-MM-DD | [Company Name] | [Job Title] | [Application Method] | Applied | [Additional notes] |
```

#### Execute File Updates
**Required Order:**
1. **Update apply-next.md first** (if entry exists)
2. **Update applied-to.md second** (standard application tracking)
3. **Update total counts** in both files if applicable

### Phase 4: Integration with Other Protocols

#### Company Research Protocol Integration
- **After adding application:** Check if company research exists in `./SearchResults/Companies/`
- **If no research found:** Suggest running company research protocol
- **If research exists:** Reference existing analysis for application strategy

#### Job Search Protocol Integration
- **Cross-reference with job search results** to identify source of opportunity
- **Update job search summaries** to mark positions as "Applied" status

#### Targeted Application Protocol Integration
- **Check for existing targeted materials** in `./SearchResults/targeted/`
- **If materials exist:** Note which materials were used
- **If no materials exist:** Suggest creating targeted resume/cover letter

### Phase 5: Status Management
Support status updates with additional trigger commands:
- "I got an interview at [Company]" → Update status to "Interview Scheduled"
- "I was rejected by [Company]" → Update status to "Rejected"  
- "I got an offer from [Company]" → Update status to "Offer Received"

### Phase 6: Reporting and Analytics
Monthly summary capabilities:
- Applications submitted count
- Response rate analysis
- Interview conversion rate
- Company/industry application distribution

## File Management

### Directory Structure
```
./SearchResults/
├── applied-to.md (main tracking file)
├── Companies/ (company research)
├── Jobs/ (job search results)
└── Applications/ (supporting docs)
    ├── interview-notes/
    ├── offer-letters/
    └── rejection-feedback/
```

### Backup and Maintenance
- **Auto-backup:** Keep previous month snapshots
- **Monthly cleanup:** Archive old entries to separate files
- **Data validation:** Check for inconsistencies in company names

## Response Format
After updating applied-to.md, provide:
- **Confirmation:** "Added application to [Company] for [Position] on [Date]"
- **Summary:** Current application count and recent activity
- **Suggestions:** Relevant next steps (company research, follow-up timeline, etc.)

## Integration Commands
When other protocols should check application status:

### For Company Research Protocol
```markdown
- **Check Applied Status:** Review `./SearchResults/applied-to.md` for existing applications
- **If already applied:** Note application date and status in research report
- **Application Context:** Include application timing in strategic recommendations
```

### For Job Search Protocol  
```markdown
- **Mark Applied Positions:** Cross-reference search results with applied-to.md
- **Filter Applied Companies:** Option to exclude companies already applied to
- **Application Gap Analysis:** Identify high-fit companies not yet applied to
```

### For Targeted Application Protocol
```markdown
- **Prevent Duplicate Applications:** Check applied-to.md before creating materials
- **Application History Context:** Reference previous applications for positioning strategy
- **Material Reuse:** Identify if existing targeted materials can be adapted
```

## Quality Standards
- **Accurate Recording:** Capture complete application information
- **Duplicate Prevention:** Always check existing entries before adding
- **Status Tracking:** Maintain current status for all applications
- **Integration:** Cross-reference with research and search activities
- **Actionable:** Provide relevant next steps and recommendations

## Success Criteria
- Complete application history maintained
- Zero duplicate applications
- Integrated workflow with research and search protocols
- Clear status tracking and follow-up management
- Data-driven application strategy insights