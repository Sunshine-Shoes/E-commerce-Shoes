let cart= [];

const container = document.querySelector("#container");
const productListElement = document.querySelector(".product-list");
const cartContainer = document.querySelector('#cartContainer');
const emptyCartButton = document.querySelector("#emptyCart");
const totalCart = document.querySelector("#totalCart");
const goCart = document.querySelector("#goCart");
const activateFunction = document.querySelector("#activateFunction");

if(activateFunction) {
    activateFunction.addEventListener("click", processOrder);  
};

document.addEventListener("DOMContentLoaded", () => {
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    updateModal();
    document.querySelector("#activateFunction").click(processOrder);
}); 

products.forEach((product) => {
    const {image, name, description, price, ref} = product;

    
    container.innerHTML += `
        <div class="card  mt-3" style="width: 25rem; height: 45rem;">
            <img class="image card-img-top" src="${image}" alt="${name}">
        <div class="card-body">
        <h2 class="name">${name}</h2>
        <p class="description">${description}</p>
        <h3 class="price">${price} EUR</h3>
        <button class="btn btn-dark" onclick="addProductCart(${ref})">Agregar al carrito</button>
        <button class="btn btn-outline-dark" onclick="deleteProduct(${ref})">Eliminar del carrito</button>
        </div>  
        </div>`;
    
});

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

emptyCartButton.addEventListener("click" , () => {
    if(cart.length === 0) {
        Swal.fire({
            title: "¡Tu carrito está vacio!",
            text: "Compra algo para continuar con la compra",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
    } else {
        Swal.fire({
            title: 'Estas segur@?',
            text: "No podrá revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Borrado!',
                    'Tu producto ha sido eliminado.',
                    'success'
                    )
                emptyCart();
            };
        });
    };
});

function addProductCart(ref) {
    let selectedProduct = cart.find(product => product.ref === ref);
    
    if(!selectedProduct) {
        selectedProduct = products.find((product) => product.ref === ref);
        cart.push(selectedProduct);
    } else {
        cart.map(product => {
            if (product.ref === ref){
                product.amount++;
            };
        }); 
    }

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Añadido ${selectedProduct.name} al Carrito`,
        showConfirmButton: false,
        timer: 1500
      })
    updateModal();
};


const updateModal = () => {
    const modalBody= document.querySelector(".modal .modal-body");
    
        modalBody.innerHTML = "";
        cart.forEach((product) => {
        const { name, talle, ref, color, price, image, amount } = product;
        modalBody.innerHTML += `
            <div class= "modal-container">
                <div>
                    <p>Producto: ${name}</p>
                    <img class="img-fluid img-cart" src="${image}"/>
                </div>
            <div>
                <p>Precio: ${price}€</p>
                <p>Cantidad: ${amount}</p>
                <p>Color: ${color}</p>
                <p>Talla: ${talle}</p>
                <p>Ref: ${ref}</p>
                <button class="btn btn-danger" onclick="deleteProduct(${ref})">Eliminar producto</button>
                </div>
            </div>
        
    
        `;
        });
    
    if (cart.length === 0) {
        modalBody.innerHTML = `
        <p class="text-center text-primary parrafo">¡Aun no has añadido nada!</p>
        `;
    };
    
    cartContainer.textContent = cart.length;
    totalCart.innerText = cart.reduce((acc, product) => acc + product.amount * product.price, 0);

    saveStorage();
};

function deleteProduct (ref)  {
    const productRef = ref;
    cart = cart.filter((product) => product.ref !== productRef);
    Swal.fire({
        title: 'Estas segur@?',
        text: "No podrá revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
        
          Swal.fire(
            'Borrado!',
            'Tu producto ha sido eliminado.',
            'success'
          )
          updateModal();
        }
      })  
}

function saveStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
};

function processOrder() {
    console.log('processOrder');
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
};

function emptyCart() {
    cart = [];
    updateModal();
};
