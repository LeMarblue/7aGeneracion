const fs = require('fs')

fs.mkdir('./new-dir',(error)=>{
  if (error){
    console.error('there was a error')
  }
  console.log('la carpeta new-dir was created')
})