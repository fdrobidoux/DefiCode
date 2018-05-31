"use strict";

import { Operateur, operateursDefiCode } from "./operateur";

export class Binome {

	gauche: number;
	operateur: Operateur;
	droite: number;

	/**
	 * Objet Binôme. Va permettre de parcourir les éléments.
	 *
	 * @param gauche    - Le nombre ou binôme de gauche. Sert aussi pour l'intérieur de parenthèse d'un `sqrt()`.
	 * @param operateur - L'opérateur utilisé. Peut seulement être l'un des opérateurs dans le fichier d'opérateurs.
	 * @param droite    - **(Optionnel)** Le nombre ou binôme de gauche. Non-utilisé si l'operateur est un `sqrt()`.
	 * @constructor
	 */
	constructor(gauche: number|string, operateur: Operateur, droite?: number|string|null = null) {
		this.gauche = Binome.parseNb(gauche);
		this.operateur = operateur;
		if (droite !== null) {
			this.droite = Binome.parseNb(droite);
		}
	}

	/**
	 * Résouds
	 * @returns {Promise<void>}
	 */
	async resoudre() {
		let objOperateur = operateursDefiCode.get(this.operateur.signe);
		// Prendre le bon objet.
		// let result = objOperateur;
	}

	static parseNb(nb: number|string) {
		if (typeof nb == "string") {
			if (nb.indexOf(".") > 0) {
				return parseFloat(nb);
			}
			return parseInt(nb);
		}
		return nb;
	}
}

