"use strict";

import { Equation } from "./equation";
import { Solvant } from "./solvant";
import { Operateur, REGEX_NUMBER } from "./solvant/operateur";
import { Fonction } from "./solvant/fonction";

/**
 * Une séquence d'opérateurs représente un contexte de recherche d'opérateurs pour
 */
export class SequenceSolvants {

	/**
	 * L'ordre utilisé pour les séquences.
	 */
	static ORDRE_CONVENTIONNEL: Array<Solvant>;

	_symbolesDisposIndexList: Array<number>;

	/**
	 * Constructeur de Séquence d'Opérateurs.
	 *
	 * @constructor
	 */
	constructor(source: Equation) {

		this._symbolesDisposIndexList = [];

		let doing = SequenceSolvants.ORDRE_CONVENTIONNEL.filter(function (regExp, index, ordreArr) {
			if (regExp.test(source.eq)) {
				return index;
			}
		});

	}

	getSymbolesDisposIndexList(): Array<number> {
		return this._symbolesDisposIndexList;
	}

	probeSymbolesExistants() {

	}

	start() {

	}
}

