"use strict";

// $FlowFixMe
import { Equation } from "./equation";
import { Binome } from "./binome";
import { Parser } from "./parser";

const REGEX_NUMBER = "([0-9]+(?:\\.[0-9]+)?)";
const makeBinomeRegExp = function (op: string) {
	return `/${REGEX_NUMBER}(\\${op})${REGEX_NUMBER}/gi`;
}

type Solvant = (binome: Binome) => number|Error;

/**
 * Instance d'un Opérateur. Définis le fonctionnement d'un opérateur.
 * @extends RegExp
 */
export class Operateur extends RegExp {

	signe: string;
	solvant: Solvant;

	exec(...args: any) {
		return super.exec(...args);
	}

	/**
	 * @constructor
	 * @param {String} signe
	 * @param {Solvant} solvant
	 * @param {RegExp} regExp
	 */
	constructor(signe: string, solvant: Solvant, regExp?: RegExp|string|null = null) {
		regExp = regExp || makeBinomeRegExp(signe);
		super(regExp);
		this.signe = signe;
		this.solvant = solvant;
	}
}

type Operateurs = Array<[string, Solvant, RegExp|string|null]>;

const operateurs: Operateurs = [
	["(", (binome) => Math.sqrt(binome.gauche), /(sqrt)?\(([^()]+)\)/gi],
	["^", (binome) => Math.pow(binome.gauche, binome.droite), null],
	["/", (binome) => (binome.droite == 0) ? new EvalError("Divided by zero") : (binome.gauche / binome.droite), null],
	["*", (binome) => (binome.gauche * binome.droite), null],
	["-", (binome) => (binome.gauche - binome.droite), null],
	["+", (binome) => (binome.gauche + binome.droite), null]
];

export const operateursDefiCode: Map<string, Operateur> = new Map();

// On définis les exports et des valeurs non
for (var op of operateurs) {
	operateursDefiCode.set(op[0], new Operateur(...op));
}
