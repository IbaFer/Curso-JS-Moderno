//Keys Values y Entries 


const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true,

};



console.log(Object.keys(producto)); //Te retorna la categoria de las variables dentro del objetos 

console.log(Object.values(producto)); // Te retorna los valores de cada una de las categorias del objeto

console.log(Object.entries(producto)); // Te retorna ambos en pares un arreglo por cada variable con su valor