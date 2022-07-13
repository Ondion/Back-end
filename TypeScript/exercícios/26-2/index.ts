interface juquinha {
  nome: string;
  idade: number;
}

function alo<T>(valor: T): T {
  return valor;
}

const olaa: juquinha = {
  nome: 'juca',
  idade: 25
}

const sair: juquinha = alo<juquinha>(olaa);

console.log(typeof sair)