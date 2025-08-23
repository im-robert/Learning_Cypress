

describe("Primera prueba en Cypress", () => {

    it("Mi primer test -> Hola mundo", () => {
        cy.log("Hola mundo");
    });

    it("Segundo test -> Campo name", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get("#userName").type("Roberto");
    });

}) // Fin del describe