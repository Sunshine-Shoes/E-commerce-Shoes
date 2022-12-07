 const carouselContainer = document.querySelector("#carouselContainer");

products.forEach((product) => {
    const {image, name, description} = product;
    console.log(product);
    carouselContainer.innerHTML += `
    <div class="carousel-item">
        <img src="${image}" class="d-block w-100" alt="${name}">
        <div class="carousel-caption d-none d-md-block">
            <h5 class="bg-secondary bg-opacity-25 rounded">${name}</h5>
            <p class="bg-secondary bg-opacity-25 rounded">${description}</p>
        </div>
    </div>
    `; 
});
 


