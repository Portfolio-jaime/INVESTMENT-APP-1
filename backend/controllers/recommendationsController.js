const recommendationsService = require('../services/recommendationsService');

module.exports = {
  getRecommendations: async (request, reply) => {
    const userId = request.user.id;
    const recommendations = await recommendationsService.getForUser(userId);
    reply.send(recommendations);
  }
};