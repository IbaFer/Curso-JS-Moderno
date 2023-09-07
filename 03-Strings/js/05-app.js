//Cortar una palabra, reemplazar una palabra en una cadena de texto 


const producto = "monitor de 20 pulgadas";



//.replace
console.log(producto);
console.log(producto.replace(" pulgadas",'"')); //Reemplaza la primera paralabra del parentesis por la segunda del parentesis


//recortar

console.log(producto.slice(0,10)); //Entrega el texto cortado en la ventana que le des
console.log(producto.slice(8));

//Se puede usar tambien el substring para recortar 
console.log(producto.substring(0,10));
console.log(producto.substring(8,6));


//DIFERENCIA ENTRE SUBSTRING Y SLICE ES PREGUNTA PARA TRABAJO. REALMENTE EL SUBSTRING ES MAS INTELIGENTE Y SI PONES LOS PARAMETROS AL REVES AUN ASI LO USA.


//para buscar que letra está en cierta posicion  se usa el metodo .charAt

const usuario="Fer";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));