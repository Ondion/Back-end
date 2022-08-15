// import ITest from "./ITest";
import Conta from "./Conta";

export default abstract class Pagamentos {
  private _conta: Conta;
  private _valor: number;
  // private _tipo: string;
  // private _vencimento: Date;
  private _descricao: string;
  // private _multa: number;
  // private _prestacao: ITest[];

  constructor(conta: Conta, valor: number, /* tipo: string, vencimento: Date, */ descricao?: string) {
    this._conta = conta;
    this._valor = valor;
    // this._tipo = tipo;
    // this._vencimento = vencimento;
    this._descricao = descricao || 'n/a'
    // this._multa = 0.2;
    // this._prestacao = [];
  }

  get valor(): number {
    return this._valor
  }

  set valor(value: number) {
    this._valor = value;
  }

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

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
  }

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

  get conta(): Conta {
    return this._conta;
  }

  protected abstract teste(): void;

};
