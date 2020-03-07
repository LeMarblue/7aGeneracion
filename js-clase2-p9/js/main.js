//tener los valores de x,y y comprarlos
//si x es mayor que y, mostrar un mensaje que lo indique
//si x es menor que y, mostrar un mensaje que lo indique
/* algoritmo
 -declarar los valores de x,y
 -preguntar si x>y
 -obtener la respues de la comparacion
 -si x>y ,mostrar  el mensaje x es mayor que y
 -x<y mostrar el mensaje x es menor que y
 */
//debugger
/*
var x = 2
var y = 4
if (x > y) {
  console.log(`${x} es mayor que ${y}`);
}
else if (x < y) {
  console.log(x, "es menor que", y);
}
else {
  console.log(x, "es igual a", y)
}*/

//ejercicio 2
//multiplicar 2 valores, y verificar si el resultado es par o non
// si es par indicarlo con un mensaje
//si es non indicarlo con un mensaje

/*
-definir vareables
-x,y
-definir una variable en la cual multipliques x*y
-definir una variable en la cual saques el modulo2 del productp
-preguntar si el  modulo 2 del producto es 0 
-si lo es indicar en console.log que es par 
-si no indicar que es impar
*/
/*
var x = 7
var y = 7
var productResult = x * y
var productModulus = productResult % 2

if (productModulus === 0) {
  console.log("el producto de xy es par");
}
else {
  console.log("el producto de xy es impar")
}*/
//recibir un numero de parte del usuario y calcular el area de un circulo cuyo radio sea igual al numero proporcionado}

//declarar una variable llamada r
//hacer un promt donde el usuario meta el numero
// guardar en la variable r el numero que indique el usuario en el promt
//asignar una variable donde guardemos pi (digitos 3.141592)
//asignar una variable donde pongamos el cuadrado de r
// asignar una variable llamada area=pi*radioAlCuadrado
//mostrar el area

var r = prompt("ingrese numero del area")
var pi = 3.141592
var radioAlCuadrado = r * r
var area = pi * radioAlCuadrado
console.log(`el area del circulo es ${area}`)