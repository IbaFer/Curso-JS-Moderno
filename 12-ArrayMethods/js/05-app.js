// .find crea un nuevo arreglo con la condicion que busques 


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]





//Con un for each 

let resultado;


carrito.forEach((producto, index)=>{

    if(producto.nombre==="Audifonos"){

        resultado= carrito[index];
    }

});

console.log(resultado);




//Con un .find

let resultado2= carrito.find((producto)=>{ 

    return producto.nombre==="Tablet"

});


console.log(resultado2);



//.Find busca si existe  un valor en alguno de los elementos del arreglo y crea un nuevo arreglo.