
describe('File Upload', ()=>{

    it('Single file Upload',()=>{
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get('[id="file-upload"]').selectFile('cypress/fixtures/QA_Olena Shpylova_.pdf');
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get('#content div h3').should('have.text','File Uploaded!');

    })
    it('Several files Upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('[id="file-upload"]').selectFile(['cypress/fixtures/QA_Olena Shpylova_.pdf', 'cypress/fixtures/MyFile.pdf']);
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get('#content div h3').should('have.text','File Uploaded!');
    
        })
    it.only('File Upload - Drag and drop', ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('[id="file-upload"]').selectFile('cypress/fixtures/QA_Olena Shpylova_.pdf', {action:'drag-drop'});
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get('#content div h3').should('have.text','File Uploaded!');
    
    })    
    

})