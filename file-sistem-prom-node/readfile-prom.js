const fs=require('fs')

function readFileProm(path,encoding){
  return new Promise((resolve,reject)=>{
    fs.readFile(path,encoding,(error,data)=>{
      if (error){
        reject (error)
        return
      }
      resolve (data)
    })
  })
}

async function ejectReadFileProm(){
  const data=await readFileProm('./carpeta-prueba/textodeprueba.txt','utf8')
  return data
} 
 ejectReadFileProm()
 .then(data=>{
   console.log('tu archivo contiene',data)
 })
 .catch(error=>console.error('Error:',error))