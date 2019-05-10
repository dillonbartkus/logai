\c logai

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY NOT NULL,
  company VARCHAR(50) UNIQUE NOT NULL,
  pw VARCHAR(99) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  phone VARCHAR(15) UNIQUE NOT NULL,
  npc VARCHAR(25) NOT NULL,
  comptype TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS inventory(
  id SERIAL PRIMARY KEY NOT NULL,
  warehouse_id INTEGER REFERENCES users(id),
  sku VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(99) NOT NULL,
  warehouse VARCHAR(99),
  location VARCHAR(99),
  type VARCHAR(99) NOT NULL,
  weight VARCHAR(99) NOT NULL,
  last_checked DATE,
  received_on DATE,
  FIFO BOOLEAN,
  picture VARCHAR(999),
  quantity INTEGER NOT NULL,
  reserved INTEGER
);

CREATE TABLE IF NOT EXISTS orders(
  id SERIAL PRIMARY KEY NOT NULL,
  warehouse_id INTEGER REFERENCES users(id),
  status VARCHAR(99),
  total_weight INTEGER,
  employee VARCHAR(25),
  received_from VARCHAR(99),
  going_to VARCHAR(99),
  date_receieved VARCHAR(12),
  date_ready VARCHAR(12)
);

CREATE TABLE IF NOT EXISTS order_items(
  item_id INTEGER REFERENCES inventory,
  item_amount INTEGER NOT NULL,
  order_id INTEGER REFERENCES orders,
  PRIMARY KEY(item_id, order_id)
);