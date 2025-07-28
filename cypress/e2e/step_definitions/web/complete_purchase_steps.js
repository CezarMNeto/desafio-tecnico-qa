import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../../support/pageObjects/HomePage';
import SearchResultPage from '../../../support/pageObjects/SearchResultPage';
import CheckoutPage from '../../../support/pageObjects/CheckoutPage';

Given('que eu esteja logado com um usuário válido', () => {
    cy.fixture('users.json').then((user) => {
        cy.login(user.validUser.email, user.validUser.password);
    });
});

When('eu buscar pelo produto {string}', (productName) => {
    HomePage.searchForProduct(productName);
});

When('eu adicionar o primeiro produto da busca ao carrinho', () => {
    SearchResultPage.addFirstProductToCart();
});

Then('eu devo visualizar o produto {string} na tela de pagamento', (productName) => {
    CheckoutPage.getProductInCart(productName).should('be.visible');
}); 