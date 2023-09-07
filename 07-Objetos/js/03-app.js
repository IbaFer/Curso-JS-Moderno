//Agregar o eliminar propiedades al objeto


const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true

};
console.log(producto);

//Agregar nuevas propiedades

producto.imagen= "imagen.jpg"

console.log(producto);


//borrar una propiedad

delete producto.disponible;

console.log(producto);