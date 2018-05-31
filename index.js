#!/usr/bin/env node
'use strict';

import { Parser } from "./src/parser";
import { Equation } from "./src/equation";
import { Operateur, operateursDefiCode } from "./src/operateur";
import { Binome } from "./src/binome";

export function Calculatrice() {

}

/**
 * Effectue le calcul de l'équation donnée en paramètre.
 * @param {String} input - L'équation à calculer.
 */
Calculatrice.prototype.calculate = function (input) {
	let equation = new Equation(input);
};