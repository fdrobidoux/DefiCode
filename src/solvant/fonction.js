"use strict";

import { Operateur } from "./operateur";
import { Solvant } from "./";

type SolvantFonction = (number) => number;

/**
 * @class
 */
export class Fonction extends Solvant {

	terme: string;

	/**
	 * Constructeur d'objet Fonction.
	 *
	 * @param terme
	 * @param solvant
	 *
	 * @constructor
	 */
	constructor(terme: string, solvant: SolvantFonction) {
		super(`${terme}\\(([^()]+)\\)`, solvant);
		this.terme = terme;
	}

	/**
	 * @inheritDoc
	 */
	exec(string: string) {
		/** @type RegExpExecArray */
		let execResult = super.exec(string);


	}

	/** @inheritDoc */
	test(string: string): boolean {
		return super.test(string);
	}
}