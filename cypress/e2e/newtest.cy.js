  describe('All Products page ', () => {
    it('Search by product name', () => {
      cy.visit('https://automationexercise.com/products');
      cy.get('input#search_product').type("blue top"); 
      cy.get('button#submit_search').click();
      cy.get('[href="/product_details/1"]').click();
      cy.get('.product-information h2').contains('Blue Top');
      
    })

    it('Find all cards on the page',() => {
      cy.visit('https://automationexercise.com/products');
      cy.xpath('//div[contains(@class,"single-products")]').should('have.length',34);

    })
    })