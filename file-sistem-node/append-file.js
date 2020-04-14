const fs = require('fs')

fs.appendFile('write.txt','\nhola koders','utf8',(error) => {
  if (error) {
    return console.error('there was an error')
  }
  console.log('hola koders was appended to file!');
})