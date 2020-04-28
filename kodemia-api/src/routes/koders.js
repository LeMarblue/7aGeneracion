
const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()

// /koders/
router.get('/', async (resquest, response) => {
  const allKoders = await koders.getAll()
  response.json({
    message: 'all koders',
    data: {
      koders: allKoders
    }
  })
})

module.exports = router
