const fs = require('fs')

fs.copyFile('write.txt','copy-write.txt',(error)=>{
  if(error){
    console.error('there was an error')
  }
  console.log(`el archivo write.txt was copied to copy-write.txt`)
})