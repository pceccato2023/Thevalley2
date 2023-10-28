
/*
a)definir un objeto Persona


let persona = {
    nombre:"Pablo",
    apellido: "Ceccato",
    edad: "31",
    sexo: "Hombre"
};

console.log(persona);

persona.nombre = "Pepito";
persona.apellido = "Garcia";
persona.edad = "31";
persona.sexo = "Mujer";

console.log(persona);
*/

/* 
a) crear un objeto coche con las propiedas marca, modelo y año


let coche = {
    marca:"Fiat",
    modelo: "500",
    ano: 2010
};

console.log(coche);

if( (2022- coche.ano) > 25){
    console.log( "El " + coche.marca + " " + coche.modelo + "es un coche clasico del " + coche.ano);
} else{
    console.log(
        "El " + coche.marca + " " + coche.modelo + " no es un coche clasico del " + coche.ano)
}*/

/*
a) tengo 2 arrays:
    proiedades -> marca , modelo, ano
*/

let propiedades = ["marca", "modelo", "ano", "color", "matricula"];
let valores = ["Fiat", "500", 2020, "azul", "3434asd"];
let coche = new Object();

for (let i = 0; i < propiedades.length; i++){
    coche[propiedades[i]] = valores[i];
}
console.log(coche);

