const fs = require('fs');
const path = require('path');
const pool = require('../db');

const runMigrations = async () => {
  const migrationsDir = path.join(__dirname, '../migrations');
  const files = fs.readdirSync(migrationsDir).sort();
  for (const file of files) {
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    await pool.query(sql);
  }
  console.log('Migrations completed');
  pool.end();
};

runMigrations();