const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
let tiempo = 800;

Given('Se abre el navegador principal', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('eq', 'DEMOQA');
    cy.wait(tiempo);
});

When('Se carga el nombre {word}', (name) => {
    cy.get('#userName').should('be.visible').type(name);
    cy.wait(tiempo);
});

When('Carga el email {word}', (email) => {
    cy.get('#userEmail').should('be.visible').type(email);
    cy.wait(tiempo);
});

When('Se carga la dirección {word}', (dir) => {
    cy.get('#currentAddress').should('be.visible').type(dir);
    cy.wait(tiempo);
});

Then('Validar el formulario', () => {
    cy.get('#submit').should('be.visible').click();
});