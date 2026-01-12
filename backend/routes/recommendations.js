const recommendationsController = require('../controllers/recommendationsController');

module.exports = function (fastify, opts, done) {
  fastify.get('/api/v1/recommendations', { preHandler: fastify.auth }, recommendationsController.getRecommendations);
  done();
};