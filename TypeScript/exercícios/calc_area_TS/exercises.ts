export function greeter(name: string) {
  return `Olá ${name}`;
}

export function personAge(name: string, age: number) {
  return `${name}, tem ${age} anos !`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(size: number): number {
  return size ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losango(Dmais: number, dMenos: number): number {
  return (Dmais * dMenos) / 2;
}

export function trapezio(altura: number, Base: number, base: number): number {
  return ((Base + base) * altura) / 2;
}

export function circulo(raio: number, pi: number = 3.14): number{
  return pi * Math.pow(raio, 2);
}