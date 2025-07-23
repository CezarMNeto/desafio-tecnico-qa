class LoginPage {
    visit() {
        cy.visit('?controller=authentication&back=my-account');
    }

    fillEmail(email) {
        cy.get('#email').should('be.visible').type(email);
    }

    fillPassword(password) {
        cy.get('#passwd').should('be.visible').type(password);
    }

    submit() {
        cy.get('#SubmitLogin').click();
    }
}

export default new LoginPage();