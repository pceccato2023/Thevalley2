/*
    if(MES AGOSTO){
        MOSTRAR MENSAJES DE REBAJAS
    }
    */

let talla ="XXL";
let stock =10;

switch (talla)
{
    case "S":
    console.log("Perfecto, tenemos unidades");
    break;
    case "M": 
    console.log("No tenemos unidades");
    break;
    case "L":
    console.log("No tenemos unidades, lo siento");
    break;
    case "XL":
        stock -= -1;
    console.log("Perfecto, tenemos unidades en XL");
    break;
    default:
        console.log("Lo sentimos, solo trabajamos S-M-L-XL");
        breack;      
}