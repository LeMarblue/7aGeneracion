//algoritmo
/* 
-declarar una variable que se llame KodersQuantify, otra donde se llame kodersName, una var 1, un array llamdo nameCollection, un array firstName
-pedir mediante un prompt la cantidad de koders 
-guardar el dato del prompt en la variable kodersQuantify
-convertir el dato de kodersQuantify a tipo number mediante parseInt() 
-reasignar el tipo de dato a la misma variable kodersQuantify
-crear un ciclo for donde se incialice en 0, finalice antes del valor KodersQuantify, y se incremente de uno a uno
-asignar a la variable kodername un prompt que pida el nombre completo del koders.
-agregar cada nombre al arreglo nameCollection mediante nameCollection.push(kodersName)
-cerrar el ciclo
-por cada nombre agregado en el array le quitaremos el apellido y lo guardamos en la variable array firstName
*/
var kodersQuantify
var kodersName
var i
var nameCollection = []
var firstName = []
kodersQuantify = prompt("how many koders are you goint to register")
kodersQuantify = parseInt(kodersQuantify, 10)
for (i = 0; i < kodersQuantify; i++) {
  kodersName = prompt("koder full name")
  nameCollection.push(kodersName)
}
nameCollection.forEach(fullName => {
  firstName = fullName.split(" ")
  console.log(firstName[0])
});
