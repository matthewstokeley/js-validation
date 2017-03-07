var Tests = require('./Tests');

var Tester = function(options) {
	this.options = options;
	this.init.call(this);
};

Tester.prototype.init = function() {
	
	for (var testOptions in this.options) {
		if (this.options.hasOwnProperty(testOptions)) {
			var test = new Tests(this.options[testOptions]);
		}
	}

};

module.exports = Tester;