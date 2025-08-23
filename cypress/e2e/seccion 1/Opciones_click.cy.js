describe("Opciones de click", () => {

    it("Click Sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq', 'OrangeHRM');

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin');
        cy.wait(1500);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.wait(1500);
        cy.get('.oxd-button').should('be.visible').click();
        cy.wait(1500);


        cy.get('.oxd-userdropdown-tab').click();
        cy.wait(1500);
        cy.get(':nth-child(1) > .oxd-userdropdown-link').should('be.visible').click();
    });

    it("Click force true", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq', 'OrangeHRM');

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin');
        cy.wait(1500);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.wait(1500);
        cy.get('.oxd-button').should('be.visible').click();
        cy.wait(1500);


        cy.get('.oxd-userdropdown-tab').click();
        cy.wait(1500);
        cy.get(':nth-child(1) > .oxd-userdropdown-link').should('be.visible').click({force: true});
    });

    it.only("Click por coordenadas", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').should('be.visible');

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
        .click(500,5, {force:true});
    });

}) // Fin del describe