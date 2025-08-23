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
        // cy.visit('https://demoqa.com/text-box');
        // cy.title().should('eq', 'DEMOQA');
        // cy.wait(tiempo);

        /* En este codigo creamos un forEach que recorre cada lista del Fixture .JSON que le pasamos, llena el formulario con los datos del fixture que le pasamos 
        Se pueden tomar archivos .json con la herramienta Mockaroo la cual te genera muchisimos registros de manera automatica*/
        cy.fixture('datos1').then( testdata => {
            testdata.forEach(data => {
                const d_nombre = data.nombre;
                const d_email = data.email;
                const d_dir1 = data.dir1;
                const d_dir2 = data.dir2;

                cy.visit('https://demoqa.com/text-box');
                cy.title().should('eq', 'DEMOQA');
                cy.wait(tiempo);

                cy.get('#userName').should('be.visible').type(d_nombre);
                cy.wait(tiempo);
                cy.get('#userEmail').should('be.visible').type(d_email);
                cy.wait(tiempo);
                cy.get('#currentAddress').should('be.visible').type(d_dir1);
                cy.wait(tiempo);
                cy.get('#permanentAddress').should('be.visible').type(d_dir2);
                cy.wait(tiempo);
                cy.get('#submit').should('be.visible').click();
            });
        });
    });
    /*En caso de hacer la prueba con un archivo Excel, usar la herramienta BeautyTools u otra herramienta
    que pasa los archivos a .txt o . json automaticamente */

}); // Fin del describe