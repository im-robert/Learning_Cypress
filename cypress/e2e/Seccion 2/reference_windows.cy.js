require('cypress-xpath');

describe("Windows references", () => {

    let tiempo = 1500;
    it("Validacion de charset", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html");
        cy.title().should('eq', 'The Number Game');
        cy.wait(tiempo);

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    });

    it("Windows URL", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html");
        cy.title().should('eq', 'The Number Game');
        cy.wait(tiempo);

        cy.url().should('include', 'random-number.html');
        cy.url().should('eq', 'https://testsheepnz.github.io/random-number.html');

    });

}) // Fin del describe