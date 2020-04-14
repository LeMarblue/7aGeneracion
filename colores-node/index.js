// String.prototype.sayHi = () => 'hola'
const colors = require('colors/safe')
const moment = require('moment')
// moment().format()

const hora = moment().hours()
const minutos = moment().minutes()
const name = 'mar'

console.log(colors.rainbow(`hola ${name} son las ${hora}:${minutos}`))
