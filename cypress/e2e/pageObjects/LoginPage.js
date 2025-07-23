class LoginPage {
    visit() {
        cy.visit('https://www.automationexercise.com/login');
    }

    fillEmail(email) {
        cy.get('[data-qa="login-email"]').should('be.visible').type(email);
    }

    fillPassword(password) {
        cy.get('[data-qa="login-password"]').should('be.visible').type(password);
    }

    submit() {
        cy.get('[data-qa="login-button"]').click();
    }
}

export default new LoginPage();