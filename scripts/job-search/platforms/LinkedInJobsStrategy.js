const SearchStrategy = require('./SearchStrategy');

/**
 * LinkedIn Jobs search strategy implementation
 * Uses configuration files instead of magic strings
 */
class LinkedInJobsStrategy extends SearchStrategy {
    constructor(platformConfig, userConfig = null) {
        super(platformConfig, userConfig);
    }

    buildSearchUrl(searchTerms) {
        const encodedTerms = encodeURIComponent(searchTerms);
        const params = new URLSearchParams();
        
        // Use configured parameter names
        params.set(this.urlParams.keywords, encodedTerms);
        params.set(this.urlParams.location, this.defaultValues.location);
        params.set(this.urlParams.remote_filter, this.defaultValues.remote_filter);
        params.set(this.urlParams.sort, this.defaultValues.sort);
        
        // Apply user overrides if available
        if (this.userOverrides.preferredExperienceLevel) {
            const expLevel = this.advancedFilters.experience_levels[this.userOverrides.preferredExperienceLevel];
            if (expLevel) {
                params.set(this.urlParams.experience_level, expLevel);
            }
        }
        
        if (this.userOverrides.preferredCompanySize) {
            const companySize = this.advancedFilters.company_sizes[this.userOverrides.preferredCompanySize];
            if (companySize) {
                params.set(this.urlParams.company_size, companySize);
            }
        }
        
        return `${this.baseUrl}${this.searchEndpoint}?${params.toString()}`;
    }

    /**
     * LinkedIn-specific search term optimization using configuration
     * @param {string} searchTerms - Original search terms
     * @returns {string} - Optimized search terms for LinkedIn
     */
    optimizeSearchTerms(searchTerms) {
        if (!this.searchOptimizations.technology_terms?.expand_abbreviations) {
            return searchTerms;
        }
        
        let optimized = searchTerms;
        const expansions = this.searchOptimizations.technology_terms.expand_abbreviations;
        
        // Apply configured abbreviation expansions
        for (const [abbrev, expansion] of Object.entries(expansions)) {
            const regex = new RegExp(`\\b${abbrev}\\b`, 'gi');
            optimized = optimized.replace(regex, expansion);
        }
        
        return optimized;
    }

    buildAdvancedSearchUrl(searchTerms, filters = {}) {
        const baseUrl = this.buildSearchUrl(searchTerms);
        const url = new URL(baseUrl);
        
        // Add advanced filters using configuration
        if (filters.experienceLevel) {
            const expLevel = this.advancedFilters.experience_levels[filters.experienceLevel.toLowerCase()];
            if (expLevel) {
                url.searchParams.set(this.urlParams.experience_level, expLevel);
            }
        }
        
        if (filters.salaryMin) {
            url.searchParams.set(this.urlParams.salary_min, filters.salaryMin.toString());
        }
        
        if (filters.companySize) {
            const companySize = this.advancedFilters.company_sizes[filters.companySize.toLowerCase()];
            if (companySize) {
                url.searchParams.set(this.urlParams.company_size, companySize);
            }
        }
        
        return url.toString();
    }

    /**
     * Get LinkedIn-specific competitive advantages from configuration
     * @returns {Object} - Platform-specific advantages
     */
    getCompetitiveAdvantages() {
        return this.competitiveAdvantagesConfig;
    }
}

module.exports = LinkedInJobsStrategy;