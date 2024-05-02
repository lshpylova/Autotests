describe('Alerts', () => {


//Simple JS alert
it.skip('Js alert', ()=>{


cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
cy.get('button[onclick="jsAlert()"]').click();
cy.on('window:alert',(t)=>{
    expect(t).to.contains('I am a JS Alert');
})
//alert window automatically closed by cypress
cy.get("#result").should('have.text', 'You successfully clicked an alert')

})

//JS Confirm Alert(have OK and Cancel button. Click on the Ok button)
it('Js confirmation alert', ()=>{


    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Alert');
    })
    //alert window automatically closed by cypress
    cy.get("#result").should('have.text', 'You clicked: Ok')
    
    })


    //JS Confirm Alert(have OK and Cancel button. Click on the Ok button)
it('Js confirmation alert. CLick Cancel button', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    cy.get('button[onclick="jsConfirm()"]').click();

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm');
    })
    cy.on('window:confirm',()=>false);//cypress closes alert window using cancel button

    cy.get("#result").should('have.text', 'You clicked: Cancel')
    
    })


//JS Promt Alert(use Ok button)
it('Js JS Promt alert', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    
    cy.window().then((win)=>{
        cy.stub(win, 'prompt').returns('welcome');
    })

    cy.get('button[onclick="jsPrompt()"]').click();
    //cypress will automatically close prompted alert - it will use Ok button by default
    cy.get("#result").should('have.text', 'You entered: welcome')
    
    })

    //JS Promt Alert(use Cancel button)
it('Js JS Promt alert', ()=>{
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    
    cy.window().then((win)=>{
        cy.stub(win, 'prompt').returns('welcome');
    })

    cy.get('button[onclick="jsPrompt()"]').click();
    cy.on('window:prompt', ()=>false);
    //cypress will automatically close prompted alert - it will use Ok button by default
    cy.get("#result").should('have.text', 'You entered: welcome')
    
    })

    //Authenticated Alert
    it.only('Basic Auth - First Approach',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
                                                                 {
                                                                    username: "admin",
                                                                    password: "admin"
                                                                }
                                                            });
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations');                                                            

})

 //Authenticated Alert - Second Approach
 it.only('Basic Auth - Second Approach',()=>{
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations');                                                            
})
})