// import * as tt from './exercises';

enum diasDaSemana {
  segunda,
  terça,
  quarta,
  etc
}

const teste: diasDaSemana = diasDaSemana.etc;

enum cores {
  verde = 'green',
  azul = 'blue',
  vermelho = 'red',
  soSeiEssasCores = 'I don`t know more colors'
}

enum actions {
  save,
  print,
  open,
  view,
  close
}

enum card {
  norte = 'N',
  leste = 'L',
  sul = 'S',
  Oeste = 'O'
}

// console.log(tt.greeter('Fábio'));
// console.log(tt.personAge('Fábio', 34));
// console.log(tt.triangle(10, 25));

enum toto {
  valor,
  valal,
  nejrne
};

class address {
  description: string = '';
  address: string = '';
  zip: number = 0;
  state: string = '';
} 

class pessoa {
  name: string = '';
  lastName: string = '';
  birthdate: Date = new Date();
  address: address[] =[];
};

interface ITeste {
  nome: string;
  numero: number;
}

interface ISobrenome extends ITeste {
  sobrenome: string;
}

const eu: ISobrenome = {
  nome: 'fabio',
  numero: 15,
  sobrenome: 'xavier',
}

type fafa =  {
  teste: string;
  outta: number;
}

const tete: fafa = {
  teste: 'jkdsfs',
  outta: 4.5
}

const array: (string | number | boolean | fafa)[] = ['false', true, 15, false, false, tete];
const array2: any[] = ['false', true, 15, false, false, tete];


interface INnn {
  nome: string;
  idade: number;
  peso?: number;
}

let obj: INnn = {
  nome: 'fabio',
  idade: 30,
}

let obj2: INnn = {
  nome: 'fabio',
  idade: 30,
}

class constru {
  name: string = 'balinha';
  age: number = 424242;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// const print: unknown = new constru('teste', 5);

const tupla: [string, number, boolean] = ['teste', 4, false]; // <<< Exemplo de tupla!
const arrayTupla: [string, number, boolean][] = [['teste', 4, false], ['teste', 4, false], ['teste', 4, false], ['teste', 4, false]]; // <<< Exemplo de ARRAY tupla!


// ENUM COMO TIPO:

enum typeEnum {
  value1 = 1,
  value2 = 2,
  value3 = 3,
}

interface IValue {
  value: typeEnum;
}

const values: IValue = { value: typeEnum.value3 };

console.log(values);

type testeT = {
  nome: string
}

const func = <T> (value: T): T => value;

function func2<T>(value: T): T{
  return value;
};

const testenumber = func<number>(45);
console.log(testenumber)
