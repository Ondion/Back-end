const fs = require('fs');

fs.readFile('./text.txt', (err, content) => {
  if(err) {
    console.error(`Erro ao ler ${ err.message }`);
    return;
  }
  console.log(`Arquivo lido ${content.toString('utf8')}`);
})

fs.readFile(`./file1.txt`, (err, file1Content) => {
  if (err) {
    return console.log('err', err)
  }
  console.log(`aquivo 1: ${file1Content.byteLength} bytes`)

  fs.readFile(`./file2.txt`, (err, file2Content) => {
    if (err) {
      return console.log('err', err)
    }
    console.log(`aquivo 2: ${file2Content.byteLength} bytes`)
  
    fs.readFile(`./file3.txt`, (err, file3Content) => {
      if (err) {
        return console.log('err', err)
      }
      console.log(`aquivo 3: ${file3Content.byteLength} bytes`)
    
      
    })
  })
})