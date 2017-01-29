var Flight = function () {
	
	var self = this;

	self.flightInfo = {
		number: null,
		origin: null,
		destination: null
	};


	self.fill = function (info) {
		for(var property in self.flightInfo) {
			if (info[property] !== 'undefined') {
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


module.exports = function (info) {

	var instance = new Flight();

	instance.fill(info);

	return instance;
};