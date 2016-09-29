var express = require('express');
var path = require('path');
var Router = express.Router();

Router.get('/', function(req, res){
	res.sendFile(path.join(__dirname,'/../public/index.html'));
});

module.exports = Router;