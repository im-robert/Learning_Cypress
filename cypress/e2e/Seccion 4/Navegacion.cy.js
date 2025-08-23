require('cypress-xpath');
import 'cypress-file-upload';
//require('cypress-plugin-tab');

describe('Navegación entre las páginas', () => {

    // Primer Test
    it('Back / Forward', () => {
        cy.visit('https://demoqa.com/elements');
        cy.title().should('eq', 'DEMOQA');

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click();
        cy.wait(1000);

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').should('be.visible').click();
        cy.wait(1000);

        cy.go('back')
        .wait(800);
        cy.go('back').
        wait(800);
        cy.go('forward');
        });

        it.only('Reload', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'DEMOQA');

        cy.get('#userName').should('be.visible').type('Sebastian');
        cy.wait(1000);

        cy.get('#userEmail').should('be.visible').type('email@copm');
        cy.wait(1000);
        cy.reload();
        });


}); // Fin del describe