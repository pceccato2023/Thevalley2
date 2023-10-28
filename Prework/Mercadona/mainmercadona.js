    /*
    Base de datos de productos
*/

let productos = [
    {
        id: 1,
        nombre: 'Pera Conferencia',
        precio: 0.34,
        imagen: 'item1.jpeg'
    },
    {
        id: 2,
        nombre: 'Manzana Golden',
        precio: 0.36,
        imagen: 'item2.jpeg'
    },
    {
        id: 3,
        nombre: 'Uvas',
        precio: 2.60,
        imagen: 'item3.jpeg'
    },
    {
        id: 4,
        nombre: 'Banana',
        precio: 0.21,
        imagen: 'item4.jpeg'
    },
    {
        id: 5,
        nombre: 'Melón Galia',
        precio: 2.71,
        imagen: 'item5.jpeg'
    },
    {
        id: 6,
        nombre: 'Mandarina',
        precio: 0.36,
        imagen: 'item6.jpeg'
    },
    {
        id: 7,
        nombre: 'Piña',
        precio: 2.30,
        imagen: 'item7.jpeg'
    },
    {
        id: 8,
        nombre: 'Mango',
        precio: 1.23,
        imagen: 'item8.jpeg'
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
        buttonElementItem.textContent = "Añadir al carrito";
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
    elementCartList.textContent =" ";
    let totalPrice = 0;
    if(cartItems.length > 0){
        elementNoProducts.style.display = 'none';

    for ( let i = 0; i< cartItems.length; i++){
    let elementCartImg = document.createElement("img");
    elementCartImg.classList.add("img-product");
    let url ="./assets/" + cartItems[i].imagen;
    elementCartImg.setAttribute("src", url);

    let elementCartItem = document.createElement("div");
    elementCartItem.classList.add("cart-item");
    let elementCartQuantity = document.createElement("p");
    elementCartQuantity.classList.add("cart-item-quantity");
    elementCartQuantity.textContent ="1 Ud.";



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
   
/* con appendChild estoy agregando todos los elementos que van a conformar el carrito*/
    elementCartItem.appendChild(elementCartImg);
    elementCartItem.appendChild(elementCartDescription);
    elementCartItem.appendChild(elementCartPrice);
    elementCartItem.appendChild(elementCartQuantity);
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
