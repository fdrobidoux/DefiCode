"use strict";

function Operateur() {
	RegExp.call(this);
}

Operateur.prototype = Object.create(RegExp.prototype);
Operateur.prototype.constructor = Operateur;

