describe('Test Case 3 - Login User with incorrect email and password', () => {
  it('Tentar logar com credenciais incorretas e verificar o erro', () => {

    cy.visit('/');

    cy.get('header').should('be.visible');

    cy.contains('Signup / Login').click();

    cy.contains('Login to your account').should('be.visible');

    cy.get('input[data-qa="login-email"]').type('emailerrado@teste.com');
    cy.get('input[data-qa="login-password"]').type('SenhaErrada123');

    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
