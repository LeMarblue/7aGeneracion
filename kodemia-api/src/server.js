
const express = require('express')
// const koders = require('./usecases/koders')
const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')
const app = express()
app.use(express.json())
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
