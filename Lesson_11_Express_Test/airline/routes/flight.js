module.exports = function (data) {

	var flight = require('../custom_modules/flight');

	var flights = {};

	for (var number in data) {
		flights[number] = flight.create(data[number]);
	};

	var functions = {};

	functions.flight = function (req, res) {
		var number = req.param('number');

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status : 'error'});
		} else {
			res.json(flights[number].getInfo());
		}
	};

	functions.arrived = function (req, res) {
		var number = req.param('number');

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status : 'error'});
		} else {
			flights[number].triggerArrival();
			res.json({status: 'done'});
		}
	};

	functions.list = function (req, res) {
		res.render('list', {
			title: 'Flight list',
			flights: flights});
	};

	return functions;
};