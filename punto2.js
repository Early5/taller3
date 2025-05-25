// Límite de advertencias permitido
const limiteAdvertencias = 3;

// Inicialización de variables
let advertencias = 0;
let duchas = 0;
let ahorros = 0;

while (advertencias < limiteAdvertencias) {
    // Solicitar tiempo de ducha al usuario (en segundos)
    let tiempo = parseInt(prompt("Ingrese el tiempo de la ducha número " + (duchas + 1) + " en segundos:"), 10);

    // Validar que el valor ingresado sea un número válido
    if (isNaN(tiempo) || tiempo <= 0) {
        alert("Por favor, ingrese un número válido mayor que cero.");
        continue; // volver a pedir el dato
    }

    duchas++;

    if (tiempo < 180) {
        ahorros++;
        alert("¡Buen trabajo! Esta ducha ahorró agua.");
    } else {
        advertencias++;
        alert("Advertencia: Esta ducha excedió los 180 segundos. Advertencias acumuladas: " + advertencias);
    }
}

// Mostrar reporte final
alert(
    "Monitoreo finalizado.\n" +
    "Total de duchas: " + duchas + "\n" +
    "Duchas ahorradoras: " + ahorros + "\n" +
    "Advertencias totales: " + advertencias
);
