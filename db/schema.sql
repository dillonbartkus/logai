\c logai

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY NOT NULL,
  company VARCHAR(50) NOT NULL,
  pw VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(10) NOT NULL,
  npc VARCHAR(25) NOT NULL,
  comptype TEXT NOT NULL,
  UNIQUE (company),
  UNIQUE (email),
  UNIQUE (phone)
);
