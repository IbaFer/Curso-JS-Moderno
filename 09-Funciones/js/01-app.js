//Funciones en javascript...


//Existen dos tipos de funciones declaracion de funcion o expresion de funcion



//Declaracion de funcion - Function Declaration

function sumar(a, b){ //Dentro del parentesis van los parametros de la funcion

return(a+b);        //Esto es lo que va a regresar la funcion. 

} 


console.log(sumar(5,15));       //Aqui se le están pasando atributos, estos reemplazan en la funcion las variables que se pasaron como parametros



//Expresion de funcion - Function Expresion


const sumar2= function(a,b){

    return (a+b);
}

console.log(sumar2(25,75));

