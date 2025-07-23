class CheckoutPage {
    validateProductInCart(productName) {
        cy.get('.cart_description .product-name a').should('contain.text', productName);
    }
}

export default new CheckoutPage();