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
;var __ = {};;(function(__) {

	/**
	 * filter an array of booleans
	 * return false if there is a false value
	 * otherwise, return true
	 * @return {Boolean} [description]
	 */
	var runFunctions = function(options) {

		if (!Array.isArray(options.fn)) {
			throw new Exception('options must be an array');
		}

		if (!Array.isArray(options.args)) {
			throw new Exception('args must be an array');
		}

		if (!options.scope) {
			options.scope = this;
		}

		function run(fn, index, array) {

			if (typeof fn !== 'function') {
				return false;
			}
			
			fn.apply(options.scope, options.args);		
		
		}

		function loop(functions) {
			functions.forEach(run);
		}

		loop.call(this, options.fn);

    };

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.runFunctions = runFunctions;
	
})(__);;(function(__) {

	/**
	 * 
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	var chainMethods = function chainMethods(options) {
		/**
		 * [if description]
		 * @param  {[type]} !Array.isArray(options.functions) [description]
		 * @return {[type]}                                   [description]
		 */
		if (!Array.isArray(options.functions)) {
			throw new Error('the functions option must be an array');
		}

		/**
		 * [if description]
		 * @param  {[type]} !options.args [description]
		 * @return {[type]}               [description]
		 */
		if (!options.args) {
			throw new Error('options must include an options value');
		}

		/**
		 * [if description]
		 * @param  {[type]} !options.scope [description]
		 * @return {[type]}                [description]
		 */
		if (!options.scope) {
			options.scope = this;
		}

		/**
		 * execute function
		 * @param  {Function} fn  [description]
		 * @param  {[type]}   arg [description]
		 * @return {[type]}       [description]
		 */
		function runMethod(fn, arg) {
			arg = [arg];
			return fn.apply(this, arg);
		}

		/**
		 * execute all functions with the result of the previous function
		 * @param  {[type]} arg [description]
		 * @return {[type]}     [description]
		 */
		function loop(arg) {
			for (var i = 0; i < options.functions.length; i++) {
				arg = options.functions[i].apply(options.scope, [arg]);
			}
			return arg;
		}

		return loop.call(options.scope, options.args);

	};

	__.chainMethods = chainMethods;

})(__);;(function(__) {

	var mapObject = function(object, fn, context) {

		if (!context || context === undefined) {
			context = this;
		}

		if (typeof fn !== 'function') {
			throw new Exception('the mapper needs a function');
		}

		var arr = [];

		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				arr.push(fn.call(context, object[property], property, object));
			}
		}

		return arr;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.mapObject = mapObject;

})(__);;(function(__) {

	/**
	 * 
	 */
	var arraysToObject = function arraysToObject(array, properties) {

		if (!array ||
			!Array.isArray(array)) {
			console.log('map values requires an array');
		}

		if (!properties ||
			!Array.isArray(properties)) {
			console.log('properties must be an array');
		}

		if (properties.length !== array.length) {
			console.log('properties and array don\'t match');
		}

		var obj = {};

		for (var i = 0; i < array.length; i++) {
			obj[properties[i]] = array[i];
		}

		return obj;
	
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.arraysToObject = arraysToObject;

})(__);;(function(__) {

	/**
	 * 
	 */
	var arrayToObject = function arrayToObject(array) {

		if (!array ||
			!Array.isArray(array)) {
			console.log('map values requires an array');
		}

		var obj = {};

		for (var i = 0; i < array.length; i++) {
			obj[i] = array[i];
		}

		return obj;
	
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.arrayToObject = arrayToObject;

})(__);;(function(__) {

	var walkObject = function(object, fn, context) {

		if (!context) {
			context = this;
		}

		if (typeof fn !== 'function') {
			throw new Exception('object mapper needs a function');
		}

		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				fn.call(context, object[property], property, object);
			}
		}
		
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.walkObject = walkObject;

})(__);;(function(__) {

	/**
	 * @param  {[type]} methods [description]
	 * @param  {[type]} object  [description]
	 * @return {[type]}         [description]
	 */
	var assignMethodsToObject = function assignMethodsToObject(methods, object) {

		if (!object) {
			object = {};
		}

		if (typeof object !== 'object') {
			object = {};
		}

		if (!methods || !Array.isArray(methods)) {
			return false;
		}

		function assignMethods(value) {
		
			if (value.name === '') {
				console.log('anonymous functions have no names');
				return false;
			}

			object[value.name] = value;

		}

		methods.forEach(assignMethods);

		return object;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.assignMethodsToObject = assignMethodsToObject;

})(__);
;(function(__) {
	// cloning objects with nested references
	/**
	 * @todo   refactor
	 * @param  {[type]} object [description]
	 * @return {[type]}        [description]
	 */
	var cloneObject = function cloneObject(object) {

		if (typeof object !== 'object') {
			return false;
		}

		var newObject = {};
		for (var property in object) {
			if(object.hasOwnProperty(property)) {
				if (typeof object[property] === 'object' &&
					object[property] !== null) {
					// check if dom or node
					// 
					if (is.dom(object[property]) || is.node(object[property])) {
						newObject[property] = object[property];
					} else {
						var count = 0;
						for (var objectProperty in object[property]) {
							count++;
						}
						if (count > 0) {
							newObject[property] = cloneObject(object[property]);
						} else {
							newObject[property] = Object.assign({}, object[property]);					
						}
					}

				} else {
					if (typeof object[property] !== undefined) {
						var descriptor = Object.getOwnPropertyDescriptor(object, property);	
						descriptor.value = object[property];
						Object.defineProperty(newObject, property, descriptor);
					} else {
						newObject[property] = object[property];
					}
				}
			}
		}
		return newObject;
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.cloneObject = cloneObject;

})(__);;(function(__) {

	/**
	 * extend all methods in a class
	 * @param  {[type]} obj        [description]
	 * @param  {[type]} middleware [description]
	 * @param  {[type]} context    [description]
	 * @return {[type]}            [description]
	 */

	var extendAllMethods = function extendAllMethods(oldClass, middleware) {

		if (!Array.isArray(middleware)) {
			console.log('middleware must be in an array');
		    return false;
		}

		if (typeof oldClass !== 'function') {
			console.log('class needs to be a function');
			return false;
		}

		var obj = function(options) { oldClass.call(this, options); };
		
		obj.prototype = Object.assign({}, oldClass.prototype, obj.prototype);
		obj.prototype = __.cloneObject(oldClass.prototype);

		context = this;

		/**
		 * [processMiddleware description]
		 * @param  {[type]} args [description]
		 * @return {[type]}      [description]
		 */
	    processMiddleware = function(args) {
		
			/**
			 * [description]
			 * @param  {[type]} method) 
			 * @return {[type]}         [description]
			 */
			middleware.forEach(function(method) { runMethod.call(this, method, args); }.bind(this));
			return this;
	    
	    };

	    /**
	     * [runMethod description]
	     * @param  {[type]} method [description]
	     * @param  {[type]} args   [description]
	     * @return {[type]}        [description]
	     */
	    runMethod = function(method, args) {
		    
		    if (typeof method !== 'function') {
				return false;
		    }
		    method.apply(this, args);
		    return this;
		    
	    };

	    /**
	     * [childMethod description]
	     * @param  {[type]} methods [description]
	     * @param  {[type]} prop    [description]
	     * @return {[type]}         [description]
	     */
	    childMethod = function(methods, prop) {
	    	return function() {
			    processMiddleware.call(this, arguments);
			    methods[prop].apply(this, arguments);
	    	};
		};

		var methods = {};

		/**
		 * [for description]
		 * @param  {[type]} var prop          in obj.prototype [description]
		 * @return {[type]}     [description]
		 */
	    for (var prop in obj.prototype) {
			if (obj.prototype.hasOwnProperty(prop)) {
			    if (typeof obj.prototype[prop] === 'function') {
					methods[prop] = obj.prototype[prop];
					obj.prototype[prop] = childMethod.call(context, methods, prop);
			    }
			}
	    }

    	return obj;
    	
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.extendAllMethods = extendAllMethods;

})(__);;(function(__) {

    /**
     * [extend description]
     * 
     * similiar to chaining methods, this function allows methods to utilize
     * common utility functions without manually adding them to the class or 
     * calling them from within class methods. 
     * 
     * @param  {[type]} method     [description]
     * @param  {[type]} middleware [description]
     * @param  {[type]} context    [description]
     * @return {[type]}            [description]
     * 
     */

    var extendMethod = function(method, middleware, context) {

    	if (!Array.isArray(middleware)) {
    	   console.log('the middleware functions must be in an array');
    	}

        if (!context) {
            context = this;
        }

        /**
         * [description]
         * @return {[type]} [description]
         */
    	return function() {
            var args = arguments;

            /**
             * [runMiddleware description]
             * @return {[type]} [description]
             */
            this.runMiddleware = function() {
                middleware.forEach(this.runMethod.bind(this));
                return this;
            };

            /**
             * [runMethod description]
             * @param  {[type]} method [description]
             * @return {[type]}        [description]
             */
            this.runMethod = function(method) {
                
                if (typeof method !== 'function') {
                    return false;
                }
                
                //
                method.apply(context, args);
                return this;
            
            };


    		this.runMiddleware();
            this.runMethod(method);
    	};

    };


    if (!__ || __ === 'undefined') {
        __ = {};
    }

    __.extendMethod = extendMethod;

})(__);
;(function(__) {

    /**
     * [extend description]
     * 
     * similiar to extends a method with another method
     * that accepts different arguments
     * 
     * @param  {[type]} method     [description]
     * @param  {[type]} middleware [description]
     * @param  {[type]} context    [description]
     * @return {[type]}            [description]
     * 
     */

    var extendNewMethod = function(method, extension, extensionArguments, context) {
 
    	if (!Array.isArray(extensionArguments)) {
    	    throw 'the extension arguments must be in an array';
    	}

        if (typeof method !== 'function') {
            return false;
        }

        if (typeof extension !== 'function') {
            return false;
        }
    	
    	/**
    	 * [runMiddleware description]
    	 * @return {[type]} [description]
    	 */
    	this.runExtension = function() {
            extension.apply(context, extensionArguments);
    		return this;
        };

        /**
         * [runMethod description]
         * @param  {[type]} method [description]
         * @return {[type]}        [description]
         */
        this.runMethod = function() {
        	method.apply(context, arguments);
        	return this;
        };

        /**
         * [description]
         * @return {[type]} [description]
         */
    	return function() {
    		context.runMethod().runExtension();
    	};

    };


    if (!__ || __ === 'undefined') {
        __ = {};
    }

    __.extendNewMethod = extendNewMethod;

})(__);
;(function(__) {

	/**
	 * [findIn description]
	 * @return {[type]} [description]
	 */
	var findIn = function findIn(needle, haystack) {

		if (!haystack || 
			!Array.isArray(haystack)) {
			throw new Error('haystack must be an array');
		}

	    for (var i = 0; i < haystack.length; i++) {
	        if (needle === haystack[i]) {
	            return true;
	        }
	    }
	    return false;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.findIn = findIn;

})(__);;(function(__) {

	var inherit = function(parent, child) {

		child.prototype = Object.assign({}, parent.prototype, child.prototype);

		return child;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.inherit = inherit;

})(__);;(function(__) {

	/**
	 * filter an array of booleans
	 * return false if there is a false value
	 * otherwise, return true
	 * @return {Boolean} [description]
	 */
	var isArrayTrue = function(array) {

		if (!Array.isArray(array)) {
			return false;
		}

		for (var i = 0; i < array.length; i++) {
			
			if (typeof array[i] !== 'boolean' &&
				!Array.isArray(array[i])) {
				return false; 
			}

			if (Array.isArray(array[i])) {
				if(!isArrayTrue(array[i])) {
					return false;
				}
			}

			if (array[i] === false) {
				return false;
			}
		}

		return true;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.isArrayTrue = isArrayTrue;

})(__);;(function(__) {

	/**
	 * element and event listeners implementation
	 */

	var listen = function(options) {
		for (var property in options) {
			if (options.hasOwnProperty(property)) {
				if (typeof options[property] === 'function') {
					events.addListener(property, options.property);
				} else if (Array.isArray(options[property])) {
					options[property][0].addEventListener(options[property][1], options.property[2]);
				}
			}
		}
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.listen = listen;

})(__);;(function(__) {

	var removeBlankArrays = function(array) {
	
		if (!Array.isArray(array)) {
			return false;
		}


		function findNonEmptyArrays(array) {
			if (Array.isArray(array) &&
				array.length > 0) {
				return array;
			}
			if (!Array.isArray(array)) {
				return array;
			}
		}

		return array.filter(findNonEmptyArrays);


	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.removeBlankArrays = removeBlankArrays;

})(__);;(function(__) {

	var removeUndefined = function(array) {
		if (!Array.isArray(array)) {
			return false;
		}

		function findDefinedValues(value) {
			if (value !== undefined) {
				return value;
			}
		}

		return array.filter(findDefinedValues);

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.removeUndefined = removeUndefined;

})(__);;(function(__) {

	var objectToArray = function(object) {
		var arr = [];
		for (var property in object) {
			if (object.hasOwnProperty(property)) {
				arr.push(object[property]);
			}
		}
		return arr;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.objectToArray = objectToArray;

})(__);;(function(__) {

	/**
	 * @param  {[type]} original [description]
	 * @param  {[type]} update   [description]
	 * @return {[type]}          [description]
	 */
	// var updateObjectProperties = function updateObjectProperties(original, update) {
	// 	for (var property in original) {
	// 		if (original.hasOwnProperty(property)) {
	// 			if (update[property]) {
	// 				// if both the update property and the object property
	// 				// exist and are objects
	// 				if(typeof update[property] === 'object') {
	// 					original[property] = updateObjectProperties(original[property], update[property]);
	// 				} else {
	// 					original[property] = update[property];					
	// 				}

	// 			}
	// 		}
	// 	}

	// 	for (property in update) {
	// 		if (update.hasOwnProperty(property)) {
	// 			// if there is a property in the update object
	// 			// that is not in the original
	// 			if (!original[property]) {
	// 				original[property] = update[property];
	// 			}
	// 		}
	// 	}

	// 	return original;
	// };


	// updateObjectProperties = function(original, update) {
	//     for (var property in original) {
	// 	        if (update[property]) {
	// 	            // if both the update property and the object property
	// 	            // exist and are objects
	// 	            if(typeof update[property] === 'object') {
	// 	                original[property] = updateObjectProperties(original[property], update[property]);
	// 	            } else {
	// 	                original[property] = update[property];                  
	// 	            }
	// 	    }
	// 	}

	// 	for (var newProperty in update) {
	// 	    if (update.hasOwnProperty(newProperty)) {
	// 	        // if there is a property in the update object
	// 	        // that is not in the original
	// 	        if (!original[newProperty]) {
	// 	            original[newProperty] = update[newProperty];
	// 	        }
	// 	    }
	// 	}

	// 	return original;
	// 	};

	updateObjectProperties = function(original, update) {
		for (var property in original) {
			//if (original.hasOwnProperty(property)) {
		        if (update[property]) {
		            // if both the update property and the object property
		            // exist and are objects
		            if(typeof update[property] === 'object') {
		                original[property] = updateObjectProperties(original[property], update[property]);
		            } else {
		                original[property] = update[property];                  
		            }
		        }
		    //}
		}

		for (var newProperty in update) {
		    if (update.hasOwnProperty(newProperty)) {
		        // if there is a property in the update object
		        // that is not in the original
		        if (original[newProperty] === 'undefined') {
		            original[newProperty] = update[newProperty];
		        }
		    }
		}

		// function updateOriginal(value, property, object) {
		// 	 return original[property] === undefined ? original[property] = object[property] : null;
		// }

		// __.walkObject(update, updateOriginal);

		return original;
	
	};

	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.updateObjectProperties = updateObjectProperties;

})(__);;(function(__) {

	/**
	 * validate options for undefined properties
	 * and dom elements that are not found
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */

	var validateAllProperties = function(options) {
		for (var property in options) {
			if (options.hasOwnProperty(property)) {
				if (options[property] === undefined) {
					return false;
				}
			}
		}
		return true;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.validateAllProperties = validateAllProperties;

})(__);;(function(__) {

	/**
	 * [validateMethods description]
	 * @param  {[type]} methods [description]
	 * @return {[type]}         [description]
	 */
	var validateMethods = function(object, methods) {

		if(!is.array(methods)) {
			return false;
		}

		for (var i = 0; i < methods.length; i++) {
			if (object.prototype[methods[i]] === undefined) {
				return false;
			}

			if (typeof object.prototype[methods[i]] !== 'function') {
				return false;
			}
		}

		return true;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.validateMethods = validateMethods;

})(__);;(function(__) {

	/**
	 * [validateProperties description]
	 * @param  {[type]} properties [description]
	 * @return {[type]}            [description]
	 */
	var validateProperties = function(properties) {

		if(Array.isArray(properties)) {
			return false;
		}

		for (var i = 0; i < properties.length; i++) {
			if (properties[i] === undefined) {
				return false;
			}
		}

		return true;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.validateProperties = validateProperties;

})(__);;(function(__) {

	/**
	 * validate options for undefined properties and dom elements that are not found
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	var verifyAllPropertiesExist = function(options) {
		for (var property in options) {
			if (options.hasOwnProperty(property)) {
				if (options[property] === undefined) {
					return false;
				}
			}
		}
		return true;
	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.verifyAllPropertiesExist = verifyAllPropertiesExist;

})(__);;(function(__) {

	var verifyPropertiesExist = function(object, properties) {

		if(!is.array(properties)) {
			return false;
		}

		for (var i = 0; i < properties.length; i++) {
			if (object[properties[i]] === undefined) {
				return false;
			}
		}

		return true;

	};


	if (!__ || __ === 'undefined') {
		__ = {};
	}

	__.verifyPropertiesExist = verifyPropertiesExist;

})(__);;