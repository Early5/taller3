// let x = 1;            Inicializa la variable x con valor 1 (contador/valor actual)
// let total = 0;        Inicializa la variable total con valor 0 (acumulador)
// do {                  Inicia un bucle do-while (se ejecuta al menos una vez)
// total += x;           Suma el valor actual de x al total
// if (x % 2 === 0) {     Si x es par (divisible por 2 sin residuo)
// total -= 1;            Resta 1 al total (solo para números pares)
// }
// x++;                  Incrementa x en 1 (siguiente número)
// } while (x <= 6);     Continúa el bucle mientras x sea menor o igual a 6


// console.log(total);   Muestra el valor final de total en la consola



let x = 3; 
let total = 0;
let pares = 0;
let impares = 0;
let limiteSuperado = false;

do {
  total += x;
  
  if (x % 2 === 0) {
    total -= 1;
    pares++;
  } else {
    impares++;
  }
  
  // Funcionalidad 2: Verificar límite
  if (total > 15) {
    limiteSuperado = true;
    break; // Sale del bucle
  }
  
  x++;
} while (x <= 6);

// Mostrar resultados
if (limiteSuperado) {
  console.log("Límite superado");
} else {
  console.log("Total: " + total);
}

// Funcionalidad 1: Mostrar conteo de pares e impares
console.log("Números pares procesados: " + pares);
console.log("Números impares procesados: " + impares);