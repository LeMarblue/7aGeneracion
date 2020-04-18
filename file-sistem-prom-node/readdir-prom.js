const fs = require('fs')

function readdirProm(path, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, options, (error, files) => {
      if (error) {
        reject(error)
        return
      }
      resolve(files)
    })
  })
}

async function ejectreaddirProm() {
  const files = await readdirProm('./carpeta-prueba', { encoding: 'utf8', withFileTypes: true })
  return files
}

ejectreaddirProm()
  .then(files => {
    console.log(files)
  })
  .catch(error => console.error('ERROR:', error))

