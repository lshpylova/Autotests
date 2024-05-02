
describe('Hooks plus fixture', ()=>{
let userdata;
before( ()=>{
    cy.fixture("orangehrm").then(( data)=>{
        userdata=data;
    })
})

it('FixtureDemoTest', ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').type(userdata.username);
        cy.get('[type="password"]').type(userdata.password);
        cy.get('[type="submit"]').click();
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text').should('have.text', userdata.expected);

})
})