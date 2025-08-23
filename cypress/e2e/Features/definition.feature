Feature: Primer Demo de Cucumber

    Esto es un demo de como utilizar Cucumber

    # Scenario: Primer Escenario de Cucumber
    # Given Se abre el navegador principal
    # When Se carga el nombre Jose
    # When Carga el email sebas101@gmail.com
    # And Se carga la dirección callePrimera
    # Then Validar el formulario

    Scenario Outline: Scenario Outline name: Segundo Escenario de Cucumber
    Given Se abre el navegador principal
    When Se carga el nombre <username>
    When Carga el email <email>
    And Se carga la dirección <direccion>
    Then Validar el formulario

    Examples:
        | username | email | direccion |
        | pablo  | pablo@email.com  | callePrimera  |
        | laura  | laura@email.com  | calleSegunda  |
        | alexis  | alexis@email.com  | Terceracalle  |

