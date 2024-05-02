//click on the link using label
//over writing existing contains() command
//re-usuable custom comman

describe ('Custome commands', () => {
    it.skip("handling links", () => {
        cy.visit("https://rozetka.com.ua/ua/");
        cy.clickLink("Рушник");
       // cy.get("[class='tile__inner']>rz-button-product-page>a.product-link.tile__picture").first().click();
        cy.get(':nth-child(1) > .tabs__link').should('have.text', ' Усе про товар ')

    })

    it.only("Log in to Rozetka", () => {
        cy.login('lshpylova@gmail.com', 'Gargantua1');
    })

})