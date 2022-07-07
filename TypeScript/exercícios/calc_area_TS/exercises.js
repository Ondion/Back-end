"use strict";
exports.__esModule = true;
exports.circulo = exports.trapezio = exports.losango = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return "Ol\u00E1 ".concat(name);
}
exports.greeter = greeter;
function personAge(name, age) {
    return "".concat(name, ", tem ").concat(age, " anos !");
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(size) {
    return Math.pow(size, 2);
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losango(Dmais, dMenos) {
    return (Dmais * dMenos) / 2;
}
exports.losango = losango;
function trapezio(altura, Base, base) {
    return ((Base + base) * altura) / 2;
}
exports.trapezio = trapezio;
function circulo(raio, pi) {
    if (pi === void 0) { pi = 3.14; }
    return pi * Math.pow(raio, 2);
}
exports.circulo = circulo;
