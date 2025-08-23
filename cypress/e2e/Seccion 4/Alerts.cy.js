require('cypress-xpath');
import 'cypress-file-upload';
require('cypress-plugin-tab');


describe("Alertas en Cypress", () => {

    it("Ejercicio de Alerts en Cypress", () => {
        cy.visit("https://demoqa.com/alerts");

        cy.get('#alertButton').click();
        //cy.wait(2000);
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You clicked a button');
            return true;
        });

    });

}) // Fin del describe