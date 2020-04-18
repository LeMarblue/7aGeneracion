const fs=require('fs')

function appendfileProm(path,textToAdd,encoding){
  return new Promise((resolve,reject)=>{
    fs.appendFile(path,textToAdd,encoding,(error)=>{
      if (error){
        reject (error)
        return
      }
      resolve()
    })
  })
}

async function ejectAppendfileProm(){
  await appendfileProm('./carpeta-prueba/test.txt','\nnew Blablabla','utf8',)
  return
}

ejectAppendfileProm()
  .then(()=>{
    console.log('se actualizo tu archivo')
  })
  .catch(error=>console.error('Error:',error))