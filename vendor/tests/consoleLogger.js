var consoleLogger = function(message, alt) {

	var lineBreak = '---------------------------------------------------------------';
	if (alt) {
		lineBreak = '\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++';
	}

	console.log(lineBreak);
	console.log(message);
	console.log(lineBreak);

};

module.exports = consoleLogger;