//Convertir strings a numeros 


const numero1= "20";
const numero2= "20.25";
const numero3= "Uno";
const numero4=20; 


console.log(numero1);
console.log(Number.parseInt(numero1)); //Se convierte el numero 1 a entero
console.log(Number.parseFloat(numero2)); //Se convierte el numero2 a flotante
console.log(Number.parseInt(numero3)); //Se convierte el numero2 a flotante dará un error de NaN por que no es un numero,, NAN = Not a number


//Para validar si un numero es entero se utiliza el metodo integer

console.log(Number.isInteger(numero2)) //Retorna un false, por que no es un numero entero.