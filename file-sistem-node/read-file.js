const fs = require('fs')

fs.readFile('write.txt','utf8', (error,data) =>{
  if (error){ 
    console.error ('there was an error')
    return
  }
  console.log(`el archivo contiene:${data}`)
})