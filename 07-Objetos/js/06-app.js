//Destructuracion de objetos que se encuentran anidados.



const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true,
    informacion : {
        medidas : {
            peso: "1kg",
            medida: "5cm"

        }
        
    },

    fabricacion : {

        pais : "China"
    }

};


const {nombre, informacion:{medidas : { peso }}, informacion:{medidas}, fabricacion:{pais}}=producto; //Están anidados los objetos y asi se hace el destructuring.

console.log(medidas);

console.log(nombre);
console.log(pais);
console.log(peso);