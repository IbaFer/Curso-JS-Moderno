//Ejemplos de funciones que se pasan valores entre si 


//En este caso la funcion saca las variables de AB y las regresa y las mete a las variables. 
function sumar(a,b){

    return (a +b);
}

const resultado= sumar(2,2);
//console.log(resultado);



//Formas deiferentes de sacar los valores de una funcion. En el siguiente caso la saca en resultado 
// let resultado2=0;

// function sumar2(c,d){
     
//     return resultado2 = (c + d);
// }

// sumar2(2,3);
// console.log(resultado2);





//Forma mas avanzada


let total=0;



function agregarCarrito(precio){
    return total+=precio;
}


function calcularImpuesto(total){
    return total*1.16;
}


total=agregarCarrito(300);
total=agregarCarrito(100);
total=agregarCarrito(600);

let totalConImpuestos=calcularImpuesto(total);



console.log(`El precio de tus articulos es de ${total}.... con los impuestos serían ${totalConImpuestos}` );