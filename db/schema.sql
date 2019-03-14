\c logai

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(25) NOT NULL,
  pw VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(10) NOT NULL,
  company TEXT NOT NULL,
  comptype TEXT NOT NULL,
  UNIQUE (username),
  UNIQUE (email),
  UNIQUE (phone)
);
