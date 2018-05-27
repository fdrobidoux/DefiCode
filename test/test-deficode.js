const mocha = require("mocha");
const chai = require("chai");

const { Calculatrice: Calculatrice } = require("../");

var calculatrice = new Calculatrice();

describe('Tests initiaux', function () {

})

describe('Cas de tests', function () {

	describe('Cas de test par EzoQC', function () {

		var items = [
			["1+1", 1],
			["1 + 2", 3],
			["1 + -1", 0],
			["-1 - -1", 0],
			["5-4", 1],
			["5*2", 10],
			["(2+5)*3", 21],
			["10/2", 5],
			["2+2*5+5", 17],
			["2.8*3-1", 7.4],
			["2^8", 256],
			["2^8*5-1", 1279],
			["sqrt(4)", 2],
			["1/0", Error]
		];


		for (var test in items) {
			it(test, function () {

			});
		}

	})

	describe('Mes cas de test personnels', function () {

	})

})