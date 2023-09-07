// Switch case para manipular condiciones 




const metodoDePago="Billete";

switch(metodoDePago){

    case "Billete" : 
        console.log(`Pagaste con ${metodoDePago}`);
        pagar();
        break;

    case "Tarjeta de Debito" : 
        console.log(`Pagaste con ${metodoDePago}`);
        pagar();
        break;

    case "Tarjeta de Credito" : 
        console.log(`Pagaste con ${metodoDePago}`);
        pagar();
        break;

    case "Cheque" : 
        console.log(`Pagaste con ${metodoDePago}`);
        pagar();
        break;

    default : 
        console.log(`El metodo de pago ${metodoDePago} no es aceptado`)
        break;
}

function pagar(){

    console.log("Pagando...")
}



//En caso que no se cumpla ninguna condicion, se van a ejecutar las lineas de codigo del default.

