//Destructuring objects


const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true

};

console.log(producto.nombre); //Accediendo al nombre


const nombre1=producto.nombre; //Declarando la variable nombre como la propiedad del objeto

console.log(nombre1);



//Destructuracion de objetos

// const { nombre } = producto;

//Destructurar todas las variables

const { nombre, precio, disponible } = producto;

console.log("con destructuring: " + nombre + precio + disponible);



