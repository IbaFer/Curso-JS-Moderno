//Crear un nuevo arreglo con Spread operator es para unir dos arreglos y juntarlos. 



const carrito=[];


producto= {

    nombre: "Celular",
    precio: 450
}

producto2= {

    nombre: "Camisa",
    precio: 25
}

producto3= {

    nombre: "Pantalla",
    precio: 50
}

console.log(carrito);


let resultado;

resultado = [ ...carrito, producto ];

console.table(resultado);

resultado = [ ...resultado, producto2] ;

console.table(resultado);


resultado= [producto3, ...resultado];

console.table(resultado);