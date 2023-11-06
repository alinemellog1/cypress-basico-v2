/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(function () {
        cy.visit('./src/index.html')
    }),
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    }),
    it('preenche os dados obrigatórios e envia o formulário', function() {
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

        cy.get('textarea[id="open-text-area"]')
          .should('be.visible')
          .type('Não obstante, a valorização de fatores subjetivos auxilia a preparação e a composição dos relacionamentos verticais entre as hierarquias. Por outro lado, a execução dos pontos do programa é uma das consequências dos índices pretendidos. O que temos que ter sempre em mente é que a contínua expansão de nossa atividade possibilita uma melhor visão global do sistema de participação geral. No entanto, não podemos esquecer que o acompanhamento das preferências de consumo nos obriga à análise das novas proposições.', {delay: 0})
          .should('have.value', 'Não obstante, a valorização de fatores subjetivos auxilia a preparação e a composição dos relacionamentos verticais entre as hierarquias. Por outro lado, a execução dos pontos do programa é uma das consequências dos índices pretendidos. O que temos que ter sempre em mente é que a contínua expansão de nossa atividade possibilita uma melhor visão global do sistema de participação geral. No entanto, não podemos esquecer que o acompanhamento das preferências de consumo nos obriga à análise das novas proposições.')
        
        cy.get('button[type="submit"]')
          .should('be.visible')
          .click()

        cy.get('span[class="success"]')
          .should('be.visible')
          //.should("have.text", "Mensagem enviada com sucesso.")
        
    }),
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
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
          .type('alinemmgarcia1!gmail.com')
          .should('have.value', 'alinemmgarcia1!gmail.com')

        cy.get('textarea[id="open-text-area"]')
          .should('be.visible')
          .type('Ótimo trabalho.')
        
        cy.get('button[type="submit"]')
          .should('be.visible')
          .click()

        cy.get('span[class="error"]')
          .should('be.visible')
          //.should("have.text", "\n Valide os campos obrigatórios!\n    ")

    }),
    it('testando campo de telefone com valores não numéricos', function() {
        cy.get('input[id="phone"]')
          .should('be.visible')
          .type('Teste')
          .should('have.value', '')

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

        cy.get('input[id="phone-checkbox"]')
          .should('be.visible')
          .click()

        cy.get('textarea[id="open-text-area"]')
          .should('be.visible')
          .type('Ótimo trabalho.')
        
       /* cy.get('button[type="submit"]')
          .should('be.visible')
          .click() */

        cy.contains('button', 'Enviar')
          .should('be.visible')
          .click()

        cy.get('span[class="error"]')
          .should('be.visible')
          //.should("have.text", "\n Valide os campos obrigatórios!\n    ")

    }),
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('input[id="firstName"]')
          .should('be.visible')
          .type('Aline')
          .should('have.value', 'Aline')
          .clear()
          .should('have.value', '')

        cy.get('input[id="lastName"]')
          .should('be.visible')
          .type('Mello')
          .should('have.value', 'Mello')
          .clear()
          .should('have.value', '')

        cy.get('input[id="email"]')
          .should('be.visible')
          .type('alinemmgarcia1@gmail.com')
          .should('have.value', 'alinemmgarcia1@gmail.com')
          .clear()
          .should('have.value', '')

          cy.get('input[id="phone"]')
          .should('be.visible')
          .type('Teste')
          .should('have.value', '')
          .clear()
          .should('have.value', '')

        
    }),
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {  
        cy.get('button[type="submit"]')
          .should('be.visible')
          .click()

        cy.get('span[class="error"]')
          .should('be.visible')

    }),
    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit()

        cy.get('span[class="success"]')
          .should('be.visible')
    })
})
