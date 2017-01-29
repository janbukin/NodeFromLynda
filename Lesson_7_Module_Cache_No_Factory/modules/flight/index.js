var Flight = function () {
	
	var self = this;

	self.flightInfo = {
		number: null,
		origin: null,
		destination: null
	};


	self.fill = function (info) {
		for(var property in info) {
			if (self.flightInfo[property] !== 'undefined') {
				self.flightInfo[property] = info[property];
			}
		}
	};

	self.setNumber = function (number) {
		self.flightInfo.number = number;
	};

	self.getInfo = function () {
		return self.flightInfo;
	};

};


module.exports = Flight;