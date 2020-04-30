
const jwt = require('jsonwebtoken')

const secret = 'supersecretword'

function sign (payload = {}) {
  return jwt.sign(payload, secret)
}

function veryfy (token = '') {
  return jwt.veryfy(token, secret)
}

module.exports = {
  ...jwt,
  sign,
  veryfy
}
