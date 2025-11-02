describe('Test Case 6 - Contact Us Form', () => {
  it('Enviar formulário de contato com sucesso', () => {
    cy.visit('/');

    cy.get('header').should('be.visible');

    cy.contains('Contact us').click();

    cy.contains('Get In Touch').should('be.visible');

    cy.get('input[name="name"]').type('Nome Teste');
    cy.get('input[name="email"]').type('emailteste@example.com');
    cy.get('input[name="subject"]').type('Assunto do Teste');
    cy.get('textarea[name="message"]').type('Mensagem de teste enviada pelo Cypress.');

    cy.get('input[type="file"]').attachFile('example.json');

    cy.get('input[name="submit"]').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Success! Your details have been submitted successfully.');
    });

    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

    cy.contains('Home').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});
