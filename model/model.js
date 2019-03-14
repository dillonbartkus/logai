const db = require('../db/config');

const model = {};


model.findAll = name => {
  return db.oneOrNone(
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
     (username, password, email, first_name, last_name, city, avatar)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *
    `,
    [user.username, user.password, user.email, user.first_name,
    user.last_name, user.city, user.avatar]
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
