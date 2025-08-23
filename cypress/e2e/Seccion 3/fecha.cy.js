require('cypress-xpath');
import 'cypress-file-upload';

describe("Fechas", () => {

    it("Fechas TEST", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview");

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();

        cy.get('.oxd-autocomplete-text-input > input').type('Ro').then(() => {
            cy.get('.oxd-autocomplete-dropdown').contains('Amelia Brown').wait(1000).click();
        });
        
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').should('be.visible')
        .clear().type('2025-08-07');
        cy.get('.oxd-date-input-calendar').contains('Close').should('be.visible').wait(1000).click();

    });

}) // Fin del describe