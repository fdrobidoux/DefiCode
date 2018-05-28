"use strict";

const { Equation } = require("./equation");

function Parser() {}

/**
 * Trouve la première paire de parenthèse ne contenant aucune autre paire de parenthèses.
 */
Parser.prototype.findParentheseChaisPasCommentAppelerLaFonctionHelp = function() {
	// TODO: Redéfinir la façon d'obtenir la string de l'expression régulière.

	// On n'utilise pas le flag "g" ici puisqu'on veut effectuer une recherche à la fois.
	// Cependant, le flag "i" est utile puisqu'on veut permettre d'écrire `"SQRT"` ou `"Sqrt"` ou `"sQrt"` (etc.)
	let regexp = /(sqrt)?\(([^()]+)\)/gi;

	// TODO: S'arranger pour que l'exécution se fasse dans un objet à-part.
	let resultat = this.input.match(regexp);

	return [regexp, resultat];
}

Parser.solve = function solve(equation: Equation) {

}

/**
 * Extracts a binome from the given string.
 * @param {number} index
 */
Parser.prototype.extractBinomeAt = function(index) {

}

/** @inheritDoc */
module.exports = Parser;