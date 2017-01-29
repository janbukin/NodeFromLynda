var express = require('express');
var router = express.Router();
var flightSchema = require('../schemas/flight');
var flight = require('../custom_modules/flight');

module.exports = function (data) {

	var flights = {};

	for (var number in data) {
		flights[number] = flight.create(data[number]);
	};

	var functions = {};

	router.get('/flight/:number', function(req, res, next) {	
		var number = req.param('number');

		req.session.lastNumber = number;

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status : 'error'});
		} else {
			res.json(flights[number].getInfo());
		}
	});

	router.put('/flight/:number/arrived', function (req, res, next) {
		var number = req.param('number');

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status : 'error'});
		} else {
			flights[number].triggerArrival();

			var record = new flightSchema(flights[number].getInfo());

			record.save(function (err) {
				if (err) {
					console.log(err);
					res.status(500).json({status: 'failure'});
				} else {
					res.json({status: 'success'});
				}
			});
		}
	});

	router.get('/flight/list', function (req, res, next) {
		res.render('list', {
			title: 'Flight list',
			flights: flights});
	});


	router.get('/flight/arrivals', function (req, res, next) {
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
			}
		});
	});

	return router;
};
