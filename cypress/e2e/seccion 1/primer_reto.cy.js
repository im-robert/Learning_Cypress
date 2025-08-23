require('cypress-plugin-tab');

describe("Primer Reto Cypress", () => {

    it("Primer Test de reto Cypress", () => {
        cy.visit("https://demoqa.com/webtables");
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

        cy.get('#searchBox').should('be.visible').type('Cierra');
        cy.wait(1000);
        cy.get('#searchBox').should('be.visible').clear();

        // Agregando registro
        cy.get('#addNewRecordButton').should('be.visible').click();
        cy.wait(1000);

        //Llenando el formulario
        cy.get('#firstName').should('be.visible').type('Roberto').tab()
        .type('Capellan').tab()
        .type('capellan@email.com').tab()
        .type('30').tab()
        .type('30000').tab()
        .type('Sistemas');

        cy.get('#submit').should('be.visible').click();


        cy.get('#searchBox').should('be.visible').type('Roberto').clear();
        cy.wait(1000);

        cy.get('edit-record-3').should('be.visible').click({force:true});
        //cy.get('#searchBox').should('be.visible').clear();


    });

}) // Fin del describe