const SearchStrategy = require('./SearchStrategy');

/**
 * Dice search strategy implementation
 * Specializes in technology-focused positions with deep technical filtering
 */
class DiceStrategy extends SearchStrategy {
    constructor(platformConfig) {
        super(platformConfig);
    }

    buildSearchUrl(searchTerms) {
        const encodedTerms = encodeURIComponent(searchTerms);
        return `https://www.dice.com/jobs?q=${encodedTerms}&location=Remote&radius=30&radiusUnit=mi&page=1&pageSize=20&filters.postedDate=ONE&filters.workFromHomeAvailability=1`;
    }

    getSearchParameters() {
        return {
            supportsRemoteFilter: true,
            supportsSalaryFilter: true,
            supportsDateFilter: true,
            supportsTechnologyFilter: true,
            supportsSecurityClearance: true,
            defaultRadius: 30,
            maxResultsPerPage: 20,
            sortOptions: ['relevance', 'date'],
            technologyFocus: true,
            contractAndPerm: true
        };
    }

    getSpecialization() {
        return {
            category: 'technology-specialist',
            strengths: [
                'Deep technology-focused job board',
                'Comprehensive technical skill filtering',
                'Contract and permanent position coverage',
                'Security clearance job specialization',
                'Detailed technology requirement specifications',
                'Direct IT recruiter relationships'
            ],
            idealFor: [
                'Technology-specific role targeting',
                'Contract and consulting opportunities',
                'Detailed technical requirement matching',
                'IT consulting and services positions',
                'Government contractor positions (if clearance desired)'
            ],
            limitations: [
                'Limited non-technical role coverage',
                'Heavy focus on contract positions',
                'Recruiter-heavy environment',
                'Less executive-level positioning'
            ]
        };
    }

    getExecutionInstructions(searchUrl) {
        return `MANUAL SEARCH REQUIRED: Visit ${searchUrl} to execute search on Dice. ` +
               `Use advanced technology filters (.NET, AI/ML, Azure, Enterprise Architecture). ` +
               `Filter by employment type (Permanent vs Contract) based on preference. ` +
               `Focus on direct employer postings over recruiter submissions for quality opportunities.`;
    }

    getExpectedResultStructure() {
        return {
            hasDirectApply: true,
            includesSalaryData: true,
            includesCompanyInfo: true,
            includesLocationData: true,
            detailedTechRequirements: true,
            contractDetails: true,
            requiresRegistration: false,
            recruiterHeavy: true,
            securityClearanceInfo: true,
            technologySpecific: true
        };
    }

    /**
     * Dice-specific search term optimization for technical roles
     */
    optimizeSearchTerms(searchTerms) {
        // Dice performs better with specific technical terms and certifications
        return searchTerms
            .replace(/\bai\b/gi, '"Artificial Intelligence"')
            .replace(/\bml\b/gi, '"Machine Learning"')
            .replace(/\.net/gi, '.NET')
            .replace(/\bazure\b/gi, '"Microsoft Azure"')
            .replace(/\benterprise\b/gi, '"Enterprise Architecture"');
    }

    buildAdvancedSearchUrl(searchTerms, filters = {}) {
        const baseUrl = this.buildSearchUrl(searchTerms);
        const url = new URL(baseUrl);
        
        if (filters.employmentType) {
            // CONTRACTS, FULLTIME, PARTTIME
            url.searchParams.set('filters.employmentType', filters.employmentType);
        }
        
        if (filters.excludeContracts) {
            url.searchParams.set('filters.employmentType', 'FULLTIME');
        }
        
        if (filters.experienceLevel) {
            // Senior level filtering
            url.searchParams.set('filters.experienceLevel', 'SENIOR');
        }
        
        if (filters.salaryMin) {
            url.searchParams.set('filters.annualSalaryMin', filters.salaryMin);
        }
        
        return url.toString();
    }

    /**
     * Build technology-specific search variations
     */
    buildTechnologySearches(technologies) {
        const searches = [];
        
        // .NET ecosystem search
        searches.push({
            name: '.NET Architecture',
            url: this.buildSearchUrl('(".NET" OR "C#") AND ("architect" OR "principal") AND ("AI" OR "ML" OR "enterprise")'),
            focus: '.NET-specific architecture roles'
        });
        
        // AI/ML specific search
        searches.push({
            name: 'AI/ML Engineering',
            url: this.buildSearchUrl('"Machine Learning" OR "Artificial Intelligence" AND ("architect" OR "engineer" OR "principal")'),
            focus: 'AI/ML specialized positions'
        });
        
        // Enterprise architecture search
        searches.push({
            name: 'Enterprise Architecture',
            url: this.buildSearchUrl('"Enterprise Architect" OR "Solution Architect" AND ("Azure" OR "cloud" OR "microservices")'),
            focus: 'Large-scale architecture roles'
        });
        
        return searches;
    }

    getCompetitiveAdvantages() {
        return {
            technicalDepth: [
                'Deep .NET and AI/ML expertise matches Dice\'s technical focus',
                'Enterprise architecture experience aligns with platform\'s enterprise clients',
                'Performance optimization skills address common technical challenges'
            ],
            platformAlignment: [
                'Technical authority (Stack Overflow, NuGet) resonates with Dice audience',
                'Crisis resolution expertise valuable for IT consulting positions',
                'Framework development experience attractive to technology companies'
            ],
            searchStrategy: [
                'Use specific technology combinations to reduce competition',
                'Target permanent positions for career stability',
                'Focus on direct employer postings over recruiter submissions',
                'Leverage detailed technical requirements for precise matching'
            ]
        };
    }

    /**
     * Get contract vs permanent position analysis
     */
    getEmploymentTypeStrategy() {
        return {
            permanent: {
                advantages: ['Career stability', 'Benefits package', 'Long-term growth'],
                searchStrategy: 'Filter for FULLTIME employment type',
                salaryExpectations: '$180K+ annual salary'
            },
            contract: {
                advantages: ['Higher hourly rates', 'Flexible engagements', 'Diverse projects'],
                searchStrategy: 'Filter for CONTRACTS employment type',
                rateExpectations: '$85+ per hour minimum'
            },
            recommendation: 'Focus on permanent positions for primary search, monitor high-value contracts ($100+/hour) for strategic opportunities'
        };
    }
}

module.exports = DiceStrategy;