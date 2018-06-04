"use strict";

module.exports = {
	string: {
		charCount(input: string, char: string) {
			return input.split().reduce((nb, courant) => (courant == char) ? ++nb : nb, 0);
		},
		trimSpaces(input: string): string {
			return input.replace(" ", "");
		}
	}
};
