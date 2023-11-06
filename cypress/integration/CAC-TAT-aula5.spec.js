/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html')
    }),
    it.only('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
        .should('have.length', 2)
        /*.each(function($radio) {
         cy.wrap($radio).check()
         cy.wrap($radio).should('be.checked')
        }) */
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked') 

    }),
    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio', function() {
        cy.get('input[id="firstName"]')
          .should('be.visible')
          .type('Aline')
          .should('have.value', 'Aline')

        cy.get('input[id="lastName"]')
          .should('be.visible')
          .type('Mello')
          .should('have.value', 'Mello')

        cy.get('input[id="email"]')
          .should('be.visible')
          .type('alinemmgarcia1@gmail.com')
          .should('have.value', 'alinemmgarcia1@gmail.com')

        cy.get('input[type="checkbox"]')
          .should('have.length', 2)
          .should('be.visible')
          .last()
          .check()

        cy.get('textarea[id="open-text-area"]')
          .should('be.visible')
          .type('Ótimo trabalho.')
        
        cy.contains('button', 'Enviar')
          .should('be.visible')
          .click()

        cy.get('span[class="error"]')
          .should('be.visible')
          
    })
})
