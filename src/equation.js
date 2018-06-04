"use strict";

import utils from "./utils";
import { Parser } from "./parser";
import { Operateur } from "./solvant/operateur";
import { Binome } from "./binome";
import { SequenceSolvants } from "./sequence-solvants";

/**
 * @class
 */
export class Equation {

	/**
	 * Le contenu textuel d'origine de l'équation, avant les calculs.
	 */
	_initialEq: string;

	/**
	 * Le contenu textuel de l'équation dans le contexte courant.
	 */
	eq: string;

	/**
	 * L'index où se trouve l'équation courante par rapport à son équation parente.
	 */
	indexParent: number;

	/**
	 * Vrai si l'équation courante est l'équation de départ.
	 */
	isRoot: boolean;

	/**
	 * Une séquence d'opérateurs. Détermine l'ordre des opérateurs et garde en mémoire quels opérateurs ne figurent pas dans notre équation.
	 */
	sequenceOperateurs: SequenceSolvants;

	/**
	 * Un groupe de binômes traitables sous l'ordre des opérations mathématiques.
	 * @param {string} eq Le contenu de l'équation courante.
	 * @param {number} indexParent L'index où se trouve l'équation courante par rapport à son équation parente.
	 * @constructor
	 */
	constructor(eq: string, indexParent: number = -1) {
		eq = utils.string.trimSpaces(eq);
		this._initialEq = eq;
		this.eq = eq;
		this.indexParent = indexParent;
		this.isRoot = (indexParent > -1);
		if (this.isRoot) {
			// Initialiser la séquence d'opérateurs de départ.
			this.sequenceOperateurs = new SequenceSolvants(this);
		}
	}

	/**
	 * @deprecated On n'effectue plus ça de même.
	 */
	extractBinomes() {
		for (var currOp of SequenceSolvants.ORDRE_CONVENTIONNEL) {
			let resultat;

			while ((resultat = currOp.exec(this.eq)) != null) {
				// TODO: Effectuer le processus où on détermine quoi faire.
				console.dir(resultat);

				// Remplacer ça par autre chose.
				var toArray = this.eq.split("");
				toArray.splice(resultat.index, currOp.lastIndex - resultat.index);
				this.eq = toArray.join("");
			}
		}

		// operateursDefiCode.forEach(function (currOp: Operateur, i: string) {
		// 	let resultat;
		// 	while ((resultat = currOp.exec(this.eq)) !== null) {
		// 		var toArray = this.eq.split("");
		// 		toArray.splice(resultat.index, currOp.lastIndex - resultat.index);
		// 		this.eq = toArray.join("");
		// 	}
		// }, this);
	}


}