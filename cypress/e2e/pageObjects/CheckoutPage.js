class CheckoutPage {
    validateProductInCart(productName) {
        cy.get('#product-2 > td.cart_description > h4 > a').should('contain.text', productName);
    }
}

export default new CheckoutPage();