
const Mentor = require('../models/mentors')

async function getAll () {
  return Mentor.find()
}

async function create (mentorData) {
  return Mentor.create(mentorData)
}
function deleteByid (id) {
  return Mentor.findByIdAndRemove(id)
}

function updateByID (id, newMentorData) {
  return Mentor.findByIdAndUpdate(id, newMentorData)
}

module.exports = {
  getAll,
  create,
  deleteByid,
  updateByID
}
