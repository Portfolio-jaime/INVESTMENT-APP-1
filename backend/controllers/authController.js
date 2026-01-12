const authService = require('../services/authService');

module.exports = {
  login: async (request, reply) => {
    const { email, password } = request.body;
    try {
      const token = await authService.login(email, password);
      reply.send({ token });
    } catch (err) {
      reply.code(401).send({ error: 'Invalid credentials' });
    }
  }
};