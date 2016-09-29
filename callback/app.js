var express = require('express');
var app = new express();
var port = 9000;

var default_route = require('./routes/index');
var api_route = require('./routes/rest');

app.use('/', default_route);
app.use('/rest', api_route);
app.use('/', express.static('./public'));

app.listen(port, function(){
	console.log('listening at ' + port);
});