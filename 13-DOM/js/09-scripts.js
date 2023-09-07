//Eliminar elementos del DOM 


//Eliminar por si mismo el elemento del dom 
// const primerEnlace= document.querySelector("a");

// primerEnlace.remove();


const navegacion= document.querySelector(".navegacion");


console.log(navegacion.children); //Aqui solamente es para identificar cual es el indice que quiero borrar. 


navegacion.removeChild(navegacion.children[2]); //Aqui borra el hijo 2 del padre 


