const investmentsController = require('../controllers/investmentsController');

module.exports = function (fastify, opts, done) {
  fastify.get('/api/v1/investments', { preHandler: fastify.auth }, investmentsController.getAll);
  done();
};