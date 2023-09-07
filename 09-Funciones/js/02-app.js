//Diferencias entre una funcion expresada y una funcion declarada 



//Funcion declarada

console.log(sumar(2,2)); 
function sumar(a, b){ 

    return(a+b);        
    
    } 
    
    
    console.log(sumar(2,2));       
    
    
    
    
    
//Funcino expresada

console.log(sumar2(3,3));
const sumar2= function(a,b){
    
        return (a+b);
    }
    
    console.log(sumar2(3,3));
    


    //La diferencia es que la de arriba si se va a ejecutar aunque el console log lo manda llamar antes de exista. 

    //La de abajo no por que la toma como una variable y no como una funcion. Es por que la funcion está asignada a una variable. 

    //El javascript se ejecuta en dos vueltas, la primera reconoce todas las funciones del archivo y la segunda ejecuta el codigo de arriba hacia abajo por eso es que en la primera si funcionaria y en la segunda no 