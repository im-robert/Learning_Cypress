require('cypress-xpath');
import 'cypress-file-upload';
//require('cypress-plugin-tab');

describe('FIXTURES', () => {
    let tiempo = 800;
    // Usando Fixture sin ALIAS
    // before(() => {
    //     cy.fixture('datos1').then(function(data) {
    //          globalThis.data = data;
    //     });
    // });

    //Usando Fixtures por ALIAS
    before(function() {
        cy.fixture('datos1').as('datos_json');
    });

    it('Fixtures PT1', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(tiempo);

        cy.get('@datos_json').then((data) => {

        cy.get('#userName').should('be.visible').type(data.nombre);
        cy.wait(tiempo);
        cy.get('#userEmail').should('be.visible').type(data.email);
        cy.wait(tiempo);
        cy.get('#currentAddress').should('be.visible').type(data.dir1);
        cy.wait(tiempo);
        cy.get('#permanentAddress').should('be.visible').type(data.dir2);
        cy.wait(tiempo);
        cy.get('#submit').should('be.visible').click();

        });
        
    });


}); // Fin del describe