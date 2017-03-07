(function(__validation) {

	/**
	 * [doKeysMatch description]
	 * @param  {[type]} properties [description]
	 * @return {[type]}            [description]
	 */
	function doKeysMatch(objects) {
		return __.isArrayTrue(__.mapObject(objects[1], function(value, property) {
			return __.findIn(property, __.objectToArray(Object.keys(objects[0])));
		}));
	}

	/**
	 * [validateKeys description]
	 * @param  {[type]} properties [description]
	 * @return {[type]}            [description]
	 */
	function validateKeys(objects) {
		if (!doKeysMatch(objects)) {
			throw new Exception('keys dont match');
		}

		return true;
	}

	/**
	 * [getProperties description]
	 * @param  {[type]} model  [description]
	 * @param  {[type]} schema [description]
	 * @return {[type]}        [description]
	 */
	function getProperties(model, schema) {
		return format([model, schema]);
	}

	/**
	 * [format description]
	 * @param  {[type]} objects [description]
	 * @return {[type]}         [description]
	 */
	function format(objects) {
		if (!is.array(objects)) {
			throw new Exception('parameters are improperly formatted');
		}

		return objects.map(__.objectToArray.bind(this));
	}


	__validation.validateKeys = validateKeys;

}(__validation));