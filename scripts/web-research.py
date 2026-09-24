#!/usr/bin/env python3
"""
Web Research Tool - HTML to Markdown Converter
Alternative implementation using Python for cross-platform compatibility
"""

import requests
import sys
import tempfile
import os
from datetime import datetime

def convert_url_to_markdown(url, prompt):
    """
    Retrieve HTML content and convert to Markdown for LLM analysis
    
    Args:
        url (str): Target URL to research
        prompt (str): Research prompt for analysis
    """
    
    try:
        # Step 1: Retrieve HTML content
        print(f"Retrieving content from: {url}")
        headers = {
            'User-Agent': 'Mozilla/5.0 (compatible; research-bot)',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
        
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        
        # Step 2: Convert to Markdown
        print("Converting HTML to Markdown...")
        
        # Try importing html2text for conversion
        try:
            import html2text
            h = html2text.HTML2Text()
            h.ignore_links = False
            h.ignore_images = False
            h.body_width = 0  # No line wrapping
            markdown_content = h.handle(response.text)
        except ImportError:
            print("Warning: html2text not available, using basic text extraction")
            # Fallback: basic HTML tag removal (minimal)
            import re
            # Remove script and style content
            text = re.sub(r'<script[^>]*>.*?</script>', '', response.text, flags=re.DOTALL | re.IGNORECASE)
            text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL | re.IGNORECASE)
            # Remove HTML tags
            text = re.sub(r'<[^>]+>', '', text)
            # Clean up whitespace
            text = re.sub(r'\n\s*\n', '\n\n', text)
            markdown_content = text.strip()
        
        # Step 3: Display content for analysis
        print("\n=== CONVERTED MARKDOWN CONTENT ===")
        print(markdown_content)
        print("\n=== RESEARCH PROMPT ===")
        print(prompt)
        print("")
        
        return markdown_content
        
    except requests.exceptions.RequestException as e:
        print(f"Error retrieving URL: {e}")
        return None
    except Exception as e:
        print(f"Error during conversion: {e}")
        return None

def main():
    """Main entry point for the web research tool"""
    
    if len(sys.argv) != 3:
        print("Usage: python3 web-research.py <URL> <RESEARCH_PROMPT>")
        print("Example: python3 web-research.py 'https://example.com' 'Find company information'")
        sys.exit(1)
    
    url = sys.argv[1]
    prompt = sys.argv[2]
    
    result = convert_url_to_markdown(url, prompt)
    
    if result:
        print("Research complete. Apply the above prompt to analyze the converted content.")
    else:
        print("Research failed. Please check the URL and try again.")
        sys.exit(1)

if __name__ == "__main__":
    main()