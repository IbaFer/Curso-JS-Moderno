//



id=4442;
nombredePlaylist="Buenas para recordar...."

const reproductor={

    reproducir: id => console.log(`Reproduciendo cancion con ID ${id}` ), 

    pausar: id => console.log(`Pausando cancion con ID ${id}....`), 
    
    borrar: id => console.log(`Borrando cancion con ID ${id}` ),

    crearPlaylist: nombredePlaylist => console.log(`Creando playlist ${nombredePlaylist}`), 

    reproducirPlaylist: nombredePlaylist => console.log(`Reproduciendo playlist ${nombredePlaylist}`)

}

reproductor.reproducir(id);
reproductor.pausar(id);
reproductor.borrar(id);
reproductor.crearPlaylist(nombredePlaylist);
reproductor.reproducirPlaylist(nombredePlaylist);

