// Iteradores 



// for (let i=0; i<=100; i+=2){
// console.log(i);
// }



//Ejercicio d epares e impares 

// for (let i=1; i<=20; i++){

//     if(i%2===0){

//         console.log("el numero " + i + " es par")

//     } else{
//         console.log("el numero " + i + " es inpar")

//     }

// }


const carrito = [ 
    {nombre:"Camisa Blanca", precio:200},
    {nombre:"Camisa Negra", precio:225},
    {nombre:"Camisa Azul", precio:451},
    {nombre:"Camisa Amarilla", precio:325},
    {nombre:"Camisa Roja", precio:125},
    {nombre:"Camisa Verde", precio:126},
    {nombre:"Camisa Gris", precio:326},

]


console.log(carrito.length);


for(let i=0; i<carrito.length; i++){

console.log(carrito[i].nombre, carrito[i].precio);



}