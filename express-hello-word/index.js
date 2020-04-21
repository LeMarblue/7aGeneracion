
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

app.get('/my-content', (request, response) => {
  fs.readFile('./new-content.json', 'utf8', (error, data) => {
    if (error) {
      response.status(500)
      response.end()
      return
    }
    response.json(
      JSON.parse(data)
    )
  })
})




app.listen(8081, () => {

  console.log('server running')
}) 