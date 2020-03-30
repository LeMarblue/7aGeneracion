/* //practica de contar items de un array//
//funcion que me permita ingresar el nombre de un array y contar cuantos items tiene, si el array no existe
//enviar un alert que diga tu array no existe

var colores = ["azul", "verde", "morado"]
var carros = ["passat", "avanza", "sentra", "tiida", "gol"]
var text = "Cuando despertó, el dinosaurio todavía estaba ahi"


function itemsCount(valor) {
if (Array.isArray(valor)) {
 let arrayCount = valor.length
 return arrayCount
} else {
 alert("the array doesn't exist")
}
}
console.log(itemsCount(text)) */


// practica de array en orden alfabetico//
//funcion que reciba un array, e imprima los elemntos de ese array en orden alfabetico 
//y con la primer palabra en upercase
/*
var colores = ["azul", "verde", "morado"]
var carros = ["passat", "avanza", "sentra", "tiida", "gol"]
var text = "Cuando despertó, el dinosaurio todavía estaba ahi"

function stuffArray(valor) {
  if (Array.isArray(valor)) {
    let sortArr = valor.sort()
    let firstWord = sortArr.shift()
    let upperCaseWord = firstWord.toUpperCase()
    sortArr.unshift(upperCaseWord)
    return sortArr

  } else {
    alert("no es un array")
  }
}
console.log((stuffArray(colores)))
*/
//    practica
// funcion que reciba un array, un numero y debe de imprimir cada uno de los items del array
//con los caracteres limitados  por el numero ingresaddo
function limitItems(arr, number) {
  if (Array.isArray(arr)) {
    arr.forEach
  } else {
    alert("no es un array")
  }
}