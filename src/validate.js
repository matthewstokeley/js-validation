var __validate = function(model, schema) {

	/**
	 * [validateSchema description]
	 * @param  {[type]} model  [description]
	 * @param  {[type]} schema [description]
	 * @return {[type]}        [description]
	 */
	function validateSchema(model, schema) {
		return __validation.validateKeys([model, schema]);
	}
	
	/**
	 * [validate description]
	 * @param  {[type]} model  [description]
	 * @param  {[type]} schema [description]
	 * @return {[type]}        [description]
	 */
	function validate(model, schema) {

		if (!validateSchema(model, schema)) {
			return false;
		}

		return __.chainMethods({
			functions: [
				__validation.createSpecification,
				__validation.validateSpecification
			],
			scope: this,
			args: [model, schema]
		});

	}

	try {
		return validate(model, schema);
	} catch(e) {
		throw new Error(e);
	}

};
