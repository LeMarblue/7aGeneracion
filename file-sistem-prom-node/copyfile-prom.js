const fs =require('fs')

function copyfileProm(path,newName){
  return new Promise ((resolve,reject)=>{
    fs.copyFile(path,newName,(error=>{
      if (error){
        reject (error)
        return
      }
      resolve ()
    }))
  })
}

async function ejectCopyFileProm(){
  await copyfileProm('./carpeta-prueba/textodeprueba.txt','copy-text.txt')
  return
}

ejectCopyFileProm()
.then(()=>{
  console.log('se termino de copiar tu archivo')
})
.catch(error=>console.error('Error:',error))