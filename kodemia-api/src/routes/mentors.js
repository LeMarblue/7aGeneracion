
const express = require('express')
const mentors = require('../usecases/mentors')
const router = express.Router()
// /mentors
router.get('/', async (request, response) => {
  const allMentors = await mentors.getAll()
  response.json({
    message: 'all mentors',
    data: {
      mentors: allMentors
    }
  })
})

router.post('/', async (request, response) => {
  const newMentorData = request.body
  const mentorCreated = await mentors.create(newMentorData)
  response.json({
    message: 'mentor created',
    data: {
      mentor: mentorCreated
    }
  })
})
module.exports = router
