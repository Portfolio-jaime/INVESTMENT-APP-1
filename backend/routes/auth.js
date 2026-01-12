const authController = require('../controllers/authController');

module.exports = function (fastify, opts, done) {
  fastify.post('/api/v1/auth/login', authController.login);
  done();
};