interface IPessoa {
  nome: string;
  email: string;
  getNomePessoa: () => number;
}

class Pessoa implements IPessoa {
  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  getNomePessoa(): number {
    return 42;
  }
}

const teste: Pessoa = new Pessoa('fabio', 'fabio@fabio.com');

console.log(teste.getNomePessoa());