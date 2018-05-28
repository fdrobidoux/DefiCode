"use strict";

const {Equation} = require("./equation");
const Binome = require("./binome");
const Parser = require("./parser");

const REGEX_NUMBER = "([0-9]+(?:\\.[0-9]+)?)";
const makeBinomeRegExp = (operateur: string) => `${REGEX_NUMBER}(\\${operateur})${REGEX_NUMBER}`;

/**
 * Instance d'un Opérateur. Définis le fonctionnement d'un opérateur.
 * @param {String} sign
 * @param {function} solver
 * @param {*} cbArgType
 * @param {RegExp} regExp
 * @constructor
 */
function Operateur(sign, solver, cbArgType=Binome, regExp?) {
	RegExp.call(this, (regExp || makeBinomeRegExp(sign)));
	this.sign = sign;
	this.solver = solver;
	this.cbArgType = cbArgType;
}

Operateur.prototype = Object.create(RegExp.prototype);
Operateur.prototype.constructor = Operateur;

const operateurs = [
	["(", (equation) => "TODO: FIGURE A WAY", Equation, /(sqrt)?\(([^()]+)\)/gi],
	["^", (binome) => Math.pow(binome.gauche, binome.droite)],
	["/", (binome) => ((binome.droite == 0)? new EvalError("Divided by zero"): binome.gauche / binome.droite)],
	["*", (binome) => binome.gauche * binome.droite],
	["-", (binome) => binome.gauche - binome.droite],
	["+", (binome) => binome.gauche + binome.droite],
]

// On définis les exports et des valeurs non
operateurs.forEach(function (value, index) {
	/** @inheritDoc */
	module.exports[index] = new Operateur(...value);
	Object.defineProperty(module.exports, value[0], { value: index, enumerable: false });
})

module.exports[Symbol.iterator] = function* () {
	for (var item in module.exports) {
		yield module.exports[item];
	}
}