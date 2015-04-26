var connectLivereload = require('connect-livereload');
var express = require('express');

var app = express();
var port = argv.port || 3000;

//connectLivereload() should be added first to work properly
app.use( connectLivereload() );

app.use( '/dist',  express.static(__dirname + '/dist') );

// Routes - catch-all to return index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

server.listen(port, function() {
  console.log('app listenting on port: ' + port);
});
