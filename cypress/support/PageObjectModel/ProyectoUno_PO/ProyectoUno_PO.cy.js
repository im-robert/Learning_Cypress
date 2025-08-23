class ProyectoUno_PO {

    visitHomePage() {
        let tiempo = 800;
    before(() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq', 'OrangeHRM');
        cy.wait(tiempo);
    });
    };

    seccionUno(user, pass, t) {
        let tiempo = t;
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input' , /*{timeout:10000} */).should('be.visible').type(user);
        cy.screenshot('seccionLogin'); //Tomando screenshots de las pruebas | Estas son guardadas en la carpeta "cypress\screenshots"
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(pass);
        cy.screenshot('password'); //Tomando screenshots de las pruebas | Estas son guardadas en la carpeta "cypress\screenshots"
        cy.get('.oxd-button').click();
    };

    DashboradAdmin(user, t) {
        let tiempo = t
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.wait(tiempo);
        cy.get(':nth-child(2) > .oxd-input').type(user);
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        cy.wait(tiempo);
        cy.get('[role="listbox"]').should('contain', 'Admin').click();
        cy.wait(tiempo);
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        cy.get('[role="listbox"]').should('contain', 'Enabled').click();
    }

} // Fin de la clase

export default ProyectoUno_PO; 