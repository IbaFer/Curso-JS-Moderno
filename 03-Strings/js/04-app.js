///Metodos para eliminar el espacio en blanco al incio o al fin de una cadena de texto.


const producto = "        monitor de 20 pulgadas         ";



console.log(producto);
console.log(producto.length);

//Eliminar espacios en blanco del inicio

console.log(producto.trimStart());
console.log(producto.trimEnd());
console.log(producto.trimEnd().trimStart());



console.log(producto.trim());

