interface teste {
  valor1: string;
  valor2: string;
}

interface teste2 extends teste {
  valor3: string;
}

const alo: teste2 = {valor1: 'tes', valor2: 'fdfds', valor3: 'dsdfs'};

console.log(alo);