const express = require('express');
const app = express();
const port = process.env.HTTP_PORT || 3001;
const cors = require('cors')
const parser = require('body-parser');

app.use(cors())
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

// const logger = require('morgan');
// app.use(logger('dev'));

app.use(express.static('client/build'));

app.get('/', (req,res) => {
  res.send(`server`)
})

const routes = require('./routes/routes')
app.use('/', routes)

app.use('*', (req,res) => {
  res.status(404).send('Page Not Found!')
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})