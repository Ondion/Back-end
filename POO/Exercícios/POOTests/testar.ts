import Pagamentos from "./test";
import Conta from "./Conta";

const conta: Conta = new Conta(250)
const today = new Date();

const pag: Pagamentos = new Pagamentos(conta, 150, 'cartão', today, 'nopppppp');

console.log(pag.descricao);