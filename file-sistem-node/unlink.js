const fs = require('fs')

fs.unlink('write.txt',(error)=>{
if (error){
  return console.error('there was an error')
}
console.log('write.txt was deleted');
})