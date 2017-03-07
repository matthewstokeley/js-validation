(function(__validation) {

	function validateSpecification(options) {

		if (!is.array(options.spec)) {
			throw new Exception('validation objects must be in an array');
		}
		/**
		 * [parseResult description]
		 * @param  {[type]} result [description]
		 * @return {[type]}        [description]
		 */
		function parseResult(result) {
			return result.length === 0 ? true : result;
		}

		/**
		 * [runValidations description]
		 * @param  {[type]} validation [description]
		 * @param  {[type]} index      [description]
		 * @param  {[type]} array      [description]
		 * @return {[type]}            [description]
		 */

		function runValidations(validation, index, array) {
			return findErrors(options.spec.map(validation), validation.name);
		}

		/**
		 * [findErrors description]
		 * @param  {[type]} result [description]
		 * @return {[type]}        [description]
		 */
		function findErrors(result, name) {
			return validateResult(result) ? undefined : __validation.returnErrors(result, name, options.spec, options.schema);
		}

		
		/**
		 * [validateResult description]
		 * @param  {[type]} result [description]
		 * @return {[type]}        [description]
		 */
		function validateResult(result) {
			return __.isArrayTrue(result);
		}

		/**
		 * [formatValidations description]
		 * @param  {[type]} runValidations [description]
		 * @return {[type]}                [description]
		 */
		function formatValidations(runValidations) {
			return __.objectToArray(__validation.validations).map(runValidations);
		}

		return __.chainMethods({
			functions: [
				formatValidations,
				__.removeUndefined,
				parseResult],
			scope: this,
			args: runValidations
		});

	}

	if (!__validation) {
		__.validation = {};
	}

	__validation.validateSpecification = validateSpecification;

}(__validation));