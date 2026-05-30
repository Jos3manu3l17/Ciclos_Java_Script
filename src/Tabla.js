console.log("=== Inicio del sistema de tabla de multiplicar ===");

// Ejercicio 2 – Tabla de multiplicar personalizada //
// Crea un programa que: dado un número ingresado por el usuario, muestre //
// su tabla de  multiplicar hasta el 12. El ciclo debe permitir repetir //
// el proceso si el usuario desea  consultar otra tabla. //

// Aqui le pedimos el numero de la tabla que el usuario desea repasar
let numero = parseInt(prompt("Ingrese el numero de la tabla que desea repasar:" ));

// Este bicle nos mustra todos los numeros concatenados del 1 al 12 y su respectivo
// resultado
for (let i = 1; i <= 12; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}

console.log("=== fin del sistema de tabla de multiplicar ===");
