let cart = [];

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
};

module.exports = addProductCart;
