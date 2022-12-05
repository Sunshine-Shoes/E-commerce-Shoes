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
        price: 100
        
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
        price: 99
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
        price: 40
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
        price: 129
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
        price: 34
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
        price: 45
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
        price: 120
        
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
        price: 100
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
        price: 34
    },
   
];

let cart= [];

const productListElement = document.querySelector(".product-list");
const cartContainer = document.querySelector('#cartContainer');
const emptyCart = document.querySelector("#emptyCart");
const totalCart = document.querySelector("#total-cart");

for (const product of products){
    const productTemplate = `
        <div class="card  mt-3" style="width: 25rem; height: 45rem;">
        <img class="image card-img-top mt-2" src="${product.image}" alt="${product.name}">
        <div class="card-body">
        <h2 class="name">${product.name}</h2>
        <p class="description">${product.description}</p>
        <h3 class="price">${product.price} EUR</h3>
        <input onClick="#" class=button value="-" name="boton0">
        <input onClick="#" class=button value="+" name="boton1">
        <button class="btn btn-dark" onclick="addProductCart (${product.id})">Agregar al carrito</button>
        </div>  
        </div>`;

    const productDivElement = document.createElement("div");
    productDivElement.innerHTML = productTemplate;
    productListElement.appendChild(productDivElement);
}


emptyCart.addEventListener("click" , () => {
    cart.length = [];
    showcart();
});


function addProductCart (id){
    const existingProduct = cart.some(product => product.id === id);

    if (existingProduct) {
        const product = cart.map(product => {
            if (product.id === id){
                product.amount++
            }
        })
    }else {
        const item= products.find((product) => product.id === id)
    cart.push(item);
    };
    showcart();
};

const showcart = () => {
    const modalBody= document.querySelector(".modal .modal-body");

    modalBody.innerHTML = "";
    cart.forEach((product) => {
    const { id, name, talle, ref, color, price, image, amount }= product;
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
            <button class="btn btn-danger" onclick="deleteProduct(${id})">Eliminar producto</button>
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
}
function deleteProduct (id)  {
const juegoId = id;
cart = cart.filter((juego) => juego.id !== juegoId );
showcart();
}
