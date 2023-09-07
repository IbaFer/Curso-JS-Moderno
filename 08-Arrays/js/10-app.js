//Diferencias entre .map y for each 



const carrito = [ 
    {nombre:"Camisa Blanca", precio:200},
    {nombre:"Camisa Negra", precio:225},
    {nombre:"Camisa Azul", precio:451},
    {nombre:"Camisa Amarilla", precio:325},
    {nombre:"Camisa Roja", precio:125},
    {nombre:"Camisa Verde", precio:126},
    {nombre:"Camisa Gris", precio:326},

]







// //Con arrow function
// carrito.forEach((producto) => console.log(producto.nombre + producto.precio));


//FOr each con funcion. 
let nuevoArreglo2 = carrito.forEach(function (producto) { //Este te da un undefined 
    return (producto.nombre + producto.precio);

})


//map
let nuevoArreglo= carrito.map(function (producto) {
    return producto.nombre + producto.precio; ///Este te crea un arreglo con los valores que iteró.

})

console.log(nuevoArreglo2);
console.log(nuevoArreglo);
