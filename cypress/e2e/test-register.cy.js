import { faker } from '@faker-js/faker';
const fs = require('fs');

describe('Test Case 1 - Register User', () => {
  it('Criar um usário sem deletar', () => {
    const name = faker.person.firstName();
    const email = faker.internet.email();

    cy.visit('/');

    cy.get('header').should('be.visible');

    cy.contains('Signup / Login').click();

    cy.contains('New User Signup!').should('be.visible');

    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);

    cy.get('button[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');

    cy.get('input[id="id_gender1"]').check();
    cy.get('input[id="password"]').type('MinhaSenha123');
    cy.get('select[id="days"]').select('10');
    cy.get('select[id="months"]').select('May');
    cy.get('select[id="years"]').select('1990');

    cy.get('input[id="newsletter"]').check();
    cy.get('input[id="optin"]').check();

    cy.get('input[id="first_name"]').type('NomeTeste');
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

    cy.contains('Logout').click();
    cy.contains('Signup / Login').should('be.visible');

    cy.writeFile('cypress/fixtures/user.json', {
    name,
    email,
    password: 'MinhaSenha123'
    });

  });
});


