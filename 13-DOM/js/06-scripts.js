// Modificar elementos con javascript 





const encabezado=document.querySelector(".contenido-hero h1")


console.log(encabezado);


// console.log(encabezado.innerHTML); //Este se trae el texto del HTML como tal
// console.log(encabezado.innerText); //innerText se traerá el texto si y solo si NO se encuentra ocultado en el CSS.
// console.log(encabezado.textContent); //Text content se trae el contenido de ese elemento sin importar si está oculto o no 


//para modificar el texto del HTML con JS sería algo asi 
// document.querySelector(".contenido-hero h1").textContent="Este es el Texto que se cambió con JS";


//Si quieres cambiar una imagen por otra 

const imagen=document.querySelector(".contenedor-cards .card img");

imagen.src="img/hacer2.jpg"; //Aqui ya se modificó la imagen por la nueva imagen 
