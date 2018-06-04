#!/usr/bin/env node
'use strict';

import { Equation } from "./src/equation";
import { Operateur } from "./src/solvant/operateur";
import { Fonction } from "./src/solvant/fonction";
import { SequenceSolvants } from "./src/sequence-solvants";

export class Calculatrice {

	constructor() {
		// Setup de séquence conventionnelle.
		SequenceSolvants.ORDRE_CONVENTIONNEL = [
			new Fonction("sqrt", (number) => Math.sqrt(number)),
			new Fonction("", (number) => number),
			new Operateur("^", (binome) => Math.pow(binome.gauche, binome.droite)),
			new Operateur("/", (binome) => (binome.droite == 0)
				? new EvalError("Divided by zero") : (binome.gauche / binome.droite)),
			new Operateur("*", (binome) => (binome.gauche * binome.droite)),
			new Operateur("+", (binome) => (binome.gauche + binome.droite)),
			new Operateur("-", (binome) => (binome.gauche - binome.droite))
		];
	}

	/**
	 * Effectue le calcul de l'équation donnée en paramètre.
	 * @param {String} input - L'équation à calculer.
	 */
	calculate(input: string) {
		// Créer une nouvelle équation à partir de l'input.
		let equationRoot = new Equation(input);

		// while

	}
}

