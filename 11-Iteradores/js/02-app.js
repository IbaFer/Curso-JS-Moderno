// Break y continue en un FOR LOOP




// //El continue cuando llega a esa condicion en especifico manda un valor y gnera algo pero sigue validando el for loop
// for (let i=0; i<=10; i+=1){

//     if(i===5){

//         console.log("Cinco")
//         continue;
//     }


// console.log("numero: " + i);

// }


// //El rbeak automaticamente te saca del for loop cuando se cumple lo que se esté validando.
// for (let i=0; i<=10; i+=1){

//     if(i===5){

//         console.log("Cinco")
//         break;
//     }


// console.log("numero: " + i);

// }





const carrito = [ 
    {nombre:"Camisa Blanca", precio:200},
    {nombre:"Camisa Negra", precio:225},
    {nombre:"Camisa Azul", precio:451, descuento: true},
    {nombre:"Camisa Amarilla", precio:325},
    {nombre:"Camisa Roja", precio:125},
    {nombre:"Camisa Verde", precio:126},
    {nombre:"Camisa Gris", precio:326},

]


for(let i = 0; i<carrito.length; i++){

    if(carrito[i].descuento===true){

        console.log(`El ${carrito[i].nombre} SI tiene descuento`)
        continue;
    } 
    
        console.log(`El ${carrito[i].nombre} NO tiene descuento`)

}

