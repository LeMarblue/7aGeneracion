//Calcular el area de un triangulo dados los tres lados
/*
1. Declarar las variables: sideA, sideB, sideC, addAB,addBC, addAC, perimeter, semiperimeter, product, area
2. Solicitar al usuario mediante el metodo prompt el valor para sideA, con el mensaje "Enter side A"
3. Guardar en la variable sidA el valor obtenido del prompt para sideA
4. Solicitar al usuario mediante el metodo prompt el valor para sideB, con el mensaje "Enter side B"
5. Guardar en la variable sidB el valor obtenido del prompt para sideB
6. Solicitar al usuario mediante el metodo prompt el valor para sideC, con el mensaje "Enter side C"
7. Guardar en la variable sidC el valor obtenido del prompt para sideC
8. Convertir el valor de la variable sideA a tipo number, mediante el metodo parseInt()
9. Reasignar el valor convertido de sideA en sideA
10. Convertir el valor de la variable sideB a tipo number, mediante el metodo parseInt()
11. Reasignar el valor convertido de sideB en sideB
12. Convertir el valor de la variable sideC a tipo number, mediante el metodo parseInt()
13. Reasignar el valor convertido de sideC en sideC
14. Asignar a la variable addAB la operación sideA+sideB
15. Asignar a la variable addBC la operación sideB+sideC
16. Asignar a la variable addAC la operación sideA+sideC
17. Asignar a la variable powSideA el cuadrado de la variable sideA
18. Asignar a la variable powSideB el cuadrado de la variable sideB
19. Asignar a la variable powSideC el cuadrado de la variable sideC
20. Validar la construccion del triangulo preguntando si addAB > sideC y addBC > sideA y addAC > sideB
    20.1 si es verdadero ejecutar:
        20.1.1 Asignar a la variable perimeter la operación: sideA + sideB + sideC
        20.1.2 Asignar a la variable semiperimeter la operación: perimeter / 2
        20.1.3 Asignar a la variable product la operación: semiperimeter*(semiperimeter - sideA) * (semiperimeter -sideB) * (semiperimeter - sideC)
        20.1.4 Asignar a la variable area la operación de raíz cuadrada de la variable product mediante el metodo Math.sqrt()
        20.1.5 Mostrar en un mensaje el valor devuelto por la variable area
        20.1.6 Validar si el triangulo es equilatero preguntando si
                    20.1.6.1 sideA === sideB y sideB === sideC y sideA === sideC
                            si es verdadero mostar mensaje "Es equilatero"
                    20.1.6.2 En caso contrario si sideA === sideB o sideB === sideC o sideA === sideC
                            si es verdadero mostrar mensaje "Es Isóceles"
                    20.1.6.1 En caso contrario
                            mostrar mensaje "Es escaleno"
         20.1.7 Válidar si el trangulo es rectangulo, preguntando si powSideA > powSideB && powSideA > powSideC; si es verdadero, entonces:
                Almacenar en la variable hipotenuse la operación: powSideB + powSideC
                Preguntar si el valor de la viable hipotenuse es estrictamente igual al valor de la variable powSideA, si es cierto entonces:
                    mostrar mensaje "es rectangulo"
         20.1.8 Válidar si el trangulo es rectangulo, preguntando si powSideB > powSideA && powSideB > powSideC; si es verdadero, entonces:
                Almacenar en la variable hipotenuse la operación: powSideA + powSideC
                Preguntar si el valor de la viable hipotenuse es estrictamente igual al valor de la variable powSideB, si es cierto entonces:
                    mostrar mensaje "es rectangulo"
         20.1.9 Válidar si el trangulo es rectangulo, preguntando si powSideC > powSideB && powSideC > powSideA; si es verdadero, entonces:
                Almacenar en la variable hipotenuse la operación: powSideA + powSideB
                Preguntar si el valor de la viable hipotenuse es estrictamente igual al valor de la variable powSideC, si es cierto entonces:
                    mostrar mensaje "es rectangulo"
    20.2 En caso contrario:
         mostrar mensaje "No existe triángulo con esas dimensiones"
*/
var sideA, sideB, sideC, addAB, addBC, addAC, perimeter, semiperimeter, product, area, powSideA, powSideB, powSideC, hipotenuse
sideA = prompt("enter sideA")
sideB = prompt("enter sideB")
sideC = prompt("enter sideC")
sideA = parseInt(sideA, 10)
sideB = parseInt(sideB, 10)
sideC = parseInt(sideC, 10)
addAB = sideA + sideB
addBC = sideB + sideC
addAC = sideA + sideC
powSideA = Math.pow(sideA, 2)
powSideB = Math.pow(sideB, 2)
powSideC = Math.pow(sideC, 2)
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
  } else {
    console.log("es escaleno")
    if (powSideA > powSideB && powSideA > powSideC) {
      hipotenuse = powSideB + powSideC
      if (hipotenuse === powSideA) {
        console.log("es rectangulo")
      }
    }
    if (powSideB > powSideA && powSideB > powSideC) {
      hipotenuse = powSideA + powSideC
      if (hipotenuse === powSideB) {
        console.log("es rectangulo")
      }
    }
    if (powSideC > powSideB && powSideC > powSideA) {
      hipotenuse = powSideA + powSideB
      if (hipotenuse === powSideC) {
        console.log("es rectangulo")
      }
    }
  }
} else {
  console.log("no existe triangulo con esas dimensiones")
}
