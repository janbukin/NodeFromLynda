var flightSchema = require('../schemas/flight');

var emitter = require('events').EventEmitter;

var flightEmitter = new emitter();

flightEmitter.on('arrival', function (flight) {
	var record = new flightSchema(flight.getInfo());

	record.save(function (err) {
		if (err) {
			console.log(err);
		}
	});
});

flightEmitter.on('arrival', function (flight) {
	console.log('Flight arrived: ' + flight.flightInfo.number);
});

module.exports = function (data) {

	var flight = require('../custom_modules/flight');

	var flights = {};

	for (var number in data) {
		flights[number] = flight.create(data[number]);
	};

	var functions = {};

	functions.flight = function (req, res) {
		var number = req.param('number');

		req.session.lastNumber = number;

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

			flightEmitter.emit('arrival', flights[number]);

			res.json({status: 'success'});			
		}
	};

	functions.list = function (req, res) {
		res.render('list', {
			title: 'Flight list',
			flights: flights});
	};

	functions.arrivals = function (req, res) {
		flightSchema.find()
		.setOptions({sort: "actualArrive"})
		.exec(function (err, recordSet) {
			if (err) {
				console.log(err);
				res.status(500).json({status: 'failure'});
			} else {
				res.render('arrivals', {
					title: 'Arrivals list',
					flights: recordSet,
					lastNumber: req.session.lastNumber
				});
				//res.json(recordSet);
			}
		});
	};

	return functions;
};