var flight = require('./modules/flight');

var firstFlightInfo = {
	number: 4,
	origin: 'MINSK',
	destination: 'LONDON'
};

//var allFlights = flight();

var firstFlight = flight.create(firstFlightInfo);

console.log(firstFlight.getInfo());

var secondFlightInfo = {
	number: 5,
	origin: 'MINSK',
	destination: 'PRAGUE'
};

var secondFlight = flight.create(secondFlightInfo);

console.log(secondFlight.getInfo());

firstFlight.setNumber(6);

console.log(firstFlight.getInfo());

console.log('Count of flights: ' + flight.getCount());

console.log('Destinations: ' + flight.getDestinations())