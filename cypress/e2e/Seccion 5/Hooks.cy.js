require('cypress-xpath');
import 'cypress-file-upload';
//require('cypress-plugin-tab');


describe("HOOKS", () => {
        let tiempo = 1500;

    beforeEach(() => {
        cy.visit('https://automationexercise.com/product_details/1');
        cy.title().should('eq', 'Automation Exercise - Product Details');
        cy.wait(tiempo);

    })

    it("Hooks | Ejercicio 1", () => {
        cy.wait(tiempo);
    });

    it("Hooks | Ejercicio 2", () => {
        cy.wait(tiempo);
    });

    it("Hooks | Ejercicio 3", () => {
        cy.wait(tiempo);
    });

}) // Fin del describe