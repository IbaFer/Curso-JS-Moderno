//mayor o igual y Else if 




const dinero= 300;
const totalAPagar= 500;
let tarjeta=false;
let cheque= false;

if (dinero >= totalAPagar){

    console.log("Si tienes suficiente dinero para pagar");

} else if(tarjeta==true){

    console.log("Cobrate de la tarejeta")
    
} else if(cheque==true){

    console.log("Cobrate del cheque")
}

else{

    console.log("No te alcanza para pagar");
}