///for each para iterar sobre un array 


const carrito = [ 
    {nombre:"Camisa Blanca", precio:200},
    {nombre:"Camisa Negra", precio:225},
    {nombre:"Camisa Azul", precio:451},
    {nombre:"Camisa Amarilla", precio:325},
    {nombre:"Camisa Roja", precio:125},
    {nombre:"Camisa Verde", precio:126},
    {nombre:"Camisa Gris", precio:326},

]




//FOr each con funcion. 
carrito.forEach(function (producto) {
    console.log(producto.nombre + producto.precio);

})


//Con arrow function
carrito.forEach((producto) => console.log(producto.nombre + producto.precio));