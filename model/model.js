const db = require('../db/config');

const model = {};

model.findUser = email => {
  return db.oneOrNone(
    `
    SELECT * FROM users
    WHERE users.email = $1
    `,
    [email]
  );
};

model.createUser = user => {
  return db.one(
    `
     INSERT INTO users
     (company, pw, email, phone, npc, comptype)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *
    `,
    [user.company, user.pw, user.email, user.phone,
    user.npc, user.comptype]
  );
};

//////////////////////////////////////////////

//        COP ROUTES

//////////////////////////////////////////////

model.getProducts = () => {
  return db.query(
    `
    SELECT * FROM inventory
    `
  );
};

model.showCartItems = id => {
  return db.query(
    `
    SELECT inventory.*, cart_items.*
    FROM cart_items
    JOIN inventory
    ON inventory.id = cart_items.item_id
    WHERE cart_id = $1
    ORDER BY id ASC
    `,
    [id]
  )
}

model.addToCart = (cart_items, id) => {
  return db.one(
    `
     INSERT INTO cart_items
     (item_id, item_quantity, cart_id)
     VALUES ($1, $2, $3)
     RETURNING *
    `,
    [cart_items.item_id, cart_items.item_quantity, id]
  )
}

model.createCustomerOrder = order => {
  return db.one(
    `
     INSERT INTO orders
     (warehouse_id, ordered_by, date_placed, status, preferred_dates, preferred_times, delivery_address)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *
    `,
    [order.warehouse_id, order.ordered_by, order.date_placed, order.status, order.preferred_dates, order.preferred_times, order.delivery_address]
  )
}

model.addCartItemsToOrder = (order_items) => {
  return db.one(
    `
     INSERT INTO order_items
     (item_id, amount_ordered, order_id)
     VALUES ($1, $2, $3)
     RETURNING *
    `,
    [order_items.item_id, order_items.amount_ordered, order_items.order_id]
  )
}

model.getCustomerOrder = id => {
  return db.query(
    `
    SELECT * FROM orders
    WHERE orders.id = $1
    `,
    [id]
  );
};

model.getAllCustomerOrders = id => {
  return db.query(
    `
    SELECT * FROM orders
    WHERE orders.ordered_by = $1
    ORDER BY id DESC
    `,
    [id]
  );
};

model.confirmCustomerOrder = id => {
  return db.one(
    `
    UPDATE orders SET
      customer_confirmed_transport = TRUE
    WHERE orders.id = $1
    RETURNING *
    `,
    [id]
  )
}

model.changeQuantity = (cart_items, id) => {
return db.one(
  `
   UPDATE cart_items SET
    item_quantity = $1
   WHERE item_id = $2 AND cart_id = $3
   RETURNING *
  `,
  [cart_items.item_quantity, cart_items.item_id, id]
  )
}

model.deleteCartItem = id => {
  return db.none(
    `
    DELETE FROM cart_items
    WHERE cart_items.item_id = $1
  `,
    id
  );
};

//////////////////////////////////////////////

//        WMS ROUTES

//////////////////////////////////////////////

model.getInventory = id => {
  return db.query(
    `
    SELECT * FROM inventory
    WHERE inventory.warehouse_id = $1
    `,
    [id]
  );
};

model.getWarehouseOrders = id => {
  return db.query(
    `
    SELECT orders.*, users.company
    FROM orders
    JOIN users
    ON orders.ordered_by = users.id
    WHERE orders.warehouse_id = $1
    ORDER BY id DESC
    `,
    [id]
  );
};

model.getOrderInv = id => {
  return db.query(
    `
    SELECT inventory.*, order_items.item_id, order_items.item_amount
    FROM order_items
    JOIN inventory
    ON order_items.item_id = inventory.id
    WHERE order_items.order_id = $1
    `,
    [id]
  );
};

model.updateProductQuantity = (inventory, id) => {
  return db.one(
    `
    UPDATE inventory SET
      quantity = $1
    WHERE id = $2
    RETURNING *
  `,
  [inventory.quantity, id]
  );
};

model.updateOrderStatus = (order, id) => {
  return db.one(
    `
    UPDATE orders SET
      status = $1
    WHERE id = $2
    RETURNING *
    `,
    [order.status, id]
  )
}

model.updateTransportInfo = (order, id) => {  
  return db.one(
    `
    UPDATE orders SET
      trucking_company = $1,
      truck_driver = $2,
      actual_date = $3,
      actual_time = $4
    WHERE id = $5
    RETURNING *
    `,
    [order.trucking_company, order.truck_driver, order.actual_date, order.actual_time, id]
  )
}

model.deleteProduct = id => {
  return db.none(
    `
    DELETE FROM inventory
    WHERE inventory.id = $1
  `,
    id
  );
};


module.exports = model;
