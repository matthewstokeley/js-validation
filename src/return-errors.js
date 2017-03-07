(function(__validation) {

	var getErrorMessage = function(property, requirement, requirementType) {

		var strings = {
			"maxLength": '`' + property + '` should no longer than `' + requirement + '` characters long',
			"minLength": '`' + property + '` should be at least `' + requirement + '` characters long',
			"type": '`' + property + '` should be a type of `' + requirement + '`',
			"regEx": '`' + property + '` should match the regex'
		};

		return strings[requirementType];	
	};

	function returnErrors(result, name, validationObject, schema) {
		return __.removeUndefined(mapErrors(result, name, validationObject, schema));
	}

	function mapErrors(result,name,  validationObject, schema) {
		return result.map(function(value, index) { return filterErrors.call(this, value, name, index, validationObject, schema); }.bind(this));
	}

	function filterErrors(value, name, index, validationObject, schema) {
		return value === false ? { "error": getErrorMessage(Object.keys(schema)[index], validationObject[index][name], name)}  : undefined;
	}

	if (!__validation) {
		__validation = {};
	}

	__validation.returnErrors = returnErrors;

}(__validation));