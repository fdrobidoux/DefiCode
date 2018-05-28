#!/usr/bin/env node
'use strict';

const Parser = require("./src/parser");
const { Equation } = require("./src/equation");
const Operateur = require("./src/operateur");
const Binome = require("./src/binome");

function Calculatrice()
{

}

/**
 * Effectue le calcul de l'équation donnée en paramètre.
 * @param {String} input - L'équation à calculer.
 */
Calculatrice.prototype.calculate = function(input)
{
	let equation = new Equation(input);

};

/** @inheritDoc */
module.exports.Calculatrice = Calculatrice;