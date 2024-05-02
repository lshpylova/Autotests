describe("Navigation", ()=>{
    it("Navigate throught the pages",()=>{
    cy.visit("https://allo.ua/");
    cy.viewport(1280, 720);
    cy.get('div[class="mh-links"]>a[href="https://allo.ua/ua/offline_stores/"]').click();
    cy.get('h1[class="content__title"]').should('have.text', "Адреса магазинів АЛЛО");
    cy.get('div[class="mh-links"]>a[href="https://allo.ua/ua/events-and-discounts/"]').click();
    cy.get('h1[class=promo-list__title]').should('have.text','\n      Акції\n    ');
    cy.go('back');
    cy.go('forward');
    cy.get('h1[class=promo-list__title]').should('have.text','\n      Акції\n    ');
    cy.go(-1);
    cy.get('h1[class="content__title"]').should('have.text', "Адреса магазинів АЛЛО");
    cy.reload();

    })
})