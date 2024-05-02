class Login{

    txtUserName = "[name='username']";
    txtPassword = '[type="password"]';
    buttonSubmit = '[type="submit"]';
    txtLogin = '[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]';


    setUserName(username){
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickLogin(){
        cy.get(this.buttonSubmit).click();
    }
    verifyLogin(){
        cy.get(this.txtLogin).should('have.text', 'Dashboard');
    }
}
export default Login;