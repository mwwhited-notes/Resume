const fs = require('fs').promises;
const path = require('path');

/**
 * Configuration loader utility for managing platform-specific and user configurations
 * Separates concerns between platform definitions and user preferences
 */
class ConfigurationLoader {
    constructor(configDir) {
        // Always require configDir to be explicitly passed
        if (!configDir) {
            throw new Error('ConfigurationLoader requires configDir parameter');
        }
        this.configDir = configDir;
        this.platformsDir = path.join(configDir, 'platforms');
        this.cache = new Map();
    }

    /**
     * Load user-specific configuration
     * @returns {Object} User configuration object
     */
    async loadUserConfig() {
        const configPath = path.join(this.configDir, 'user-config.json');
        return this.loadJsonFile(configPath, 'user-config');
    }

    /**
     * Load platform definitions mapping
     * @returns {Object} Platform definitions object
     */
    async loadPlatformDefinitions() {
        const configPath = path.join(this.configDir, 'platforms.json');
        return this.loadJsonFile(configPath, 'platforms');
    }

    /**
     * Load specific platform configuration
     * @param {string} platformId - Platform identifier (e.g., 'linkedin_jobs')
     * @returns {Object} Platform-specific configuration
     */
    async loadPlatformConfig(platformId) {
        const cacheKey = `platform_${platformId}`;
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Get platform definition to find config file
        const platformDefinitions = await this.loadPlatformDefinitions();
        const platformDef = platformDefinitions.platformDefinitions[platformId];
        
        if (!platformDef) {
            throw new Error(`Platform definition not found for: ${platformId}`);
        }

        const configPath = path.join(this.platformsDir, platformDef.configFile);
        const config = await this.loadJsonFile(configPath, cacheKey);
        
        // Merge with platform definition metadata
        config.metadata = {
            platformId: platformId,
            enabled: platformDef.enabled,
            priority: platformDef.priority,
            focus: platformDef.focus || null
        };

        return config;
    }

    /**
     * Load all enabled platform configurations
     * @returns {Array} Array of platform configuration objects
     */
    async loadAllPlatformConfigs() {
        const platformDefinitions = await this.loadPlatformDefinitions();
        const configs = [];

        for (const [platformId, definition] of Object.entries(platformDefinitions.platformDefinitions)) {
            if (definition.enabled) {
                try {
                    const config = await this.loadPlatformConfig(platformId);
                    configs.push(config);
                } catch (error) {
                    console.warn(`Failed to load platform config for ${platformId}: ${error.message}`);
                }
            }
        }

        // Sort by priority
        return configs.sort((a, b) => (a.metadata?.priority || 999) - (b.metadata?.priority || 999));
    }

    /**
     * Get merged configuration combining user preferences with platform configs
     * @returns {Object} Complete configuration object
     */
    async loadCompleteConfiguration() {
        const [userConfig, platformDefinitions, platformConfigs] = await Promise.all([
            this.loadUserConfig(),
            this.loadPlatformDefinitions(),
            this.loadAllPlatformConfigs()
        ]);

        return {
            user: userConfig,
            platforms: {
                definitions: platformDefinitions,
                configs: platformConfigs
            },
            metadata: {
                loadedAt: new Date().toISOString(),
                platformCount: platformConfigs.length,
                enabledPlatforms: platformConfigs.map(p => p.platform_id)
            }
        };
    }

    /**
     * Get platform configurations filtered by focus area
     * @param {string} focusArea - Focus area (e.g., 'ai-ml', 'startup', 'remote')
     * @returns {Array} Filtered platform configurations
     */
    async getPlatformsByFocus(focusArea) {
        const platformDefinitions = await this.loadPlatformDefinitions();
        const focusPlatforms = platformDefinitions.focusAreas[focusArea] || [];
        
        const configs = [];
        for (const platformId of focusPlatforms) {
            try {
                const config = await this.loadPlatformConfig(platformId);
                configs.push(config);
            } catch (error) {
                console.warn(`Failed to load ${platformId}: ${error.message}`);
            }
        }

        return configs;
    }

    /**
     * Get platform recommendations based on user criteria
     * @param {Object} userConfig - User configuration
     * @returns {Array} Recommended platform configurations with reasoning
     */
    async getRecommendedPlatforms(userConfig = null) {
        if (!userConfig) {
            userConfig = await this.loadUserConfig();
        }

        const platformDefinitions = await this.loadPlatformDefinitions();
        const recommendations = [];

        // Apply recommendation rules
        const rules = platformDefinitions.recommendationRules;
        
        // Check for executive roles
        const hasExecutiveRoles = userConfig.searchCriteria.targetRoles.some(role => 
            role.category === 'executive'
        );
        if (hasExecutiveRoles) {
            const rule = rules.executive_roles;
            for (const platformId of rule.platforms) {
                recommendations.push({
                    platformId,
                    priority: rule.priority,
                    reason: rule.reason,
                    rule: 'executive_roles'
                });
            }
        }

        // Check for technical specialization
        const hasTechnicalFocus = userConfig.searchCriteria.technologies.some(tech =>
            tech.toLowerCase().includes('ai') || 
            tech.toLowerCase().includes('ml') ||
            tech.toLowerCase().includes('.net')
        );
        if (hasTechnicalFocus) {
            const rule = rules.technical_specialization;
            for (const platformId of rule.platforms) {
                recommendations.push({
                    platformId,
                    priority: rule.priority, 
                    reason: rule.reason,
                    rule: 'technical_specialization'
                });
            }
        }

        // Check for remote work preference
        if (userConfig.userProfile.location.preferredWork === 'remote') {
            const rule = rules.remote_work;
            for (const platformId of rule.platforms) {
                recommendations.push({
                    platformId,
                    priority: rule.priority,
                    reason: rule.reason,
                    rule: 'remote_work'
                });
            }
        }

        // Check for high salary requirements
        if (userConfig.userProfile.preferences.minSalary >= 180000) {
            const rule = rules.high_salary;
            for (const platformId of rule.platforms) {
                recommendations.push({
                    platformId,
                    priority: rule.priority,
                    reason: rule.reason,
                    rule: 'high_salary'
                });
            }
        }

        // Remove duplicates and sort by priority
        const uniqueRecommendations = recommendations.reduce((acc, rec) => {
            const existing = acc.find(r => r.platformId === rec.platformId);
            if (existing) {
                // Merge reasons and use highest priority
                existing.reasons = [...(existing.reasons || [existing.reason]), rec.reason];
                existing.rules = [...(existing.rules || [existing.rule]), rec.rule];
                if (this.getPriorityWeight(rec.priority) > this.getPriorityWeight(existing.priority)) {
                    existing.priority = rec.priority;
                }
            } else {
                acc.push({
                    ...rec,
                    reasons: [rec.reason],
                    rules: [rec.rule]
                });
            }
            return acc;
        }, []);

        return uniqueRecommendations.sort((a, b) => 
            this.getPriorityWeight(b.priority) - this.getPriorityWeight(a.priority)
        );
    }

    /**
     * Validate platform configuration
     * @param {Object} platformConfig - Platform configuration to validate
     * @returns {Object} Validation result
     */
    validatePlatformConfig(platformConfig) {
        const errors = [];
        const warnings = [];

        // Required fields
        if (!platformConfig.platform_id) errors.push('Missing platform_id');
        if (!platformConfig.display_name) errors.push('Missing display_name');
        if (!platformConfig.base_url) errors.push('Missing base_url');
        if (!platformConfig.search_endpoint) warnings.push('Missing search_endpoint');

        // URL format validation
        if (platformConfig.base_url && !this.isValidUrl(platformConfig.base_url)) {
            errors.push('Invalid base_url format');
        }

        // Required sections
        if (!platformConfig.url_parameters) warnings.push('Missing url_parameters section');
        if (!platformConfig.search_capabilities) warnings.push('Missing search_capabilities section');
        if (!platformConfig.specialization) warnings.push('Missing specialization section');

        return {
            isValid: errors.length === 0,
            errors,
            warnings
        };
    }

    /**
     * Get platform configuration with user-specific overrides applied
     * @param {string} platformId - Platform identifier
     * @param {Object} userConfig - User configuration (optional)
     * @returns {Object} Platform configuration with user overrides
     */
    async getPlatformConfigWithOverrides(platformId, userConfig = null) {
        if (!userConfig) {
            userConfig = await this.loadUserConfig();
        }

        const platformConfig = await this.loadPlatformConfig(platformId);
        const userOverrides = userConfig.platformPreferences?.platformSpecificSettings?.[platformId] || {};

        // Apply user overrides
        return {
            ...platformConfig,
            userOverrides,
            enabled: userConfig.platformPreferences?.enabledPlatforms?.[platformId] ?? platformConfig.metadata.enabled
        };
    }

    /**
     * Private helper methods
     */
    async loadJsonFile(filePath, cacheKey) {
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        try {
            const content = await fs.readFile(filePath, 'utf8');
            const data = JSON.parse(content);
            this.cache.set(cacheKey, data);
            return data;
        } catch (error) {
            throw new Error(`Failed to load configuration from ${filePath}: ${error.message}`);
        }
    }

    isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    getPriorityWeight(priority) {
        const weights = { high: 3, medium: 2, low: 1 };
        return weights[priority] || 0;
    }

    /**
     * Clear configuration cache
     */
    clearCache() {
        this.cache.clear();
    }

    /**
     * Reload configuration by clearing cache
     */
    async reloadConfiguration() {
        this.clearCache();
        return this.loadCompleteConfiguration();
    }
}

module.exports = ConfigurationLoader;