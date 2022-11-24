const products = [
    {
        name: 'ZAPATO TACÓN VINILO ADORNO',
        description: 'Zapato de tacón destalonado de vinilo. Detalle de adorno con brillos en la parte delantera.',
        image: './assets/imagenes/shoes-photos/salon-vinilo-nature.png',
        price: 49.95
    },
    {
        name: 'ZAPATO TACÓN VINILO ADORNO',
        description: 'Zapato de tacón destalonado de vinilo. Detalle de adorno con brillos en la parte delantera.',
        image: './assets/imagenes/shoes-photos/salon-vinilo-morado.png',
        price: 49.95
    },
    {
        name: 'SANDALIA METALIZADA POMPÓN',
        description: 'Zapato de tacón tipo sandalia con acabado efecto metalizado.',
        image: './assets/imagenes/shoes-photos/plata.png',
        price: 39.95
    }, 
    {
        name: 'BOTÍN PLANO LLUVIA',
        description: 'Botín plano engomado resistente al agua. Combinación de goma con efecto rugoso y neopreno en el corte. Tiradores en la parte delantera y trasera para facilitar el calce. Suela dentada tipo track.',
        image: './assets/imagenes/shoes-photos/bota-media.png',
        price: 129.00
    }, 
    {
        name: 'MOCASÍN TRACK ADORNO',
        description: 'Zapato plano tipo mocasín con acabado brillante. Copete subido y antifaz con adorno metálico. Suela dentada tipo track.',
        image: './assets/imagenes/shoes-photos/cadena.png',
        price: 39.95
    }, 
    {
        name: 'BOTÍN TACÓN COWBOY SERRAJE',
        description: 'Zapato tipo botín de estilo cowboy en serraje. Tacón ancho. Corte ajustado. Acabado en punta. Cierre mediante cremallera en el lateral.',
        image: './assets/imagenes/shoes-photos/botin-ante.png',
        price: 55.95
    }, 
    {
        name: 'BOTÍN PIEL PLATAFORMA PUNTA',
        description: 'Zapato tipo botín en piel. Tacón alto con plataforma. Acabado en punta. Cierre mediante cremallera en el lateral.',
        image: './assets/imagenes/shoes-photos/botin-punta.png',
        price: 89.95
    }, 
    {
        name: 'BOTÍN TACÓN COWBOY PIEL',
        description: 'Zapato tipo botín de tacón estilo cowboy en piel. Acabado en punta. Combinación de colores en el corte. Detalle de tirador en un lateral. Cierre mediante cremallera.',
        image: './assets/imagenes/shoes-photos/botin-campero.png',
        price: 89.95
    }, 
    {
        name: 'BOTA ALTA TACÓN TEJIDO',
        description: 'Zapato tipo bota XL en material elástico. Tacón ancho con detalle metalizado. Cierre mediante cremallera en el lateral.',
        image: './assets/imagenes/shoes-photos/mosqueteras.png',
        price: 49.95
    }, 
    {
        name: 'BOTÍN TACÓN ALTO TEJIDO',
        description: 'Zapato tipo botín de tacón alto en tejido. Corte ajustado y acabado en punta.',
        image: './assets/imagenes/shoes-photos/botin-beige.png',
        price: 39.95
    }, 
    {
        name: 'BOTÍN TACÓN PIEL',
        description: 'Zapato de tacón tipo botín en piel. Suela dentada tipo track. Acabado en punta redonda. Cierre mediante cremallera en el lateral.',
        image: './assets/imagenes/shoes-photos/botin-roma.png',
        price: 79.95
    }, 
    {
        name: 'ZAPATILLAS DEPORTIVAS RUNNING PLATAFORMA',
        description: 'Zapatillas deportivas estilo running en combinación de materiales con detalles en piel. Suela con plataforma dentada. Cierre mediante cordones.',
        image: './assets/imagenes/shoes-photos/zapatilla-negra.png',
        price: 39.95
    }, 
    {
        name: 'ZAPATILLAS DEPORTIVAS COMBINADAS',
        description: 'Zapatillas deportivas estilo running en combinación de materiales y colores. Cierre mediante cordones.',
        image: './assets/imagenes/shoes-photos/zapatilla-tiza.png',
        price: 29.95
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
