require('cypress-xpath');
import 'cypress-file-upload';
//require('cypress-plugin-tab');

describe('Comandos Custom', () => {
    let tiempo = 1000;

    before(() => {
        cy.visit('https://demoqa.com/text-box');
        cy.title().should('eq', 'DEMOQA');
        cy.wait(tiempo);
    })

    // Primer Test
    it('Custom Comands 1', () => {
        cy.Texto_visible('#userName', 'Sebastian', 1000);
        cy.Texto_visible('#userEmail', 'Sebas@gmail.com', 3000);
        cy.Texto_visible_xpath('//*[@id="currentAddress"]', 'Holaaaaaa', 2000);
        cy.Click('#submit', 3000);
    });

    /* Utilidad de los custom comands por bloque: Por ejemplo, si tienes un formulario y quieres hacer diferentes tests para cada validacion, hacer un custom comand que seleccione ya todos los campos y haga las acciones para que en cada test solamente tengas que cambiar la data de cada campo*/
   it('Custom Comands por Bloque', () => {
    cy.Bloque_ToolsQA('Sebastian', 'Sebas@gmail', 'Casa1', 'Casa2', 1000);
   });

   it.only('Custom Comands por bloque DOS', () => {
    cy.Bloque_ToolsQA_DOS('Sebastian', 'sebas@email.com', 'mi casa 1');
   });


}); // Fin del describe