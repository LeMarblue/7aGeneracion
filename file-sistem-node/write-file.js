const fs = require('fs')

fs.writeFile('write.txt','hola desde node', 'utf8',(error)=>{
  if (error){
    console.log ('there was an error')
    return
  }
  console.log('termine de escribir')
})
 
