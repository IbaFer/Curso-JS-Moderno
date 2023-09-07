/// . concat 



const meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const meses2= ["Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


// concat
const año= meses.concat(meses2);

console.log(año);



//Con el spread operator
const resultado2= [...meses,...meses2];

console.log(resultado2);