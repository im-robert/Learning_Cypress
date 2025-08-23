describe(" ", () => {

    it(" ", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'DEMOQA')

        cy.log('La funcion title se valido correctamente');
    });

}) // Fin del describe