var stages;
(function (stages) {
    stages[stages["inverno"] = 0] = "inverno";
    stages[stages["primavera"] = 1] = "primavera";
    stages[stages["ver\u00E3o"] = 2] = "ver\u00E3o";
    stages[stages["outono"] = 3] = "outono";
})(stages || (stages = {}));
var teste = stages.inverno;
console.log(teste);
