
const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

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
// 1- validar la existencia
// 2- crear el hast encryp del Passw
// 3- creamos al koder

async function signup (newKoderData) {
  const { email, password } = newKoderData
  if (!email) throw new Error('Email is required')
  if (!password) throw new Error('password is required')

  const koderAlreadyExists = await Koder.findOne({ email })

  if (koderAlreadyExists) throw new Error('Email is already registered') // cuando solo hay una linea se pude s/{}
  if (password < 6) throw new Error('Password must be 6 characers minimum')

  const hash = await bcrypt.hash(password, 10)

  return Koder.create({ ...newKoderData, password: hash })
}

async function login (email, password) {
  const koder = await Koder.findOne({ email })
  if (!koder) throw new Error('Invalid data')

  const isPasswordCorrect = await bcrypt.compare(password, koder.password)
  if (!isPasswordCorrect) throw new Error('Invalid data')

  return jwt.sign({ id: koder._id })
}

module.exports = {
  getAll,
  create,
  deleteByid,
  updateByid,
  signup,
  login
}
