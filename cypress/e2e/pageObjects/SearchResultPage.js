class SearchResultPage {
    addProductToCart() {
        // Clica em "Add to cart" no primeiro produto da lista
        cy.get('.product_list .ajax_add_to_cart_button').first().click();
        // Clica para prosseguir para o checkout na janela modal
        cy.get('.button-container a[title="Proceed to checkout"]').should('be.visible').click();
    }
}

export default new SearchResultPage();