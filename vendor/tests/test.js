var Test = function Test(fn, args) {
	
};

Test.prototype.init = function(fn, args) {

	if (typeof fn !== 'function') {
		throw new Error('fn must be a function');
	}

	if (!Array.isArray(args)) {
		throw new Error('args must be an array');
	}

	this.fn = fn;
	this.args = args;
	this.result = this.execute.call(this);
};

Test.prototype.execute = function() {
	return this.fn.apply(this, this.args);
};

module.exports = Test;