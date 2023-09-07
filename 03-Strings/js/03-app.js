// Como concatenar sstrings 



const producto = "monitor ";
const precio = "50  pesos"


console.log(producto.concat(precio));

console.log(producto.concat("En descuento"));   //metodo concatenar

console.log(producto + precio); //Concatenar simple dos variables de string

console.log(producto + " con precio de " + precio); //Forma anterior de concatenar


console.log(`${producto} con precio de ${precio}`);     //Template strings