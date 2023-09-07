//parametros y argumentos en las funciones 




function sumar(a, b){   // a y b son parametros 

    return(a+b);        
    
    } 
    
    
    console.log(sumar(2,2));    //Argumentos y valores reales que va a tomar la funcion cuando se mande llamar 

    
    console.log(sumar(120,120));

    console.log(sumar(650,350));



function saludar(nombre, apellido){


    console.log(`Hola ${nombre} ${apellido} `);

}


saludar("Fernando", "Ibarra");

saludar(); //Si la mandamos sin nada el resultado va ser Hola undefined undefined