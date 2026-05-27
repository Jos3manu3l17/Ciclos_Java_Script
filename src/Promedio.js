console.log("== Inicio del sistema de calculo de promedio de notas ===");

// Ejercicio 4 – Promedio de notas 
// Crea un programa que: lea las notas de 5 estudiantes. Calcula el promedio de cada uno y determina, 
// mediante condicionales, si aprueba (nota ≥ 3.0) o reprueba. Usa ciclos para  ingresar los datos de 
// manera ordenada. 

// Este es el bucle que recorre las veces a calificar de cada estudiante
for (let i = 1; i <= 5; i++) {

    console.log("Estudiante " + i);

    // Le pedimos las notas al usuario
    let nota1 = parseInt(prompt("Ingrese la primera nota: "));
    let nota2 = parseInt(prompt("ingrese la segunda nota: "));
    let nota3 = parseInt(prompt("Ingrese la tercera nota: "));

    // Calculamos el promedio
    let promedio = (nota1 + nota2 + nota3) / 3;

    console.log("Promedio: " + promedio);

    // Condicional que verifica si es mayor a 3.0 aprueba si no reprueba
    if (promedio >= 3.0) {
        console.log("Aprueba");
    } else {
        console.log("Reprueba");
    }
}

console.log("== Fin del sistema de calculo de promedio de notas ===");
