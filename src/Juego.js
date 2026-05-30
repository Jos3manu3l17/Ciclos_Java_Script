let numeroSecreto = Math.floor(Math.random() * 20) + 1;

// Ejercicio 6 – Juego del adivinador 
// Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará  
// adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, 
// el  programa debe indicar si el número buscado es mayor o menor que el ingresado. 


let intento = 0;

for (; intento != numeroSecreto;) {


  intento = parseInt(prompt("Adivine el número entre 1 y 20"));

  if (intento < numeroSecreto) {

    console.log("El número es mayor");

  } else if (intento > numeroSecreto) {

    console.log("El número es menor");


  } else {

    console.log("¡Correcto! Adivinaste el número");

  }

}