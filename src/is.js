/**
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

})();