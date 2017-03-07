var consoleLogger = require('./consoleLogger');
var Test = require('./Test');

var Tests = function(options) {

	if (!options.fn || typeof options.fn !== 'function') {
		throw new Error('test must include a function');
	}

	if (!options.test || typeof options.test !== 'function') {
		throw new Error('test must include a test function');
	}

	if (!options.args || !Array.isArray(options.args)) {
		throw new Error('test must include an array of arguments');
	}

	this.options = options;
	consoleLogger('Starting test', true);
	this.test.call(this);
	
};

Tests.prototype.inherit = function() {
	this.options.test.prototype = Object.assign({}, Test.prototype, this.options.test.prototype);
	return this;
};

Tests.prototype.instantiateTest = function() {
	consoleLogger('instantiating ' + this.options.fn.name);
	this.instantiatedTest = new this.options.test(this.options.fn, this.options.args);
	return this;
};

Tests.prototype.runTest = function() {
	consoleLogger('running ' + this.options.fn.name);
	this.result = this.instantiatedTest.test();
	return this;
};

Tests.prototype.handleResult = function() {
	consoleLogger('verifying ' + this.options.fn.name);

	if (!this.result || this.result === false || this.result === undefined) {
		this.throwFailure.call(this);
	} else {
		this.throwSuccess.call(this);
	}

	return this;
};

Tests.prototype.throwFailure = function() {
	consoleLogger(this.options.fn.name + ' test failed');
	return this;
};

Tests.prototype.throwSuccess = function() {
	consoleLogger(this.options.fn.name + ' test succeeded');
	return this;
};

Tests.prototype.test = function() {
	return this.inherit().instantiateTest().runTest().handleResult();
};

module.exports = Tests;