require('cypress-xpath');
import 'cypress-file-upload';
//require('cypress-plugin-tab');


describe("Configuacion y uso de los Snippets", () => {

    it("Snippets PT1", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.title().should('eq', 'DEMOQA');

        cy.get('#firstName').should('be.visible');
        
    });

}) // Fin del describe