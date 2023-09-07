//Metodos para los objetos// Congelar un objeto para no poder modificarlo
"use strict"; //Solamente usando el use strict es para poder usar metodos para los objetos

const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true

};

producto.disponible= false;
producto.imagen= "imagen.jpg";


console.log(producto);

Object.freeze(producto);

// producto.disponible= true;
// producto.imagen2= "imagen2.jpg";

console.log(producto); // Manda error por que no deja modificar


console.log(Object.isFrozen(producto));



//El metodo de freeze te permite no modificar, eliminar, agregar ninguna caracteriztica del objeto.
