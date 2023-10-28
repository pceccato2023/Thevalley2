/* Crear una funcion que calcule el descuento de una prenda sabiendo el precio */

/*
function calcularPrecioDescuento (precio, descuento){
    let precioFinal = precio - precio * (descuento /100);
    return precioFinal;
}

let total = calcularPrecioDescuento (120,30);

console.log(total);
*/
/*
let listaCompra = ["carne", "pescado", "jabon"];

function anadirElemento(listaCompra, alimento ) {
    listaCompra.push(alimento);
}

anadirElemento(listaCompra,"fruta");
console.log(listaCompra);

function eliminarElemento (lista) {
    lista.pop();
}

eliminarElemento(listaCompra);
console.log(listaCompra);
*/

let usuario = {
    nombre: "Fernando",
    apellido: "Garcia",
    email:"fgarcia@mail.com",
    compras: [100,20,100,50,300],
    tipo:"Normal"
};

function actualizarTipoCliente (cliente){
    let suma = sumadorCompras (cliente.compras);

    if (suma>  500){
        cliente.tipo ="VIP";
    } else {
        cliente.tipo ="Normal";
    }
}

function sumadorCompras (compras){
    let sumaTotal = 0;
    for(let i= 0; i < compras.length; i++) {
        sumaTotal += compras[i];
    }
    return sumaTotal;
}

actualizarTipoCliente(usuario);
console.log(usuario);
