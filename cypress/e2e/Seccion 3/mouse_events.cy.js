import 'cypress-file-upload';
require('cypress-xpath');
import '@4tw/cypress-drag-drop';

describe("Cypress | Eventos de Mouse", () => {
    let tiempo = 2500;
    it("Drag and Drop", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");

        cy.get('#column-a').wait(tiempo).drag('#column-b', {force:true});
    });

    it("Drag and Drop test 2", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop");

        cy.get('#column-a').wait(tiempo).drag('#column-b', {force:true});
    });

     it("Hover effect", () => {
        cy.visit("https://www.w3schools.com/howto/howto_css_dropdown.asp");

        cy.get('#column-a').wait(tiempo).drag('#column-b', {force:true});
    });

}) // Fin del describe