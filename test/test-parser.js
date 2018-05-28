const mocha = require("mocha");
const chai = require("chai");

describe("Parser des trucs", function () {
	it("peut faire ça", function () {
		// let parser = new Parser("((3+5)((20/5)+8))(5+5)");
		let str = "((3+5)-(20/5.3+5)+8)*sqrt(5+5)";
		let reg = /(sqrt)?\(([^()]+)\)/gi;
		var result;

		while ((result = reg.exec(str)) !== null) {
			var toArray = str.split("");
			toArray.splice(result.index, reg.lastIndex - result.index, "[expression-result]");
			str = toArray.join("");
		}



		/*
		do {
			console.log(result);
		}
		while ((result = regexp.exec(parser.input)) !== null);
		*/
	})

	it("doit permettre de faire un forEach numérique", function () {
		var Operateurs = require("../lib/src/operateur");
		for (var index of Operateurs) {
			console.log(index);
		}
	})
})