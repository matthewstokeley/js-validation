## JS Validation

0.0.2


There are occasionally situations where client-side property validation can reduce brittle code and improve the quality of literacy by explicitly specifying expectations.  For a lot of scripts, this is overkill, but with almost no learning curve, `type validation`can make programming easier, safer and team-friendly. 

This library is an experiment in implementing an `interface`-like functionality in an extensible framework that also provides the ability to validate user-inputs with user-defined mixins.


### Dependencies

[js-objects](https://github.com/matthewstokeley/js-objects) - an experimental `_` copycat built to learn various ways of handling data structures, mostly stateless and immutable.  THe `_` namespace is respected - js-objects uses `__` - however, switching to `underscore` or another `_` library should be trivial.    


### Example  

##### Validate an object by type

```
// This could be a `pojo` (plain old javascript object), output of a `factory`, 
// a model for a `mvvm`, or the output of the `FormReader` api translated into an object. 
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

