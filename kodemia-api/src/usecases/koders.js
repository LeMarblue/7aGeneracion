
const Koder = require('../models/koders')

// los casos de uso son las acciones que puede ejercer un usuario en el sistema

function getAll () {
  // esto no se deberia hacer por la asyncronia
  /* let todos = null
  Koder.find()
    .then(koders => {
      todos = koders
      return koders
    })
    .catch()
  return todos */

  return Koder.find()
}

function create (koderData) {
  return Koder.create(koderData)
}

// en la ruta
// const Koders = require('...koders')
// koders.getAll()

function deleteByid (id) {
  return Koder.findByIdAndRemove(id)
}

function updateByid (id, newKoderData) {
  return Koder.findByIdAndUpdate(id, newKoderData)
}

module.exports = {
  getAll,
  create,
  deleteByid,
  updateByid
}
