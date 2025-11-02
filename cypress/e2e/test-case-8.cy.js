describe('Test Case 8 - Verify All Products and product detail page', () => {
  it('Verificar todos os produtos e detalhes do primeiro', () => {

    cy.visit('/');

    cy.get('header').should('be.visible');

    cy.contains('Products').click();

    cy.url().should('include', '/products');
    cy.contains('All Products').should('be.visible');

    cy.get('.features_items').should('be.visible');

    cy.get('.product-image-wrapper').first().within(() => {
      cy.contains('View Product').click();
    });

    cy.url().should('include', '/product_details');

    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible'); 
      cy.contains('Category:').should('be.visible');
      cy.get('span span').first().should('be.visible'); 
      cy.contains('Availability:').should('be.visible');
      cy.contains('Condition:').should('be.visible');
      cy.contains('Brand:').should('be.visible');
    });
  });
});




