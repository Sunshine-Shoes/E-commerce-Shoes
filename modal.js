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
        <p class="text-center text-primary ">¡Aun no has añadido nada!</p>
        `;
    };
    
    cartContainer.textContent = cart.length;
    totalCart.innerText = cart.reduce((acc, product) => acc + product.amount * product.price, 0);

    saveStorage();
};

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

function emptyCart() {
    cart = [];
    updateModal();
};

document.addEventListener("DOMContentLoaded", () => {
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    updateModal();
}); 

