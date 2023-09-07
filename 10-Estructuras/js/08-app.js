// Detener la ejecucion del IF con una funcion.



// const autenticado = true;


// if (autenticado==true){
//     console.log("El usuario está autenticado")
// }


const puntaje=125;


function revisarPuntaje(){

    if(puntaje>400){
        console.log("Excelente puntaje");
        return;
    }
    
    if(puntaje>300) {
    console.log("Buen puntaje");
    return;

    } 
    
    else{
        console.log("Siguete esforzando, el puntaje no es suficiente");
        return;
    }

}



revisarPuntaje();