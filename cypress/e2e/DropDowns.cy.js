describe ("Check  Elements", ()=>{

    it.skip("Checking Dropdown",()=>{
    cy.visit("https://testautomationpractice.blogspot.com");
    cy.frameLoaded('#frame-one796456169');
        cy.iframe()
           .find('select#RESULT_RadioButton-3')
           .select('QA Engineer')
           .should('contain', 'QA Engineer')


})

it.skip("Checking Auto suggesting Dropdown",()=>{
    cy.visit("https://www.wikipedia.org");
    cy.get("#searchInput").type('Ukraine');
    cy.get('.suggestion-title').contains('–NATO relations').click()

})

it("Dynamic Dropdown",()=>{
    cy.visit("https://www.google.com");
    cy.get('#APjFqb').type('cypress automation');
    cy.wait(3000);
    cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
        if($el.text()=='cypress automation testing'){
          cy.wrap($el).click();
        }

   })

   cy.get('#APjFqb').should('have.value', 'cypress automation testing')
})

})