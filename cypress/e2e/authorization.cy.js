///<reference types="cypress"/>
import user from '../fixtures/user.json';

//exapmle of a test with all locators got directly in the test, don't do like this
  it('Login', () => {
    cy.visit('/index.php?rt=account/login');

    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('#loginFrm_password').type(user.password);

    cy.get('button[title="Login"]').click();
    cy.get('h1.heading1').should('contain', user.firstName).and('contain', ' My Account')
    
    cy.getCookie('AC_SF_8CEFDA09D5').should('exist');

})
