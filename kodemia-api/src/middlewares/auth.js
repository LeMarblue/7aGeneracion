
const jwt = require('../lib/jwt')

// verificar el jtw es expendido por el mismo servidor
function auth (request, response, next) {
  console.log('auth middlewere')
  const { authorization: token } = request.headers
  console.log(token)
  try {
    const decodeToken = jwt.verify(token)
    console.log(decodeToken)
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'unauthorized'
    })
  }
}

module.exports = auth
