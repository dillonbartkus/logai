\c logai

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY NOT NULL,
  company VARCHAR(50) UNIQUE NOT NULL,
  pw VARCHAR(99) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  phone VARCHAR(15) UNIQUE NOT NULL,
  address VARCHAR(99),
  npc VARCHAR(25) NOT NULL,
  type TEXT NOT NULL,
  customer_of INTEGER REFERENCES users(id)
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
  price INTEGER NOT NULL,
  last_checked DATE NOT NULL DEFAULT CURRENT_DATE,
  received_on DATE NOT NULL DEFAULT CURRENT_DATE,
  FIFO BOOLEAN,
  picture VARCHAR(999),
  rate_of_count VARCHAR(99),
  selling_frequency VARCHAR(99),
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
  ordered_by INTEGER REFERENCES users(id),
  status VARCHAR(99) NOT NULL,
  supplier VARCHAR(999),
  total_weight INTEGER,
  employee VARCHAR(99),
  date_placed VARCHAR(999),
  tax VARCHAR(99),
  shipping VARCHAR(99),
  subtotal VARCHAR(99),
  instructions VARCHAR(9999),
  trucking_company VARCHAR(999),
  truck_driver VARCHAR(999),
  delivery_address VARCHAR(9999),
  customer_confirmed_transport BOOLEAN,
  preferred_dates VARCHAR(9999),
  actual_date VARCHAR(9999),
  preferred_times VARCHAR(9999),
  actual_time VARCHAR(999),
  UNIQUE (actual_date, actual_time)
);

CREATE TABLE IF NOT EXISTS order_items(
  item_id INTEGER REFERENCES inventory,
  amount_ordered INTEGER NOT NULL,
  order_id INTEGER REFERENCES orders,
  completed BOOLEAN false,
  PRIMARY KEY(item_id, order_id)
);