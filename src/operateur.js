"use strict";

// $FlowFixMe
import Big from "big.js";
import { Equation } from "./equation";
import { Binome } from "./binome";
import { Parser } from "./parser";

const REGEX_NUMBER = "([0-9]+(?:\\.[0-9]+)?)";
const makeBinomeRegExp = (op: string) => `${REGEX_NUMBER}(\\${op})${REGEX_NUMBER}`;

/**
 * Instance d'un Opérateur. Définis le fonctionnement d'un opérateur.
 * @param {String} sign
 * @param {Function} solver
 * @param {RegExp} regExp
 *
 * @inheritDoc RegExp
 * @constructor
 */
export function Operateur(sign: string, solver: Function, regExp?: RegExp|null = null) {
	RegExp.call(this, (regExp || makeBinomeRegExp(sign)));
	this.sign = sign;
	this.solver = solver;
}

Operateur.prototype = Object.create(RegExp.prototype);
Operateur.prototype.constructor = Operateur;

type Operateurs = Array<[string, Function, ?RegExp|null]>;

const operateurs: Operateurs = [
	["(", (binome) => binome.gauche.sqrt(), /(sqrt)?\(([^()]+)\)/gi],
	["^", (binome) => binome.gauche.pow(binome.droite), null],
	["/", (binome) => ((binome.droite == 0) ? new EvalError("Divided by zero") : binome.gauche.div(binome.droite)), null],
	["*", (binome) => binome.gauche.times(binome.droite), null],
	["-", (binome) => binome.gauche.minus(binome.droite), null],
	["+", (binome) => binome.gauche.plus(binome.droite), null],
];

export const operateursDefiCode: Map<string, Operateur> = new Map();

// On définis les exports et des valeurs non
for (var op of operateurs) {
	operateursDefiCode.set(op[0], new Operateur(...op));
}
