var connectLivereload = require('connect-livereload');
var express = require('express');

var app = express();
var port = process.env.port || 3000;

//connectLivereload() should be added first to work properly
app.use( connectLivereload() );

app.use( '/',  express.static(__dirname + '/dist') );

// Routes - catch-all to return index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, function() {
  console.log('app listenting on port: ' + port);
});
