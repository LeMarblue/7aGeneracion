
const express = require('express')

// const koders = require('./usecases/koders')
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')
// const authMiddlewere = require('./middlewares/auth')

const app = express()
// middlewere parsea cada request a json son
// en caso de qe contenga en header content-type 'aplication/json'
// toma el body y lo transforma en un json que nos lo entrega
// en el obj request.body
// global
app.use(express.json())
app.use((request, response, next) => {
  console.log(`>${request.method},${response.url}, body: ${JSON.stringify(request.body)}`)
  next()
})

// montmos el router de koders
app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/auth', authRouter)
/* // todos los recursos se escriben en plural
app.get('/koders', async (request, response) => {
  const allKoders = await koders.getAll()
  response.json({
    message: 'All koders',
    data: {
      koders: allKoders
    }
  })
})

// ruoter '/koders'
// GET/koders
// POST/''
// PATCH/koders/:id
// DELETE/koders/:id

// router yo lo puedo montar en la ruta que quiera
// router se montara /koders
// GET/=> GET/koders
// POST /=>POST/koders
*/

module.exports = app
