class HomePage {
    searchForProduct(productName) {
        // Clica no menu product
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        // Clica no campo de busca e insere o nome do produto
        cy.get('#search_product').type(productName)
        // Clica na lupa para realizar a busca
        cy.get('#submit_search').click()
    }
}

export default new HomePage();