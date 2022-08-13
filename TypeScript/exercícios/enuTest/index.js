"use strict";
exports.__esModule = true;
var tt = require("./exercises");
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["segunda"] = 0] = "segunda";
    diasDaSemana[diasDaSemana["ter\u00E7a"] = 1] = "ter\u00E7a";
    diasDaSemana[diasDaSemana["quarta"] = 2] = "quarta";
    diasDaSemana[diasDaSemana["etc"] = 3] = "etc";
})(diasDaSemana || (diasDaSemana = {}));
var teste = diasDaSemana.etc;
var cores;
(function (cores) {
    cores["verde"] = "green";
    cores["azul"] = "blue";
    cores["vermelho"] = "red";
    cores["soSeiEssasCores"] = "I don`t know more colors";
})(cores || (cores = {}));
var actions;
(function (actions) {
    actions[actions["save"] = 0] = "save";
    actions[actions["print"] = 1] = "print";
    actions[actions["open"] = 2] = "open";
    actions[actions["view"] = 3] = "view";
    actions[actions["close"] = 4] = "close";
})(actions || (actions = {}));
var card;
(function (card) {
    card["norte"] = "N";
    card["leste"] = "L";
    card["sul"] = "S";
    card["Oeste"] = "O";
})(card || (card = {}));
console.log(tt.greeter('Fábio'));
console.log(tt.personAge('Fábio', 34));
console.log(tt.triangle(10, 25));
