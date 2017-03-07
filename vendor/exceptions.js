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
	};