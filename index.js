const products = [
    {
        name: 'Botas de grafitty',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botas alternativas góticas.jpg',
        price: 100.95
        
    },
    {
        name: 'Botas motocicleta hebillas',
        description: 'Botas de plataforma,botas góticas, botas moteras, tacones altos',
        image: './assets/imagenes/shoes-photos/Botas góticas.jpg',
        price: 99.95
    },
    {
        name: 'Botas motocicleta correas',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botin con suela lisa.jpg',
        price: 39.95
    }, 
    {
        name: 'BOTÍN PLANO LLUVIA',
        description: 'Botín plano engomado resistente al agua. Combinación de goma con efecto rugoso y neopreno en el corte. Tiradores en la parte delantera y trasera para facilitar el calce. Suela dentada tipo track.',
        image: './assets/imagenes/shoes-photos/Botin gótico.jpg',
        price: 129.00
    }, 
    {
        name: 'MOCASÍN TRACK ADORNO',
        description: 'Zapato plano tipo mocasín con acabado brillante. Copete subido y antifaz con adorno metálico. Suela dentada tipo track.',
        image: './assets/imagenes/shoes-photos/Botines de suela.jpg',
        price: 39.95
    },
    {
        name: 'ZAPATO TACÓN VINILO ADORNO',
        description: 'Zapato de tacón destalonado de vinilo. Detalle de adorno con brillos en la parte delantera.',
        image: './assets/imagenes/shoes-photos/Botas alternativas góticas.jpg',
        price: 49.95
    },
    {
        name: 'Botas de grafitty',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botas alternativas góticas.jpg',
        price: 100.95
        
    },
    {
        name: 'Botas motocicleta hebillas',
        description: 'Botas de plataforma,botas góticas, botas moteras, tacones altos',
        image: './assets/imagenes/shoes-photos/Botas góticas.jpg',
        price: 99.95
    },
    {
        name: 'Botas motocicleta correas',
        description: 'Botas de plataforma,botas góticas, botas moteras',
        image: './assets/imagenes/shoes-photos/Botin con suela lisa.jpg',
        price: 39.95
    },
    {
        name: 'Botas motocicleta hebillas',
        description: 'Botas de plataforma,botas góticas, botas moteras, tacones altos',
        image: './assets/imagenes/shoes-photos/Botas góticas.jpg',
        price: 99.95
    },  
    
];

const productListElement = document.querySelector(".product-list");
for (const product of products){
    const productTemplate = `
        <img class="image" src="${product.image}" alt="${product.name}">
        <h2 class="name">${product.name}</h2>
        <p class="description">${product.description}</p>
        <h3 class="price">${product.price} EUR</h3>
        <input onClick="#" class=button value="-" name="boton0">
        <input onClick="#" class=button value="+" name="boton1">`;
               
    
    const productDivElement = document.createElement("div");
    productDivElement.innerHTML = productTemplate;
    productListElement.appendChild(productDivElement);
}
