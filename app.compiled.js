"use strict";

var express = require('express');

console.log(process.env.serverUrl);

var app = express();
const port = process.env.HTTP_PORT || 3001;

var cors = require('cors');

var parser = require('body-parser');

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({
  extended: false
}));

// app.use(express["static"]('client/build'));
app.get('/', function (req, res) {
  res.send("server");
});

app.get('/hello', function (req, res) {
  res.send("hello there!");
});

var routes = require('./routes/routes');

app.use('/', routes);
app.use('*', function (req, res) {
  res.status(404).send('Page Not Found!');
});
app.listen(port, function () {
  console.log("Listening on ".concat(port));
});
