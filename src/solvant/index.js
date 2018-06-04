"use strict";

export class Solvant extends RegExp {

	solvant: Function;

	constructor(regexp: RegExp|string, solvant: Function) {
		super(regexp);
		this.solvant = solvant;
	}

}