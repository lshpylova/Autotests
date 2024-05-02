describe("Assertions demo", ()=>{

    it ("Implicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should('include','orangehrmlive');
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('contain','orangehrm');
    })

    it ("Implicit assertions, without cy.url", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should('include','orangehrmlive')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm');
    })

it ("Implicit assertions, without cy.url withot should but use and", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.url().should('include','orangehrmlive')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm');

    cy.title().should('include', 'Orange')
    .and('eq', "OrangeHRM")
    .and('contain', "HRM")

    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist');

})

it ("Check all the links on the page", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.xpath("//a").should('have.length', 5)
   
})

it ("Provide login and password and validate", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="username"]').should('have.value','Admin');
    
    cy.get('[name="password"]').type('admin123');
    cy.get('[name="password"]').should('have.value', 'admin123');
    cy.xpath("//a").should('have.length', 5)
   
})

it ("Explicit assertions", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    let expName="xyz";
    cy.get(".oxd-userdropdown-name").then( (x)=>{
        let actName=x.text();
        expect(actName).to.not.equal(expName)
        assert.notEqual(actName,expName)

    })
})

})