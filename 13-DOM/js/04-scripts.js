// QuerySelector



//Queryselector va a retornar maximo un elemento y siempre retorna el primero que encuentre con ese nombre

const card=document.querySelector(".card");


console.log(card);


//Se puede tener selectores especificos como en css


const info= document.querySelector(".premium .info");
console.log(info);




//Para seleccionar el segundo item y no el primero que encuentre se puede especificar cual hijo se tiene que traer como en css con nth-child


const segundoCard= document.querySelector("section.hospedaje .card:nth-child(2)")
console.log(segundoCard);




//Para seleccionar IDS se seleccionan como en css 

const formulario=document.querySelector("#formulario");
console.log(formulario);



//Tambien se pueden seleccionar elementos de HTML


const navegacion=document.querySelector("nav");

console.log(navegacion);