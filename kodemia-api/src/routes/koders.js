
const express = require('express')
const koders = require('../usecases/koders')
const router = express.Router()

// /koders/
router.get('/', async (resquest, response) => {
  try {
    const allKoders = await koders.getAll()
    response.json({
      message: 'all koders',
      data: {
        koders: allKoders
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})
router.post('/', async (request, response) => {
  try {
    const newKoder = await koders.create(request.body)
    response.json({
      success: true,
      message: 'new koder created',
      data: {
        mentor: newKoder
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koders.deleteByid(id)
    response.json({
      success: true,
      message: `koder with id ${id} deleted`,
      data: {
        koder: koderDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderUpdated = await koders.updateByid(id, request.body)
    response.json({
      success: true,
      message: `koder with id ${id} updated`,
      data: {
        koderUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
