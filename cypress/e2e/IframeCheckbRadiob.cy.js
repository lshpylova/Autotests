describe ("Check UI Elements", ()=>{

    it("Checking Radio Buttons",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.scrollTo('center');
        cy.frameLoaded('#frame-one796456169');
        cy.iframe()
        //find the radiobutton element inside frame
        .find('input#RESULT_RadioButton-1_0')
        .click({force: true});
        cy.iframe()
        //find the radiobutton element inside frame
        .find('input#RESULT_RadioButton-1_1').should('have.css','opacity','0')
        //element is overloped bt label that is why used force true
        .click({force: true})
        .should('be.checked');
    });

    it("Checking CheckBoxes",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/");
    //Select checkbox  
    cy.get('[id="sunday"]').check().should('be.checked');
    //Unselect Checkbox
    cy.get('[id="sunday"]').uncheck().should('not.be.checked')
    //Select all the checkboxes
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
    cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');
    //Select only first checkbox
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked');
    //Select last checkbox
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked');

   })

   })