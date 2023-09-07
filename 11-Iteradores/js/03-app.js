// Juego del fizbuzz



// 100 numeros 
//multiplos de 3 fiz 

//multiplos de 5 buz

// multiplos de 15 fizbuzz


for(let i = 1; i<100; i++){

    if(i%3===0 && i%5===0){

        console.log(i + "FIZZ BUZZ");
        

    } else if (i%3===0){

        console.log(i + "Fizz");

    } else if(i%5===0){

        console.log(i + "Buzz");
    }

}
