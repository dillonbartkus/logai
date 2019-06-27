const options = {
  query: (e) => {
    console.log(e.query);
  }
};

const pgp = require('pg-promise')(options);

let db;

  db = pgp({
    database : process.env.RDS_DB_NAME,
    port     : process.env.RDS_PORT,
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    
});

module.exports = db;
