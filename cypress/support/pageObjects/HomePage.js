class HomePage {
    searchForProduct(productName) {

        cy.contains('a', 'Products').click()

        cy.get('#search_product').type(productName)

        cy.get('#submit_search').click()
    }
}

export default new HomePage();