CREATE TABLE recommendations (
  id SERIAL PRIMARY KEY,
  investment_id INT REFERENCES investments(id),
  description TEXT NOT NULL
);