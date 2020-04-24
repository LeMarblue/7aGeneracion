
const express = require('express')
const fs = require('fs')

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))
const server = express()
server.use(express.json())//middleware soft  o funcion que se ejecuta antes del punto final de una peticion 
//con la finalidad de escribir parte de la respuesta

//endpoints: la combinacion de un metodo y una ruta
//metodo: metoodos HTTP -get,post,delete,put patch
//ruta: strings que denotan recursos en nuestro servidor
server.get('/', (request, response) => {
  response.json({
    message: 'My first API is running'
  })
})


//query paremetres
server.get('/koders', (req, res) => {
  const { limit } = req.query
  res.json({
    message: 'All the koders',
    data: {
      koders: kodemia.koders.slice(0, parseInt(limit)),
      //limit //localhost:8083/koders?limit=20
    }
  })
})

server.post('/koders', (request, response) => {
  /*const newKoder = {
    name: request.body.name,
    generation: request.body.generation
  }

  
  kodemia.koders.push(newKoder)
  response.json({
    message: 'new koder added',
    data: {
      koder: newKoder
    }
  })*/
  const { name, generation } = reques.body
  kodemia.koders.push({
    name,
    generation
  })
  response.json({
    message: 'new koder added',
    data: {
      koder: {
        name,
        generation

      }
    }
  })

})


//uri parametros
//GET/Fernanda => name=fernanda

/*server.get('/koder/:name', (request, response) => {
  response.json({
    name: request.params.name
  })
})
//query parameters*/

server.get('/koders/:indice', (request, response) => {
  let index = request.params.indice
  response.json({
    koder: kodemia.koders[index]

  })
})





server.get('/mentors', (request, response) => {
  response.json({
    message: "all mentors",
    data: {
      koders: kodemia.mentors
    }
  })
})

server.post('/mentors', (request, response) => {
  const newMentor = {
    name: request.body.name
  }
  kodemia.mentors.push(newMentor)
  response.json({
    message: "newMentor added",
    data: {
      mentor: newMentor
    }
  })
})






server.listen(8083, () => {
  console.log('Server is running')
})