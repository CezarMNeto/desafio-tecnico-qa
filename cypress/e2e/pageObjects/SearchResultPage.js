class SearchResultPage {
    addProductToCart(productName) {

        // Clica em "Add to cart" no primeiro produto da lista
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        // Clica para prosseguir para o checkout na janela modal
        cy.get('u').should('be.visible').click();
    }
}

export default new SearchResultPage();