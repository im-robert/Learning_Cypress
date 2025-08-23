// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible', (selector, texto, t) => {
    let tiempo = t;
    cy.get(selector).should('be.visible').type(texto);
    cy.wait(tiempo);
});

Cypress.Commands.add('Texto_visible_xpath', (selector, texto, t) => {
    let tiempo = t;
    cy.xpath(selector).should('be.visible').type(texto);
    cy.wait(tiempo);
});

Cypress.Commands.add('Click', (selector, t) => {
    let tiempo = t;
    cy.get(selector).should('be.visible').click();
    cy.wait(tiempo);
});

Cypress.Commands.add('Click_force', (selector, t) => {
    let tiempo = t;
    cy.get(selector).should('be.visible').click({force:true});
    cy.wait(tiempo);
});

Cypress.Commands.add('Click_force_xpath', (selector, t) => {
    let tiempo = t;
    cy.xpath(selector).should('be.visible').click();
    cy.wait(tiempo);
});


 // Funciones por conjunto o completas
// Creando la funcion ToolsQA

    Cypress.Commands.add('Bloque_ToolsQA', (name, email, dir1, dir2, t) => {
        let tiempo = t;
        cy.get('#userName').should('be.visible').type(name);
        cy.wait(tiempo);
        cy.get('#userEmail').should('be.visible').type(email);
        cy.wait(tiempo);
        cy.get('#currentAddress').should('be.visible').type(dir1);
        cy.wait(tiempo);
        cy.get('#permanentAddress').should('be.visible').type(dir2);
        cy.wait(tiempo);
        cy.get('#submit').should('be.visible').click();
    });

    Cypress.Commands.add('Bloque_ToolsQA_DOS', (name, email, dir1, dir2, t) => {
        let tiempo = t;
        cy.Texto_visible('#userName', name, 1000);
        cy.Texto_visible('#userEmail', email, 3000);
        cy.Texto_visible_xpath('//*[@id="currentAddress"]', dir1, 2000);
        cy.Click('#submit', 3000);
    });