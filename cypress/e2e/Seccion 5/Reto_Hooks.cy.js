require('cypress-xpath');
import 'cypress-file-upload';
//require('cypress-plugin-tab');

describe('Hooks | Reto', () => {

    let tiempo = 800;
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq', 'OrangeHRM');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123');
        cy.get('.oxd-button').should('be.visible').click();
        cy.wait(tiempo);
    });

    after(() => {
        cy.log('---ULTIMO CICLO---');
    });


    it('TEST 1', () => {
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a').click();
        cy.wait(tiempo);
    });

    it('TEST 2', () => {
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click();
        cy.wait(tiempo);
    });

    it('TEST 3', () => {
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a').click();
        cy.wait(tiempo);
    });


}) // Fin del describe