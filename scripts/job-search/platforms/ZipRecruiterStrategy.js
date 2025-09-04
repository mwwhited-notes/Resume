const SearchStrategy = require('./SearchStrategy');

/**
 * ZipRecruiter search strategy implementation
 * Specializes in AI-powered matching and rapid application processes
 */
class ZipRecruiterStrategy extends SearchStrategy {
    constructor(platformConfig) {
        super(platformConfig);
    }

    buildSearchUrl(searchTerms) {
        const encodedTerms = encodeURIComponent(searchTerms);
        return `https://www.ziprecruiter.com/jobs/search?search=${encodedTerms}&location=Remote&radius=25&days=7&refine_by_salary=180000`;
    }

    getSearchParameters() {
        return {
            supportsRemoteFilter: true,
            supportsSalaryFilter: true,
            supportsDateFilter: true,
            aiPoweredMatching: true,
            oneClickApply: true,
            defaultRadius: 25,
            maxResultsPerPage: 20,
            sortOptions: ['relevance', 'date', 'salary'],
            salaryTransparency: 'high'
        };
    }

    getSpecialization() {
        return {
            category: 'ai-matching',
            strengths: [
                'AI-powered job matching algorithm',
                'One-click application process',
                'Salary transparency and filtering',
                'Mobile-first user experience',
                'Direct recruiter connections',
                'Real-time application tracking'
            ],
            idealFor: [
                'Quick application processes',
                'Salary-focused job searching',
                'Mobile job searching',
                'AI-optimized profile matching',
                'Rapid response from recruiters'
            ],
            limitations: [
                'Smaller job volume compared to major aggregators',
                'Less detailed company information',
                'Limited advanced filtering options'
            ]
        };
    }

    getExecutionInstructions(searchUrl) {
        return `MANUAL SEARCH REQUIRED: Visit ${searchUrl} to execute search on ZipRecruiter. ` +
               `Leverage AI matching by completing detailed profile. Use one-click apply for rapid submissions. ` +
               `Filter by salary ($180K+) and set up job alerts for matching positions. ` +
               `Monitor mobile app for real-time recruiter messages.`;
    }

    getExpectedResultStructure() {
        return {
            hasDirectApply: true,
            includesSalaryData: true,
            includesCompanyInfo: true,
            includesLocationData: true,
            oneClickApply: true,
            aiMatchingScore: true,
            requiresRegistration: true,
            mobileOptimized: true,
            realTimeNotifications: true,
            recruiterMessaging: true
        };
    }

    /**
     * ZipRecruiter-specific search optimization for AI matching
     */
    optimizeSearchTerms(searchTerms) {
        // ZipRecruiter's AI works better with natural language and skills
        return searchTerms
            .replace(/\bcto\b/gi, 'Chief Technology Officer')
            .replace(/\bml\b/gi, 'Machine Learning')
            .replace(/\bai\b/gi, 'Artificial Intelligence')
            .replace(/\.net/gi, '.NET Framework');
    }

    buildAdvancedSearchUrl(searchTerms, filters = {}) {
        const baseUrl = this.buildSearchUrl(searchTerms);
        const url = new URL(baseUrl);
        
        if (filters.experienceLevel === 'senior') {
            url.searchParams.set('refine_by_title', 'senior,principal,staff,lead');
        }
        
        if (filters.jobType) {
            url.searchParams.set('refine_by_employment_type', filters.jobType);
        }
        
        return url.toString();
    }

    getCompetitiveAdvantages() {
        return {
            aiOptimization: [
                'Complete detailed profile for better AI matching scores',
                'Use specific technology combinations in profile keywords',
                'Quantified achievements improve matching algorithm performance'
            ],
            rapidResponse: [
                'One-click apply enables quick response to time-sensitive positions',
                'Mobile notifications provide first-mover advantage',
                'Direct recruiter messaging bypasses traditional application queues'
            ],
            salaryNegotiation: [
                'Transparent salary data supports negotiation position',
                'Market rate visibility across similar positions',
                'Real-time salary trend information'
            ]
        };
    }
}

module.exports = ZipRecruiterStrategy;