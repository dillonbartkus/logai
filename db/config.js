const options = {
    query: (e) => {
      console.log(e.query);
    }
  };
  
  const pgp = require('pg-promise')(options);
  
  let db;
  
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    db = pgp({
      database: 'logai',
      port: 5432,
      host: 'localhost',
    });
  } else if (process.env.NODE_ENV === 'production') {
    // let url = `postgres://localhost:5432/logai`
    // db = pgp(url);
    db = pgp({
      host: '/cloudsql/logai-233920:us-east1:users',
      user: 'postgres',
      password: 'truckingrmmd19',
      database: 'users',
      port: 5432
    });
  }
  
  module.exports = db;
  