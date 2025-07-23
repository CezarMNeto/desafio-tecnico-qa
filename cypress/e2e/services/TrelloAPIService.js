class TrelloAPIService {
    getActionDetails() {
        return cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
            failOnStatusCode: false, // Permite que o Cypress capture respostas com erro para validação
        });
    }
}

export default new TrelloAPIService();