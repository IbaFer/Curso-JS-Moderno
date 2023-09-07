//Metodos de propiedad - Añadir funciones en un objeto.


//Es realmente crear un metodo, se crea una funcion dentro de un objeto y ya se puede usar como un metodo de propiedad para realizar la funcion requerida. 

id=22;
nombredePlaylist="Buenas para pistear"

const reproductor={

    reproducir: function(id){
        console.log(`Reproduciendo cancion con ID ${id}` )
    }, 

    pausar: function(id){

        console.log(`Pausando cancion con ID ${id}....`)
    }, 
    
    borrar: function(id){   //Aqui se está agregando esta funcion al objeto.

        console.log(`Borrando cancion con ID ${id}` )
    },

    crearPlaylist: function(nombredePlaylist){
        console.log(`Creando playlist ${nombredePlaylist}`);

    }, 


    reproducirPlaylist: function(nombredePlaylist){
        console.log(`Reproduciendo playlist ${nombredePlaylist}`);

    }
}

reproductor.reproducir(id);
reproductor.pausar(id);
reproductor.borrar(id);
reproductor.crearPlaylist(nombredePlaylist);
reproductor.reproducirPlaylist(nombredePlaylist);




//console.log(reproductor); //Esto es solo para ver que contiene el objeto, donde podemos ver que tiene las 5 funciones. 

