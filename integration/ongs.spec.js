/// <reference types="cypress" />

describe('Ongs', () => {
  it.skip('devem poder realizar um cadastro', () => {
    cy.visit('http://localhost:3000/register');
    /**
     * cy.get - Busca um elemento
     * .type - insere um texto
     */
    cy.get('#name').type('APAC');
    cy.get('#email').type('apac@contato.com.br');
    cy.get('#whatsapp').type('88922334455');
    cy.get('#city').type('Juazeiro do Norte');
    cy.get('#uf').type('CE');

    /**
     * routing
     * start server com cy.server()
     * criar uma rota com cy.route()
     * atribuir rota a um alias
     * esperar com cy.wait e fazer uma validação
     */
    cy.route('POST', '**/ongs').as('postOng');

    cy.get('.button').click();

    cy.wait('@postOng').then((xhr) => {
      expect(xhr.status).be.equal(200);
      expect(xhr.response.body).has.property('id');
      expect(xhr.response.body).is.not.null;
    })
  });

  it.skip('deve realizar login no sistema', () => {

    cy.visit('http://localhost:3000');
    cy.get('input').type(Cypress.env('createOngId'));
    cy.get('.button').click();
  });

  it('devem poder fazer logout', () => {
    cy.login();
    cy.get('button').click();
  });

  it('Ongs devem poder cadastrar novos casos')
});