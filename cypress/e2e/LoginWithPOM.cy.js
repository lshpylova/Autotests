import Login from "../PageObjects/LoginPage"


describe ("Login wit POM", ()=>{
    it("Login wit POM",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const ln = new Login();
    ln.setUserName("Admin");
    ln.setPassword("admin123");
    ln.clickLogin();
    ln.verifyLogin();

})

it("Login wit POM",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.fixture('orangehrm3').then((data=>{
        const ln = new Login();
        ln.setUserName(data.username);
        ln.setPassword(data.password);
        ln.clickLogin();
        ln.verifyLogin();

    }))


})
})