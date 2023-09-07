// Cambiar el CSS de los elementos con JS 





// const encabezado = document.querySelector("h1");


// encabezado.style.backgroundColor="red";
// encabezado.style.fontFamily="Arial"
// encabezado.style.textTransform="uppercase"



const card=document.querySelector(".card");
card.classList.add("Nueva-Clase", "Segunda-Clase"); //Aqui le está agregando una clase... si a esa clase le ponemos que el texto cambia por lo tanto cambiará.
card.classList.remove("card"); //Aqui va a remover la clase de card 



console.log(card);  