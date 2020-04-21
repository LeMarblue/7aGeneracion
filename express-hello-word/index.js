
const express = require('express')
const fs = require('fs')

const app = express()

//app.[get|post|delete|put|patch] (ruta,requestHandler)

app.get('/', (request, response) => { //Get/
  //endpoint
  response.write('<h1>HOLA MUNDO KODERS!!</h1>')
  response.end()
})

//n endpoint es la combinacion de una ruta y de un metodo
app.get('/hola', (request, response) => {
  response.json({
    message: 'hola en json'
  })
})

app.get('/adios', (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  const responseObject = {
    message: 'adios'
  }
  response.write(JSON.stringify(responseObject))
  response.end()
})

app.post('/', (request, response) => {
  response.json({
    message: 'POST a root'
  })
})

app.delete('/', (request, response) => {
  response.status(400)
  response.json({
    message: 'DELETE a root'
  })
})


function readFileProm(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, data) => {
      if (error) {
        reject(error)
        return

      }
      resolve(data)
    })
  })
}

app.get('/my-content', async (request, response) => {
  // fs.readFile('./new-content.json', 'utf8', (error, data) => {
  //   if (error) {
  //     response.status(500)
  //     response.end()
  //     return
  //   }
  //   response.json(
  //     JSON.parse(data)
  //   )
  // })
  const data = await readFileProm('./new-content.json', 'utf8')
  response.json(
    JSON.parse(data)
  )
})




app.listen(8082, () => {

  console.log('server running')
}) 