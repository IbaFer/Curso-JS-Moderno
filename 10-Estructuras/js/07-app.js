//Operador OR para que se cumpla al menos una de las dos conciinoes que se le ponen al if 



const efectivo=300;
const credito=400;
const disponible= efectivo + credito;

const totalAPagar=600;

if (efectivo>=totalAPagar || credito>=totalAPagar || disponible>=totalAPagar){

    console.log("Si puedes pagar");

} else{

    console.log("no puedes pagar");

}
