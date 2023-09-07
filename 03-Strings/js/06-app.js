//repeat 

const producto = "monitor de 20 pulgadas";


const texto= " En promocion ".repeat(4);

// const texto= " En promocion ".repeat(2.5); // si a este metodo le pasas un numero con decimal, automaticamente lo va a redondear


console.log(producto + texto + "!!!!");




/// Split sirve para separar una oracion, o caracteres segun el dato. Es como el separate by colom, by tab de excel


const actividad =  "Estoy Aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer,Caminar,Correr,Estar con mi esposa,Jugar Conquer,Surfear,Pescar";
console.log(hobbies.split(","));




//Ejemplo de como lo hace Tweeter


const tweet= "Aprendiendo a programar con JS #JSModernoConJUan"

console.log(tweet.split("#"))