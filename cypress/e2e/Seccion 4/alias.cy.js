require('cypress-xpath');
import 'cypress-file-upload';
require('cypress-plugin-tab');


describe("Manejo de los alias en Cypress", () => {

    it("Alias PT1", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get('#firstName').should('be.visible').as('Nom');
        cy.get('@Nom').type('Roberto');

        cy.get('#lastName').should('be.visible').as('Last');
        cy.get('@Last').type('Capellan');

        cy.get('#userEmail').should('be.visible').as('Correo');
        cy.get('@Correo').type('capellan@email.com');

        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').should('be.visible').as('Hobbies');
        cy.get('@Hobbies').click();
    });

}) // Fin del describe