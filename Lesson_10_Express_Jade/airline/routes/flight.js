
var flight = require('../custom_modules/flight');
var data = require('../data/data');

var flights = {};

for (var number in data) {
	flights[number] = flight.create(data[number]);
};

exports.flight = function (req, res) {
	var number = req.param('number');

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status : 'error'});
	} else {
		res.json(flights[number].getInfo());
	}
};

exports.arrived = function (req, res, next) {
	var number = req.param('number');

	if (typeof flights[number] === 'undefined') {
		res.status(404).json({status : 'error'});
	} else {
		flights[number].triggerArrival();
		res.json({status: 'done'});
	}

	//next();
};

exports.list = function (req, res) {
	res.render('list', {
		title: 'Flight list',
		flights: flights});
};