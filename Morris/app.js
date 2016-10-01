var express = require('express');
var app = new express();

var port = 9999;

var index_route = require('./routes/index');

app.use('/', index_route);
app.use('/', express.static('./public'));

app.listen(port, function(){
	console.log('application listening at ' + port);
});