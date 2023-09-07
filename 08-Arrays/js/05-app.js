//


// const meses= ["Enero", "Febrero", "Marzo"];

// console.table(meses);

// meses[3]="Abril"; //Esta es una forma pero depende de conocer la ubicacion

// console.table(meses);

// meses.push("Mayo"); //Esta es la forma de colocarlo al ultimo del arreglo

// console.table(meses);


const carrito=[];


producto= {

    nombre: "Celular",
    precio: 450
}

console.log(carrito);


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

carrito.unshift(producto3);

console.log(carrito);