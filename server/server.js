var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

mongoose.connect('mongodb://localhost/greenery', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");

  next();

});
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use('/api',routes);
app.use(express.static(__dirname + '/client'));

app.listen(8082, function () {
    console.log('Example app listening on port 8082!');
});

module.exports = app;

