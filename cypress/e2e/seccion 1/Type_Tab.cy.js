require('cypress-plugin-tab');
/* 
NOTA: A la hora de usar el tab se inhabilita el uso de los asserts
debido a que para hacer un assert se debe estar apuntando a un elemento
y el tab no permite esto ya que salta al siguiente elemento
*/
describe("Ejercicio funcion Tab", () => {

    it("Type con TABs", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'DEMOQA');
        cy.wait(1000);

        cy.get('#userName').type('Roberto').tab()
        .type("capellan@gmail.com").tab();
    });

}) // Fin del describe