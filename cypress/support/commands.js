// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => { 
    cy.visit('./src/index.html')
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

  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
