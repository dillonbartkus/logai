const options = {
  query: (e) => {
    console.log(e.query);
  }
};

const pgp = require('pg-promise')(options);

let db;

  db = pgp({
    database: 'logai',
    port: 5432,
    host: 'localhost',
  });

module.exports = db;
