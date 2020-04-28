
const Koder = require('../models/koders')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema

async function getAll () {
  // esto no se deberia hacer por la asyncronia
  /* let todos = null
  Koder.find()
    .then(koders => {
      todos = koders
      return koders
    })
    .catch()
  return todos */

  const allKoders = await Koder.find()
  return allKoders
}

async function create (koderData) {
  const koderCreated = await Koder.create(koderData)
  return koderCreated
}

module.exports = {
  getAll,
  create
}

// en la ruta
// const Koders = require('...koders')
// koders.getAll()
