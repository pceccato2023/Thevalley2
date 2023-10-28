let productos = [
    {
        id: 1,
        nombre: 'Big Mac',
        precio: 8.15,
        imagen: 'bigmac.jpg'
    },
    {
        id: 2,
        nombre: 'American Chicken',
        precio: 9.35,
        imagen: 'american chicken.jpg'
    },
    {
        id: 3,
        nombre: 'Grand McExtreme',
        precio: 10.45,
        imagen: 'GrandMcExtreme.png'
    },
    {
        id: 4,
        nombre: 'McMenu CBO',
        precio: 9.55,
        imagen: 'CBO.jpg'
    },
    {
        id: 5,
        nombre: 'McNuggets',
        precio: 10.95,
        imagen: 'nuggets.png'
    },
    {
        id: 5,
        nombre: 'Alitas/McNuggets',
        precio: 11.25,
        imagen: 'alitas.png'
    },
    {
        id: 6,
        nombre: 'McFlurry Oreo',
        precio: 33.55,
        imagen: 'oreo.jpg'
    }
];

let cartItems = [];

function addProductsToCart(item){
    cartItems.push(item);
    renderCart();
}
function renderProducts(){
    let listElement= document.getElementById("listItems");

    for(let i=0; i< productos.length;i++){

        let divElementItem = document.createElement("div");
        divElementItem.classList.add("item");

        let divElementItemDescription = document.createElement("div");
        divElementItemDescription.classList.add("item-description");

        let imgElementItem =document.createElement("img");
        imgElementItem.classList.add("item-imagen");
        let url ="./assets/" + productos[i].imagen;
        imgElementItem.setAttribute("src", url);

        let nameElementItem =document.createElement("p");
        nameElementItem.classList.add("item-name");
        nameElementItem.textContent =productos[i].nombre;

        let divElementItemOrder = document.createElement("div");
        divElementItemOrder.classList.add("item-order");

        let priceElementItem = document.createElement("p");
        priceElementItem.classList.add("item-price");
        priceElementItem.textContent = productos[i].precio + "€";

        let buttonElementItem = document.createElement("button");
        buttonElementItem.classList.add("item-add");
        buttonElementItem.textContent = "+";
        buttonElementItem.addEventListener("click", function() {addProductsToCart(productos[i])});

        divElementItemDescription.appendChild(imgElementItem);
        divElementItemDescription.appendChild(nameElementItem);
        divElementItem.appendChild(divElementItemDescription);

        divElementItemOrder.appendChild(priceElementItem);
        divElementItemOrder.appendChild(buttonElementItem);
        divElementItem.appendChild(divElementItemOrder);

        listElement.appendChild(divElementItem);
    

    }
}



function renderCart(){
    let elementNoProducts =document.getElementById("no-products");
    let elementCartList = document.getElementById("cart-items");
    elementCartList.textContent ="";

    let totalPrice = 0;
    if(cartItems.length > 0){
        elementNoProducts.style.display = 'none';

    for ( let i = 0; i< cartItems.length; i++){
    let elementCartItem = document.createElement("div");
    elementCartItem.classList.add("cart-item");
    let elementCartQuantity = document.createElement("p");
    elementCartQuantity.classList.add("cart-item-quantity");
    elementCartQuantity.textContent ="1x";


    let elementCartDescription = document.createElement("p");
    elementCartDescription.classList.add("cart-item-description");
    elementCartDescription.textContent = cartItems[i].nombre;

    let elementCartPrice = document.createElement("p");
    elementCartPrice.classList.add("cart-item-price");
    elementCartPrice.textContent = cartItems[i].precio + "€";
         
    let elementCartBtn = document.createElement("button");
    elementCartBtn.classList.add("cart-item-btn");
    elementCartBtn.textContent ="-" ;
    elementCartBtn.addEventListener("click", function() {deleteProductsFromCart(i)});
   
    elementCartItem.appendChild(elementCartQuantity);
    elementCartItem.appendChild(elementCartDescription);
    elementCartItem.appendChild(elementCartPrice);
    elementCartItem.appendChild(elementCartBtn);

    elementCartList.appendChild(elementCartItem);
    totalPrice += cartItems[i].precio;
}


    let elementTotal = document.createElement("p");
    elementTotal.textContent ="Total: " + totalPrice.toFixed(2) + "€";
    elementTotal.classList.add("cart-total");

    elementCartList.appendChild(elementTotal);

} else{
    elementNoProducts.style.dispaly = "flex";
}
}

function deleteProductsFromCart(elementPosition){
    let cartItemsAux = [];

    for( let i =0; i< cartItems.length; i++){
        if(i !== elementPosition){
            cartItemsAux.push(cartItems[i]);
        }
    }

    cartItems = cartItemsAux;
    renderCart();
}

renderProducts();
renderCart();
