describe("Mouse Operations",()=>{
    
    
it.skip('MouseHover',() => {
cy.visit("https://demo.opencart.com");
cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").should('be.visible');
    });


it.skip('Righ click. Approach 1 - trigger context menu', ()=>{
//approach1
cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
cy.get("[class='context-menu-one btn btn-neutral']").trigger("contextmenu");
cy.get("[class='context-menu-item context-menu-icon context-menu-icon-copy']").should('be.visible');
});


it('Righ click. Approach 2 - right click', ()=>{
    //approach1
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    cy.get("[class='context-menu-one btn btn-neutral']").rightclick();
    cy.get("[class='context-menu-item context-menu-icon context-menu-icon-copy']").should('be.visible');
    });



 it('Drug and Drop using plugin', ()=>{
cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
cy.get("[id='box6']").drag('#box106', {force:true});

 });
 
 it.only('Scrolling Page', () => {
cy.visit("https://www.places-in-the-world.com/countries.html");
cy.get("[title='Colombia']").scrollIntoView({duration:2});
cy.get("[title='Colombia']").should("be.visible")
cy.get("[title='Afghanistan']").scrollIntoView({duration:2});
cy.get("[title='Afghanistan']").should("be.visible");
 });
    })  
