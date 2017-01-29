var flight = require('./modules/flight');

var firstFlightInfo = {
	number: 4,
	origin: 'MINSK',
	destination: 'LONDON'
};

var firstFlight = flight(firstFlightInfo);

console.log(firstFlight.getInfo());

var secondFlightInfo = {
	number: 5,
	origin: 'MINSK',
	destination: 'PRAGUE'
};

var secondFlight = flight(secondFlightInfo);

console.log(secondFlight.getInfo());

firstFlight.setNumber(6);

console.log(firstFlight.getInfo());