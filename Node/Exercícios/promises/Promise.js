function calc(a, b) {
  const promise = new Promise((resolve, reject) => {
    if(b ===0) reject(Error("divisão por zero!"));
 
    const response = "deu certo!";
    resolve(response);
  });

  return promise;
}

calc(0, 0)
.then((response) => console.log(response))
.catch((response) => console.log(response.message))