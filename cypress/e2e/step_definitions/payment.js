import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { PaymentPage } from '../pages/paymentPage';
Given(`Ingreso al portal de demoblaze`, () => {
    cy.visit("/");
});

When(`Selecciona Add to car y confirma el producto`, () => {
    PaymentPage.selectProduct();
    PaymentPage.addproducto();
});
When(`Selecciona ir al carrito`, () => {
    PaymentPage.selectCar();
});

When(`Selecciona Place Order`, () => {
    PaymentPage.selectplaceOrder()
});

When(`Se llenan todos los datos`, () => {
    PaymentPage.fillForm();
});

Then(`Se valida la información del pago`, () => {
    PaymentPage.validPayment();
});

When(`Selecciona Eliminar producto`, () => {
    PaymentPage.eliminarProducto();
});

Then(`Se valida que se haya elimincado el producto del carrito`, () => {
    PaymentPage.validarProducto();
});