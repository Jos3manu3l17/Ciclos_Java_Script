let usuarioCorrecto = "Jose_Admin";
let contraseñaCorrecta = "12345";

// Ejercicio 8 – Control de acceso 
// Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta  
// 3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si  
// acierta, mostrar “Bienvenido”.


for (let i = 1; i <= 3; i++) {

  let usuario = prompt("Ingrese el usuario");
  let contraseña = prompt("Ingrese la contraseña");

  if (usuario == usuarioCorrecto && contraseña == contraseñaCorrecta) {


    console.log("Bienvenido");
    break;


  } else {

    console.log("Datos incorrectos");

  }


  if (i == 3) {

    console.log("Acceso denegado");

  }

}