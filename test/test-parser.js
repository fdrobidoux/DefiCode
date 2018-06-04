const mocha = require("mocha");
const chai = require("chai");

describe("DevTest", function () {
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

	it("forEach numérique", function () {
		const { Operateur, operateursDefiCode } = require("../lib/src/operateur");
		for (var operateur of operateursDefiCode) {
			console.log(operateur);
		}
	})

	it("Equations", function () {
		const { Equation } = require("../lib/src/equation");
		var equation = new Equation("2+sqrt(20+20)+(1/5-(2+2))");
		equation.extractBinomes();
	})
})