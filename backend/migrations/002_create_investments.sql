CREATE TABLE investments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL,
  risk_level VARCHAR(20) NOT NULL,
  estimated_return DECIMAL(5,2) NOT NULL
);