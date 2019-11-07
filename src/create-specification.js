(function(__validation) {

	function createSpecification(objects) {
		if (!Array.isArray(objects)) {
			throw new Error('the specification argument must be an array');
		}

		if (objects.length !== 2) {
			throw new Error('the specification argument must contain 2 items');
		}

		/**
		 * [formatSchema description]
		 * @param  {[type]} specification [description]
		 * @return {[type]}               [description]
		 */
		function formatSchema(specification) {
			return Object.assign({}, specification, objects[1][specification.name]);
		}

		/**
		 * [formatModel description]
		 * @param  {String} value    [description]
		 * @param  {String} property [description]
		 * @param  {Object} object   [description]
		 * @return {Object}          [description]
		 */
		function formatModel(value, property, object) {
			return {
				"name": property,
				"value": value
			};
		}

		return { 
			spec: __.mapObject(objects[0], formatModel, this).map(formatSchema), 
			schema: objects[1]
		};

	}

	if (!__validation) {
		__validation = {};
	}

	__validation.createSpecification = createSpecification;

}(__validation));
