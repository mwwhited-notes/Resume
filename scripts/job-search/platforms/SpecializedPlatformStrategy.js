const SearchStrategy = require('./SearchStrategy');

/**
 * Generic specialized platform strategy for platforms with specific focus areas
 * Can be extended or configured for AI/ML, remote-first, startup, and other specialized platforms
 */
class SpecializedPlatformStrategy extends SearchStrategy {
    constructor(platformConfig) {
        super(platformConfig);
        this.focus = platformConfig.focus || 'general';
        this.specialization = platformConfig.specialization || '';
    }

    buildSearchUrl(searchTerms) {
        const encodedTerms = encodeURIComponent(searchTerms);
        
        // Platform-specific URL patterns based on known specialized platforms
        switch (this.name) {
            case 'Wellfound (AngelList)':
                return `https://wellfound.com/jobs?keywords=${encodedTerms}&remote=true&experience=senior`;
            
            case 'AIJobs.net':
                return `https://aijobs.net/job/search?q=${encodedTerms}&remote=1`;
            
            case 'Remote.co':
                return `https://remote.co/remote-jobs/search/?search_keywords=${encodedTerms}&location_type=anywhere`;
            
            case 'Built In':
                return `https://builtin.com/jobs/remote?search=${encodedTerms}`;
            
            case 'Toptal':
                return `https://www.toptal.com/freelance-jobs?keywords=${encodedTerms}&location=remote`;
            
            default:
                // Generic specialized platform URL construction
                const baseUrl = this.url || '';
                if (baseUrl.includes('/jobs')) {
                    return `${baseUrl}?q=${encodedTerms}&remote=true`;
                } else {
                    return `${baseUrl}/jobs?search=${encodedTerms}&location=remote`;
                }
        }
    }

    getSearchParameters() {
        const baseParams = {
            supportsRemoteFilter: true,
            supportsSalaryFilter: false,
            supportsDateFilter: false,
            defaultRadius: 0,
            maxResultsPerPage: 15
        };

        // Customize based on platform focus
        switch (this.focus) {
            case 'ai-ml':
                return {
                    ...baseParams,
                    aiMlSpecialized: true,
                    technologyFiltering: 'advanced',
                    skillMatching: true
                };
            
            case 'startup':
                return {
                    ...baseParams,
                    equityInformation: true,
                    companyStageFiltering: true,
                    founderAccess: true,
                    salaryEquityMix: true
                };
            
            case 'remote':
                return {
                    ...baseParams,
                    remoteFirst: true,
                    timezoneFiltering: true,
                    distributedTeamFocus: true
                };
            
            case 'contracting':
                return {
                    ...baseParams,
                    hourlyRates: true,
                    projectDuration: true,
                    skillScreening: true
                };
            
            default:
                return baseParams;
        }
    }

    getSpecialization() {
        const specializations = {
            'ai-ml': {
                category: 'ai-ml-specialist',
                strengths: [
                    'AI and Machine Learning focused positions',
                    'Deep technical skill matching',
                    'Research and applied AI opportunities',
                    'Startup to enterprise AI positions'
                ],
                idealFor: [
                    'AI/ML specialized roles',
                    'Research positions',
                    'Technical AI leadership',
                    'Emerging technology positions'
                ]
            },
            
            'startup': {
                category: 'startup-ecosystem',
                strengths: [
                    'Equity-based compensation opportunities',
                    'Direct founder and executive access',
                    'High-growth company positions',
                    'Innovation-focused roles'
                ],
                idealFor: [
                    'CTO and technical co-founder roles',
                    'Early-stage company leadership',
                    'Equity upside opportunities',
                    'Innovation and R&D positions'
                ]
            },
            
            'remote': {
                category: 'remote-specialist',
                strengths: [
                    '100% remote position guarantee',
                    'Distributed team expertise',
                    'Global opportunity access',
                    'Remote work culture focus'
                ],
                idealFor: [
                    'Fully remote positions',
                    'International opportunities',
                    'Distributed team leadership',
                    'Location-independent roles'
                ]
            },
            
            'contracting': {
                category: 'freelance-consulting',
                strengths: [
                    'High-value consulting engagements',
                    'Project-based opportunities',
                    'Flexible engagement terms',
                    'Specialized skill premiums'
                ],
                idealFor: [
                    'Fractional executive roles',
                    'Crisis resolution projects',
                    'Specialized consulting',
                    'High-rate contract work'
                ]
            }
        };

        return specializations[this.focus] || {
            category: 'specialized',
            strengths: ['Specialized focus area', 'Niche market coverage'],
            idealFor: ['Targeted opportunities']
        };
    }

    getExecutionInstructions(searchUrl) {
        const focusInstructions = {
            'ai-ml': 'Focus on AI/ML technical depth and research experience. Highlight publications, open source contributions, and technical innovation.',
            'startup': 'Emphasize leadership experience, crisis resolution, and ability to scale technical teams. Prepare for equity-focused conversations.',
            'remote': 'Highlight distributed team leadership and remote work experience. Emphasize communication and asynchronous collaboration skills.',
            'contracting': 'Prepare rate negotiations and project scoping. Emphasize proven results and crisis resolution case studies.'
        };

        const instruction = focusInstructions[this.focus] || 'Leverage platform specialization for targeted opportunities.';
        
        return `MANUAL SEARCH REQUIRED: Visit ${searchUrl} to execute search on ${this.name}. ${instruction}`;
    }

    getExpectedResultStructure() {
        const baseStructure = {
            hasDirectApply: true,
            includesCompanyInfo: true,
            includesLocationData: true,
            requiresRegistration: false
        };

        // Customize based on focus
        switch (this.focus) {
            case 'startup':
                return {
                    ...baseStructure,
                    includesEquityInfo: true,
                    includesCompanyStage: true,
                    founderProfiles: true,
                    fundingInformation: true
                };
            
            case 'contracting':
                return {
                    ...baseStructure,
                    includesHourlyRates: true,
                    projectDuration: true,
                    skillScreening: true,
                    clientInformation: true
                };
            
            default:
                return {
                    ...baseStructure,
                    specializedFocus: true
                };
        }
    }

    /**
     * Get platform-specific competitive advantages based on focus area
     */
    getCompetitiveAdvantages() {
        const advantages = {
            'ai-ml': {
                technical: [
                    'Pure .NET AI/ML implementation without Python dependencies',
                    'SQL Server vector extensions ahead of market trends',
                    'Enterprise AI architecture experience'
                ],
                positioning: 'Unique .NET AI expertise in Python-dominated market'
            },
            
            'startup': {
                leadership: [
                    'Crisis resolution expertise for failing startups',
                    'Fractional CTO experience with resource constraints',
                    'Proven ability to scale teams and technology'
                ],
                positioning: 'Experienced technical leader for high-growth challenges'
            },
            
            'remote': {
                experience: [
                    'Distributed team leadership across multiple time zones',
                    'Remote crisis resolution and performance optimization',
                    'Asynchronous communication and documentation expertise'
                ],
                positioning: 'Remote-first technical leadership with proven results'
            },
            
            'contracting': {
                expertise: [
                    '77% cost reduction and rapid delivery case studies',
                    'Crisis resolution specialization for urgent projects',
                    'Enterprise architecture for large-scale transformations'
                ],
                positioning: 'High-value consultant for critical technical challenges'
            }
        };

        return advantages[this.focus] || {
            general: ['Specialized platform expertise', 'Niche market understanding'],
            positioning: 'Targeted expertise for specialized opportunities'
        };
    }

    /**
     * Build focus-specific search variations
     */
    buildFocusSpecificSearches() {
        const searches = [];
        
        switch (this.focus) {
            case 'ai-ml':
                searches.push({
                    name: 'AI Architecture',
                    terms: '"AI Architect" OR "ML Architect" OR "AI Platform" OR "Machine Learning Platform"',
                    focus: 'AI infrastructure and platform roles'
                });
                break;
            
            case 'startup':
                searches.push({
                    name: 'Technical Leadership',
                    terms: 'CTO OR "VP Engineering" OR "Head of Engineering" OR "Technical Co-founder"',
                    focus: 'Senior technical leadership in startups'
                });
                break;
            
            case 'contracting':
                searches.push({
                    name: 'Crisis Resolution',
                    terms: '"crisis resolution" OR "performance optimization" OR "technical turnaround" OR "rescue project"',
                    focus: 'Specialized crisis and optimization consulting'
                });
                break;
        }
        
        return searches;
    }
}

module.exports = SpecializedPlatformStrategy;