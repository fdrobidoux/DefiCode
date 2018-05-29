"use strict";

// $FlowFixMe
import Big from "big.js";
import {Operateur, operateursDefiCode} from "./operateur";

/**
 * Objet Binôme. Va permettre de parcourir les éléments.
 *
 * @param {number} gauche - Le nombre ou binôme de gauche. Sert aussi pour l'intérieur de parenthèse de
 * @param {string} operateur - Opérateur. Peut seulement être l'un des opérateurs dans le fichier d'opérateurs.
 * @param {number} droite
 * @constructor
 */
export function Binome(gauche: number | string | Big, operateur: string, droite: number | string | Big = null) {
	this.setGauche(gauche);
	this.setOperateur(operateur);
	if (droite != null) {
		this.setDroite(droite);
	}
}

Binome.prototype.setGauche = function (gauche: number | string | Big) {
	/** @type {Big} */
	this.gauche = (gauche instanceof Big) ? gauche : new Big(gauche);
}

Binome.prototype.setOperateur = function (operateur: string) {
	this.operateur = operateur;
}

Binome.prototype.setDroite = function (droite: number | string | Big) {
	/** @type {Big} */
	this.droite = (droite instanceof Big) ? droite : new Big(droite);
}

Binome.prototype.resoudre = function () {
	let objOperateur = operateursDefiCode.get(this.operateur);
	// Prendre le bon objet.
	// let result = objOperateur;
}