// Crear HTML con JS



const enlace= document.createElement("a");


enlace.textContent = "Nuevo Enlace";

enlace.href="/nuevo-enlace";

enlace.classList.add("alguna-clase");

console.log(enlace);


//Se agregará en enlace a la navegacion 
const navegacion = document.querySelector(".navegacion");

//Inserta el enlace en la navegacion y lo coloca en antes de laposicion 1 de los children.
navegacion.insertBefore(enlace, navegacion.children[1]);





