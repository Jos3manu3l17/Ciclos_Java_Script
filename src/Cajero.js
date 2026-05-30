console.log("=== inicio del sistema de cajero automatico ===");

// Ejercicio 3 – Cajero automático 
// Crea un programa que: simule un cajero automático. El usuario inicia con un saldo  
// definido en una variable constante. Podrá retirar dinero varias veces mientras tenga  
// fondos suficientes. Si intenta retirar más de lo que tiene, debe aparecer un mensaje de  
// error y no permitir la transacción

// Aqui sde definen las variables constantes y normal 
const saldoInicial = 100000;

let saldo = saldoInicial;

// En este bucle se recorre 3 veces lo que desea retirar el usuario
for (let i = 1; i <= 3; i++) {
    let retiro = parseInt(prompt("Ingrese el montoa retirar: "));

    // En esta condicional definimos el saldo y asignamos lo que sobra
    // para luego mostrarlo
    if (retiro <= saldo) {
        saldo = saldo - retiro;

        console.log("Retiro exitoso...");
        console.log("Saldo restante: " + saldo);
    } else {
        console.log("Error: saldo insuficiente.")
    }
}

console.log("=== Fin del sistema de cajero automatico ===");
