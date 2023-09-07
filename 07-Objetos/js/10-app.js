//Como unir o copiar objetos



const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true

};


const medidas= {

    peso: "1Kg",
    medida: "50cm"

}


console.log(medidas);
console.log(producto);

const resultado = Object.assign(producto,medidas); //Este metodo es una forma de unir dos objetos en uno solo

console.log(resultado);





// Otra forma es con spread operator
const resultado2= {...producto, ...medidas}; //El resultado es basicamente el mismo.

console.log(resultado2);


