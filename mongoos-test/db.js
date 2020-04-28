const mongoose = require('mongoose')
const user = 'Devmar'
const password = 'Tripulacion3.4'
const host = 'mar-kodemia-woog9.mongodb.net'
const bdName = 'mar-kodeDB'
const url = `mongodb+srv://${user}:${password}@${host}/${bdName}?retryWrites=true&w=majority`
//'mongodb+srv://Devmar:Tripulacion3.4@mar-kodemia-woog9.mongodb.net/test?retryWrites=true&w=majority'

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 2
  },
  generation: {
    type: Number,
    required: true,
    min: 1
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'n']
  }
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Se conectó')
    const Koder = mongoose.model('koders', koderSchema)
    // QUERY
    /*koder.find({ generation: 7 })
      .then((koders => {
        console.log('koders:', koders)
      }))

      .catch(error => { console.log(error) })*/
    //creación del documento
    /*const newKoder = new Koder({ name: 'nuevo Koder', generation: 7, gender: 'n' })
    newKoder.save()
      .then(() => {
        console.log('new koder created')
      })
      .catch(error => {
        console.error('error:', error)

      })*/
    Koder.create({ name: 'nuevo koder shortcut', generation: 7, gender: 'n', })
      .then(() => console.log('new koder creado'))
      .catch(error => console.error('error al crear:', error))
  })
  .catch(error => {
    console.error('error en conect:', error)
  })