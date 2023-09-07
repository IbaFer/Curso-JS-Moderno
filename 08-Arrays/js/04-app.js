//


const meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

console.log(meses);

meses[0]="Nuevo Mes";


console.log(meses);

//Si queremos agregar al ultimo un valor podemos ponerlo en la ultima posicion 


tamañoArreglo=meses.length;// aqui saca cuanto mide el arreglo

meses[tamañoArreglo]="Julio";

console.log(meses);
