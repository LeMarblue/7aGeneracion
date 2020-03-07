//practica 4 //
//recibir del usuariolos datos de los 3 lados de un triangulo
//con base en esos datos detrminar el area del triangulo y mostrarla en mensaje
//en otro mensaje indicar si el triangulo es isoceles,equilatero o escaleno 
//algoritmo//
/*
Declarar las variables: sideA, sideB, sideC, addAB,addBC, addAC, perimeter, semiperimeter, product, area,powSideA,powSideB,powSideC
Solicitar al usuario mediante el metodo prompt el valor para sideA, con el mensaje "Enter side A"
Guardar en la variable sidA el valor obtenido del prompt para sideA
Solicitar al usuario mediante el metodo prompt el valor para sideB, con el mensaje "Enter side B"
Guardar en la variable sidB el valor obtenido del prompt para sideB
Solicitar al usuario mediante el metodo prompt el valor para sideC, con el mensaje "Enter side C"
Guardar en la variable sidC el valor obtenido del prompt para sideC
Convertir el valor de la variable sideA a tipo number, mediante el metodo parseInt()
Reasignar el valor convertido de sideA en sideA
Convertir el valor de la variable sideB a tipo number, mediante el metodo parseInt()
Reasignar el valor convertido de sideB en sideB
Convertir el valor de la variable sideC a tipo number, mediante el metodo parseInt()
Reasignar el valor convertido de sideC en sideC
Asignar a la variable sumaAB la operación sideA+sideB
Asignar a la variable sumaBC la operación sideB+sideC
Asignar a la variable sumaAC la operación sideA+sideC
Validar la construccion del triangulo preguntando si addAB > sideC y addBC > sideA y addAC > sideB
    si es verdadero ejecutar:
        Asignar a la variable perimeter la operación: sideA + sideB + sideC
        Asignar a la variable semiperimeter la operación: perimeter / 2
        Asignar a la variable product la operación: semiperimeter*(semiperimeter - sideA) * (semiperimeter -sideB) * (semiperimeter - sideC)
        Asignar a la variable area la operación de raíz cuadrada de la variable product mediante el metodo Math.sqrt()
        Mostrar en un mensaje el valor devuelto por la variable area
        Validar si el triangulo es equilatero preguntando si
            sideA === sideB y sideB === sideC y sideA === sideC
                si es verdadero mostar mensaje "Es equilatero"
            En caso contrario si sideA === sideB o sideB === sideC o sideA === sideC
                si es verdadero mostrar mensaje "Es Isóceles"
            En caso contrario
                mostrar mensaje "Es escaleno"
    En caso contrario:
        mostrar mensaje "No existe triángulo con esas dimensiones"
        */

var sideA
var sideB
var sideC
var addAB
var addBC
var addAC
var perimeter
var semiperimeter
var product
var area
sideA = prompt("enter sideA")
sideB = prompt("enter sideB")
sideC = prompt("enter sideC")
sideA = parseInt(sideA, 10)
sideB = parseInt(sideB, 10)
sideC = parseInt(sideC, 10)
addAB = sideA + sideB
addBC = sideB + sideC
addAC = sideA + sideC
if (addAB > sideC && addBC > sideA && addAC > sideB) {
  //console.log("si existe triangulo con esas dimensiones")
  perimeter = sideA + sideB + sideC
  semiperimeter = perimeter / 2
  product = semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC)
  area = Math.sqrt(product)
  console.log(`el area del triangulo es ${area}`)
  if (sideA === sideB && sideB === sideC && sideA === sideC) {
    console.log("es equilatero")
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("es isoceles")
  } else { console.log("es escaleno") }


} else {
  console.log("no existe triangulo con esas dimensiones")
}
//console.log(typeof (sideA))
