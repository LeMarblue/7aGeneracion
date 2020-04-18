const fs=require('fs')

function writeFileProm(path,textToWrite,encoding,){
  return new Promise ((resolve,reject)=>{
    fs.writeFile(path,textToWrite,encoding,(error=>{
      if (error){
        reject (error)
        return
      }
      resolve()
    }))
  })
}

async function ejectWriteFileProm(){
  await writeFileProm('./carpeta-prueba/textodeprueba.txt','hola texto nuevo','utf8')
  return 
} 

ejectWriteFileProm()
.then(()=>{
  console.log('se termino de escribir tu archivo')
})
.catch(error=>console.error('Error:',error))