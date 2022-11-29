const products = [
    {
        id:1,
        name: 'Botas de grafitty',
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
        name: 'Botas motocicleta hebillas',
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
        name: 'Botas motocicleta correas',
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
        name: 'BOTÍN PLANO LLUVIA',
        description: 'Botín plano engomado resistente al agua. Combinación de goma con efecto rugoso y neopreno en el corte. Tiradores en la parte delantera y trasera para facilitar el calce. Suela dentada tipo track.',
        image: './assets/imagenes/shoes-photos/Botin gótico.jpg',
        talle: 38,
        ref: 2020,
        color: 'black',
        amount: 1,
        price: 129.00
    }, 
    {
        id:5,
        name: 'MOCASÍN TRACK ADORNO',
        description: 'Zapato plano tipo mocasín con acabado brillante. Copete subido y antifaz con adorno metálico. Suela dentada tipo track.',
        image: './assets/imagenes/shoes-photos/Botines de suela.jpg',
        talle: 38,
        ref: 2019,
        color: 'black',
        amount: 1,
        price: 39.95
    },
    {
        id:6,
        name: 'ZAPATO TACÓN VINILO ADORNO',
        description: 'Zapato de tacón destalonado de vinilo. Detalle de adorno con brillos en la parte delantera.',
        image: './assets/imagenes/shoes-photos/Botas alternativas góticas.jpg',
        talle: 38,
        ref: 2018,
        color: 'black',
        amount: 1,
        price: 49.95
    },
    {
        id:7,
        name: 'Botas de grafitty',
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
        name: 'Botas motocicleta hebillas',
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
        name: 'Botas motocicleta correas',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botin con suela lisa.jpg',
        talle: 38,
        ref: 2015,
        color: 'black',
        amount: 1,
        price: 39.95
    },
    {
        id:10,
        name: 'Botas motocicleta hebillas',
        description: 'Botas de plataforma,botas góticas, botas moteras, tacones altos',
        image: './assets/imagenes/shoes-photos/Botas góticas.jpg',
        talle: 38,
        ref: 2014,
        color: 'black',
        amount: 1,
        price: 99.95
    },  
    
];

let cart= [];

const productListElement = document.querySelector(".product-list");
for (const product of products){
    const productTemplate = `
        <img class="image" src="${product.image}" alt="${product.name}">
        <h2 class="name">${product.name}</h2>
        <p class="description">${product.description}</p>
        <h3 class="price">${product.price} EUR</h3>
        <input onClick="#" class=button value="-" name="boton0">
        <input onClick="#" class=button value="+" name="boton1">
        <button onclick="addProductCart (${product.id})">Agregar al carrito</button>`;

    const productDivElement = document.createElement("div");
    productDivElement.innerHTML = productTemplate;
    productListElement.appendChild(productDivElement);
}

function addProductCart (id){
    const item= products.find((product) => product.id === id)
    cart.push(item)
    console.log(cart)
}
const showcart = () => 
{
    const modalBody= document.querySelector(".modal-body");
    if (modalBody) {
    modalBody.innerHTML="";
    cart.forEach ((product) => {
    const { id, name, talle, ref, color, price, image }= product;
    modalBody.innerHTML += `
    <div class= "modal-container">
    <div>
        <img class="img-fluid img-cart" src="${image}"/>
    </div>
    <div>
        <p>Producto: ${name}</p>
        <p>Precio: ${price}</p>
        <p>Cantidad: ${amount}</p>
        <button class="btn btn-danger" onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }
}