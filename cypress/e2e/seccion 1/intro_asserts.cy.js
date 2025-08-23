describe("Introduccion a los assertss", () => {

    it("Asserts Demo", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get('#userName').should('be.visible').type('Roberto');
        cy.get('#userEmail').should('be.visible').should('be.enabled').type('capellan@email.com');
                
    });

}) // Fin del describe