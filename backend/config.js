const config = {
  enableRecommendations: process.env.ENABLE_RECOMMENDATIONS === 'true',
  enableAdvancedCharts: process.env.ENABLE_ADVANCED_CHARTS === 'true',
};

module.exports = config;