const fs = require('fs')

function deleteDir(path) {
  fs.readdir(path, { encoding: 'utf8', withFileTypes: true }, (error, files) => {
    if (error) {
      console.error('[ERROR]:', error.message)
    }
    else {
      if (files.length === 0) {
        fs.rmdir(path, (error) => {
          if (error) {
            console.error('[ERROR]:', error.message)
            return
          }
        })
        return
      }
      else {
        files.forEach((element) => {
          if (element.isDirectory()) {
            deleteDir(`${path}/${element.name}`)
          } else {
            fs.unlink(`${path}/${element.name}`, (error) => {
              if (error) {
                return console.error('[ERROR]:', error.message)
              }
            })
          }
        })
        fs.rmdir(path, (error) => {
          if (error) {
            console.error('[ERROR]:', error.message)
            return
          }
        })
        return
      }
    }
  })
}

deleteDir('A')