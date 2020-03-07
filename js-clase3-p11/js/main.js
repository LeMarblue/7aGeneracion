//string metodos

//practica

//obtener el nombre de usario e indicarle cuantos caracteres tiene su nombre

//practica 2
//obtener nombre del usuario 


/*algoritmo
-declarar una variable llamada name, una variable llamada nameLength
-preguntarle al usuario mediante un prompt su nombre "what is your name"
-asignar el valor del prompt obtenido a la variable name
-calcular la cantidad de caracteres que tiene el nombre mediante el metodo .length
-asignar a la variable nameLenght el dato de name.length
-mostrar en un mensaje ("tu nombre tiene name.lengh, letras") 
-verificar si su nombre es corto o largo  //parte de la practica 2
-si su nombre es de mas de 15 caracteres 
    mostrar un mensaje que su nombre es muy largo
-c.c mostrar un mensaje que su nombre es muy corto

*/
/*var name
var nameLength
name = prompt("what is your name")
nameLength = name.length
console.log(nameLength)
if (nameLength > 15) {
  console.log("tu nombre es muy largo")
} else {
  console.log("tu nombre es muy corto")
}
*/

var name = prompt("what is your name")
var nameNoneSpeces = name.replace(/ /g, "")
var nameChartCount = nameNoneSpeces.length
if (nameChartCount > 5) {
  var nameSubsTwoFirst = nameNoneSpeces.substr(0, 2)
  var nameSliceTwoEnd = nameNoneSpeces.slice(-2)
  console.log(`${nameSubsTwoFirst}${nameSliceTwoEnd}`)
} else {
  console.error("el nombre debe ser mayor a 5 caracteres!!")
}








