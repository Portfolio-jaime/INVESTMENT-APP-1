const investmentsService = require('../services/investmentsService');

module.exports = {
  getAll: async (request, reply) => {
    const investments = await investmentsService.getAll();
    reply.send(investments);
  }
};