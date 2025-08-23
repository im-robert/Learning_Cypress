require('cypress-xpath');

describe("Tipos de selectores", () => {

    it("Selector por ID", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.get('#userName').should('be.visible').type('Roberto');
    });

    it("Selector por Atributo", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.get("[placeholder='Full Name']").should('be.visible').type("Robertoo")
    });

    it.only("Selectores por XPATH", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.xpath('//*[@id="userName"]').should('be.visible').type("Alberto");
    });

    it("Selectores por CONTAINS", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get('.custom-control-label').contains('Female').click();
        cy.wait(1000);
        cy.get('.custom-control-label').contains('Other').click();

    });

     it("Selectores por COPY SELECTOR", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get('#userNumber').type('8098884433');
        

    });

}) // Fin del describe