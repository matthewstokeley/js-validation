(function(__validation) {

	/**
	 * 
	 * @param  {[type]} spec [description]
	 * @return {[type]}      [description]
	 */
	function regEx(spec) {

		if (__validation.mixins.validations(spec)) {
			return true;
		}

		if (!__.verifyPropertiesExist(spec, ['regex'])) {
			return true;
		}

		if (typeof spec.regex !== 'object' || spec.regex.test === undefined) {
			throw new Exception('regex must be an instance of `RegExp`');
		}

		return spec.regex.test(spec.value);
	}

	/**
	 * 
	 * @param  {[type]} !__validation [description]
	 * @return {[type]}               [description]
	 */
	if (!__validation) {
		__validation = {};
	}

	/**
	 * 
	 * @param  {[type]} !__validation.validations [description]
	 * @return {[type]}                           [description]
	
	/**
	 * 
	 * @type {[type]}
	 */

}(__validation));