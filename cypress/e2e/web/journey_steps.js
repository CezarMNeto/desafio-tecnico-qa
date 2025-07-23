import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pageObjects/LoginPage';
import HomePage from '../pageObjects/HomePage';
import SearchResultPage from '../pageObjects/SearchResultPage';
import CheckoutPage from '../pageObjects/CheckoutPage';

Given('que eu esteja na página de login', () => {
    LoginPage.visit();
});

When('eu realizar o login com um usuário válido', () => {
    cy.fixture('users.json').then((user) => {
        LoginPage.fillEmail(user.validUser.email);
        LoginPage.fillPassword(user.validUser.password);
        LoginPage.submit();
    });
});

When('eu buscar pelo produto {string}', (productName) => {
    HomePage.searchForProduct(productName);
});

When('eu adicionar o primeiro produto da busca ao carrinho', () => {
    SearchResultPage.addProductToCart();
});

Then('eu devo visualizar o produto {string} na tela de pagamento', (productName) => {
    CheckoutPage.validateProductInCart(productName);
});