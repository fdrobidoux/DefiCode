/**
 * Objet Binôme. Va permettre de parcourir les éléments.
 *
 * @param {number} gauche - Le nombre ou binôme de gauche. Sert aussi pour l'intérieur de parenthèse de
 * @param {string} operateur - Opérateur. Peut seulement être l'un des opérateurs dans le fichier d'opérateurs.
 * @param {number} droite
 * @constructor
 */
function Binome(gauche: string, operateur: string, droite: number)
{
	this.gauche = gauche;
	this.operateur = operateur;
	this.droite = droite;
}

/** @inheritDoc */
module.exports = Binome;