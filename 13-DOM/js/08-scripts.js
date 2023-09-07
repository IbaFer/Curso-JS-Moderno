//traversing del dom 



 const navegacion=document.querySelector(".navegacion");

 console.log(navegacion)

// // console.log(navegacion.childNodes);// Los esspacios en blanco son considerados elementos 
// console.log(navegacion.children); //Este no toma en cuenta los espacios en blanco y solo enlista los elementos reales 


// console.log(navegacion.children[1].nodeType); //Este te dice que tipo de nodo es 
// console.log(navegacion.children[1].nodeName);    //Este te dice el nombre del nodo que es enlace 


//traversing del padre al hijo///////////////////////////////
const card =document.querySelector(".card"); //Aqui estás seleccionando el primer card 


// console.log(card.children); //Aqui estás abriendo los childs del primer card


// console.log(card.children[1].children[1].textContent);

// card.children[1].children[1].textContent="Nuevo texto desde el DOM traversing";


// card.children[0].src="img/hacer2.jpg";





// Traversing del hijo hacia el padre ///////////////////////

// console.log(card.parentElement.parentElement.parentElement); //Aqui accede 3 veces hacia arriba del arbol, hacia los padres del card. 




// traversing entre hermanos, elementos que están en la misma rama al mismo nivel 

console.log(card.nextElementSibling);




//recorrer entre hermanos, recorriendose un elemento antes 
const card2=document.querySelector(".card:last-of-type"); //Se seleccionó el ultimo card
console.log(card2.previousElementSibling);


