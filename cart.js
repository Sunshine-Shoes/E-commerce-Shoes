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
         <img class="img-fluid img-cart" src="${image}"/>
        </td>
        <td>${name}</td>
        <td>${price}€</td>
        <td>${amount}</td>
        <td>${talle}</td>
        <td>${ref}</td>
        <td>${color}</td>
        <td>${price * amount}€</td>
        `;

        shoppingList.appendChild(row);
        
    });
    totalProcess.innerText = cart.reduce((acc, product) => acc + product.amount * product.price, 0);

};

if(activateFunction) {
    activateFunction.addEventListener("click", processOrder);  
};

/* document.addEventListener("DOMContentLoaded", () => {
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelector("#activateFunction").click(processOrder);
});  */

goCart.addEventListener("click" , () => {
    if(cart.length === 0) {
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