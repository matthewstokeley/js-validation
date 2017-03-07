(function(__validation) {

	/**
	 * 
	 * @param  {[type]} spec [description]
	 * @return {[type]}      [description]
	 */
	function validations(spec) {
		if (!is.object(spec)) {
			throw new Exception('the specification must be an object');
		}

		if (!__.verifyPropertiesExist(spec, ['value'])) {

			throw new Exception('the value property of the specification is required');
		}

		if (spec.required !== 'undefined' &&
			spec.required === false) {
			return true;
		}
		return false;
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
	if (!__validation.mixins) {
		__validation.mixins = {};
	}

	/**
	 * 
	 * @type {[type]}
	 */
	__validation.mixins.validations = validations;

}(__validation));