const activateFunction = document.querySelector("#activateFunction");
const goCart = document.querySelector("#goCart");
const totalProcess = document.querySelector("#totalProcess");

function processOrder() {
   
    cart.forEach((product) => {
        const shoppingList = document.querySelector("#shoppingList tbody");
        const { name, talle, ref, color, price, image, amount } = product;
    
        const row = document.createElement("tr");
        row.innerHTML += `
        <td>
        <h3>${name}</h3>
         <img class="img-fluid img-cart" src="${image}"/>
        </td>
        <td>
            <ul class= "textlistcart">
                <li>Precio:  ${price}€ </li>
                <li>Cantidad:  ${amount}</li>
                <li>Talla:  ${talle}</li>
                <li>Ref:  ${ref}</li>
                <li>Color: ${color}</li>
            </ul>
       </td>
        <td>${price * amount}€</td>
        `;

        shoppingList.appendChild(row);
        
    });
    totalProcess.innerText = cart.reduce((acc, product) => acc + product.amount * product.price, 0);

};

if(activateFunction) {
    activateFunction.addEventListener("click", processOrder);  
};

goCart.addEventListener("click" , () => {
    if(cart === 0) {
        Swal.fire({
            title: "¡Tu carrito está vacio!",
            text: "Compra algo para continuar con la compra",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
    } else {
        location.href = "cart.html";
        processOrder();
      }
})