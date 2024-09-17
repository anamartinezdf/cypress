Feature: Pagar un producto
 Pagar un producto Samsung galaxy s6 al ingresar a demoblaze

  Background: 
    Given Ingreso al portal de demoblaze
    Scenario: El usuario seleccionar el producto Samsung galaxy s6
    When Selecciona Add to car y confirma el producto
    And Selecciona ir al carrito
    And Selecciona Place Order
    And Se llenan todos los datos
    Then Se valida la información del pago

    Scenario: El usuario eliminca un producto
    When Selecciona Add to car y confirma el producto
    And Selecciona ir al carrito
    And Selecciona Eliminar producto
    Then Se valida que se haya elimincado el producto del carrito