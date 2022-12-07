let cart= [];

const container = document.querySelector("#container");
const productListElement = document.querySelector(".product-list"); 
const cartContainer = document.querySelector('#cartContainer');
const emptyCartButton = document.querySelector("#emptyCart");
const totalCart = document.querySelector("#totalCart");

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

function saveStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
};


