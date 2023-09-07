//valores por default en las funciones



function saludar(nombre="Inglis", apellido="Davila"){ //para darle valores por default se igualan las variables aqui a cualquier valor que quieres que sea valor por default


    console.log(`Hola ${nombre} ${apellido} `);

}


saludar("Fernando", "Ibarra");  //Aqui regresa lo mismo, Fernando Ibarra 

saludar();      //Y aqui se agrega el nombre de inglis y el apellido davila por que son los valores pro default.  