//.findIndex

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Forma manual de buscar en que posicion está un valor dentro de un array 
meses.forEach((mes,i) => {
    
if(mes==="Julio"){


    console.log(`El mes ${mes} está en la posicion ${i}`)
}

});



const index= meses.findIndex((mes)=>{ 

    return mes==="Julio"    
}
);

console.log(index);


const index2= carrito.findIndex((producto) =>{

return producto.nombre==="Tablet"

}

)

console.log(index2);



//El findIndex busca en cual indice se encuentra el valor que tu estés buscando 