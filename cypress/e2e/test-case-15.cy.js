import { faker } from '@faker-js/faker';

describe('Test Case 15: Place Order - Register before Checkout', () => {
  it('Registrar usuário, fazer um pedido e deletar a conta', () => {

    const name = faker.person.firstName();
    const email = faker.internet.email();
    const password = 'MinhaSenha123';

    cy.visit('/');
    cy.get('header').should('be.visible');

    cy.contains('Signup / Login').click();

    cy.contains('New User Signup!').should('be.visible');
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');
    cy.get('input[id="id_gender1"]').check();
    cy.get('input[id="password"]').type(password);
    cy.get('select[id="days"]').select('10');
    cy.get('select[id="months"]').select('May');
    cy.get('select[id="years"]').select('1990');
    cy.get('input[id="newsletter"]').check();
    cy.get('input[id="optin"]').check();
    cy.get('input[id="first_name"]').type(name);
    cy.get('input[id="last_name"]').type('SobrenomeTeste');
    cy.get('input[id="company"]').type('MinhaEmpresa');
    cy.get('input[id="address1"]').type('Rua Teste, 123');
    cy.get('input[id="address2"]').type('Apto 101');
    cy.get('select[id="country"]').select('Canada');
    cy.get('input[id="state"]').type('EstadoTeste');
    cy.get('input[id="city"]').type('CidadeTeste');
    cy.get('input[id="zipcode"]').type('12345');
    cy.get('input[id="mobile_number"]').type('1234567890');
    cy.get('button[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();

    cy.contains(`Logged in as ${name}`).should('be.visible');

    cy.contains('Products').click();
    cy.get('.product-image-wrapper').first().within(() => {
      cy.contains('Add to cart').click();
    });

    cy.get('u').contains('View Cart').click();

    cy.url().should('include', '/view_cart');
    cy.contains('Shopping Cart').should('be.visible');

    cy.contains('Proceed To Checkout').click();

    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

    cy.get('textarea[name="message"]').type('Por favor, entregue rápido!');
    cy.contains('Place Order').click();

    cy.get('input[name="name_on_card"]').type('Nome Cartão');
    cy.get('input[name="card_number"]').type('1234123412341234');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type('2025');

    cy.contains('Pay and Confirm Order').click();

    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();
  });
});





