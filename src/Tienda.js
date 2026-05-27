console.log("=== Inicio del sistema de una tienda de productos ===")

// Ejercicio 5 – Tienda de productos 
// Crea un programa que: simule la venta de productos. El usuario podrá registrar 
// la compra  de varios artículos hasta que decida no comprar más. Se debe calcular 
// el total de la  compra y aplicar un descuento del 10% si el valor supera los $100.000.


let total = 0;

for (let i = 1; i <= 5; i++) {

    let producto = prompt("Ingrese el nombre del producto: ");
    let precio = parseInt(prompt("Ingrese el precio del producto: "));

    total = total + precio;

}

if (total > 100000) {

    let descuento = total * 0.10;
    total = total - descuento;

    console.log("Se aplicó un descuento del 10%");

}

console.log("Total a pagar: $" + total);

console.log("=== Fin del sistema de una tienda de productos ===")
