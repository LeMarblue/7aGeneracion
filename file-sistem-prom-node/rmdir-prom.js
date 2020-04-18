const fs = require('fs')

function rmdirPrompt(path) {
  return new Promise((resolve, reject) => {
    fs.rmdir(path, (error) => {
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })
}

async function ejectRmdirPrompt() {
  await rmdirPrompt('./new-folder')
  return
}

ejectRmdirPrompt()
  .then(() => {
  })
  .catch(error => console.error('ERROR:', error))