/**
 * 
 * validation test
 * @param {Function} fn   [description]
 * @param {[type]}   args [description]
 */

var ValidationTest = function ValidationTest(fn, args) {
	this.args = args;
	this.init.call(this, fn, args);
};

ValidationTest.prototype.test = function() {
	
	if (typeof this.result === 'object') {
		console.log(this.result);
		return false;
	}

	return this.result

};

module.exports = ValidationTest;