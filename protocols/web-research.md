# Web Research Protocol - HTML to Markdown Conversion

## Purpose
This protocol replaces direct WebFetch requests with a two-step process: HTML retrieval followed by conversion to Markdown for improved LLM processing and analysis.

## Overview
Instead of using WebFetch directly, this protocol retrieves HTML content and converts it to clean Markdown format before LLM analysis, providing better structure recognition and more accurate content extraction.

## Protocol Steps

### Step 1: Content Retrieval
Use curl or wget to retrieve HTML content from target URL:

```bash
curl -L -A "Mozilla/5.0 (compatible; research-bot)" "{URL}" -o temp_content.html
```

**Parameters:**
- `-L`: Follow redirects
- `-A`: Set user agent to avoid blocking
- `-o`: Output to temporary file

### Step 2: HTML to Markdown Conversion
Convert HTML to clean Markdown using pandoc:

```bash
pandoc temp_content.html -f html -t markdown_strict --wrap=none -o temp_content.md
```

**Parameters:**
- `-f html`: Input format is HTML
- `-t markdown_strict`: Output strict Markdown format
- `--wrap=none`: Disable line wrapping for cleaner output
- `-o`: Output to Markdown file

### Step 3: Content Analysis
Read the converted Markdown file and analyze with specific research prompt:

```bash
# Read converted content
cat temp_content.md

# Then apply research-specific analysis
```

### Step 4: Cleanup
Remove temporary files:

```bash
rm temp_content.html temp_content.md
```

## Implementation Script

### Create web-research.sh
```bash
#!/bin/bash

URL="$1"
PROMPT="$2"
TEMP_HTML="temp_research_$(date +%s).html"
TEMP_MD="temp_research_$(date +%s).md"

# Validate inputs
if [ -z "$URL" ] || [ -z "$PROMPT" ]; then
    echo "Usage: $0 <URL> <RESEARCH_PROMPT>"
    exit 1
fi

# Step 1: Retrieve HTML content
echo "Retrieving content from: $URL"
curl -L -A "Mozilla/5.0 (compatible; research-bot)" "$URL" -o "$TEMP_HTML" 2>/dev/null

if [ $? -ne 0 ]; then
    echo "Error: Failed to retrieve content from $URL"
    exit 1
fi

# Step 2: Convert HTML to Markdown
echo "Converting HTML to Markdown..."
pandoc "$TEMP_HTML" -f html -t markdown_strict --wrap=none -o "$TEMP_MD" 2>/dev/null

if [ $? -ne 0 ]; then
    echo "Error: Failed to convert HTML to Markdown"
    rm "$TEMP_HTML"
    exit 1
fi

# Step 3: Display converted content for analysis
echo "=== CONVERTED MARKDOWN CONTENT ==="
cat "$TEMP_MD"
echo ""
echo "=== RESEARCH PROMPT ==="
echo "$PROMPT"

# Step 4: Cleanup
rm "$TEMP_HTML" "$TEMP_MD"

echo ""
echo "Research complete. Apply the above prompt to analyze the converted content."
```

## Usage Examples

### Basic Research Query
```bash
./web-research.sh "https://example.com/page" "Find information about company services and pricing"
```

### Company Research
```bash
./web-research.sh "https://company.com/about" "Extract business model, revenue information, and key metrics"
```

### Technology Analysis
```bash
./web-research.sh "https://tech-site.com/docs" "Identify technical stack, methodologies, and implementation approaches"
```

## Alternative Tools

### If pandoc is not available:
Use html2text as alternative converter:

```bash
# Install html2text if needed
# Ubuntu/Debian: apt-get install html2text
# macOS: brew install html2text

# Convert HTML to text/markdown
html2text -width 0 temp_content.html > temp_content.md
```

### Python-based alternative:
```python
#!/usr/bin/env python3
import requests
import html2text
import sys

def convert_url_to_markdown(url, prompt):
    # Retrieve HTML
    headers = {'User-Agent': 'Mozilla/5.0 (compatible; research-bot)'}
    response = requests.get(url, headers=headers)
    
    if response.status_code != 200:
        print(f"Error: Failed to retrieve {url}")
        return
    
    # Convert to Markdown
    h = html2text.HTML2Text()
    h.ignore_links = False
    h.ignore_images = False
    markdown_content = h.handle(response.text)
    
    print("=== CONVERTED MARKDOWN CONTENT ===")
    print(markdown_content)
    print("")
    print("=== RESEARCH PROMPT ===")
    print(prompt)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 web-research.py <URL> <RESEARCH_PROMPT>")
        sys.exit(1)
    
    convert_url_to_markdown(sys.argv[1], sys.argv[2])
```

## Benefits of This Protocol

### Improved Content Structure
- Markdown preserves document hierarchy (headers, lists, links)
- Better recognition of content organization
- Cleaner text processing for LLM analysis

### Enhanced Analysis Accuracy
- Removes HTML noise and formatting artifacts
- Preserves important structural elements
- Enables more precise content extraction

### Consistency
- Standardized Markdown format across all web research
- Predictable content structure for analysis
- Easier pattern recognition in converted content

### Debugging and Review
- Intermediate Markdown files can be saved for review
- Easy to verify conversion accuracy
- Content can be reanalyzed without re-fetching

## Integration with Existing Protocols

### Company Research Protocol
Replace WebFetch steps with:
```bash
./web-research.sh "$COMPANY_URL" "Extract business model, revenue, technology stack, and competitive positioning"
```

### Job Search Protocol
Replace WebFetch steps with:
```bash
./web-research.sh "$JOB_POSTING_URL" "Extract job requirements, compensation, company information, and application process"
```

### Technical Research
Replace WebFetch steps with:
```bash
./web-research.sh "$TECH_DOC_URL" "Identify technical methodologies, frameworks, and implementation details"
```

## Error Handling

### Common Issues and Solutions

**1. curl/wget not available:**
- Use python requests as fallback
- Install curl: `apt-get install curl` or `brew install curl`

**2. pandoc not available:**
- Use html2text as alternative
- Install pandoc: `apt-get install pandoc` or `brew install pandoc`

**3. URL returns 403/404:**
- Check user agent string
- Verify URL accessibility
- Use alternative research sources

**4. Large file conversion:**
- Add timeout parameters to curl
- Stream processing for large files
- Content size validation before conversion

## Security Considerations

### Safe URL Handling
- Validate URL format before processing
- Use timeout parameters to prevent hanging
- Sanitize file names to prevent directory traversal

### Content Validation
- Check file sizes before processing
- Validate content type headers
- Implement rate limiting for multiple requests

### Temporary File Management
- Use unique temporary file names
- Ensure cleanup on script exit
- Implement proper error handling

---

**Protocol Version:** 1.0  
**Created:** 2025-08-13  
**Last Updated:** 2025-08-13  
**Maintenance:** Review and update quarterly as tools evolve