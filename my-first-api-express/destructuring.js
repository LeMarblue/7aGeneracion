// deconstruccion
const request = {
  body: {
    name: 'charles',
    generation: 7,
    age: 24,
    phone: undefined,
    gender: 'male',
    email: 'bla@bla'
  }
}
//descon
//deconstruccuin de objeto
//const {atributos que quiero obt}= el objeto a deconstru (del que quiero sacar atirub)
const { name, generation, } = request.body




// renombramiento en la deconstru
// seusa el operador :
// lado izq es el nombre del atrib como esta en el obj
//lado derecho es el nombre deseado
const { name: koderName, age: koderAge } = request.body
console.log('koderName:', koderName)

//dar un valor por defecto 
//se usa el operador de asignacion(=)
const { phone = '555555555' } = request.body
console.log('phone:', phone)//valor por defect

//todo junto
const { name: mentorName = 'Isrea' } = request.body
console.log('mentorName:', mentorName)

//buenas practias
//usar varias lineas ak decotruir mas de 2 atributos de un objeto
/*const {
  name: dudeName = 'dude',
  phone,
  age,
  genetation,
} = request.body

*/

//deconstruccion de arreglo
const koder = ['Mar', 'Elvira', 'Airy', 'Fer']

//const [ elementoPosiscionales que quiero del arrego]=arreglo a ser decons

const [X, Y, z, a, b = 'extra'] = koder
//const { name: mentorNameNew } = mentors[0]
//spread y rest operation (...)
//spread es esparcir, nos ayuda a sacar los valores de un objeto
//rest  rest nos ayuda a agrupar el rsto de atributos /miembros en un solo conte

//rest Operator (...), se caracteriza oirque se usa dentro de una deconstruc , de lado izq del igual
const { email, ...restoDelObjeto } = request.body
console.log(email)
console.log(restoDelObjeto)//tipo objeto
//arrays
const [unkoder, ...restoDelArreglo] = koder
console.log(unkoder)
//spread operator (...)pero de lado derecho del igual
const

