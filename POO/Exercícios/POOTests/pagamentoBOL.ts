import Pagamentos from "./test";
import Conta from "./Conta";
import ITest from "./ITest";

const conta: Conta = new Conta(750);

export default class Boleto extends Pagamentos {
  private vencimento: Date;
  private multa: number;
  private prestacoes: ITest[];
  
  constructor(vencimento: Date, conta: Conta, valor: number, descricao?: string) {
    super(conta, valor, descricao);
    
    this.vencimento = vencimento;
    this.multa = 0.2;
    this.prestacoes = [];
  }

  set SetVencimento(value: Date) {
    this.vencimento = value;
  }

  get GetVencimento(): Date {
    return this.vencimento;
  }

  set SetMulta(value: number) {
    this.multa = value;
  }

  get GetMulta(): number {
    return this.multa;
  }
}

const boleto: Boleto = new Boleto(new Date(), new Conta(7889), 150, 'baladinha');