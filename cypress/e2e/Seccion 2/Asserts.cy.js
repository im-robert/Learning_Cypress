require('cypress-xpath');

describe("Seccion de Asserts", () => {

    it("Asserts con CONTAINS", () => {
        cy.visit("https://www.automationexercise.com/");

        cy.get(".shop-menu").contains('Cart').click();

    });

    it("Asserts find EQ", () => {
        cy.visit("https://www.automationexercise.com/");
        //cy.title().should('eq', 'Automation Exercise');

        cy.get('.product-image-wrapper').find('.choose').eq(2).click();

        //Buscar y seleccionar el producto
        cy.get('.product-information').find('p').eq(2).then((eq) => {

            let estado = eq.text();
            //Validar si el producto es nuevo o no
            if(estado == "Condition: New") {
                cy.log('El producto es nuevo')
            } else {
                cy.log('El producto no es nuevo');
            };
        });


        //Validar si el producto entra en el presupuesto o no segun su precio
        cy.get('span').find('span').then((eq) => {
            let precio = eq.text();
            precio = precio.slice(4);
            cy.log(precio);

            if (precio >= 600) {
                cy.log('El producto sale del presupuesto');
                cy.wait(1000);
                cy.get('.shop-menu > .nav > :nth-child(1) > a').click();
            } else {
                cy.log('El producto está en el presupuesto');
                cy.wait(1000);
                cy.get('.cart').click();
            };

        });
    });

    it("Asserts con have.text y contain.text", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.get('#userName').should('be.visible').type('Roberto');
        cy.get('#userEmail').should('be.visible').type('Roberto@email.com');
        cy.get('#submit').should('be.visible').click();

        //El have.text valida que el elemento contenga todo el texto que se le indica
        cy.get('#name').should('have.text', 'Name:Roberto');

        //El contain.text valida que el elemento contenga esa parte del texto solamente, aunque cotenga mas, la prueba pasa ya que no debe tener todo el texto del elemento
        cy.get('#email').should('contain.text', '@email');


    });

    it("Asserts con validate have.text", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.get('#userName').should('be.visible').type('Roberto');

        cy.get('#userName').should('have.value', 'Roberto').then(() => {
            cy.get('#userEmail').should('be.visible').type('Roberto@email.com');
            cy.get('#submit').should('be.visible').click();
        });

    });

    it("Asserts con validate have.class", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.get('#userName').should('be.visible').should('have.class', 'mr-sm-2 form-control').then(() => {
            cy.get('#userName').should('be.visible').type('Roberto');
        });

    });

     it("Asserts con have.class y el opreador AND", () => {
        cy.visit("https://demoqa.com/text-box");

        /*Esta es una prqueña variante en la que se valida con el SHOULD y el AND, en este caso ambas validaciones se tienen que cumplir
        para que la prueba pase y se ejecute el then */
        cy.get('#userName').should('be.visible').and('have.class', 'mr-sm-2 form-control').then(() => {
            cy.get('#userName').should('be.visible').type('Roberto');
        });

    });

    it("Asserts con not.have y validaciones negativas", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.get('#userName').should('not.be.visible').and('not.have.class', 'mr-sm-2 form-control').then(() => {
            cy.get('#userName').should('be.visible').type('Roberto');
        });

    });

     it("Asserts length", () => {
        cy.visit("https://www.w3schools.com/html/html_tables.asp");

        cy.get('#customers >tbody >tr >td').should('have.length', 18);
    });

    it("Asserts - Buscando elementos por el contains", () => {
        cy.visit("https://www.automationexercise.com/");

        cy.contains('a', "Products").should('be.visible').click();
    });

     it.only("Reto con Asserts 2", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.get('#userName').should('be.visible').and('have.class', 'mr-sm-2').type('Sebastian');
        cy.get('#userEmail').should('be.visible').and('have.class', 'form-control').type('Sebas@gmail.com');

        cy.contains("[type='button']", 'Submit').click();

    });



}); // Fin del describe