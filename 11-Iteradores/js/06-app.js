// For each y el .map para recorrer arreglos 




///Se ejecuta 1 vez por cada elemento que haya en el arreglo



const pendientes=["tarea", "comer", "trabajar", "estudiar", "Holgazanear"]



pendientes.forEach( (pendiente)=> {
    console.log(pendiente)
}
)

//Funciona igual que lo de arriba 
pendientes.forEach(pendiente=> console.log(pendiente))





const carrito = [ 
    {nombre:"Camisa Blanca", precio:200},
    {nombre:"Camisa Negra", precio:225},
    {nombre:"Camisa Azul", precio:451},
    {nombre:"Camisa Amarilla", precio:325},
    {nombre:"Camisa Roja", precio:125},
    {nombre:"Camisa Verde", precio:126},
    {nombre:"Camisa Gris", precio:326},

]

const nuevoArreglo = carrito.forEach( producto => producto.nombre);


const nuevoArreglo2 = carrito.map( producto => producto.nombre);


console.log(nuevoArreglo);
console.log(nuevoArreglo2);