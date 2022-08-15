"use strict";
exports.__esModule = true;
var Pagamentos = /** @class */ (function () {
    // private _multa: number;
    // private _prestacao: ITest[];
    function Pagamentos(conta, valor, /* tipo: string, vencimento: Date, */ descricao) {
        this._conta = conta;
        this._valor = valor;
        // this._tipo = tipo;
        // this._vencimento = vencimento;
        this._descricao = descricao || 'n/a';
        // this._multa = 0.2;
        // this._prestacao = [];
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
    Object.defineProperty(Pagamentos.prototype, "descricao", {
        // get tipo(): string {
        //   return this._tipo;
        // }
        // set tipo(value: string) {
        //   this._tipo = value;
        // } 
        // get vencimento(): Date {
        //   return this._vencimento;
        // }
        // set vencimento(value: Date) {
        //   this._vencimento = value;
        // }
        get: function () {
            return this._descricao;
        },
        set: function (value) {
            this._descricao = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagamentos.prototype, "conta", {
        // get multa(): number {
        //   return this._multa;
        // }
        // set prestacao(value: ITest[]) {
        //   if (value.length > 10) throw new Error('Não pode!');
        //   this._prestacao = value;
        // }
        // get prestacao(): ITest[] {
        //   return this._prestacao;
        // }
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
