require('cypress-xpath');
require('cypress-plugin-tab');
import 'cypress-file-upload';

describe("Bucle For & Each", () => {

    it("Bucle FOR V1", () => {
        
        for(let i=1; i<100; i++) {
            cy.log(i);
        }

    });

    it("Bucle FOR V2", () => {
        
        for(let i=1; i<=10; i++) {
            let y = 5
            cy.log(i + 'x' + y + '= ' + i*y);
        }

    });

    it("Each UNO", () => {
        
        cy.visit('https://automationexercise.com/');

        cy.get('.productinfo p').each(($el, index, $list) => {
            
            let producto = $el.text();
            cy.log(producto);
        });
        

    });

      it("Each DOS", () => {
        
        cy.visit('https://automationexercise.com/');

        cy.get('.productinfo p').each(($el, index, $list) => {
            
            let producto = $el.text();
            //cy.log(producto);

            if(producto.includes('Full Sleeves Top Cherry - Pink')) {
                cy.wrap($el).parents('.productinfo').parents('.single-products')
                .siblings('.choose').contains('View Product').click();
            }
        });
        

    });

    it.only("Reto con FOR", () => {
        
        cy.visit('https://automationexercise.com/');
        let t = 200;
        const datos = [];

        //Este codigo funciona para detectar la cantidad de elementos seleccionados en la webg, en este caso la cantidad de productos
        // Cabe aclarar que dependiendo la web, podría detectarte el doble de elementos porque puede tener código hecho para una versión mobile y Cypress lo detecta 2 veces.
        cy.get('.productinfo p').each(($el, index, $list) => {
            datos[index] = $el.text();
        }).then(() => {

            for(let x=0; x < datos.length; x++) {

            cy.get('.choose').eq(x).click();
            cy.wait(t);
            cy.get('#quantity').clear().type('5');
            cy.wait(t);
            cy.get(':nth-child(5) > .btn').should('be.visible').click();
            cy.wait(t);
            cy.get('.modal-footer > .btn').should('be.visible').click();
            cy.wait(t);
            cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible').click();
        } 
        
        });

        //cy.log(datos);
    });

}) // Fin del describe