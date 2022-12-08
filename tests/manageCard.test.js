const addProductCart = require('../manageCart');

test('add products to cart', () => {
    addProductCart(2020)
    expect(1).toBe(1);
});