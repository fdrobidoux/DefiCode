"use strict";

import { Parser } from "./parser";
import { Operateur, operateursDefiCode } from "./operateur";
import { Binome } from "./binome";
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
	for (var entry of operateursDefiCode.entries()) {
		let currOp: Operateur = entry[1],
			resultat;

		while ((resultat = currOp.exec(this.eq)) != null) {
			// TODO: Effectuer le processus où on détermine quoi faire.

			// Créer objet binome.
			let binome = new Binome();

			var toArray = this.eq.split("");
			toArray.splice(resultat.index, currOp.lastIndex - resultat.index);
			this.eq = toArray.join("");
		}
	}

	operateursDefiCode.forEach(function (currOp: Operateur, i: string) {
		let resultat;
		while ((resultat = currOp.exec(this.eq)) !== null) {
			var toArray = this.eq.split("");
			toArray.splice(resultat.index, currOp.lastIndex - resultat.index);
			this.eq = toArray.join("");
		}
	}, this);
}
