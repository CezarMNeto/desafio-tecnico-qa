class CheckoutPage {
    getProductInCart(productName) {

        return cy.get('.cart_description h4 a').contains(productName);

    }
}

export default new CheckoutPage();