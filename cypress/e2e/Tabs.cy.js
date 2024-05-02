describe('Handle tab-approach1', (()=>{

it('Approach1', ()=>{
    cy.visit("https://the-internet.herokuapp.com/windows");
    //need to remove target attribute to open tan in the same tab
    cy.get('a[href="/windows/new"]').invoke('removeAttr', 'target').click();

    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
    cy.wait(5000);
    cy.go('back'); //go to parent tab

})

it('Approach2', ()=>{
    cy.visit("https://the-internet.herokuapp.com/windows");
    // domains should be matched for both links in another  case we could not use appoach 2
    cy.get('a[href="/windows/new"]').then((er)=>{
        let url = er.prop('href');
        cy.visit(url);
    })
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
    cy.wait(5000);
    cy.go('back'); //go to parent tab

})
}))