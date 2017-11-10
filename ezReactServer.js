
var ezConsole = require( './src/utils/EZConsole');


// Init our extended logger. (Just adds timestamps)
ezConsole();



var express = require( "express" )
  , healthRoute = require( "./routes/health" )
  , io = require( './routes/proxy')
  , path = require('path');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/health', healthRoute.get );
app.get('/io', io.get);
app.delete('/io', io.delete);
app.post('/io', io.post);
app.put('/io', io.put);


/*
 * Send the entire bootstrap page back... Makes REACT routing work.
 */
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

module.exports = app;