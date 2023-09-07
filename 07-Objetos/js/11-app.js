// Funciones en objetos y acceder a sus valores. Metodo This


const producto = { 

    nombre : "Monitor de 50 pulgadas", 
    precio : 450, 
    disponible : true,
    mostrarInfo: function () {


        console.log(`El producto:${this.nombre} tiene un precio de: ${this.precio} dolares`)

    }
};



producto.mostrarInfo();

