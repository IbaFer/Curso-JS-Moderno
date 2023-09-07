//El problema con los objetos a pesar de ser declaradas como constantes se pueden modificar. se le tiene que usar un metodo para no poder modificar el objeto.


const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true

};

console.log(producto);

producto.nombre="Celular de 50 pulgadas";

console.log(producto);


delete producto.precio;

console.log(producto);