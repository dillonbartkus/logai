const db = require('../db/config');

const model = {};


model.findAll = name => {
  return db.query(
    `
    SELECT * FROM users
    `,
    name
  )
}


model.findUser = id => {
  return db.oneOrNone(
    `
    SELECT * FROM users
    WHERE users.id = $1
    `,
    [id]
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


model.updateUser = (users, id) => {
  return db.one(
    `
    UPDATE users SET
      username = $1,
      password = $2,
      city = $3
    WHERE id = $4
    RETURNING *
  `,
  [users.username, users.password, users.city, id]
  );
};


model.destroyUser = name => {
  return db.none(
    `
    DELETE FROM users
    WHERE users.username = $1
  `,
    name
  );
};


module.exports = model;
