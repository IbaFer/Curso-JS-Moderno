//Crear objetos con object constructor


//Esta forma se le conoce como object literal a la forma de crear el objeto
const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true,

};

console.log(producto)

//Object constructor

 function Producto(nombre,precio){

    this.nombre=nombre;
    this.precio=precio;
    this.disponible=true;

 }

const producto2 = new Producto("Monitor de 55pulgadas", 1550);

console.log(producto2);