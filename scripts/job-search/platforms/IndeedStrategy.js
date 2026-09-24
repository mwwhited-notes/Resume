const SearchStrategy = require('./SearchStrategy');

/**
 * Indeed search strategy implementation
 * Specializes in broad market coverage with comprehensive job aggregation
 */
class IndeedStrategy extends SearchStrategy {
    constructor(platformConfig) {
        super(platformConfig);
    }

    buildSearchUrl(searchTerms) {
        const encodedTerms = encodeURIComponent(searchTerms);
        // Indeed URL structure with remote location and recent postings (fromage=7 for last 7 days)
        return `https://www.indeed.com/jobs?q=${encodedTerms}&l=Remote&radius=0&fromage=7&sort=date`;
    }

    getSearchParameters() {
        return {
            supportsRemoteFilter: true,
            supportsSalaryFilter: true,
            supportsDateFilter: true,
            supportsJobType: true,
            defaultRadius: 0, // Exact location match
            maxResultsPerPage: 15,
            sortOptions: ['date', 'relevance'],
            dateFilters: ['1', '3', '7', '14'], // days
            salaryEstimates: true,
            companyReviews: true
        };
    }

    getSpecialization() {
        return {
            category: 'job-aggregator',
            strengths: [
                'Comprehensive job aggregation from multiple sources',
                'Broad market coverage across all industries',
                'Company reviews and salary insights',
                'Mobile-optimized application process',
                'Direct employer postings and recruitment agencies',
                'Geographic salary data and market analysis'
            ],
            idealFor: [
                'Comprehensive market research',
                'Salary benchmarking across regions',
                'Finding opportunities from smaller companies',
                'Quick application processes',
                'Market trend analysis'
            ],
            limitations: [
                'High volume of lower-quality postings',
                'Limited advanced filtering compared to specialized platforms',
                'Recruitment agency spam can obscure direct opportunities'
            ]
        };
    }

    getExecutionInstructions(searchUrl) {
        return `MANUAL SEARCH REQUIRED: Visit ${searchUrl} to execute search on Indeed. ` +
               `Filter results by 'Direct Employer' to avoid recruitment agencies. ` +
               `Use salary filter ($180K+) and date filter (last 7 days) for fresh, high-value opportunities. ` +
               `Check company reviews for cultural fit assessment.`;
    }

    getExpectedResultStructure() {
        return {
            hasDirectApply: true,
            includesSalaryData: true,
            includesCompanyInfo: true,
            includesLocationData: true,
            includesCompanyReviews: true,
            includesSalaryInsights: true,
            requiresRegistration: false,
            supportsQuickApply: true,
            showsApplicationSource: true,
            providesMarketData: true
        };
    }

    /**
     * Indeed-specific search term optimization
     * @param {string} searchTerms - Original search terms
     * @returns {string} - Optimized search terms for Indeed
     */
    optimizeSearchTerms(searchTerms) {
        // Indeed works well with natural language and specific job titles
        const terms = searchTerms.toLowerCase();
        
        // Indeed-specific optimizations
        let optimized = terms
            .replace(/\bml\b/g, 'machine learning') // Expand ML abbreviation
            .replace(/\bai\b/g, 'artificial intelligence') // Expand AI abbreviation
            .replace(/\.net/g, '.NET') // Proper .NET capitalization
            .replace(/\bcto\b/g, '"Chief Technology Officer" OR CTO'); // Include both forms
        
        return optimized;
    }

    buildAdvancedSearchUrl(searchTerms, filters = {}) {
        const baseUrl = this.buildSearchUrl(searchTerms);
        const url = new URL(baseUrl);
        
        // Add advanced filters
        if (filters.salaryMin) {
            url.searchParams.set('fromage', '14'); // Extend date range for salary filter
            // Indeed uses salary in URL differently - typically added via UI
        }
        
        if (filters.jobType) {
            // fulltime, parttime, contract, internship, temporary
            url.searchParams.set('jt', filters.jobType);
        }
        
        if (filters.excludeAgencies) {
            // Add negative keywords to exclude recruitment agencies
            const currentQuery = url.searchParams.get('q');
            const excludeTerms = '-staffing -recruiting -"recruitment agency" -"talent acquisition"';
            url.searchParams.set('q', `${currentQuery} ${excludeTerms}`);
        }
        
        if (filters.directEmployerOnly) {
            url.searchParams.set('sr', 'directhire');
        }
        
        return url.toString();
    }

    /**
     * Build multiple search variations for comprehensive coverage
     * @param {Array} roleCategories - Different role categories to search
     * @returns {Array} - Multiple search URLs for different approaches
     */
    buildSearchVariations(roleCategories) {
        const variations = [];
        
        // Variation 1: Executive level searches
        const executiveTerms = roleCategories
            .filter(cat => cat.category === 'executive')
            .flatMap(cat => cat.titles)
            .join(' OR ');
        if (executiveTerms) {
            variations.push({
                name: 'Executive Roles',
                url: this.buildSearchUrl(`(${executiveTerms}) AND (AI OR ML OR ".NET" OR Azure) AND remote`),
                focus: 'C-level and VP positions'
            });
        }
        
        // Variation 2: Principal/Staff level
        const principalTerms = roleCategories
            .filter(cat => cat.category === 'principal')
            .flatMap(cat => cat.titles)
            .join(' OR ');
        if (principalTerms) {
            variations.push({
                name: 'Principal/Staff Roles',
                url: this.buildSearchUrl(`(${principalTerms}) AND (enterprise OR architecture) AND remote`),
                focus: 'Senior IC and principal positions'
            });
        }
        
        // Variation 3: Crisis/Consulting roles
        variations.push({
            name: 'Consulting/Crisis Resolution',
            url: this.buildSearchUrl('("technology consultant" OR "crisis resolution" OR "turnaround" OR "performance optimization") AND remote'),
            focus: 'Specialized consulting opportunities'
        });
        
        return variations;
    }

    /**
     * Get Indeed-specific market intelligence extraction strategy
     * @returns {Object} - Data extraction guidance
     */
    getMarketIntelligenceStrategy() {
        return {
            salaryData: {
                source: 'Indeed Salary Insights',
                reliability: 'High - based on actual job postings',
                extraction: 'Look for salary ranges in job titles and descriptions'
            },
            companyInsights: {
                source: 'Indeed Company Reviews',
                metrics: ['company rating', 'work-life balance', 'career opportunities'],
                extraction: 'Check company profile pages for employee feedback'
            },
            marketTrends: {
                indicators: ['posting frequency', 'salary trends', 'skill requirements'],
                tracking: 'Monitor search result counts and salary distributions over time'
            },
            competitorAnalysis: {
                approach: 'Compare similar role postings across different companies',
                focus: 'Requirements, compensation, and company positioning'
            }
        };
    }

    /**
     * Get Indeed-specific competitive advantages
     * @returns {Object} - Platform advantages for profile positioning
     */
    getCompetitiveAdvantages() {
        return {
            marketPositioning: [
                'Crisis resolution expertise addresses common pain points in job postings',
                'Quantifiable results (77% cost reduction) stand out in broad market',
                'Technical depth in .NET/AI differentiates from general architects'
            ],
            searchOptimization: [
                'Use specific technology combinations to reduce competition',
                'Target companies posting multiple senior positions (growth indicators)',
                'Focus on recent postings to avoid filled positions'
            ],
            applicationStrategy: [
                'Indeed Quick Apply for rapid application submission',
                'Company review analysis for cultural fit assessment',
                'Salary insight data for negotiation preparation'
            ]
        };
    }
}

module.exports = IndeedStrategy;