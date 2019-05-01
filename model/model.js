const db = require('../db/config');

const model = {};


// model.findAll = () => {
//   return db.query(
//     `
//     SELECT * FROM users
//     `
//   )
// }


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

model.getInventory = id => {
  return db.query(
    `
    SELECT * FROM inventory
    WHERE inventory.warehouse_id = $1
    `,
    [id]
  );
};

model.getOrders = id => {
  return db.query(
    `
    SELECT * FROM orders
    WHERE orders.origin_id = $1
    `,
    [id]
  );
};

model.getOrderInv = id => {
  return db.query(
    `
   SELECT inventory.*, orders.*
   FROM orders
   JOIN inventory ON orders.item1 = inventory.id
   WHERE inventory.warehouse_id = $1
    `,
    [id]
  );
};

model.updateProduct = (inventory, id) => {
  return db.one(
    `
    UPDATE inventory SET
      amount = $1
    WHERE id = $2
    RETURNING *
  `,
  [inventory.amount, id]
  );
};


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
