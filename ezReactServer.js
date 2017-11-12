
var express = require( "express" )
  , path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));

/*
 * Send the entire page back... Makes REACT routing work.
 */
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

module.exports = app;