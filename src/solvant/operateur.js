"use strict";

// $FlowFixMe
import { Equation } from "../equation";
import { Binome } from "../binome";
import { Parser } from "../parser";
import { Solvant } from "./";

export const REGEX_NUMBER = "([\\-]?\\d+(?:\\.\\d+)?)";

type SolvantFn = (binome: Binome) => number|Error;

/**
 * Instance d'un Opérateur mathématique. Définis le fonctionnement d'un opérateur.
 * @extends RegExp
 */
export class Operateur extends Solvant {

	signe: string;

	/**
	 * @constructor
	 * @param {String} signe
	 * @param {Solvant} solvant
	 */
	constructor(signe: string, solvant: SolvantFn) {
		super(`/${REGEX_NUMBER}(${signe})${REGEX_NUMBER}/`, solvant);
		this.signe = signe;
	}

	/**
	 * @inheritDoc
	 */
	exec(string: string): any {
		// TODO: Enlever le "@inheritDoc".
		// noinspection UnnecessaryLocalVariableJS
		let execArray = super.exec(string);

		return execArray;
	}

	/**
	 * @inheritDoc
	 */
	test(string: string): boolean {
		// TODO: Enlever le "@inheritDoc".
		return super.test(string);
	}

	/**
	 * Crée une expression régulière (en string) pour trouver des binômes.
	 * @param {string} op L'opérateur.
	 * @returns {string}
	 */
	static _makeBinomeRegExp(op: string) {
		return ;
	}
}