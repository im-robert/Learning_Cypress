describe("Funciones para type", () => {

    it("Type --> ENTER", () => {
        cy.visit("https://www.google.com/");
        cy.title().should('eq', "Google");
        cy.wait(1500);

        cy.get("#APjFqb").type("cypress io {enter}");

        cy.get(".LC20lb")
        .click();
    });

}) // Fin del describe