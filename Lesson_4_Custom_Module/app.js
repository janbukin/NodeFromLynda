var flight = require('./modules/flight');

flight.setNumber(4);
flight.setOrigin('MINSK');
flight.setDestination('LONDON');

console.log(flight.getInfo());