class Person {
  name: string;
  height: number;
  weigth: number;

  constructor(n: string, h: number, w: number) {
    this.name = n;
    this.height = h;
    this.weigth = w;
  }

  sleep() {
    console.log(`${this.name} is sleeping...`);
  }
}

const P1 = new Person('Maria', 171, 58);
const P2 = new Person('João', 175, 66);

console.log(P1.name, P1.height, P1.weigth);
console.log(P2.name, P2.height, P2.weigth);

P1.sleep();
P2.sleep();