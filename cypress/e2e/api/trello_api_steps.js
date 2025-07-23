import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import TrelloAPIService from '../services/TrelloAPIService';

When('eu enviar uma requisição GET para o endpoint de ações do Trello', () => {
    TrelloAPIService.getActionDetails().as('apiResponse');
});

Then('o status code da resposta deve ser {int}', (statusCode) => {
    cy.get('@apiResponse').its('status').should('eq', statusCode);
});

Then('o campo {string} dentro de {string} no corpo da resposta deve ser {string}', (field, parent, value) => {
    cy.get('@apiResponse').its(`body.${parent}.${field}`).should('eq', value);
}
);