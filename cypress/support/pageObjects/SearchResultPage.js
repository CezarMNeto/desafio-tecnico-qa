class SearchResultPage {
    addFirstProductToCart() {

        cy.get('.productinfo .btn').first().click();

        cy.contains('a', 'View Cart').click();
    }
}

export default new SearchResultPage();