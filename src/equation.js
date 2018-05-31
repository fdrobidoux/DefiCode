"use strict";

import { Parser } from "./parser";
import { Operateur, operateursDefiCode } from "./operateur";
// import { Operateur, operateursDefiCode } from "./operateur_v2";

/**
 * Ce type d'objet représente un bloc d'équation traitable.
 * @param {string} strEquation
 * @param {number} positionInParent
 * @constructor
 */
export function Equation(strEquation: string, positionInParent: number = 0) {
	this._initialEq = strEquation;
	this.eq = strEquation;
	this.positionInParent = positionInParent;

	this.extraireBinomes();
}

Equation.prototype.extraireBinomes = function () {
	operateursDefiCode.forEach(function (currOp: Operateur, i: string) {
		let resultat;
		while ((resultat = currOp.exec(this.eq)) !== null) {
			var toArray = this.eq.split("");
			toArray.splice(resultat.index, currOp.lastIndex - resultat.index);
			// this.eq = toArray.join("");
		}
	}, this);
}
