"use strict";
const { BigNumber } = require("bignumber.js");

new BigNumber()

/**
 * Objet Binôme. Va permettre de parcourir les éléments.
 *
 * @param gauche - Le nombre ou binôme de gauche. Sert aussi pour l'intérieur de parenthèse de
 * @param operateur - Opérateur. Peut seulement être l'un des opérateurs dans le fichier d'opérateurs.
 * @param droite
 * @constructor
 */
function Binome(gauche: number, operateur: string, droite: number)
{
	this.gauche = gauche;
	this.operateur = operateur;
	this.droite = droite;
}

/** @inheritDoc */
module.exports.Binome = Binome;