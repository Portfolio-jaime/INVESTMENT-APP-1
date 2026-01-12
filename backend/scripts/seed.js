const pool = require('../db');

const seed = async () => {
  // Insert dummy data
  await pool.query(`INSERT INTO users (email, password_hash) VALUES ('user@example.com', '$2a$10$examplehash')`);
  await pool.query(`INSERT INTO investments (name, type, risk_level, estimated_return) VALUES 
    ('Acciones Colombianas', 'stocks', 'medio', 8.5),
    ('ETFs Globales', 'etf', 'bajo', 6.0),
    ('Fondos de Inversión', 'fund', 'bajo', 5.5)
  `);
  await pool.query(`INSERT INTO recommendations (investment_id, description) VALUES 
    (1, 'Ideal si estás empezando'),
    (2, 'Buena opción a largo plazo'),
    (3, 'Inversión segura')
  `);
  console.log('Seed completed');
  pool.end();
};

seed();