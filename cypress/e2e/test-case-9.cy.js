describe('Test Case 9 - Search Product', () => {
  it('Searches for a product and verifies the results', () => {
    const searchTerm = 'POLO';

    // 1-2. Launch browser and navigate to URL
    cy.visit('/');

    // 3. Verify home page is visible
    cy.get('header').should('be.visible');

    // 4. Click on 'Products' button
    cy.contains('Products').click();

    // 5. Verify user is navigated to ALL PRODUCTS page
    cy.url().should('include', '/products');
    cy.get('.features_items').should('be.visible');

    // 6. Enter product name in search input and click search button
    cy.get('#search_product').type(searchTerm);
    cy.get('#submit_search').click();

    // 7. Verify products are visible
    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);

    // 8. Verify each product contains the search term (case-insensitive)
    cy.get('.product-image-wrapper').each(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        expect(text.toUpperCase()).to.include(searchTerm.toUpperCase());
      });
    });
  });
});


