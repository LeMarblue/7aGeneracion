const fs = require('fs')
// solo funciona con capetas vacias 

fs.rmdir('./new-dir',(error)=>{
  if (error){
    console.error('there was an error')
  }
  console.log('new-dir was deleted')
})