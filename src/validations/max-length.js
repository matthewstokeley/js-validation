(function(__validation) {

	/**
	 * 
	 * @param  {[type]} spec [description]
	 * @return {[type]}      [description]
	 */
	function maxLength(spec) {

		if (__validation.mixins.validations(spec)) {
			return true;
		}
		
		if (!__.verifyPropertiesExist(spec, ['maxLength'])) {
			return true;
		}

		if (typeof spec.maxLength !== 'number') {
			throw new Exception('maxLength must be a number');
		} 

		var length;
		if (spec.value.length === undefined) {
			length = spec.value.toString().length + 1;
		} else { 
			length = spec.value.length + 1;
		}

		return length < spec.maxLength ? true : false;
	
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
	 */
	if (!__validation.validations) {
		__validation.validations = {};
	}

	/**
	 * 
	 * @type {[type]}
	 */
	__validation.validations.maxLength = maxLength;

}(__validation));