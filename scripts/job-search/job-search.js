#!/usr/bin/env node

/**
 * Job Search Automation Script
 * Based on the comprehensive job-search protocol
 * 
 * Usage: node job-search.js [--config config.json] [--platform platform-name] [--dry-run]
 */

const fs = require('fs').promises;
const path = require('path');
const https = require('https');
const { URL } = require('url');
const PlatformFactory = require('./platforms/PlatformFactory');

class JobSearchManager {
    constructor(configPath = './job-search-config.json') {
        this.configPath = configPath;
        this.config = null;
        this.results = {
            platforms: {},
            summary: {
                totalOpportunities: 0,
                verifiedUrls: 0,
                failedUrls: 0,
                executionDate: new Date().toISOString().split('T')[0]
            }
        };
    }

    async initialize() {
        try {
            const configData = await fs.readFile(this.configPath, 'utf8');
            this.config = JSON.parse(configData);
            this.validateConfiguration();
            await this.ensureDirectoryStructure();
            console.log(`✅ Initialized job search with config: ${this.configPath}`);
        } catch (error) {
            throw new Error(`Failed to initialize: ${error.message}`);
        }
    }

    validateConfiguration() {
        const required = ['userProfile', 'searchCriteria', 'platforms', 'exclusions'];
        for (const field of required) {
            if (!this.config[field]) {
                throw new Error(`Missing required configuration field: ${field}`);
            }
        }
    }

    async ensureDirectoryStructure() {
        const baseDir = this.config.output?.baseDirectory || './SearchResults/Jobs';
        try {
            await fs.mkdir(path.resolve(baseDir), { recursive: true });
            console.log(`📁 Created output directory: ${baseDir}`);
        } catch (error) {
            if (error.code !== 'EEXIST') {
                throw error;
            }
        }
    }

    async executeJobSearch(platformFilter = null) {
        console.log('🚀 Starting comprehensive job search execution...');
        
        const platforms = this.getAllPlatforms();
        
        for (const platformStrategy of platforms) {
            if (platformFilter && platformStrategy.name !== platformFilter) {
                continue;
            }

            if (!platformStrategy.isAvailable()) {
                console.log(`⏭️  Skipping disabled platform: ${platformStrategy.name}`);
                continue;
            }

            console.log(`🔍 Processing platform: ${platformStrategy.name}`);
            await this.processPlatform(platformStrategy);
        }

        if (this.config.output?.generateSummary) {
            await this.generateComprehensiveSummary();
        }

        console.log('✅ Job search execution completed');
        return this.results;
    }

    getAllPlatforms() {
        const platformConfigs = [];
        
        // Major job boards
        if (this.config.platforms.majorJobBoards) {
            platformConfigs.push(...this.config.platforms.majorJobBoards.map(p => ({
                ...p,
                category: 'major-job-boards'
            })));
        }

        // Executive recruiters
        if (this.config.platforms.executiveRecruiters) {
            platformConfigs.push(...this.config.platforms.executiveRecruiters.map(p => ({
                ...p,
                category: 'executive-recruiters'
            })));
        }

        // Specialized platforms
        if (this.config.platforms.specializedPlatforms) {
            platformConfigs.push(...this.config.platforms.specializedPlatforms.map(p => ({
                ...p,
                category: 'specialized-platforms'
            })));
        }

        // Create strategy instances using the factory
        return PlatformFactory.createStrategies(platformConfigs);
    }

    async processPlatform(platformStrategy) {
        const platformResults = {
            name: platformStrategy.name,
            category: platformStrategy.getSpecialization().category,
            url: platformStrategy.url,
            searchExecutionDate: new Date().toISOString(),
            searchTerms: platformStrategy.config.searchTerms || this.buildSearchTerms(),
            opportunities: [],
            urlValidation: {},
            marketIntelligence: {},
            platformMetadata: platformStrategy.getMetadata()
        };

        try {
            console.log(`  📝 Building search queries for ${platformStrategy.name}`);
            const searchQueries = this.buildSearchQueries(platformStrategy);
            
            console.log(`  🌐 Executing ${searchQueries.length} searches`);
            platformResults.searchQueries = [];
            
            // Initialize raw search results storage
            platformResults.rawSearchResults = {};
            
            for (const query of searchQueries) {
                const searchResults = await this.executeWebSearchWithStrategy(query, platformStrategy);
                const queryId = `query_${searchQueries.indexOf(query) + 1}`;
                
                // Store raw search results
                platformResults.rawSearchResults[queryId] = {
                    query: query,
                    searchUrl: searchResults.searchUrl,
                    executionTimestamp: new Date().toISOString(),
                    rawResponse: searchResults.rawResponse || null,
                    platformSpecificData: searchResults.platformSpecificData || null
                };
                
                // Store search query information for documentation
                platformResults.searchQueries.push({
                    queryId: queryId,
                    targetTitle: query.targetTitle,
                    query: query.searchTerms,
                    searchUrl: searchResults.searchUrl,
                    executionNote: searchResults.executionNote,
                    needsManualExecution: searchResults.needsManualExecution
                });
                
                // Add any opportunities found (will be empty for manual execution)
                if (searchResults.opportunities) {
                    // Add platform-specific reference IDs and raw data to opportunities
                    const opportunitiesWithIds = searchResults.opportunities.map((opp, index) => ({
                        ...opp,
                        platformId: opp.platformId || `${platformStrategy.name.toLowerCase().replace(/\s+/g, '_')}_${queryId}_${index + 1}`,
                        rawData: opp.rawData || null,
                        queryId: queryId,
                        discoveryTimestamp: new Date().toISOString()
                    }));
                    
                    platformResults.opportunities.push(...opportunitiesWithIds);
                }
                
                // URL validation if enabled and opportunities exist
                if (this.config.output?.urlValidation && searchResults.opportunities?.length > 0) {
                    const validationResults = await this.validateUrls(searchResults.opportunities);
                    Object.assign(platformResults.urlValidation, validationResults);
                }
            }

            // Apply exclusions
            platformResults.opportunities = this.applyExclusions(platformResults.opportunities);
            
            // Get competitive advantages from the strategy
            platformResults.competitiveAdvantages = this.getStrategyCompetitiveAdvantages(platformStrategy);
            
            // Generate platform-specific insights
            platformResults.marketIntelligence = this.analyzeMarketIntelligence(platformResults.opportunities);

            // Save individual platform results
            await this.savePlatformResults(platformStrategy.name, platformResults);
            
            this.results.platforms[platformStrategy.name] = platformResults;
            this.results.summary.totalOpportunities += platformResults.opportunities.length;

            console.log(`  ✅ Completed ${platformStrategy.name}: ${platformResults.opportunities.length} opportunities`);

        } catch (error) {
            console.error(`  ❌ Error processing ${platformStrategy.name}: ${error.message}`);
            platformResults.error = error.message;
        }
    }

    buildSearchQueries(platformStrategy) {
        const queries = [];
        
        // Build queries based on search criteria
        for (const roleCategory of this.config.searchCriteria.targetRoles) {
            for (const title of roleCategory.titles) {
                let searchTerms = [
                    `"${title}"`,
                    ...this.config.searchCriteria.technologies.slice(0, 3),
                    ...this.config.searchCriteria.workTypes,
                    '2025'
                ].join(' ');
                
                // Use platform strategy to optimize search terms if available
                if (typeof platformStrategy.optimizeSearchTerms === 'function') {
                    searchTerms = platformStrategy.optimizeSearchTerms(searchTerms);
                }
                
                const query = {
                    platform: platformStrategy.name,
                    searchTerms: searchTerms,
                    roleCategory: roleCategory.category,
                    targetTitle: title
                };
                queries.push(query);
            }
        }

        return queries;
    }

    buildSearchTerms() {
        const terms = [];
        
        // Add role titles
        for (const roleCategory of this.config.searchCriteria.targetRoles) {
            terms.push(...roleCategory.titles);
        }
        
        // Add key technologies
        terms.push(...this.config.searchCriteria.technologies.slice(0, 5));
        
        // Add work preferences
        terms.push(...this.config.searchCriteria.workTypes);
        
        return terms;
    }

    async executeWebSearchWithStrategy(query, platformStrategy) {
        console.log(`    🔎 Searching: ${query.searchTerms}`);
        
        try {
            // Use the platform strategy to build the search URL
            const searchUrl = platformStrategy.buildSearchUrl(query.searchTerms);
            console.log(`    🌐 Search URL: ${searchUrl}`);
            
            // Get platform-specific execution instructions
            const executionNote = platformStrategy.getExecutionInstructions(searchUrl);
            
            // Note: In real implementation, this would use WebSearch API or web scraping
            // For now, return structured placeholder that indicates real search is needed
            const searchResults = {
                searchUrl: searchUrl,
                platform: platformStrategy.name,
                query: query.searchTerms,
                executionNote: executionNote,
                opportunities: [], // Would be populated by actual web search
                needsManualExecution: true,
                platformSpecificData: {
                    specialization: platformStrategy.getSpecialization(),
                    searchParameters: platformStrategy.getSearchParameters(),
                    expectedResultStructure: platformStrategy.getExpectedResultStructure()
                }
            };
            
            return searchResults;
            
        } catch (error) {
            console.error(`    ❌ Error executing search for ${platformStrategy.name}: ${error.message}`);
            return {
                query: query.searchTerms,
                platform: platformStrategy.name,
                opportunities: [],
                error: error.message
            };
        }
    }

    async validateUrls(opportunities) {
        const validation = {};
        
        for (const opportunity of opportunities) {
            if (opportunity.url) {
                try {
                    const status = await this.checkUrlStatus(opportunity.url);
                    validation[opportunity.url] = {
                        status: status,
                        verifiedDate: new Date().toISOString().split('T')[0],
                        title: opportunity.title,
                        company: opportunity.company
                    };
                    
                    if (status === 'ACTIVE') {
                        this.results.summary.verifiedUrls++;
                    } else {
                        this.results.summary.failedUrls++;
                    }
                } catch (error) {
                    validation[opportunity.url] = {
                        status: 'ERROR',
                        error: error.message,
                        verifiedDate: new Date().toISOString().split('T')[0]
                    };
                    this.results.summary.failedUrls++;
                }
            }
        }
        
        return validation;
    }

    async checkUrlStatus(url) {
        return new Promise((resolve, reject) => {
            const parsedUrl = new URL(url);
            const options = {
                hostname: parsedUrl.hostname,
                port: parsedUrl.port || 443,
                path: parsedUrl.pathname + parsedUrl.search,
                method: 'HEAD',
                timeout: 10000
            };

            const req = https.request(options, (res) => {
                if (res.statusCode >= 200 && res.statusCode < 400) {
                    resolve('ACTIVE');
                } else if (res.statusCode >= 400 && res.statusCode < 500) {
                    resolve('EXPIRED');
                } else {
                    resolve('INVALID');
                }
            });

            req.on('error', () => {
                resolve('INVALID');
            });

            req.on('timeout', () => {
                req.destroy();
                resolve('INVALID');
            });

            req.end();
        });
    }

    applyExclusions(opportunities) {
        return opportunities.filter(opportunity => {
            // Check company exclusions
            if (this.config.exclusions.companies?.includes(opportunity.company)) {
                console.log(`    🚫 Excluded company: ${opportunity.company}`);
                return false;
            }

            // Check industry exclusions (would need industry detection)
            // Check investor exclusions (would need investor lookup)
            
            return true;
        });
    }

    getStrategyCompetitiveAdvantages(platformStrategy) {
        // Get platform-specific advantages from the strategy if available
        const strategyAdvantages = typeof platformStrategy.getCompetitiveAdvantages === 'function' 
            ? platformStrategy.getCompetitiveAdvantages() 
            : {};
            
        return {
            uniqueDifferentiators: [
                'Pure .NET AI/ML Implementation',
                'Enterprise Framework Creation',
                'SQL Server Vector Extensions',
                'Centers of Excellence Leadership',
                'Crisis Resolution Expertise'
            ],
            communityValidation: {
                nugetDownloads: '657K+',
                stackOverflowReputation: '22K+',
                githubContributor: 'Arctic Code Vault'
            },
            platformAlignment: this.calculatePlatformAlignment(platformStrategy),
            platformSpecific: strategyAdvantages
        };
    }

    calculatePlatformAlignment(platformStrategy) {
        // Calculate how well user profile aligns with platform opportunities
        const specialization = platformStrategy.getSpecialization();
        const searchParams = platformStrategy.getSearchParameters();
        
        let roleLevel = 8.0; // Base score
        let technologyMatch = 8.0;
        let compensationAlignment = 8.0;
        let workStyleMatch = 8.0;
        
        // Adjust based on platform specialization
        if (specialization.category === 'professional-network') {
            roleLevel += 1.0; // LinkedIn good for senior roles
        }
        if (specialization.category === 'technology-specialist') {
            technologyMatch += 1.5; // Dice great for tech roles
        }
        if (specialization.category === 'ai-matching') {
            compensationAlignment += 1.0; // ZipRecruiter has salary transparency
        }
        
        // Adjust for remote work support
        if (searchParams.supportsRemoteFilter && this.config.userProfile.location.preferredWork === 'remote') {
            workStyleMatch += 1.0;
        }
        
        // Adjust for salary filtering
        if (searchParams.supportsSalaryFilter && this.config.userProfile.preferences.minSalary >= 180000) {
            compensationAlignment += 0.5;
        }
        
        // Cap scores at 10.0
        const alignmentFactors = {
            roleLevel: Math.min(10.0, roleLevel),
            technologyMatch: Math.min(10.0, technologyMatch),
            compensationAlignment: Math.min(10.0, compensationAlignment),
            workStyleMatch: Math.min(10.0, workStyleMatch)
        };
        
        const averageAlignment = Object.values(alignmentFactors)
            .reduce((sum, score) => sum + score, 0) / Object.values(alignmentFactors).length;
            
        return {
            overallScore: Math.round(averageAlignment * 10) / 10,
            factors: alignmentFactors,
            platformCategory: specialization.category
        };
    }

    analyzeMarketIntelligence(opportunities) {
        const salaryRanges = opportunities
            .filter(opp => opp.salary)
            .map(opp => this.parseSalaryRange(opp.salary))
            .filter(range => range);

        return {
            totalOpportunities: opportunities.length,
            salaryAnalysis: {
                ranges: salaryRanges,
                average: this.calculateAverageSalary(salaryRanges),
                median: this.calculateMedianSalary(salaryRanges)
            },
            locationDistribution: this.analyzeLocationDistribution(opportunities),
            keyRequirements: this.analyzeKeyRequirements(opportunities),
            topCompanies: this.getTopCompanies(opportunities)
        };
    }

    parseSalaryRange(salaryString) {
        const match = salaryString.match(/\$(\d+)K?-\$?(\d+)K?/);
        if (match) {
            let min = parseInt(match[1]);
            let max = parseInt(match[2]);
            
            // Convert K notation
            if (salaryString.includes('K')) {
                min *= 1000;
                max *= 1000;
            }
            
            return { min, max, original: salaryString };
        }
        return null;
    }

    calculateAverageSalary(ranges) {
        if (ranges.length === 0) return null;
        
        const total = ranges.reduce((sum, range) => sum + (range.min + range.max) / 2, 0);
        return Math.round(total / ranges.length);
    }

    calculateMedianSalary(ranges) {
        if (ranges.length === 0) return null;
        
        const midpoints = ranges.map(range => (range.min + range.max) / 2).sort((a, b) => a - b);
        const middle = Math.floor(midpoints.length / 2);
        
        if (midpoints.length % 2 === 0) {
            return Math.round((midpoints[middle - 1] + midpoints[middle]) / 2);
        } else {
            return Math.round(midpoints[middle]);
        }
    }

    analyzeLocationDistribution(opportunities) {
        const distribution = {};
        opportunities.forEach(opp => {
            const location = opp.location || 'Unknown';
            distribution[location] = (distribution[location] || 0) + 1;
        });
        return distribution;
    }

    analyzeKeyRequirements(opportunities) {
        const requirements = {};
        opportunities.forEach(opp => {
            if (opp.requirements) {
                opp.requirements.forEach(req => {
                    requirements[req] = (requirements[req] || 0) + 1;
                });
            }
        });
        
        return Object.entries(requirements)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([req, count]) => ({ requirement: req, count }));
    }

    getTopCompanies(opportunities) {
        const companies = {};
        opportunities.forEach(opp => {
            companies[opp.company] = (companies[opp.company] || 0) + 1;
        });
        
        return Object.entries(companies)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 10)
            .map(([company, count]) => ({ company, opportunityCount: count }));
    }

    async savePlatformResults(platformName, results) {
        const baseDir = this.config.output?.baseDirectory || './SearchResults/Jobs';
        const filename = `${platformName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.yml`;
        const filepath = path.join(baseDir, filename);
        
        const yamlContent = this.generatePlatformYAML(results);
        
        try {
            await fs.writeFile(filepath, yamlContent, 'utf8');
            console.log(`  💾 Saved results: ${filepath}`);
        } catch (error) {
            console.error(`  ❌ Failed to save ${filepath}: ${error.message}`);
        }
    }

    generatePlatformYAML(results) {
        const date = new Date().toISOString().split('T')[0];
        const timestamp = new Date().toISOString();
        
        const yamlData = {
            metadata: {
                platform_name: results.name,
                category: results.category,
                search_date: date,
                generated_timestamp: timestamp,
                platform_url: results.url,
                search_terms: results.searchTerms || [],
                script_version: '2.0.0-oop'
            },
            
            search_execution: {
                search_queries_generated: results.searchQueries?.length || 0,
                opportunities_found: results.opportunities?.length || 0,
                urls_validated: Object.keys(results.urlValidation || {}).length,
                manual_execution_required: results.searchQueries?.some(q => q.needsManualExecution) || false,
                search_queries: results.searchQueries?.map((query, index) => ({
                    query_id: `${results.name.toLowerCase().replace(/\s+/g, '_')}_query_${index + 1}`,
                    target_title: query.targetTitle,
                    search_terms: query.query,
                    search_url: query.searchUrl,
                    execution_note: query.executionNote,
                    needs_manual_execution: query.needsManualExecution
                })) || []
            },

            opportunities: results.opportunities?.map((opp, index) => ({
                opportunity_id: `${results.name.toLowerCase().replace(/\s+/g, '_')}_opp_${String(index + 1).padStart(3, '0')}`,
                platform_reference_id: opp.platformId || null,
                title: opp.title,
                company: opp.company,
                location: opp.location,
                salary: opp.salary,
                job_url: opp.url,
                url_status: results.urlValidation?.[opp.url]?.status || 'NOT_VERIFIED',
                fit_score: opp.fitScore ? Number(opp.fitScore.toFixed(1)) : null,
                posted_date: opp.posted,
                requirements: opp.requirements || [],
                description: opp.description,
                raw_data: opp.rawData || null,
                source_platform: results.name,
                discovered_date: date
            })) || [],

            raw_search_results: results.rawSearchResults || {},

            url_validation: Object.entries(results.urlValidation || {}).map(([url, validation]) => ({
                url: url,
                status: validation.status,
                verified_date: validation.verifiedDate,
                title: validation.title,
                company: validation.company,
                error: validation.error || null
            })),

            market_intelligence: {
                total_opportunities: results.opportunities?.length || 0,
                salary_analysis: results.marketIntelligence?.salaryAnalysis ? {
                    average: results.marketIntelligence.salaryAnalysis.average,
                    median: results.marketIntelligence.salaryAnalysis.median,
                    ranges: results.marketIntelligence.salaryAnalysis.ranges || []
                } : null,
                location_distribution: results.marketIntelligence?.locationDistribution || {},
                key_requirements: results.marketIntelligence?.keyRequirements?.slice(0, 10) || [],
                top_companies: results.marketIntelligence?.topCompanies?.slice(0, 10) || []
            },

            competitive_advantages: {
                unique_differentiators: results.competitiveAdvantages?.uniqueDifferentiators || [
                    'Pure .NET AI/ML Implementation',
                    'Enterprise Framework Creation', 
                    'SQL Server Vector Extensions',
                    'Crisis Resolution Expertise'
                ],
                platform_alignment_score: results.competitiveAdvantages?.platformAlignment?.overallScore || null,
                platform_specific_advantages: results.competitiveAdvantages?.platformSpecific || []
            },

            next_steps: {
                immediate_actions: results.searchQueries?.length > 0 ? [
                    'Execute searches using generated URLs',
                    'Document opportunities found',
                    'Validate job posting URLs',
                    'Calculate fit scores for positions',
                    'Add high-scoring opportunities to apply-next.md'
                ] : [
                    'Review opportunities identified',
                    'Validate active job posting URLs', 
                    'Research companies for cultural fit',
                    'Prepare targeted application materials'
                ],
                manual_execution_required: results.searchQueries?.some(q => q.needsManualExecution) || false
            }
        };

        // Convert to YAML format manually (simple implementation)
        return this.objectToYAML(yamlData, 0);
    }

    objectToYAML(obj, indent = 0) {
        const spaces = '  '.repeat(indent);
        let yaml = '';
        
        for (const [key, value] of Object.entries(obj)) {
            if (value === null) {
                yaml += `${spaces}${key}: null\n`;
            } else if (value === undefined) {
                continue;
            } else if (Array.isArray(value)) {
                yaml += `${spaces}${key}:\n`;
                if (value.length === 0) {
                    yaml += `${spaces}  []\n`;
                } else {
                    for (const item of value) {
                        if (typeof item === 'object' && item !== null) {
                            yaml += `${spaces}  -\n`;
                            yaml += this.objectToYAML(item, indent + 2);
                        } else {
                            const itemStr = typeof item === 'string' ? 
                                (item.includes('\n') || item.includes('"') ? `"${item.replace(/"/g, '\\"')}"` : item) : 
                                String(item);
                            yaml += `${spaces}  - ${itemStr}\n`;
                        }
                    }
                }
            } else if (typeof value === 'object') {
                yaml += `${spaces}${key}:\n`;
                yaml += this.objectToYAML(value, indent + 1);
            } else if (typeof value === 'string') {
                const valueStr = value.includes('\n') || value.includes('"') || value.includes(':') ? 
                    `"${value.replace(/"/g, '\\"')}"` : value;
                yaml += `${spaces}${key}: ${valueStr}\n`;
            } else {
                yaml += `${spaces}${key}: ${value}\n`;
            }
        }
        
        return yaml;
    }

    async generateComprehensiveSummary() {
        console.log('📊 Generating comprehensive summary...');
        
        const summary = {
            executionDate: this.results.summary.executionDate,
            totalPlatforms: Object.keys(this.results.platforms).length,
            totalOpportunities: this.results.summary.totalOpportunities,
            urlValidation: {
                verified: this.results.summary.verifiedUrls,
                failed: this.results.summary.failedUrls
            },
            platformRankings: this.calculatePlatformRankings(),
            topOpportunities: this.identifyTopOpportunities(),
            marketInsights: this.aggregateMarketInsights(),
            actionItems: this.generateActionItems()
        };

        const baseDir = this.config.output?.baseDirectory || './SearchResults/Jobs';
        const summaryPath = path.join(baseDir, `comprehensive-job-search-${this.results.summary.executionDate.replace(/-/g, '')}.md`);
        
        const markdown = this.generateSummaryMarkdown(summary);
        
        try {
            await fs.writeFile(summaryPath, markdown, 'utf8');
            console.log(`📋 Generated comprehensive summary: ${summaryPath}`);
        } catch (error) {
            console.error(`❌ Failed to generate summary: ${error.message}`);
        }
    }

    calculatePlatformRankings() {
        return Object.entries(this.results.platforms)
            .map(([name, results]) => ({
                platform: name,
                opportunities: results.opportunities?.length || 0,
                alignmentScore: results.competitiveAdvantages?.platformAlignment?.overallScore || 0,
                activeUrls: Object.values(results.urlValidation || {})
                    .filter(v => v.status === 'ACTIVE').length
            }))
            .sort((a, b) => (b.alignmentScore * b.opportunities) - (a.alignmentScore * a.opportunities));
    }

    identifyTopOpportunities() {
        const allOpportunities = [];
        
        Object.values(this.results.platforms).forEach(platform => {
            if (platform.opportunities) {
                platform.opportunities.forEach(opp => {
                    allOpportunities.push({
                        ...opp,
                        platform: platform.name
                    });
                });
            }
        });

        return allOpportunities
            .filter(opp => opp.fitScore >= 8.0)
            .sort((a, b) => b.fitScore - a.fitScore)
            .slice(0, 10);
    }

    aggregateMarketInsights() {
        const allOpportunities = [];
        const salaryRanges = [];
        
        Object.values(this.results.platforms).forEach(platform => {
            if (platform.opportunities) {
                allOpportunities.push(...platform.opportunities);
            }
            if (platform.marketIntelligence?.salaryAnalysis?.ranges) {
                salaryRanges.push(...platform.marketIntelligence.salaryAnalysis.ranges);
            }
        });

        return {
            totalMarketOpportunities: allOpportunities.length,
            averageMarketSalary: this.calculateAverageSalary(salaryRanges),
            medianMarketSalary: this.calculateMedianSalary(salaryRanges),
            topLocationDistribution: this.analyzeLocationDistribution(allOpportunities),
            marketRequirements: this.analyzeKeyRequirements(allOpportunities)
        };
    }

    generateActionItems() {
        const topPlatforms = this.calculatePlatformRankings().slice(0, 3);
        const topOpportunities = this.identifyTopOpportunities().slice(0, 5);
        
        return {
            immediate: [
                `Focus on top ${topPlatforms.length} platforms: ${topPlatforms.map(p => p.platform).join(', ')}`,
                `Apply to ${Math.min(topOpportunities.length, 3)} highest-fit opportunities immediately`,
                'Verify and update resume targeting based on market requirements analysis'
            ],
            shortTerm: [
                'Set up automated alerts on top-performing platforms',
                'Research company cultures for top opportunities',
                'Prepare targeted application materials for high-fit positions'
            ],
            longTerm: [
                'Monitor salary trends and market evolution quarterly',
                'Build relationships with recruiters from successful platforms',
                'Adjust positioning strategy based on market feedback'
            ]
        };
    }

    generateSummaryMarkdown(summary) {
        return `# Comprehensive Job Search Results - ${summary.executionDate}

## Executive Summary
- **Platforms Analyzed:** ${summary.totalPlatforms}
- **Total Opportunities:** ${summary.totalOpportunities}
- **URL Verification:** ${summary.urlValidation.verified} active, ${summary.urlValidation.failed} failed
- **Top Opportunities:** ${summary.topOpportunities.length} high-fit positions identified

## Platform Rankings

| Rank | Platform | Opportunities | Alignment Score | Active URLs |
|------|----------|---------------|-----------------|-------------|
${summary.platformRankings.map((p, i) => 
`| ${i + 1} | ${p.platform} | ${p.opportunities} | ${p.alignmentScore}/10 | ${p.activeUrls} |`
).join('\n')}

## Top Opportunities (Fit Score ≥ 8.0)

${summary.topOpportunities.map((opp, i) => `### ${i + 1}. ${opp.title} - ${opp.company}
- **Platform:** ${opp.platform}
- **Fit Score:** ${opp.fitScore?.toFixed(1)}/10
- **Location:** ${opp.location}
- **Salary:** ${opp.salary || 'Not specified'}
- **URL:** ${opp.url}
`).join('\n')}

## Market Intelligence
- **Total Market Opportunities:** ${summary.marketInsights.totalMarketOpportunities}
- **Average Salary:** $${summary.marketInsights.averageMarketSalary?.toLocaleString() || 'N/A'}
- **Median Salary:** $${summary.marketInsights.medianMarketSalary?.toLocaleString() || 'N/A'}

### Location Distribution
${Object.entries(summary.marketInsights.topLocationDistribution || {})
  .slice(0, 5)
  .map(([location, count]) => `- ${location}: ${count} opportunities`)
  .join('\n')}

### Top Market Requirements
${summary.marketInsights.marketRequirements?.slice(0, 10)
  .map(req => `- ${req.requirement} (${req.count} mentions)`)
  .join('\n') || 'No requirements data available'}

## Action Items

### Immediate (Next 7 Days)
${summary.actionItems.immediate.map(item => `- [ ] ${item}`).join('\n')}

### Short-term (Next 30 Days)
${summary.actionItems.shortTerm.map(item => `- [ ] ${item}`).join('\n')}

### Long-term (90+ Days)
${summary.actionItems.longTerm.map(item => `- [ ] ${item}`).join('\n')}

---
*Generated by Job Search Automation Script v1.0*
*Execution Date: ${summary.executionDate}*
`;
    }
}

// CLI Interface
async function main() {
    const args = process.argv.slice(2);
    const configPath = args.includes('--config') 
        ? args[args.indexOf('--config') + 1] 
        : './job-search-config.json';
    
    const platformFilter = args.includes('--platform') 
        ? args[args.indexOf('--platform') + 1] 
        : null;
        
    const dryRun = args.includes('--dry-run');

    try {
        const jobSearch = new JobSearchManager(configPath);
        await jobSearch.initialize();
        
        if (dryRun) {
            console.log('🧪 Dry run mode - configuration validated successfully');
            console.log('Configuration summary:');
            console.log(`- User: ${jobSearch.config.userProfile.name}`);
            console.log(`- Target roles: ${jobSearch.config.searchCriteria.targetRoles.length} categories`);
            console.log(`- Platforms: ${jobSearch.getAllPlatforms().length} configured`);
            console.log(`- Output directory: ${jobSearch.config.output?.baseDirectory || './SearchResults/Jobs'}`);
            return;
        }
        
        const results = await jobSearch.executeJobSearch(platformFilter);
        
        console.log('\n🎉 Job search completed successfully!');
        console.log(`📊 Results: ${results.summary.totalOpportunities} opportunities across ${Object.keys(results.platforms).length} platforms`);
        console.log(`✅ URLs verified: ${results.summary.verifiedUrls} active, ${results.summary.failedUrls} failed`);
        
    } catch (error) {
        console.error(`❌ Job search failed: ${error.message}`);
        process.exit(1);
    }
}

// Export for module usage
module.exports = JobSearchManager;

// Run CLI if called directly
if (require.main === module) {
    main().catch(console.error);
}