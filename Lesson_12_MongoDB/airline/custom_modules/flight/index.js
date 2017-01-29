var Flight = function () {
	
	var self = this;

	self.flightInfo = {
		number: null,
		origin: null,
		destination: null,
		actualArrive: null
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

	self.triggerArrival = function () {
		self.flightInfo.actualArrive = Date.now();
	};

	self.getInfo = function () {
		return self.flightInfo;
	};

};

var flightsCount = 0;
var destinations = [];	

exports.create = function (info) {
			
	var instance = new Flight();

	instance.fill(info);

	flightsCount++;

	if(info['destination'] !== 'undefined')
	{	
		destinations.push(info['destination']);
	}			

	return instance;
};

exports.getCount = function () {
	return flightsCount;
};

exports.getDestinations = function () {
	return destinations;
};



// module.exports = function () {
	
// 	var flightsCount = 0;
// 	var destinations = [];	

// 	var functions = {

// 		create: function (info) {
			
// 			var instance = new Flight();

// 			instance.fill(info);

// 			flightsCount++;

// 			if(info['destination'] !== 'undefined')
// 			{	
// 				destinations.push(info['destination']);
// 			}			

// 			return instance;
// 		},

// 		getCount: function () {
// 			return flightsCount;
// 		},

// 		getAllDestinations: function () {
// 			return destinations;
// 		}

// 	};

// 	return functions;
// };
