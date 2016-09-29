var express = require('express');
var Router = express.Router();

Router.get('/getDays', function(req, res){
	var days = [];
	for(var i = 1 ; i < 32; i++)
	{
		days.push(i);
	}
	res.send(days);
});

Router.get('/getMonths', function(req, res){
	var months = [];
	for(var i = 1 ; i < 13; i++)
	{
		months.push(i);
	}
	res.send(months);
});

Router.get('/getYears', function(req, res){
	var years = [];
	for(var i = 2000 ; i < 2050; i++)
	{
		years.push(i);
	}
	res.send(years);
});

module.exports = Router;