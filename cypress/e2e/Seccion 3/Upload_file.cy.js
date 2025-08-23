import 'cypress-file-upload';
require('cypress-xpath');

describe("Upload images", () => {

    it("Cargando imagenes", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        const ruta = "imga1.jpeg";
        cy.get('[type="file"]').wait(2000).attachFile(ruta);

    });

}) // Fin del describe