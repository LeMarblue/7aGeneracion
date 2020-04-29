
const mongoose = require('mongoose')
const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true
  },
  asignature: {
    type: String,
    required: true
  },
  mentorType: {
    type: String,
    enum: ['alfa', 'beta'],
    required: true
  }

})

module.exports = mongoose.model('Mentors', mentorSchema)
