const fs = require('fs');

function readFile(fileName, filePath) {
  return new Promise((resolve, reject) => {

    fs.readFile(filePath + fileName, (err, content) => {
      if(err) return reject(err);
      resolve(content);
    })
  });
}

readFile("text.txt", "./")
.then((response) => console.log(response.toString('utf8')))
.catch((response) => console.log(response.message))