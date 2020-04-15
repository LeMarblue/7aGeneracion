const fs = require('fs')

function deleteDir(path) {
  const filesList = fs.readdirSync(path, { encoding: 'utf8', withFileTypes: true })

  if (filesList.length === 0) {
    fs.rmdirSync(path)
  }
  else {
    filesList.forEach((element) => {
      if (element.isDirectory()) {
        deleteDir(`${path}/${element.name}`)
      } else {
        fs.unlinkSync(`${path}/${element.name}`)
      }
    })
    fs.rmdirSync(path)
  }
}

deleteDir('A')