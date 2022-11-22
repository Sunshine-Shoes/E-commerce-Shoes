const products = [
    {
        name: 'ZAPATO TACÓN VINILO ADORNO',
        description: 'Zapato de tacón destalonado de vinilo. Detalle de adorno con brillos en la parte delantera.',
        image: './assests/imagenes/shoes-photos/salon-vinilo-nature.png',
        price: 49.95
    },
     {
        name: 'SANDALIA METALIZADA POMPÓN',
        description: 'Zapato de tacón tipo sandalia con acabado efecto metalizado.',
        image: './assests/imagenes/shoes-photos/plata.png',
        price: 39.95
    }, 
     {
        name: 'SANDALIA METALIZADA POMPÓN',
        description: 'Zapato de tacón tipo sandalia con acabado efecto metalizado.',
        image: './assests/imagenes/shoes-photos/bota-media.png',
        price: 39.95
    }, 
     {
        name: 'SANDALIA METALIZADA POMPÓN',
        description: 'Zapato de tacón tipo sandalia con acabado efecto metalizado.',
        image: './assests/imagenes/shoes-photos/cadena.png',
        price: 39.95
    }, 
];
const productListElement = document.querySelector(".product-list");
for (const product of products){
    const productTemplate = `
        <img class="image" src="${product.image}" alt="${product.name}">
        <h2 class="name">${product.name}</h2>
        <p class="description">${product.description}</p>
        <h3 class="price">${product.price} EUR</h3>`;

    const productDivElement = document.createElement("div");
    productDivElement.innerHTML = productTemplate;
    productListElement.appendChild(productDivElement);
}



/* function getImage(products){
    products.forEach(product => console.log(product))   
} 
getImage(); */

