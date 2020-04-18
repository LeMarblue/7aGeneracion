const fs=require('fs')

function unlinkFileProm(path){
  return new Promise ((resolve,reject)=>{
    fs.unlink(path,(error)=>{
      if (error){
        reject (error)
        return 
      }
      resolve()
    })
  })
}
async function ejectUnlinkFile(){
  await unlinkFileProm('./carpeta-prueba/textodeprueba.txt')
  return
}
ejectUnlinkFile()
.then(()=>{
  console.log('se elimino el archivo')
})
.catch(error=>console.error('ERROR:',error))