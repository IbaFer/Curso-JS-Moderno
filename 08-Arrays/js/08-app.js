// Destructurar arreglos

const producto = {

    nombre: "pantalla de 50Pulgadas",
    precio: 450,
    disponible:true

}

 const { nombre, precio, disponible } = producto;

 console.log("con destructuring: " + nombre + precio + disponible);




// Destructurar arreglos


const numeros=[10,20,30,40,50];

const [esteNumeroEsElPrimero, esteNumeroEsElSegundo] = numeros;

console.log(esteNumeroEsElSegundo);



const [, , , , quinto] = numeros;

console.log(quinto);


//Tambien se puede crear una variable que contenga un arreglo, pero este arreglo tomará las posiciones de adelante de donde se lo indiques

const [, , ...Arreglo]=numeros;// aqui se salta la posicion 1 y 2 y crea un arreglo con los siguientes valores adelante de la posicion 1 y 2
console.log(Arreglo);
