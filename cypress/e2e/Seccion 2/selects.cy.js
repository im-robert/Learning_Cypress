require('cypress-xpath');


describe("Test Selects", () => {

    it("Selects Parte 1", () => {
        cy.visit("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
        cy.title().should('eq', 'Selenium Practice - Student Registration Form');
        cy.wait(1500);

        cy.get('#state').should('be.visible').select('Uttar Pradesh').should('have.value', 'Uttar Pradesh');
        cy.wait(2000);
        cy.get('#state').should('be.visible').select('Rajasthan').should('have.value', 'Rajasthan');
    });

     it("Selects Parte 2", () => {
        cy.visit("https://www.google.com/");
        //cy.title().should('eq', 'Google');

        cy.wait(1000);
        cy.get('#APjFqb').should('be.visible').type('Ferrari').type('{enter}');
    });

     it.only("Opcion Multi-Select", () => {
        cy.visit("https://demo.mobiscroll.com/select/multiple-select");
        //cy.title().should('eq', 'Select Multiple select Example | Mobiscroll');

        // .select solo funciona con etiquetas select, en este caso se usa un input y se hace de esta manera
        cy.get('#multiple-select-input').click({force:true});
        cy.get('.mbsc-scrollview-scroll > :nth-child(42)').click();
        cy.get('.mbsc-scrollview-scroll > :nth-child(44)').click();
        cy.get('.mbsc-scrollview-scroll > :nth-child(47)').click();

        //Para usar el multi-select con etiquetas select clasicas, esta es la manera (Solo a modo de ejemplo)
    // ---cy.get('#multiSelect').should('be.visible').select(['California', 'Iowa', 'New York']);

    });

       it("Opcion Multi-Select con promesas", () => {
        cy.visit("https://demo.mobiscroll.com/select/multiple-select");
        //cy.title().should('eq', 'Select Multiple select Example | Mobiscroll');

         //.select solo funciona con etiquetas select, en este caso se usa un input y se hace de esta manera

        /*Para usar el multi-select con etiquetas select clasicas, esta es la manera (Solo a modo de ejemplo) 
        En este ejemplo se usan las promesas con el THEN, el cual funciona para cumplir la promesa cuando se haga el multi select
        en este caso. Cuando se seleccionan las multiple opciones, le da click a un boton
        */
        cy.get('#multiSelect').should('be.visible').select(['California', 'Iowa', 'New York']).then(() => {
            cy.get('#printMe').should('be.visible').click();
        });

    });

}) // Fin del describe