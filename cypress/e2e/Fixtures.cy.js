describe("MyTestSuite", ()=>{
    //Direct access
    it.only('FixturesDemoTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture('orangehrm').then( (data)=>{

        cy.get('[name="username"]').type(data.username);
        cy.get('[type="password"]').type(data.password);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text', data.expected);

        })
        
    })
})