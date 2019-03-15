const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

const logger = require('morgan');
app.use(logger('dev'));

// app.use(express.static('client/build'));

app.get('/', (req,res) => {
  res.send(`server`)
})

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const routes = require('./routes/routes')
app.use('/', routes)

app.use('*', (req,res) => {
  res.status(404).send('Page Not Found!')
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
