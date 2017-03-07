var is = require('../src/is');
var __validate = require('../dist/validation');
var TestFramework = require('../vendor/tests/tester');
var __ = require('../vendor/objects');

var schema = {
	name: {
		type: "string",
		minLength: 4,
		maxLength: 10,
		regex: new RegExp(/[a-z]/gi),
		required: true
	},
	id: {
		type: "string",
	},
	isIdeaEditing: {
		type: "boolean",
	},
	isDescriptionActive: {
		type: "boolean"
	},
	isCommentActive: {
		type: "boolean"
	}
	
};

var model = {
	name: "Name",
	id: "ID",
	isIdeaEditing: false,
	isDescriptionActive: false,
	isCommentActive: false
};

var options = {
	validationTest: {
		fn: __validate,
		test: require('./ValidationTest'),
		args: [model, schema]
	}
};

var testFramework = new TestFramework(options)