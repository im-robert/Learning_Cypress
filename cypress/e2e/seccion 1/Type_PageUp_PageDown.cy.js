describe("Ejercicio Type PageUp PageDown", () => {

    it("Type PageUp", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'DEMOQA');
        cy.wait(2500);
        
        cy.get('#userName').type('{pageup}');
        cy.wait(2000);
    });

    it("Type PageDown", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.wait(2000);
        
        cy.get('#userName').type('{pagedown}');
        cy.wait(2500);
    });

}) // Fin del describe