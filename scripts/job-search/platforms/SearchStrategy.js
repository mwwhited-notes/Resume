/**
 * Abstract base class for platform search strategies
 * Defines the interface that all platform-specific search implementations must follow
 */
class SearchStrategy {
    constructor(platformConfig) {
        if (this.constructor === SearchStrategy) {
            throw new Error('SearchStrategy is abstract and cannot be instantiated directly');
        }
        this.config = platformConfig;
        this.name = platformConfig.name;
        this.url = platformConfig.url;
        this.enabled = platformConfig.enabled !== false;
    }

    /**
     * Generate platform-specific search URL
     * Must be implemented by concrete strategy classes
     * @param {string} searchTerms - Encoded search terms
     * @returns {string} - Platform-specific search URL
     */
    buildSearchUrl(searchTerms) {
        throw new Error('buildSearchUrl() must be implemented by concrete strategy class');
    }

    /**
     * Get platform-specific search parameters
     * Can be overridden by concrete classes for custom behavior
     * @returns {Object} - Platform-specific search configuration
     */
    getSearchParameters() {
        return {
            supportsRemoteFilter: true,
            supportsSalaryFilter: false,
            supportsDateFilter: false,
            defaultRadius: 25,
            maxResultsPerPage: 20
        };
    }

    /**
     * Validate search terms for platform compatibility
     * Can be overridden for platform-specific validation
     * @param {string} searchTerms - Search terms to validate
     * @returns {boolean} - Whether terms are valid for this platform
     */
    validateSearchTerms(searchTerms) {
        if (!searchTerms || searchTerms.trim().length === 0) {
            return false;
        }
        // Basic validation - most platforms support standard terms
        return searchTerms.length <= 500; // Reasonable URL length limit
    }

    /**
     * Get platform-specific specializations and focus areas
     * Override in concrete classes to specify platform strengths
     * @returns {Object} - Platform specialization information
     */
    getSpecialization() {
        return {
            category: 'general',
            strengths: ['general job search'],
            idealFor: ['broad market coverage'],
            limitations: []
        };
    }

    /**
     * Generate execution instructions for manual search
     * Override in concrete classes for platform-specific guidance
     * @param {string} searchUrl - Generated search URL
     * @returns {string} - Human-readable execution instructions
     */
    getExecutionInstructions(searchUrl) {
        return `Visit ${searchUrl} to execute search on ${this.name}`;
    }

    /**
     * Get expected result structure for this platform
     * Override in concrete classes to specify platform-specific data structure
     * @returns {Object} - Expected result metadata
     */
    getExpectedResultStructure() {
        return {
            hasDirectApply: false,
            includesSalaryData: false,
            includesCompanyInfo: true,
            includesLocationData: true,
            requiresRegistration: false
        };
    }

    /**
     * Check if platform is currently enabled and accessible
     * @returns {boolean} - Platform availability status
     */
    isAvailable() {
        return this.enabled && this.url && this.name;
    }

    /**
     * Get platform metadata for reporting
     * @returns {Object} - Platform metadata
     */
    getMetadata() {
        return {
            name: this.name,
            url: this.url,
            enabled: this.enabled,
            category: this.getSpecialization().category,
            specialization: this.getSpecialization(),
            searchParameters: this.getSearchParameters(),
            resultStructure: this.getExpectedResultStructure()
        };
    }
}

module.exports = SearchStrategy;