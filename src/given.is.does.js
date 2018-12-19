var given = function(object, property) {
	
    var does = (property) => given(object, property);
	
    var exist = () => {
        if (!is(object).object) return false
	   
        !object.hasOwnProperty(property) 
	    ? false
	    : true  
    }
 
    return {
        does: does,
	exist: exist
    }
	
})

/**
 * ht to bash for beginners for the introduction 
 to 'where' and 'which'-style *nix functions, to the 'exist' library
 that is used in a popular TDD lib and to vue.js for their ternary syntax
 * @return {Object}   an object of public methods for determining type
 */
var is = (function(property) {
    
    var property = property;
   	
    var isObject = () => is(property).array() 
        ? false
        : isType(property, 'object')

    var isArray = () => !Array.isArray(property)
        ? false
        : true

    var isString = () => isType(property, 'string')
    var isNumber = () => isType(property, 'number')
    var isBoolean = () => isType(property, 'boolean')

    //var isInteger = (property) => property === Math.floor(property)
    //  ? true
    //  : false
    
    /**
     * returns a boolean if strings match.
     */
    var isType = (type) => typeof property !== type
        ? false
        : true;

    var isDomProperty = function(type) {};
    var isDomElement = function() {};
    var isElementList = function() {};

    var dom = () => !is(property).object()
        ? false
        : in(property).does('tagname').exist()
    
    var element = () => !is(property).object()
        ? false
        : in(property).does('tagName').exist()

    var node = () => ! is(property).object()
       ? false
        : in(property).does('nodeName').exist()

    var type = (type) => !is[type]
        ? undefined
        : is(property)[type]()

    return {
        object: isObject,
	array: isArray,
	string: (property) => isType(property, 'string'),
	number: (property) => isType(property, 'number'),
	boolean: (property) => isType(property, 'boolean'),
	typeof: isType,
	type: type,
	dom: dom,
	element: element,
	node: node
    };

})();

var whatis = (prop) => {
   switch prop {
     case is.boolean(prop):
        return 'boolean'
     break;
     
     case is.string(prop):
         return 'string'
     break;
       
     //...
       
   }
}

// literate syntax
// is(false).boolean();
// returns true

// given(object).does('property').exist()

// whatis(false);
// returns 'boolean;;

// original syntax
// is the performance cost worth the literate syntax? 
// or are arguments read differently?
//is.boolean(false);