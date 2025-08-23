require('cypress-xpath');

describe("Seccion de checkboxs", () => {

    it("Check Uno", () => {
        cy.visit("https://demoqa.com/checkbox");
        //cy.title().should('eq', 'DEMOQA');

        //cy.get('#tree-node > ol > li > span > label > span.rct-checkbox > svg').click();
        cy.get("[type='checkbox']").check({force:true}).should('be.checked');
        cy.wait(2000);
        cy.get("[type='checkbox']").uncheck({force:true}).should('not.be.checked');
    });

      it("Check Dos", () => {
        cy.visit("https://demoqa.com/checkbox");
        //cy.title().should('eq', 'DEMOQA');

        //cy.get('#tree-node > ol > li > span > label > span.rct-checkbox > svg').click();
        cy.get("[type='checkbox']").check({force:true}).should('be.checked');
        cy.wait(1000);
        cy.get("[type='checkbox']").uncheck({force:true}).should('not.be.checked');

        cy.xpath("//*[@id='tree-node']/ol/li/span/button").click();
    });

     it.only("Radio Button", () => {
        cy.visit("https://demoqa.com/radio-button");
        //cy.title().should('eq', 'DEMOQA');

        cy.get("#yesRadio").should('not.be.visible').check({force:true});
        cy.wait(1500);
        cy.get("#impressiveRadio").should('not.be.visible').check({force:true});

    });

}) // Fin del describe