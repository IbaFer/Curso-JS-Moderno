// Operador &&  revisa que se cumplan las dos condiciones y no solo una.




const usuario=true;
const puedePagar=false;

if(usuario==true && puedePagar==true){

    console.log("Si eres usuario y tienes saldo suficiente para pagar");

} else if (usuario==false){

    console.log("Registrate para poder comprar");

} else if(!puedePagar){

    console.log("No te alcanza para pagar");

} else{

    console.log("No puedes comprar valida que sea usuario y tengas fondos suficientes.");
}


