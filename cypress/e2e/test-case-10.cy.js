describe('Test Case 10 - Verify Subscription in Home Page', () => {
  it('Inscrever-se', () => {
    const { faker } = require('@faker-js/faker');  
    const email = faker.internet.email();      

    cy.visit('/');

    cy.get('header').should('be.visible');

    cy.get('footer').scrollIntoView();

    cy.contains(/subscription/i).should('be.visible');

    cy.get('#susbscribe_email')  
      .type(email);
    cy.get('#subscribe')   
      .click();

    cy.contains('You have been successfully subscribed!').should('be.visible');
  });
});

