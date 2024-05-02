describe('My Test suit', ()=>{

it('DataDrivenTest', ()=>{
  cy.fixture("orangehrm2").then((data)=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    data.forEach((userdata) => {
        cy.get('[name="username"]').type(userdata.username);
        cy.get('[type="password"]').type(userdata.password);
        cy.get('[type="submit"]').click();

  if(userdata.username=="Admin" && userdata.password=="admin123"){
    cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
      .should('have.text', userdata.expected);
      cy.get('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
      cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
  }
  else{
    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
  }
})
})
})
})
