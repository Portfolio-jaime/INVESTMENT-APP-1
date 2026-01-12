const pool = require('../db');

module.exports = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM investments');
    return res.rows;
  }
};