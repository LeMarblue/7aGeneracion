
const mongoose = require('mongoose')
const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true
  },
  generation: {
    type: Number,
    required: true,
    min: 1
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'n'],
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// module.export=> para decir lo que queremos que script exporte
// solo se puede exportar una cosa

module.exports = mongoose.model('Koders', koderSchema)
