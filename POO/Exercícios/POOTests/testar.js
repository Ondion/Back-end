"use strict";
exports.__esModule = true;
var test_1 = require("./test");
var Conta_1 = require("./Conta");
var conta = new Conta_1["default"](250);
var today = new Date();
var pag = new test_1["default"](conta, 150, 'cartão', today, 'nopppppp');
console.log(pag.descricao);
