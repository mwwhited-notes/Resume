# Job Search Automation Script

A Node.js automation script based on the comprehensive job-search protocol, designed to systematically execute job searches across multiple platforms with configurable parameters and automated result analysis.

## Features

- **Multi-Platform Search**: Automated searching across major job boards, executive recruiters, and specialized platforms
- **URL Validation**: Automatic verification of job posting URLs to ensure they're still active
- **Configurable Exclusions**: Support for company, industry, and investor exclusions
- **Market Intelligence**: Automated analysis of salary ranges, location distribution, and key requirements
- **Comprehensive Reporting**: Individual platform reports and consolidated summary analysis
- **Fit Score Calculation**: Automated scoring of opportunities based on profile alignment

## Installation

```bash
cd /current/src/scripts/job-search
npm init -y
npm install # No external dependencies required - uses Node.js built-ins
```

## Configuration

The script uses a JSON configuration file that follows the provided schema. See `job-search-config.json` for a complete example configuration based on Matthew Whited's profile.

### Configuration Sections

1. **userProfile**: Personal information, location preferences, and compensation requirements
2. **searchCriteria**: Target roles, technologies, and work types
3. **platforms**: Job boards, executive recruiters, and specialized platforms to search
4. **exclusions**: Companies, industries, and investors to exclude from results
5. **output**: Output directory and reporting preferences

## Usage

### Basic Usage
```bash
node job-search.js
```

### With Custom Configuration
```bash
node job-search.js --config my-config.json
```

### Search Specific Platform
```bash
node job-search.js --platform "LinkedIn Jobs"
```

### Dry Run (Validate Configuration)
```bash
node job-search.js --dry-run
```

## Command Line Options

- `--config [file]`: Specify custom configuration file (default: `job-search-config.json`)
- `--platform [name]`: Search only the specified platform
- `--dry-run`: Validate configuration without executing searches

## Output Structure

The script generates structured output in the configured directory:

```
SearchResults/Jobs/
├── linkedin-jobs.md                    # Individual platform results
├── indeed.md
├── ziprecruiter.md
├── [platform-name].md
└── comprehensive-job-search-YYYYMMDD.md  # Consolidated summary
```

### Individual Platform Reports

Each platform generates a detailed markdown report containing:

- Search queries executed
- Direct job opportunities with URLs
- URL validation status
- Market intelligence analysis
- Competitive advantage assessment
- Platform-specific insights

### Comprehensive Summary

The summary report includes:

- Platform rankings and performance
- Top opportunities (fit score ≥ 8.0)
- Market intelligence aggregation
- Immediate and long-term action items

## Core Functionality

### Search Execution Process

1. **Configuration Validation**: Validates JSON config against schema
2. **Search URL Generation**: Creates platform-specific search URLs with proper encoding
3. **Manual Execution Framework**: Generates URLs for manual search execution
4. **Exclusion Filtering**: Applies company/industry/investor exclusions  
5. **Report Generation**: Creates individual platform reports with search URLs and next steps

### Search URL Generation

The script generates properly formatted search URLs for each platform:

- **LinkedIn Jobs**: `https://www.linkedin.com/jobs/search/?keywords=TERMS&location=Remote&f_WT=2`
- **Indeed**: `https://www.indeed.com/jobs?q=TERMS&l=Remote&radius=0&fromage=7`
- **ZipRecruiter**: `https://www.ziprecruiter.com/jobs/search?search=TERMS&location=Remote&radius=25`
- **Dice**: `https://www.dice.com/jobs?q=TERMS&location=Remote&radius=30&radiusUnit=mi&page=1&pageSize=20`

Where `TERMS` are URL-encoded search terms based on your target roles and technologies.

### URL Validation

The script automatically validates job posting URLs with status classification:

- **ACTIVE**: URL accessible with valid job posting
- **EXPIRED**: URL accessible but job posting removed/closed
- **INVALID**: URL not accessible or returns error
- **REDIRECTED**: URL redirects to different page

### Fit Score Calculation

Opportunities are scored 1-10 based on:

- Role level and strategic impact
- Technology alignment with profile
- Compensation alignment
- Work style compatibility

## Integration with Job Search Protocol

This script implements the systematic approach defined in `protocols/job-search.md`:

- **Pre-Search Setup**: Directory structure creation and exclusion verification
- **Multi-Category Execution**: Major job boards, executive recruiters, specialized platforms
- **Documentation Standards**: Structured markdown output with URL validation
- **Market Intelligence**: Comprehensive analysis and competitive positioning

## Example Configuration

```json
{
  "userProfile": {
    "name": "Matthew Whited",
    "location": {
      "homeAddress": "1221 N Calvert St, Baltimore, MD 21202",
      "preferredWork": "remote"
    },
    "preferences": {
      "minSalary": 180000,
      "minHourlyRate": 85,
      "maxTravelPercent": 25
    }
  },
  "searchCriteria": {
    "targetRoles": [
      {
        "category": "executive",
        "titles": ["CTO", "Chief Technology Officer", "VP Engineering"]
      }
    ],
    "technologies": ["AI/ML", ".NET", "Azure", "Enterprise Architecture"],
    "workTypes": ["remote", "consulting"]
  }
}
```

## Extending the Script

### Adding New Platforms

1. Add platform configuration to `platforms` section in config
2. The script will automatically include it in search execution
3. Customize search terms per platform as needed

### Custom Analysis

The script provides hooks for custom analysis functions:

- `analyzeCompetitiveAdvantages()`: Platform-specific advantage analysis
- `analyzeMarketIntelligence()`: Custom market insights
- `calculatePlatformAlignment()`: Scoring algorithm customization

## Error Handling

The script includes robust error handling:

- Configuration validation with detailed error messages
- URL validation with retry logic
- Platform-specific error isolation (failures don't stop entire execution)
- Comprehensive logging of all operations

## Performance Considerations

- Parallel platform processing where possible
- Configurable URL validation retry limits
- Efficient file I/O with async operations
- Memory-conscious result aggregation

## Maintenance

- Update platform URLs and search strategies quarterly
- Refresh exclusion lists based on market changes
- Adjust fit scoring algorithms based on feedback
- Monitor URL validation success rates

## License

This script is part of the Matthew Whited resume project automation suite.