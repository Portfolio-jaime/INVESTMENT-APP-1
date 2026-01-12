const config = require('../config');
const recommendationsRepository = require('../repositories/recommendationsRepository');

module.exports = {
  getForUser: async (userId) => {
    if (!config.enableRecommendations) {
      return [];
    }
    // Simple rule-based: return all for now
    return await recommendationsRepository.getAll();
  }
};