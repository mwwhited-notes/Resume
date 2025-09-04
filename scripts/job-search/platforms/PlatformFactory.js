const LinkedInJobsStrategy = require('./LinkedInJobsStrategy');
const IndeedStrategy = require('./IndeedStrategy');
const ZipRecruiterStrategy = require('./ZipRecruiterStrategy');
const DiceStrategy = require('./DiceStrategy');
const SpecializedPlatformStrategy = require('./SpecializedPlatformStrategy');
const ConfigurationLoader = require('../config/ConfigurationLoader');

/**
 * Factory class for creating appropriate search strategy instances
 * Now uses ConfigurationLoader instead of magic strings
 */
class PlatformFactory {
    constructor(configDir = null) {
        this.configLoader = new ConfigurationLoader(configDir);
    }

    /**
     * Create appropriate search strategy based on platform ID and user config
     * @param {string} platformId - Platform identifier (e.g., 'linkedin_jobs')
     * @param {Object} userConfig - User configuration (optional)
     * @returns {SearchStrategy} - Concrete search strategy instance
     */
    async createStrategy(platformId, userConfig = null) {
        const platformConfig = await this.configLoader.getPlatformConfigWithOverrides(platformId, userConfig);
        
        return this.createStrategyFromConfig(platformConfig, userConfig);
    }

    /**
     * Create strategy from loaded platform configuration
     * @param {Object} platformConfig - Complete platform configuration
     * @param {Object} userConfig - User configuration
     * @returns {SearchStrategy} - Concrete search strategy instance
     */
    createStrategyFromConfig(platformConfig, userConfig = null) {
        if (!platformConfig || !platformConfig.platform_id) {
            throw new Error('Platform configuration must include platform_id');
        }

        const platformId = platformConfig.platform_id;
        
        // Major job boards with dedicated strategy classes
        switch (platformId) {
            case 'linkedin_jobs':
                return new LinkedInJobsStrategy(platformConfig, userConfig);
            
            case 'indeed':
                return new IndeedStrategy(platformConfig, userConfig);
            
            case 'ziprecruiter':
                return new ZipRecruiterStrategy(platformConfig, userConfig);
            
            case 'dice':
                return new DiceStrategy(platformConfig, userConfig);
            
            default:
                // Use specialized platform strategy for others
                return new SpecializedPlatformStrategy(platformConfig, userConfig);
        }
    }

    /**
     * Create multiple strategies from platform IDs and user config
     * @param {Array} platformIds - Array of platform IDs
     * @param {Object} userConfig - User configuration
     * @returns {Array} - Array of search strategy instances
     */
    async createStrategies(platformIds, userConfig = null) {
        if (!userConfig) {
            userConfig = await this.configLoader.loadUserConfig();
        }

        const strategies = [];
        for (const platformId of platformIds) {
            try {
                const strategy = await this.createStrategy(platformId, userConfig);
                if (strategy.enabled) {
                    strategies.push(strategy);
                }
            } catch (error) {
                console.warn(`Failed to create strategy for platform ${platformId}: ${error.message}`);
            }
        }

        return strategies;
    }

    /**
     * Create all enabled strategies from configuration
     * @param {Object} userConfig - User configuration (optional)
     * @returns {Array} - Array of enabled search strategy instances  
     */
    async createAllEnabledStrategies(userConfig = null) {
        if (!userConfig) {
            userConfig = await this.configLoader.loadUserConfig();
        }

        const platformConfigs = await this.configLoader.loadAllPlatformConfigs();
        const strategies = [];

        for (const platformConfig of platformConfigs) {
            try {
                const strategy = this.createStrategyFromConfig(platformConfig, userConfig);
                if (strategy.enabled) {
                    strategies.push(strategy);
                }
            } catch (error) {
                console.warn(`Failed to create strategy for platform ${platformConfig.platform_id}: ${error.message}`);
            }
        }

        return strategies;
    }

    /**
     * Get all available platform types and their supported features
     * @returns {Object} - Platform types and capabilities
     */
    static getSupportedPlatforms() {
        return {
            majorJobBoards: {
                'LinkedIn Jobs': {
                    strategyClass: 'LinkedInJobsStrategy',
                    category: 'professional-network',
                    features: ['advanced-filtering', 'salary-data', 'company-insights', 'network-connections']
                },
                'Indeed': {
                    strategyClass: 'IndeedStrategy',
                    category: 'job-aggregator',
                    features: ['broad-coverage', 'salary-insights', 'company-reviews', 'market-data']
                },
                'ZipRecruiter': {
                    strategyClass: 'ZipRecruiterStrategy',
                    category: 'ai-matching',
                    features: ['ai-matching', 'one-click-apply', 'salary-transparency', 'mobile-optimized']
                },
                'Dice': {
                    strategyClass: 'DiceStrategy',
                    category: 'technology-specialist',
                    features: ['tech-focus', 'contract-positions', 'detailed-requirements', 'security-clearance']
                }
            },
            specializedPlatforms: {
                'ai-ml': {
                    platforms: ['AIJobs.net', 'AIJobs.ai', 'MoAIJobs'],
                    strategyClass: 'SpecializedPlatformStrategy',
                    features: ['ai-ml-focus', 'technical-matching', 'research-positions']
                },
                'startup': {
                    platforms: ['Wellfound (AngelList)', 'Built In', 'Y Combinator Jobs'],
                    strategyClass: 'SpecializedPlatformStrategy',
                    features: ['equity-data', 'founder-access', 'growth-companies', 'innovation-focus']
                },
                'remote': {
                    platforms: ['Remote.co', 'RemoteOK', 'We Work Remotely'],
                    strategyClass: 'SpecializedPlatformStrategy',
                    features: ['remote-first', 'distributed-teams', 'global-access', 'timezone-flexibility']
                },
                'contracting': {
                    platforms: ['Toptal', 'Upwork', 'Gigster', 'Gun.io'],
                    strategyClass: 'SpecializedPlatformStrategy',
                    features: ['hourly-rates', 'project-based', 'skill-screening', 'freelance-focus']
                }
            },
            executiveRecruiters: {
                platforms: ['Korn Ferry', 'Russell Reynolds', 'Spencer Stuart', 'Bespoke Partners'],
                strategyClass: 'SpecializedPlatformStrategy',
                features: ['executive-search', 'c-level-focus', 'retained-search', 'confidential-search']
            }
        };
    }

    /**
     * Validate platform configuration before strategy creation
     * @param {Object} platformConfig - Platform configuration to validate
     * @returns {Object} - Validation result with errors and warnings
     */
    static validatePlatformConfig(platformConfig) {
        const result = {
            isValid: true,
            errors: [],
            warnings: []
        };

        // Required fields validation
        if (!platformConfig.name) {
            result.errors.push('Platform name is required');
            result.isValid = false;
        }

        if (!platformConfig.url) {
            result.warnings.push('Platform URL not provided - may affect search URL generation');
        }

        // URL format validation
        if (platformConfig.url && !this.isValidUrl(platformConfig.url)) {
            result.errors.push('Platform URL format is invalid');
            result.isValid = false;
        }

        // Search terms validation
        if (platformConfig.searchTerms && !Array.isArray(platformConfig.searchTerms)) {
            result.warnings.push('Search terms should be an array for optimal processing');
        }

        return result;
    }

    /**
     * Validate URL format
     * @private
     * @param {string} url - URL to validate
     * @returns {boolean} - Whether URL is valid
     */
    static isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Get recommended strategy based on search criteria and user profile
     * @param {Object} searchCriteria - User's search criteria
     * @param {Object} userProfile - User's profile information
     * @returns {Array} - Recommended platform strategies in priority order
     */
    static getRecommendedStrategies(searchCriteria, userProfile) {
        const recommendations = [];

        // Executive level recommendations
        if (searchCriteria.targetRoles?.some(role => 
            role.category === 'executive' || role.titles.some(title => 
                title.toLowerCase().includes('cto') || 
                title.toLowerCase().includes('vp') ||
                title.toLowerCase().includes('chief')
            )
        )) {
            recommendations.push({
                platform: 'LinkedIn Jobs',
                priority: 'high',
                reason: 'Optimal for executive and senior leadership positions'
            });
        }

        // Technical specialization recommendations
        if (searchCriteria.technologies?.some(tech => 
            tech.toLowerCase().includes('ai') || 
            tech.toLowerCase().includes('ml') ||
            tech.toLowerCase().includes('.net')
        )) {
            recommendations.push({
                platform: 'Dice',
                priority: 'high',
                reason: 'Strong technical focus matches specialized skills'
            });
        }

        // Remote work priority
        if (userProfile.location?.preferredWork === 'remote') {
            recommendations.push({
                platform: 'Remote.co',
                priority: 'medium',
                reason: 'Specialized in remote-first opportunities'
            });
        }

        // Salary requirements
        if (userProfile.preferences?.minSalary >= 180000) {
            recommendations.push({
                platform: 'ZipRecruiter',
                priority: 'medium',
                reason: 'Salary transparency supports high compensation requirements'
            });
        }

        return recommendations.sort((a, b) => {
            const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
    }
}

module.exports = PlatformFactory;