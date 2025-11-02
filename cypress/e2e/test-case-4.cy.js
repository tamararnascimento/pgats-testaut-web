describe('Test Case 4 - Login and Logout User', () => {
  it('Loga com usuário registrado e desloga', () => {

    cy.fixture('user.json').then((user) => {
      cy.visit('/');

      cy.get('header').should('be.visible');

      cy.contains('Signup / Login').click();

      cy.contains('Login to your account').should('be.visible');

      cy.get('input[data-qa="login-email"]').type(user.email);
      cy.get('input[data-qa="login-password"]').type(user.password);
      cy.get('button[data-qa="login-button"]').click();

      cy.contains(`Logged in as ${user.name}`).should('be.visible');

      cy.contains('Logout').click();

      cy.url().should('include', '/login');
      cy.contains('Login to your account').should('be.visible');
    });
  });
});




