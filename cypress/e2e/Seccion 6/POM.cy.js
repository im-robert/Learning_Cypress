import ProyectoUno_PO from '../../support/pageObjectModel/ProyectoUno_PO/ProyectoUno_PO.cy';
require('cypress-xpath');
import 'cypress-file-upload';
//require('cypress-plugin-tab');

describe('Page Object Models', () => {
    const master = new ProyectoUno_PO(); 

    master.visitHomePage();
    
    it('TEST Seccion 1', () => {
        master.seccionUno('Admin', 'admin123', 800);
        //master.DashboradAdmin('sebastian', 800);
        });


}) // Fin del describe