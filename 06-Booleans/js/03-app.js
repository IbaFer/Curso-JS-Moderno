//Buenas practicas de booleans



const autenticado = true;

if(autenticado ==true){ // Esta forma esta incorrecta de escribir aunque funciona, la forma correcta es la de abajo

    console.log("Puedes ver netflix");
}

else {

console.log("Paga maldito");

}



if(autenticado){ // Esta forma da por implicito el valor del autenticado y se va directo al else.

    console.log("Puedes ver netflix");
}

else {

console.log("Paga maldito");

}



//Operadores ternarios

console.log( autenticado ? "Puedes ver netflix" : "Paga maldito");