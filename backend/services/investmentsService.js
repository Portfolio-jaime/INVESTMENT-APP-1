const investmentsRepository = require('../repositories/investmentsRepository');

module.exports = {
  getAll: async () => {
    return await investmentsRepository.getAll();
  }
};