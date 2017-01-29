var self = this;
var number;
var origin;
var destination;

exports.setNumber = function(number){
	self.number = number;
};

exports.setOrigin = function(origin){
	self.origin = origin;
};

exports.setDestination = function(destination){
	self.destination = destination;
};

exports.getInfo = function(){
	return {
		number: self.number,
		origin: self.origin,
		destination: self.destination
	};
};
