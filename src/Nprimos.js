console.log("=== Imicio del sistema de clasificacion de numeros primos ===");

// Ejercicio 1 – Números primos 
// Crea un programa que: muestre todos los números primos entre 1 y 50. 
// Utiliza ciclos y  condicionales para verificar qué números cumplen la 
// condición de ser primos. 

// Este primer bucle hace el recorrido de los numero del 1 al 50
for (numero = 1; numero <= 50; numero++) {
    let esPrimo = true;

    
    if (numero <= 1) {
        esPrimo = false;

    } else {
        // Este ciclo revisa si el numero tiene divisores//
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
            }
        }
    }

    // Mostrar los numeros primos //
    if (esPrimo) {
        console.log(numero);
    }
}

console.log("=== Fin del sistema de clasificacion de numeros primos ===");
