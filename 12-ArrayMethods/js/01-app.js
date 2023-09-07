// metodos .some


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]



//Comprobar si un valor existe en un arreglo

// meses.forEach(mes=> {


//     if(mes==="Enero"){


//         console.log("Si existe enero");
//     }

// });


// // . include te sirve para arreglos normales. 

// const resultado = meses.includes("Enero");

// console.log(resultado);


// Para arreglos de objetos se utiliza .some

const existe = carrito.some((producto)=>{
    
    return producto.nombre=== "Celular"}

);

console.log(existe);

const existe2= meses.some((mes)=>{

    return mes==="Febrero";
}


);

console.log(existe2);



//El .some lo que hace es ver si el arreglo contiene un valor en especifico que deseemos buscar. 

// el .includes hace lo mismo pero es para arreglos sencillos, no puede iterar sobre arreglos de objetos
