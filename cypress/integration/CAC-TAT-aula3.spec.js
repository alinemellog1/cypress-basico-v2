/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html')
    }),
    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('select[id="product"]')
          .select('YouTube')
          .should('have.value', 'youtube')

    }),
    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('select[id="product"]')
          .select('mentoria')
          .should('have.value', 'mentoria')

    }),
    it.only('seleciona um produto (Blog) por seu índice', function() {
        cy.get('select[id="product"]')
          .select(1)
          .should('have.value', 'blog')

    })
})
