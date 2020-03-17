/*
var bmentorsName = [
  "Brenda Gonzalez",
  "Shalem Solis",
  "Jorge Ochoa",
  "Rurick Maqueo",
  "Alex Cruz",
  "Daniel Ortega"
]
var nameSplit
bmentorsName.forEach(name => { //aqui vamos a iterar dentro del arry de los beta nombres
  nameSplit = name.split(" ");//aqui separamos cada nombre con un espacio
  var initialName = ""
  nameSplit.forEach(partName => {// aqui iteramos en el arreglod e los nombres separados
    initialName += partName.charAt(0) + ". ";//aqui le fuimos asignando cada incial de cada parte del nombre
  });
  console.log(`${name},${initialName}`)//aqui mostramos

});

*/
//Práctica:
//Crear una función ó funciones que permitan al usuario elegir 
//una operación básica, indicar 2 valores, y ejecutar la operación 
//seleccionada. Imprimir el resultado

//output: "La ${operacion} de los dos números que indicaste es: ${resultado}"

/*----Algoritmo
-crear una funtion por cada operacion
-crear una funtions sumar con los parametros number1 y number2
-crear una variable let llamada resultado e inicializarla en 0
-asignarle a resultado el valor de la suma de number1 + number2
-return result
-crear una funtions restar con los parametros number1 y number2
-crear una variable let llamada resultado e inicializarla en 0
-asignarle a resultado el valor de la suma de number1 - number2
-return result
-crear una funtions multipiclar con los parametros number1 y number2
-crear una variable let llamada resultado e inicializarla en 0
-asignarle a resultado el valor de la suma de number1 * number2
-return result
-crear una funtions dividir con los parametros number1 y number2
-crear una variable let llamada resultado e inicializarla en 0
-asignarle a resultado el valor de la suma de number1 / number2
-return result
-hacer una arrow funtion llamada calculator, donde reciba los parametros, operation, number1 y number2
-ejecutar , la function correspondente al parametro operation, con los numeros que indiquen
*/


const sumar = (number1, number2) => {
  let resultado = 0
  resultado = number1 + number2
  return resultado
}
const restar = (number1, number2) => {
  let resultado = 0
  resultado = number1 - number2
  return resultado
}
const multiplicar = (number1, number2) => {
  let resultado = 0
  resultado = number1 * number2
  return resultado
}
const dividir = (number1, number2) => {
  let resultado = 0
  resultado = number1 / number2
  return resultado
}
const calculator = (operation, number1, number2) => {
  if (operation === "suma") {
    return sumar(number1, number2)
  }
  else if (operation === "resta") {
    return restar(number1, number2)
  }
  else if (operation === "multiplica") {
    return multiplicar(number1, number2)
  }
  else if (operation === "divide") {
    return dividir(number1, number2)
  }
  else {
    console.log("no manejamos esa funtion")
  }
}
console.log(calculator("resta", 5, 2))