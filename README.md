## JS Validation

0.0.2

### Dependencies

[js-objects](https://github.com/matthewstokeley/js-objects) - an experimental `_` copycat built to learn various ways of handling data structures, mostly stateless and immutable.  

### Example  

##### Validate an object by type

```
// This could be a `pojo` (plain old javascript object), output of a factory, 
// a model for an mvvm, or the output of the `FormReader` api translated into an object. 
var dataModel = {
	any: "data",
	data: ['a', 'b ', 'c'],
	properties: {}
}


// the interface pr schema 
var dataSchema = {
	any: { type: 'string' },
	data: { type: 'array' },
	properties: { type: 'object' }
}


__validate(dataModel, dataSchema);
// returns true

```


##### Note
An `es6` branch is pending.

