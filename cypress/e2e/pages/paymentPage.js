class paymentPage {
    elements = {
        text_Samsung: () => cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'),
        text_Nokia: () => cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch'),
        div_product: () => cy.get('#tbodyid'),
        btn_addCar: () => cy.get('.col-sm-12 > .btn'),
        btn_car: () => cy.get('#cartur'),
        div_detalle: () => cy.get('.success > :nth-child(2)'),
        btn_placeOrder: () => cy.get('.col-lg-1 > .btn'),
        btn_delete: () => cy.get('.success > :nth-child(4) > a'),
        modal_placeOrder: () => cy.get('#orderModal > .modal-dialog > .modal-content'),
        input_name: () => cy.get('#name'),
        input_conutry: () => cy.get('#country'),
        input_city: () => cy.get('#city'),
        input_card: () => cy.get('#card'),
        input_month: () => cy.get('#month'),
        input_year: () => cy.get('#year'),
        btn_purchase: () => cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        modal_compra: () => cy.get('.sweet-alert'),
        text_tanks: () => cy.get('.sweet-alert > h2'),
        text_detalle: () => cy.get('.lead'),
        btn_ok: () => cy.get('.confirm'),
        div_categories: () => cy.get('#contcont > :nth-child(1) > .col-lg-3')

    };
  
    selectProduct() {
        cy.wait(4000);
        this.elements.text_Samsung().should("be.visible").click();
        this.elements.div_product().should("be.visible");
    }
    addproducto(){
        this.elements.btn_addCar().should("be.visible").click()
    }
  
    selectCar() {
        cy.wait(4000);
        this.elements.btn_car().should("be.visible").click();
    }
  
    selectplaceOrder() {
        this.elements.btn_placeOrder().should("be.visible").click();
        cy.wait(4000);
    }
  
    fillForm(){
        this.elements.modal_placeOrder().should("be.visible");
        this.elements.input_name().should("be.visible").type("Ana");
        this.elements.input_conutry().should("be.visible").type("Mexico");
        this.elements.input_city().should("be.visible").type("Chalco");
        this.elements.input_card().should("be.visible").type("4111111111111111");
        this.elements.input_month().should("be.visible").type("1226");
        this.elements.input_year().should("be.visible").type("123");
        this.elements.btn_purchase().should("be.visible").click();
    }

    validPayment(){
        this.elements.modal_compra().should("be.visible");
        this.elements.text_tanks().should("be.visible").should("have.text", "Thank you for your purchase!")
        cy.wait(1000)
        this.elements.btn_ok().should("be.visible").click();
        this.elements.div_categories().should("be.visible");

    }

    eliminarProducto(){
        this.elements.btn_delete().should("be.visible").click();
        cy.wait(2000);
    }

    validarProducto(){
        this.elements.div_detalle().should("not.exist");
    }

  }
  
  export const PaymentPage = new paymentPage();