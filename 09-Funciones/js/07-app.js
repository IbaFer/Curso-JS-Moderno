//Como se comunican las funciones entre si


iniciarApp()




function iniciarApp(){


    console.log("Iniciando App...");

    segundaFuncion();
}






function segundaFuncion(){


    console.log("Desde la segunda funcion....");

    usuarioAutenticado("Fernando");
}



function usuarioAutenticado(user){

    console.log("Autenticando el usuario....")
    console.log(`El usuario se encuentra autenticado correctamente!! Bienvenido ${user}!`)
}

