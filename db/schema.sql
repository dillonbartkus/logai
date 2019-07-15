\c logai

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY NOT NULL,
  company VARCHAR(50) UNIQUE NOT NULL,
  pw VARCHAR(99) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  phone VARCHAR(15) UNIQUE NOT NULL,
  npc VARCHAR(25) NOT NULL,
  company_type TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS inventory(
  id SERIAL PRIMARY KEY NOT NULL,
  warehouse_id INTEGER REFERENCES users(id),
  sku VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(99) NOT NULL,
  warehouse VARCHAR(99),
  location VARCHAR(99),
  type VARCHAR(99) NOT NULL,
  weight INTEGER NOT NULL,
  last_checked DATE NOT NULL DEFAULT CURRENT_DATE,
  received_on DATE NOT NULL DEFAULT CURRENT_DATE,
  FIFO BOOLEAN,
  picture VARCHAR(999),
  on_hand INTEGER NOT NULL,
  reserved INTEGER
);

CREATE TABLE IF NOT EXISTS carts(
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER UNIQUE REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS cart_items(
  item_id INTEGER REFERENCES inventory(id),
  item_quantity INTEGER NOT NULL,
  cart_id INTEGER REFERENCES carts(id),
  PRIMARY KEY(item_id, cart_id)
);

CREATE TABLE IF NOT EXISTS orders(
  id SERIAL PRIMARY KEY NOT NULL,
  warehouse_id INTEGER REFERENCES users(id),
  status VARCHAR(99),
  total_weight INTEGER,
  employee VARCHAR(25),
  received_from VARCHAR(99),
  going_to VARCHAR(99),
  date_received VARCHAR(12),
  date_ready VARCHAR(12)
);

CREATE TABLE IF NOT EXISTS order_items(
  item_id INTEGER REFERENCES inventory,
  item_amount INTEGER NOT NULL,
  order_id INTEGER REFERENCES orders,
  PRIMARY KEY(item_id, order_id)
);

CREATE TABLE IF NOT EXISTS clients(
  id SERIAL PRIMARY KEY NOT NULL,
  business_id INTEGER REFERENCES users(id),
  name VARCHAR(99) UNIQUE NOT NULL,
  address VARCHAR(999) UNIQUE NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  phone VARCHAR(15) UNIQUE NOT NULL,
  npc VARCHAR(25) NOT NULL
);