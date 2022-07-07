function calc(a, b) {
  if(b === 0)throw new Error("deu ruim, erro de divisão por zero")
}

try {
  calc(0, 0);
  console.log("deu certo!")
} catch (error) {
  console.log(error.message);
}
