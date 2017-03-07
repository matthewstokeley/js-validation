(function(__validation) {

	/**
	 * 
	 * @param  {[type]} spec [description]
	 * @return {[type]}      [description]
	 */
	function minLength(spec) {
		
		if (__validation.mixins.validations(spec)) {
			return true;
		}

		if (!__.verifyPropertiesExist(spec, ['minLength'])) {
			return true;
		}

		if (typeof spec.minLength !== 'number') {
			throw new Exception('maxLength must be a number');
		}

		var length;
		if (spec.value.length === undefined) {
			length = spec.value.toString().length + 1;
		} else { 
			length = spec.value.length + 1;
		}
		console.log(length);

		return length > spec.minLength ? true : false;
	
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
	__validation.validations.minLength = minLength;

}(__validation));