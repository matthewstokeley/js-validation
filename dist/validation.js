var Exception = function(message, shouldLog, shouldConsole, shouldTrace) {
		this.message = this.validate.call(this, message, shouldLog, shouldConsole, shouldTrace);
	};

	Exception.prototype.validate = function(message, shouldLog, shouldConsole, shouldTrace) {
		if (shouldLog === undefined) {
			shouldLog = true;
		}

		if (shouldConsole === undefined) {
			shouldConsole = true;
		}

		if (shouldTrace === undefined) {
			shouldTrace = true;
		}

		// if (config.error.messages[message]) {
		// 	message = config.error.messages[message];
		// }

		// if (shouldLog) {
		// 	log(message);
		// }

		if (shouldConsole) {
			console.log(message);		
		}

		if (shouldTrace) {
			console.trace();
		}

		return message;	
	};;/**
 * [description]
 * @param  {[type]} ) {		var       isObject [description]
 * @return {[type]}   [description]
 */
var is = (function() {
	
	var object = function(property) {
		if (is.array(property)) {
			return false;
		}
		return isType(property, 'object');
	};

	var array = function(property) {
		if (!Array.isArray(property)) {
			return false;
		}

		return true;
	};

	var string = function(property) {
		return isType(property, 'string');
	};

	var number = function(property) {
		return isType(property, 'number');
	};

	var boolean = function(property) {
		return isType(property, 'boolean');
	};

	var isType = function(property, type) {
		if (typeof property !== type) {
			return false;
		}
		return true;
	};

	var isDomProperty = function(property, type) {

	};

	var isDomElement = function() {

	};

	var isElementList = function() {

	};

	var dom = function(object) {
		if(!is.object(object)) {
			return false;
		}
		return object.tagName ? true : false;
	};


	var element = function(object) {
		if(!is.object(object)) {
			return false;
		}
		return object.tagName ? true : false;
	};

	var node = function(object) {
		if(!is.object(object)) {
			return false;
		}
		return object.nodeName ? true : false;
	};

	var type = function(property, type) {

		if (!is[type]) {
			return undefined;
		}

		return is[type](property);

	};
	
	return {
		object: object,
		array: array,
		string: string,
		number: number,
		boolean: boolean,
		typeof: isType,
		type: type,
		dom: dom,
		element: element,
		node: node
	};

})();;var __validation = {};
__validation.mixins = {};
__validation.validations = {};;(function(__validation) {

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

}(__validation));;(function(__validation) {

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

}(__validation));;(function(__validation) {

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
		 * @param  {[type]} value    [description]
		 * @param  {[type]} property [description]
		 * @param  {[type]} object   [description]
		 * @return {[type]}          [description]
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

}(__validation));;(function(__validation) {

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

}(__validation));;(function(__validation) {

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
			console.log(spec);
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

}(__validation));;(function(__validation) {

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

}(__validation));;(function(__validation) {

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

}(__validation));;(function(__validation) {

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
	 */
	if (!__validation.validations) {
		__validation.validations = {};
	}

	/**
	 * 
	 * @type {[type]}
	 */
	__validation.validations.regex = regEx;

}(__validation));;(function(__validation) {

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

}(__validation));;var __validate = function(model, schema) {

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
