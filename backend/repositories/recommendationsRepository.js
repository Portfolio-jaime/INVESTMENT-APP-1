const pool = require('../db');

module.exports = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM recommendations');
    return res.rows;
  }
};