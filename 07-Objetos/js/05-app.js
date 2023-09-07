//Objetos dentro de objetos

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


console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.medidas);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.medidas.medida);


console.log(producto.fabricacion);
console.log(producto.fabricacion.pais);