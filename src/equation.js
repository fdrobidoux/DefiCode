"use strict";

const Parser = require("./parser");

/**
 * Ce type d'objet représente un bloc d'équation traitable.
 * @param {string} strValue
 * @param {number} positionInParent
 * @constructor
 */
function Equation(strValue: string, positionInParent: number = 0)
{
	this._initialStrValue = strValue;
	this.strValue = strValue;
	this.positionInParent = positionInParent;
}

/** @inheritDoc */
module.exports.Equation = Equation;