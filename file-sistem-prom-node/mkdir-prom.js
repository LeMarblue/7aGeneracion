const fs =require('fs')

function mkdirProm(path){
  return new Promise ((resolve,reject)=>{
    fs.mkdir(path,(error)=>{
      if (error){
        reject (error)
        return
      }
      resolve()
    })
  })
}

async function ejectMkdirProm(){
  await mkdirProm('./new-folder')
  return
}

ejectMkdirProm()
.then(()=>{
})
.catch(error=>console.error('ERROR:',error))

