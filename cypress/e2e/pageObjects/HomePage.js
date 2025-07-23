class HomePage {
    searchForProduct(productName) {
        cy.get('#search_query_top').type(productName);
        cy.get('button[name="submit_search"]').click();
    }
}

export default new HomePage();