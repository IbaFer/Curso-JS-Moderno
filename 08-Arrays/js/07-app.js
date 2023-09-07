// Como borrar elementos de un arreglo


const carrito=[];


producto= {

    nombre: "Celular",
    precio: 450
}

console.table(carrito);


producto2= {

    nombre: "Camisa",
    precio: 25
}

carrito.push(producto)
carrito.push(producto2)



producto3= {

    nombre: "Pantalla",
    precio: 50
}


producto4= {

    nombre: "Calculadora",
    precio: 3
}


carrito.unshift(producto3);
carrito.unshift(producto4);
console.table(carrito);



// //Borrar el ultimo elemento de un arreglo

// carrito.pop();
// console.table(carrito);

// //Borrar del inicio del arreglo

// carrito.shift();
// console.table(carrito);

//para Borrar de cualquier ubicacion es con el siguiente metodo

carrito.splice(2,1); //El primer parametro es la posicion, el segundo parametro la cantidad de elementos a borrar.

console.table(carrito);
