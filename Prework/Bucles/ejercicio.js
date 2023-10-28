

//Ejercicio 1
//for(let i =330; i<=910; i++){
   // console.log(i);

//Suma todos los numeros pares

//let sumador = 0;

//for(let i =1; i< 10; i++){
   // if(i % 2 === 1){
       // sumador += i;
    //}
//}
//console.log(sumador);

let palabra = "supercalifragilisticoespialidoso"
let contador =0;

for(let x = 0; x < palabra.length; x++){
    if (palabra[x] === "i"){
        contador ++;
    }
}
console.log(contador);