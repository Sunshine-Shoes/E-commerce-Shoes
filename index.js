const products = [
    {
        id:1,
        name: 'Botas grafitty',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botas alternativas góticas.jpg',
        talle: 38,
        ref: 2023,
        color: 'black',
        amount: 1,
        price: 100.95
        
    },
    {
        id:2,
        name: 'Botas hebillas',
        description: 'Botas de plataforma,botas góticas, botas moteras, tacones altos',
        image: './assets/imagenes/shoes-photos/Botas góticas.jpg',
        talle: 38,
        ref: 2022,
        color: 'black',
        amount: 1,
        price: 99.95
    },
    {
        id:3,
        name: 'Botas correas',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botin con suela lisa.jpg',
        talle: 38,
        ref: 2021,
        color: 'black',
        amount: 1,
        price: 39.95
    }, 
    {
        id:4,
        name: 'Botin tatoo ',
        description: 'Botín plano engomado resistente al agua. Suela dentada tipo track.',
        image: './assets/imagenes/shoes-photos/Botin gótico.jpg',
        talle: 38,
        ref: 2020,
        color: 'black',
        amount: 1,
        price: 129.00
    }, 
    {
        id:5,
        name: 'Botines track ',
        description: 'Botín acharolado, suela dentada tipo track, tacón.',
        image: './assets/imagenes/shoes-photos/Botines de suela.jpg',
        talle: 38,
        ref: 2019,
        color: 'black',
        amount: 1,
        price: 39.95
    },
    {
        id:6,
        name: 'Botas grafitty',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botas alternativas góticas.jpg',
        talle: 38,
        ref: 2018,
        color: 'black',
        amount: 1,
        price: 49.95
    },
    {
        id:7,
        name: 'Botas grafitty',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botas alternativas góticas.jpg',
        talle: 38,
        ref: 2017,
        color: 'black',
        amount: 1,
        price: 100.95
        
    },
    {
        id:8,
        name: 'Botas hebillas',
        description: 'Botas de plataforma,botas góticas, botas moteras, tacones altos',
        image: './assets/imagenes/shoes-photos/Botas góticas.jpg',
        talle: 38,
        ref: 2016,
        color: 'black',
        amount: 1,
        price: 99.95
    },
    {
        id:9,
        name: 'Botas correas',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botin con suela lisa.jpg',
        talle: 38,
        ref: 2015,
        color: 'black',
        amount: 1,
        price: 39.95
    },
   
];

let cart= [];

const container = document.querySelector("#container");
const productListElement = document.querySelector(".product-list");
const cartContainer = document.querySelector('#cartContainer');
const emptyCartButton = document.querySelector("#emptyCart");
const totalCart = document.querySelector("#total-cart");
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
        <input onClick="#" class=button value="-" name="boton0">
        <input onClick="#" class=button value="+" name="boton1">
        <button class="btn btn-dark" onclick="addProductCart(${ref})">Agregar al carrito</button>
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
        }
      })
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
                <p>Precio: ${price}</p>
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
        <td>${price}</td>
        <td>${amount}</td>
        <td>${talle}</td>
        <td>${ref}</td>
        <td>${color}</td>
        <td>${price * amount}</td>
        `;

        shoppingList.appendChild(row);
        
    });
};

function emptyCart() {
    cart = [];
    updateModal();
};
