export default class Conta {
  private _saldo: number;

  constructor(saldo: number) {
    this._saldo = saldo;
  }

  public debito(valor: number) {
    if (this._saldo < valor) {
      throw new Error('sem saldo mano!');
    }
    this._saldo -= valor;
  }

  get saldo(): number {
    return this._saldo;
  }

  set saldo(value: number) {
    this._saldo = value;
  }

}
