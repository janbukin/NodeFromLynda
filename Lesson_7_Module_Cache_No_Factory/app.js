var flight = require('./modules/flight');

var firstFlightInfo = {
	number: 4,
	origin: 'MINSK',
	destination: 'LONDON'
};

var firstFlight = new flight();

firstFlight.fill(firstFlightInfo);

console.log(firstFlight.getInfo());

var secondFlightInfo = {
	number: 5,
	origin: 'MINSK',
	destination: 'PRAGUE'
};

var secondFlight = new flight(secondFlightInfo);

secondFlight.fill(secondFlightInfo);

console.log(secondFlight.getInfo());

firstFlight.setNumber(6);

console.log(firstFlight.getInfo());