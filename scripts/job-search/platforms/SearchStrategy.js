/**
 * Abstract base class for platform search strategies
 * Defines the interface that all platform-specific search implementations must follow
 * Now uses configuration files instead of magic strings
 */
class SearchStrategy {
    constructor(platformConfig, userConfig = null) {
        if (this.constructor === SearchStrategy) {
            throw new Error('SearchStrategy is abstract and cannot be instantiated directly');
        }
        
        // Platform-specific configuration loaded from config files
        this.platformConfig = platformConfig;
        this.userConfig = userConfig;
        
        // Extract commonly used properties
        this.platformId = platformConfig.platform_id;
        this.name = platformConfig.display_name;
        this.baseUrl = platformConfig.base_url;
        this.searchEndpoint = platformConfig.search_endpoint;
        this.category = platformConfig.category;
        this.enabled = platformConfig.metadata?.enabled !== false;
        
        // Configuration sections
        this.urlParams = platformConfig.url_parameters || {};
        this.defaultValues = platformConfig.default_values || {};
        this.advancedFilters = platformConfig.advanced_filters || {};
        this.searchCapabilities = platformConfig.search_capabilities || {};
        this.specializationConfig = platformConfig.specialization || {};
        this.searchOptimizations = platformConfig.search_term_optimizations || {};
        this.competitiveAdvantagesConfig = platformConfig.competitive_advantages || {};
        
        // User overrides if provided
        this.userOverrides = userConfig?.platformPreferences?.platformSpecificSettings?.[this.platformId] || {};
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
     * Get platform-specific search parameters from configuration
     * @returns {Object} - Platform-specific search configuration
     */
    getSearchParameters() {
        return this.searchCapabilities;
    }

    /**
     * Validate search terms for platform compatibility
     * Uses configuration-defined limits and rules
     * @param {string} searchTerms - Search terms to validate
     * @returns {boolean} - Whether terms are valid for this platform
     */
    validateSearchTerms(searchTerms) {
        if (!searchTerms || searchTerms.trim().length === 0) {
            return false;
        }
        
        const maxLength = this.searchCapabilities.max_search_length || 500;
        return searchTerms.length <= maxLength;
    }

    /**
     * Get platform-specific specializations from configuration
     * @returns {Object} - Platform specialization information
     */
    getSpecialization() {
        return this.specializationConfig;
    }

    /**
     * Generate execution instructions for manual search from configuration
     * @param {string} searchUrl - Generated search URL
     * @returns {string} - Human-readable execution instructions
     */
    getExecutionInstructions(searchUrl) {
        const instructions = this.platformConfig.execution_instructions;
        if (!instructions) {
            return `Visit ${searchUrl} to execute search on ${this.name}`;
        }
        
        const steps = instructions.manual_steps || [];
        const tips = instructions.optimization_tips || [];
        
        let instructionText = `MANUAL SEARCH REQUIRED: Visit ${searchUrl} to execute search on ${this.name}.`;

        if (steps.length > 0) {
            instructionText += ` Steps: ${steps.join(', ')}.`;
        }
        
        if (tips.length > 0) {
            instructionText += ` Tips: ${tips.join(', ')}.`;
        }
        
        return instructionText;
    }

    /**
     * Get expected result structure from configuration
     * @returns {Object} - Expected result metadata
     */
    getExpectedResultStructure() {
        return this.platformConfig.result_structure || {
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
        return this.enabled && this.baseUrl && this.name;
    }

    /**
     * Get platform metadata for reporting
     * @returns {Object} - Platform metadata
     */
    getMetadata() {
        return {
            name: this.name,
            url: this.baseUrl,
            enabled: this.enabled,
            category: this.getSpecialization().category,
            specialization: this.getSpecialization(),
            searchParameters: this.getSearchParameters(),
            resultStructure: this.getExpectedResultStructure()
        };
    }
}

module.exports = SearchStrategy;