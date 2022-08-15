"use strict";
exports.__esModule = true;
var Conta = /** @class */ (function () {
    function Conta(saldo) {
        this._saldo = saldo;
    }
    Conta.prototype.debito = function (valor) {
        if (this._saldo < valor) {
            throw new Error('sem saldo mano!');
        }
        this._saldo -= valor;
    };
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (value) {
            this._saldo = value;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
exports["default"] = Conta;
