describe('Test Case 5 - Register with existing email', () => {
  it('Tentar registrar um usuário com email j´pa existente', () => {

    cy.fixture('user.json').then((user) => {
      cy.visit('/');

      cy.get('header').should('be.visible');

      cy.contains('Signup / Login').click();

      cy.contains('New User Signup!').should('be.visible');

      cy.get('input[data-qa="signup-name"]').type(user.name);
      cy.get('input[data-qa="signup-email"]').type(user.email);

      cy.get('button[data-qa="signup-button"]').click();

      cy.contains('Email Address already exist!').should('be.visible');
    });
  });
});
