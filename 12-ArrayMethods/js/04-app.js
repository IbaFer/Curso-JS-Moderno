// .filter



const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]




let resultado;


resultado= carrito.filter((producto)=>{ // filtra por los precios mayores a 400 

return    producto.precio>400;

})


resultado= carrito.filter((producto)=>{

    return    producto.precio<600; //Filtra por los precios menores a 600 
    
    })



resultado= carrito.filter((producto)=>{

    return    producto.nombre !== "Celular"; //Filtra por los productos que no tengan el nombre de celular 
        
    })



    resultado= carrito.filter((producto)=>{

        return    producto.nombre === "Celular"; //Filtra por los nombres que tengan el nombre de celular
            
        })    


console.log(resultado);



// .filter como tal es un filtro el cual te crea un nuevo arreglo con los elementos que cumplan con la condicion con la cual se está filtrando