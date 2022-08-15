// import * as tt from './exercises';
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
// console.log(tt.greeter('Fábio'));
// console.log(tt.personAge('Fábio', 34));
// console.log(tt.triangle(10, 25));
var toto;
(function (toto) {
    toto[toto["valor"] = 0] = "valor";
    toto[toto["valal"] = 1] = "valal";
    toto[toto["nejrne"] = 2] = "nejrne";
})(toto || (toto = {}));
;
var address = /** @class */ (function () {
    function address() {
        this.description = '';
        this.address = '';
        this.zip = 0;
        this.state = '';
    }
    return address;
}());
var pessoa = /** @class */ (function () {
    function pessoa() {
        this.name = '';
        this.lastName = '';
        this.birthdate = new Date();
        this.address = [];
    }
    return pessoa;
}());
;
var eu = {
    nome: 'fabio',
    numero: 15,
    sobrenome: 'xavier'
};
var tete = {
    teste: 'jkdsfs',
    outta: 4.5
};
var array = ['false', true, 15, false, false, tete];
var array2 = ['false', true, 15, false, false, tete];
var obj = {
    nome: 'fabio',
    idade: 30
};
var obj2 = {
    nome: 'fabio',
    idade: 30
};
var constru = /** @class */ (function () {
    function constru(name, age) {
        this.name = 'balinha';
        this.age = 424242;
        this.name = name;
        this.age = age;
    }
    return constru;
}());
// const print: unknown = new constru('teste', 5);
var tupla = ['teste', 4, false]; // <<< Exemplo de tupla!
var arrayTupla = [['teste', 4, false], ['teste', 4, false], ['teste', 4, false], ['teste', 4, false]]; // <<< Exemplo de ARRAY tupla!
// ENUM COMO TIPO:
var typeEnum;
(function (typeEnum) {
    typeEnum[typeEnum["value1"] = 1] = "value1";
    typeEnum[typeEnum["value2"] = 2] = "value2";
    typeEnum[typeEnum["value3"] = 3] = "value3";
})(typeEnum || (typeEnum = {}));
var values = { value: typeEnum.value3 };
console.log(values);
var func = function (value) { return value; };
function func2(value) {
    return value;
}
;
var testenumber = func(45);
console.log(testenumber);
