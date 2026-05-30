// Ejercicio 7 – Contador de pares e impares 
// Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra 
// cuántos  fueron pares y cuántos impares. 


let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {

  let numero = parseInt(prompt("Ingrese un número"));

  if (numero % 2 == 0) {

    pares++;

  } else {

    impares++;

  }


}

console.log("Cantidad de pares: " + pares);
console.log("Cantidad de impares: " + impares);