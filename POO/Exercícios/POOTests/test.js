"use strict";
exports.__esModule = true;
var Pagamentos = /** @class */ (function () {
    function Pagamentos(conta, valor, tipo, vencimento, descricao) {
        this._conta = conta;
        this._valor = valor;
        this._tipo = tipo;
        this._vencimento = vencimento;
        this._descricao = descricao || 'n/a';
        this._multa = 0.2;
        this._prestacao = [];
    }
    Object.defineProperty(Pagamentos.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (value) {
            this._valor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagamentos.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagamentos.prototype, "vencimento", {
        get: function () {
            return this._vencimento;
        },
        set: function (value) {
            this._vencimento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagamentos.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (value) {
            this._descricao = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagamentos.prototype, "multa", {
        get: function () {
            return this._multa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagamentos.prototype, "prestacao", {
        get: function () {
            return this._prestacao;
        },
        set: function (value) {
            if (value.length > 10)
                throw new Error('Não pode!');
            this._prestacao = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagamentos.prototype, "conta", {
        get: function () {
            return this._conta;
        },
        enumerable: false,
        configurable: true
    });
    return Pagamentos;
}());
exports["default"] = Pagamentos;
;
