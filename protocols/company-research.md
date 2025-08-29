# Company Research Protocol

## Purpose
This protocol standardizes comprehensive company research to evaluate potential career opportunities and strategic fit for Matthew Whited's professional goals.

## Trigger Commands
Execute this protocol when the user requests:
- "find information about [Company Name]"
- "research [Company Name]"  
- "Do some research on [Company Name]"
- "I'm trying to learn what [Company Name] does and why I would want to work for them"

## Protocol Steps

### Phase 1: Initialize Research (TodoWrite Required)
Create todo list with these tasks:
1. **Check Application History:** Review `./SearchResults/applied-to.md` for previous applications to company
2. **EXCLUSION LIST VERIFICATION:** Check `./SearchResults/excluded-companies.md` to verify company is not excluded due to investor associations
3. Research [Company] overview and business model
3. Analyze [Company] technology stack and technical challenges  
4. Investigate career opportunities and company culture
5. Assess alignment with Matthew's technical expertise and career goals
6. Create comprehensive analysis document in ./SearchResults/Companies/[CompanyName]_[YYYYMMDD].md

### Phase 2: Business Intelligence Research
Execute these searches in parallel:

#### Search 1: Company Overview & Business Model
**Query:** `"[Company Name]" business model revenue strategy funding`
**Focus Areas:**
- Core products/services and value proposition
- Revenue model and pricing structure
- Market position and competitive landscape
- Recent funding rounds and financial health
- Key customers and market segments

#### Search 2: Technology Stack & Engineering
**Query:** `"[Company Name]" technology stack engineering team software architecture`
**Focus Areas:**
- Technology stack and architectural decisions
- Engineering team size and organization
- Technical challenges and scale metrics
- Development practices and methodologies
- Platform/infrastructure details

#### Search 3: Culture & Opportunities  
**Query:** `"[Company Name]" careers jobs culture remote work engineering opportunities`
**Focus Areas:**
- Company culture and values
- Remote work policies
- Engineering opportunities and career tracks
- Hiring process and compensation philosophy
- Employee benefits and work-life balance

#### Search 4: Technical Alignment (if relevant)
**Query:** `"[Company Name]" .NET C# backend engineering positions architecture`
**Focus Areas:**
- Specific technology alignments with Matthew's expertise
- Senior/principal level positions
- Architecture and technical leadership roles
- Technology flexibility requirements

### Phase 3: Analysis & Documentation

#### Create Directory Structure
```bash
mkdir -p ./SearchResults/Companies
```

#### Generate Analysis Document
**File:** `./SearchResults/Companies/[CompanyName]_[YYYYMMDD].md`

**Required Sections:**

```markdown
# [Company Name] Company Analysis
**Research Date:** [Current Date]  
**Analyst:** Matthew Whited, Principal Solutions Architect

---

## EXCLUSION STATUS: [APPROVED/EXCLUDED]
**Exclusion Check Date:** [Current Date]
**Peter Thiel Association:** [None/Details]
**Elon Musk Association:** [None/Details]  
**Marc Andreessen Association:** [None/Details]
**Investor Verification:** [All clear/Found associations - specify]

*[If EXCLUDED, stop analysis here and note exclusion reason]*

---

## Executive Summary
[3-4 sentence summary of company, funding stage, key metrics, and overall assessment]

---

## Company Overview

### Business Model
- Core Service/Product
- Revenue Model
- Market Position  
- Notable Customers
- Key Metrics (if available)

### Recent Strategic Moves
- Funding rounds
- Product launches
- Strategic acquisitions
- Market expansion

---

## Technology & Engineering

### Technology Stack & Architecture
- Scale metrics and technical challenges
- Technology philosophy and stack choices
- Platform architecture and cross-platform strategy
- Development practices and team structure

### Engineering Organization
- Team size and geographic distribution
- Organizational structure
- Engineering culture and values
- Technical challenges and opportunities

---

## Career Opportunities & Culture

### Remote Work & Culture
- Remote work policies
- Company culture and values
- Work-life balance approach
- Global team considerations

### Hiring & Compensation
- Compensation philosophy
- Hiring process overview
- Growth and advancement opportunities
- Benefits and perks

### Current Engineering Opportunities
- Available positions
- Technology requirements
- Seniority levels
- Role types (IC vs management)

---

## Alignment Assessment for Matthew Whited

### Strategic Fit Analysis

#### **Strengths & Alignments**
✅ [List specific alignments with Matthew's expertise]
✅ [Technical stack matches]
✅ [Leadership/architecture opportunities]
✅ [Scale and complexity alignment]

#### **Technology Stack Considerations**
⚠️ [Technology gaps or concerns]
✅ [Technology flexibility opportunities]
⚠️ [Platform focus vs. enterprise backend]

#### **Career Growth Potential**
✅ [Senior IC opportunities]
✅ [Architecture leadership potential]
⚠️ [Management track visibility]

### Compensation & Benefits Analysis
- Salary competitiveness
- Equity potential
- Remote flexibility
- Benefits alignment

---

## Recommendation

### **Overall Assessment: [LOW/MODERATE-LOW/MODERATE/MODERATE-HIGH/HIGH] Interest**

**Application History:** [Note any previous applications to company from applied-to.md]

[2-3 paragraph assessment of opportunity]

### **Key Decision Factors**
- **Pro:** [Key advantages]
- **Pro:** [Cultural/technical fit]  
- **Con:** [Potential concerns]
- **Con:** [Alignment challenges]

### **Recommended Next Steps**
1. [Specific action items]
2. [Network research suggestions]
3. [Skill development areas]
4. [Position monitoring strategy]
5. **Application Strategy:** [Based on application history - first application, reapplication timing, or follow-up approach]

---

**Analysis Confidence:** [Low/Medium/High]  
**Data Sources:** [List source types]  
**Update Frequency:** [Recommended review schedule]
```

### Phase 4: Task Management
- Mark each research phase as completed immediately after finishing
- Update todo status in real-time
- Only mark analysis document as completed after file is written

### Phase 5: Response Format
Provide concise summary focusing on:
- **Key findings** (3-4 bullet points)
- **Overall recommendation** (interest level and reasoning)
- **Strategic considerations** (alignment with Matthew's goals)

## Quality Standards
- **Comprehensive:** Cover all major aspects of company and opportunity
- **Strategic:** Focus on senior technical leadership alignment  
- **Actionable:** Provide specific next steps and recommendations
- **Objective:** Balance positive findings with realistic concerns
- **Current:** Use recent information and current market context

## File Naming Convention
- Format: `[CompanyName]_[YYYYMMDD].md`
- Examples: `RevenueCat_20250810.md`, `Stripe_20250810.md`
- Use actual company name (proper casing)
- Use current date in YYYYMMDD format

## Success Criteria
- Comprehensive understanding of company's business model and technology
- Clear assessment of cultural and technical fit
- Specific recommendations for engagement strategy
- Professional-quality analysis document for future reference