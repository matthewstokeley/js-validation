(function(__validation) {

	/**
	 * 
	 * @param  {[type]} spec [description]
	 * @return {[type]}      [description]
	 */
	function type(spec) {

		var allowedTypes = ['string', 'number', 'boolean', 'object', 'array', 'element', 'node'];
		
		if (__validation.mixins.validations(spec)) {
			return true;
		}
		
		if (!__.verifyPropertiesExist(spec, ['type'])) {
			throw new Exception('the specification `type` field is required');
		}

		if (!__.findIn(spec.type, allowedTypes)) {
			throw new Exception('the specification type is not allowed');
		}



		return is.type(spec.value, spec.type);
	
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
	__validation.validations.type = type;

}(__validation));