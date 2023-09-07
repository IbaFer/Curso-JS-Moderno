//Metodos para los objetos// sellar un objeto 
"use strict"; //Solamente usando el use strict es para poder usar metodos para los objetos

const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true

};

producto.disponible= false;
producto.imagen= "imagen.jpg";


console.log(producto);

Object.seal(producto);

// producto.disponible= true;
// producto.imagen2= "imagen2.jpg";

console.log(producto); // Manda error por que no deja modificar


console.log(Object.isSealed(producto));



//la diferencia es que no se pueden agregar ni eliminar propiedades pero si se pueden modificar lo que existe en el objeto.


