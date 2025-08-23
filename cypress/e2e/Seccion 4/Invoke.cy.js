require('cypress-xpath');
import 'cypress-file-upload';

describe("Seccion Invoke", () => {

    it("Test Invoke PT1 & PT2", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        //Invocamos el texto del elemento que seleccionamos
        cy.get('h5').invoke('text').as('headerForm');
        cy.get('@headerForm').should('contain', 'Student Registration Form');

        cy.get('#userName-wrapper > .col-md-3').invoke('text').as('Title_Name');
        cy.get('@Title_Name').should('contain', 'Name').then(() => {
            cy.get('#firstName').type('sebastian');
        });

    });

    it("Test Invoke ESTILOS", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get('#userName-wrapper > .col-md-3').invoke('attr', 'style', 'color: red; font-size: 25px');

    });

    it("Test Invoke | Ocultar y mostar", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get('#userName-wrapper > .col-md-3').invoke('hide');
        cy.get('#firstName').invoke('hide');

        cy.wait(2000);

        cy.get('#userName-wrapper > .col-md-3').invoke('show', '3s');
        cy.get('#firstName').invoke('show', '3s');

    });


    it("Test Invoke | Reto con Invoke", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get('#lastName').invoke('hide');

        cy.get('#firstName').should('be.visible').type('sebastian', {force:true}).then(() => {
            cy.get('#lastName').invoke('show', '4s').wait(1500).type('capellan');
        });

    });

    it("Test Invoke | SRC", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.xpath('//*[@id="app"]/header/a/img').invoke('attr', 'src').should('include', '/Toolsqa.jpg');
    });

    it.only("Test Invoke | Target_Blank", () => {
        cy.visit("https://www.w3schools.com/tags/att_a_target.asp");

        cy.xpath('//*[@id="main"]/div[2]/a').invoke('removeAttr', 'target').click({force:true});
    });


}) // Fin del describe