const SearchStrategy = require('./SearchStrategy');

/**
 * LinkedIn Jobs search strategy implementation
 * Specializes in professional network-based job searching with advanced filtering
 */
class LinkedInJobsStrategy extends SearchStrategy {
    constructor(platformConfig) {
        super(platformConfig);
    }

    buildSearchUrl(searchTerms) {
        const encodedTerms = encodeURIComponent(searchTerms);
        // LinkedIn Jobs specific URL structure with remote work filter (f_WT=2)
        return `https://www.linkedin.com/jobs/search/?keywords=${encodedTerms}&location=Remote&f_WT=2&sortBy=DD`;
    }

    getSearchParameters() {
        return {
            supportsRemoteFilter: true,
            supportsSalaryFilter: true,
            supportsDateFilter: true,
            supportsExperienceLevel: true,
            supportsCompanySize: true,
            defaultRadius: 25,
            maxResultsPerPage: 25,
            sortOptions: ['date', 'relevance'],
            advancedFilters: [
                'experience_level',
                'company_size', 
                'job_type',
                'industry',
                'salary_range'
            ]
        };
    }

    getSpecialization() {
        return {
            category: 'professional-network',
            strengths: [
                'Professional networking integration',
                'Company insights and employee connections',
                'Advanced filtering options',
                'Salary transparency',
                'Direct recruiter contact',
                'Company culture information'
            ],
            idealFor: [
                'Senior and executive positions',
                'Professional services roles',
                'Enterprise companies',
                'Network-based referrals',
                'Company research and due diligence'
            ],
            limitations: [
                'Requires LinkedIn profile optimization',
                'Premium features may require subscription',
                'High competition for visible positions'
            ]
        };
    }

    getExecutionInstructions(searchUrl) {
        return `MANUAL SEARCH REQUIRED: Visit ${searchUrl} to execute search on LinkedIn Jobs. ` +
               `Use advanced filters for experience level (Senior/Executive), company size, and salary range. ` +
               `Review company profiles and employee networks for referral opportunities.`;
    }

    getExpectedResultStructure() {
        return {
            hasDirectApply: true,
            includesSalaryData: true,
            includesCompanyInfo: true,
            includesLocationData: true,
            includesEmployeeCount: true,
            includesCompanyInsights: true,
            requiresRegistration: true,
            supportsEasyApply: true,
            providesNetworkConnections: true,
            showsApplicationCount: true
        };
    }

    /**
     * LinkedIn-specific search term optimization
     * @param {string} searchTerms - Original search terms
     * @returns {string} - Optimized search terms for LinkedIn
     */
    optimizeSearchTerms(searchTerms) {
        // LinkedIn performs better with quoted exact phrases and boolean operators
        const terms = searchTerms.split(' ');
        const optimized = [];
        
        // Group related terms
        const jobTitles = ['CTO', 'Principal', 'Architect', 'VP', 'Director', 'Staff', 'Senior'];
        const technologies = ['AI', 'ML', '.NET', 'Azure', 'Enterprise'];
        
        // Add job title phrases in quotes
        const titleTerms = terms.filter(term => 
            jobTitles.some(title => term.toLowerCase().includes(title.toLowerCase()))
        );
        if (titleTerms.length > 1) {
            optimized.push(`"${titleTerms.join(' ')}"`);
        } else {
            optimized.push(...titleTerms);
        }
        
        // Add technology terms
        const techTerms = terms.filter(term => 
            technologies.some(tech => term.toLowerCase().includes(tech.toLowerCase()))
        );
        optimized.push(...techTerms);
        
        // Add remaining terms
        const remainingTerms = terms.filter(term => 
            !titleTerms.includes(term) && !techTerms.includes(term)
        );
        optimized.push(...remainingTerms);
        
        return optimized.join(' ');
    }

    buildAdvancedSearchUrl(searchTerms, filters = {}) {
        const baseUrl = this.buildSearchUrl(searchTerms);
        const params = new URLSearchParams(baseUrl.split('?')[1]);
        
        // Add advanced filters
        if (filters.experienceLevel) {
            // 2=Associate, 3=Mid-Senior, 4=Director, 5=Executive
            const expLevels = {
                'senior': '3,4',
                'executive': '4,5',
                'principal': '3,4'
            };
            if (expLevels[filters.experienceLevel.toLowerCase()]) {
                params.set('f_E', expLevels[filters.experienceLevel.toLowerCase()]);
            }
        }
        
        if (filters.salaryMin) {
            // LinkedIn salary filter format
            params.set('f_SB2', filters.salaryMin.toString());
        }
        
        if (filters.companySize) {
            // A=1-10, B=11-50, C=51-200, D=201-500, E=501-1000, F=1001-5000, G=5001-10000, H=10001+
            const sizeMap = {
                'startup': 'A,B,C',
                'medium': 'D,E',
                'large': 'F,G,H',
                'enterprise': 'G,H'
            };
            if (sizeMap[filters.companySize.toLowerCase()]) {
                params.set('f_C', sizeMap[filters.companySize.toLowerCase()]);
            }
        }
        
        return `${baseUrl.split('?')[0]}?${params.toString()}`;
    }

    /**
     * Get LinkedIn-specific competitive advantages analysis
     * @returns {Object} - Platform-specific advantages
     */
    getCompetitiveAdvantages() {
        return {
            networkEffects: [
                '22K+ Stack Overflow reputation provides technical credibility',
                '657K+ NuGet downloads demonstrate community impact',
                'Professional network can provide referrals and introductions'
            ],
            platformSpecific: [
                'LinkedIn profile optimization showcases technical leadership',
                'Company employee connections enable warm introductions',
                'Technical content sharing demonstrates thought leadership',
                'Recruiter InMail provides direct access to hiring managers'
            ],
            searchStrategy: [
                'Use boolean search operators for precise targeting',
                'Filter by company size and industry for culture fit',
                'Leverage salary transparency for negotiation data',
                'Monitor company updates for timing opportunities'
            ]
        };
    }
}

module.exports = LinkedInJobsStrategy;