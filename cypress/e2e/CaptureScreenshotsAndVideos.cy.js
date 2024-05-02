describe('mysuite', ()=>{
    it('Capture screenshots and videos', ()=>{
        cy.visit('https://rozetka.com.ua/ua/');
        cy.viewport(1280, 720);
        cy.get('.fat-wrap > .menu-wrapper > .menu-categories > :nth-child(1) > .menu-categories__link').contains("Ноутбуки та комп’ютери").click();
        cy.get('.header__logo > .ng-star-inserted > img').click();

      //  cy.screenshot("homepage");
      //  cy.get('[alt="Rozetka Logo"]').screenshot('logo');
        cy.get('[id="fat-menu"]').should('be.hidden');
        
})
})