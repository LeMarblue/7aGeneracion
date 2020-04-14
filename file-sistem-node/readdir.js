const fs = require ('fs')

fs.readdir('.',{encoding:'utf8',withFileTypes:false},(error,files)=>{
  if (error){
    console.error('there was an error')
  }
  console.log(`se leyó la carpeta con los archivos ${files}`)
})
