//Comparar 2 valores



const numero1=10;
const numero2="10";
const numero3=30;



///Revisar si dos numeros son iguales

console.log( numero1==numero3);
console.log( numero1==numero2);

//Comparador estricto
console.log( numero1===numero2);
console.log( numero1=== parseInt(numero2)); //Convierte el valor a entero primero para poder comparar y que nos diga que si son iguales.

console.log(typeof numero1) //Saca el tipo de dato de la variable tipo numero
console.log(typeof numero2) //Saca el tipo de dato de la variable tipo string

//Operador de comparacion de diferente

const password1="Admin";
const password2="admin";


console.log(password1 != password2); //compara si ambas variables son diferentes.
 
console.log(numero1 != numero2); //Compara la diferencia solamente del valor
console.log(numero1 !== numero2); //Compara la diferencia de tipo de dato y valor 