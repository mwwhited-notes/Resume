#!/bin/bash

URL="$1"
PROMPT="$2"
TEMP_HTML="temp_research_$(date +%s).html"
TEMP_MD="temp_research_$(date +%s).md"

# Validate inputs
if [ -z "$URL" ] || [ -z "$PROMPT" ]; then
    echo "Usage: $0 <URL> <RESEARCH_PROMPT>"
    echo "Example: $0 'https://example.com' 'Find company information and services'"
    exit 1
fi

# Step 1: Retrieve HTML content
echo "Retrieving content from: $URL"
curl -L -A "Mozilla/5.0 (compatible; research-bot)" "$URL" -o "$TEMP_HTML" 2>/dev/null

if [ $? -ne 0 ]; then
    echo "Error: Failed to retrieve content from $URL"
    echo "Please check the URL and try again."
    exit 1
fi

# Check if pandoc is available
if command -v pandoc >/dev/null 2>&1; then
    # Step 2: Convert HTML to Markdown using pandoc
    echo "Converting HTML to Markdown using pandoc..."
    pandoc "$TEMP_HTML" -f html -t markdown_strict --wrap=none -o "$TEMP_MD" 2>/dev/null
    
    if [ $? -ne 0 ]; then
        echo "Error: Failed to convert HTML to Markdown with pandoc"
        rm "$TEMP_HTML"
        exit 1
    fi
elif command -v html2text >/dev/null 2>&1; then
    # Alternative: Use html2text
    echo "Converting HTML to Markdown using html2text..."
    html2text -width 0 "$TEMP_HTML" > "$TEMP_MD"
    
    if [ $? -ne 0 ]; then
        echo "Error: Failed to convert HTML to Markdown with html2text"
        rm "$TEMP_HTML"
        exit 1
    fi
else
    echo "Error: Neither pandoc nor html2text found."
    echo "Please install one of these tools:"
    echo "  Ubuntu/Debian: apt-get install pandoc"
    echo "  macOS: brew install pandoc"
    echo "  Alternative: apt-get install html2text"
    rm "$TEMP_HTML"
    exit 1
fi

# Step 3: Display converted content for analysis
echo ""
echo "=== CONVERTED MARKDOWN CONTENT ==="
cat "$TEMP_MD"
echo ""
echo "=== RESEARCH PROMPT ==="
echo "$PROMPT"
echo ""

# Step 4: Cleanup
rm "$TEMP_HTML" "$TEMP_MD"

echo "Research complete. Apply the above prompt to analyze the converted content."