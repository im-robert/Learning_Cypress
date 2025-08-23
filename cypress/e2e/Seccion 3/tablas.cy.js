require('cypress-xpath');
import 'cypress-file-upload';
require('cypress-plugin-tab');


describe("Elementos de una tabla", () => {

    it("CHILDREN", () => {
        let tiempo = 400;
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get('input[placeholder="Username"]').type('Admin');
        cy.get('input[placeholder="Password"]').type('admin123');
        cy.get('.oxd-button').type('{enter}');

        //Al buscar por CHILDREN este debe ser hijo directo del elemento padre, no nieto ni más por debajo del DOM
        cy.get('.oxd-grid-3').children('.orangehrm-dashboard-widget-body > .oxd-grid-3 > :nth-child(1)').should('contain', 'Assign Leave').click();

    });

    it("Seleccionar por FILTER", () => {
        let tiempo = 400;
        cy.visit("https://www.automationexercise.com/");

        /* El filter() se queda solo con los elementos que cumplan con la condición indicada, este a diferencia de find() no
        busca dentro de los descendientes si no que busca solo en el conjunto o nivel especificado */
        cy.get('a').filter('[href="/product_details/1"]').click();

    });

    it("Seleccionar por FIND", () => {
        let tiempo = 400;
        cy.visit("https://www.automationexercise.com/");
        /* 
        Este funciona para buscar un elemento en específico dentro del contenedor actual que le indiques,
        este SÍ entra a buscar dentro de todos los elementos que esten en cualquier nivel dentro del contenedor actual
        En mi caso (y el del instructor), se prefiere usar un .contains() o un assert have
        */
        cy.get('.features_items').find('[href="/product_details/1"]').should('contain', 'View Product').click();
        

    });

    it("Seleccionar por FIRST y LAST", () => {
        let tiempo = 400;
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get('input[placeholder="Username"]').type('Admin');
        cy.get('input[placeholder="Password"]').type('admin123');
        cy.get('.oxd-button').type('{enter}');

        cy.get('ul.oxd-main-menu').find('li').first().wait(tiempo).click();
        cy.get('ul.oxd-main-menu').find('li').last().wait(tiempo).click();
    });

    it("Seleccionar los elementos siguientes", () => {
        let tiempo = 600;
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get('input[placeholder="Username"]').type('Admin');
        cy.get('input[placeholder="Password"]').type('admin123');
        cy.get('.oxd-button').type('{enter}');

        cy.get('ul.oxd-main-menu').find('li').nextAll().should('have.length', 11);
    });
    
    it("Mostrando los campos de una tabla", () => {
        let tiempo = 600;
        cy.visit('https://testing.qaautomationlabs.com/web-table.php');

        const datos = [];

        cy.get('tr td').each(($el, index, $list) => {
            datos[index] = $el.text()
        }).then(()=> {
            for(let i=0; i <=datos.length; i++) {
                cy.log(datos[i])
            }
        });
    });

    it("Sumando los valores de los campos", () => {
        let tiempo = 600;
        cy.visit('https://testing.qaautomationlabs.com/web-table.php');

        const datos = [];
        let cantidad = 0;

        cy.get('tr td').each(($el, index, $list) => {
            datos[index] = $el.text()
        }).then(()=> {
            for(let i=0; i <=datos.length; i++) {
                //cy.log(datos[i])
                if(Number(datos[i])) {
                    cantidad+=Number(datos[i])
                }
            }

            cy.log('La cantidad total es:' + cantidad);
            expect(cantidad).eq(15);
        });
    });    

    it.only("Sacar el valor de un campo en especifico", () => {
        let tiempo = 600;
        cy.visit('https://testing.qaautomationlabs.com/web-table.php');

        const campo = cy.get(':nth-child(4) > :nth-child(3)');
        
        campo.each(($el, index, $list) => {
            const datoTabla = $el.text();
            cy.log(datoTabla);


            /*Este es un ejemplo tomado del curso que no aplica en esta tabla. En este ejemplo se salta 2 campos de la tabla 
            para validar la edad de la persona. Si la tabla tuviera mas columnas esta logica puede aplicar*/
            if(datoTabla.includes("Spain")) {
                campo.eq(index).next().next().then((age) => {
                    const Edad = age.text();
                    cy.log(Edad);
                    cy.log('La edad del desarrollador es:' + Edad)
                    expect(Edad).eq(39); // Assert
                })
            }
        });
        
    });

}) // Fin del describe