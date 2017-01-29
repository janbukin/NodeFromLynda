var flight = require('../custom_modules/flight');
var data = require('../data/data');
var flights = [];

for (var number in data) {
	var item = flight.create(data[number]);
	flights.push(item.getInfo());
};

exports.listJson = function(req, res) {
	res.json(flights);
};