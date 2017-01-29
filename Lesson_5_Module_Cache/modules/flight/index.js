module.exports = function(info) {

	var flightInfo = {
		number: null,
		origin: null,
		destination: null
	};

	for(var property in flightInfo) {
		if (info[property] !== 'undefined') {
			flightInfo[property] = info[property];
		}
	}

	var functions = {
		setNumber: function (number) {
			flightInfo.number = number;
		},

		getInfo: function () {
			return flightInfo;
		}
	};

	return functions;

};