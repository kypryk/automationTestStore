///<reference types="cypress"/>
import AuthorizationPage from '../support/pages/AuthorizationPage';
import AccountPage from '../support/pages/AccountPage';
import user from '../fixtures/user.json';

describe('Positive cases', () => {
  it('Login', () => {
    AuthorizationPage.visit();
    AuthorizationPage.submitLoginForm(user.userName, user.password);

    AccountPage.getUserNameFromHeading().should('contain', user.firstName).and('contain', ' My Account')
    cy.getCookie('AC_SF_8CEFDA09D5').should('exist');

  })

  it('Test inheritance', () => {
    AuthorizationPage.visit();
    AuthorizationPage.performSearch('i');
  })
});  

describe('Negative cases', () => {
  it('Non existent user', () => {
    AuthorizationPage.visit();
    AuthorizationPage.submitLoginForm('notausername', 'blabla');
    AuthorizationPage.getValidationErrorMessage().should('contain', 'Error: Incorrect login or password provided.');
    AuthorizationPage.checkForLoginUrl();
  })

  it('Existing user, wrong pass', () => {
    AuthorizationPage.visit();
    AuthorizationPage.submitLoginForm(user.userName, 'blabla');
    AuthorizationPage.getValidationErrorMessage().should('contain', 'Error: Incorrect login or password provided.');
    AuthorizationPage.checkForLoginUrl();
  })

  it('Empty fields', () => {
    AuthorizationPage.visit();
    AuthorizationPage.getLoginButton().click();
    AuthorizationPage.getValidationErrorMessage().should('contain', 'Error: Incorrect login or password provided.');
    AuthorizationPage.checkForLoginUrl();
  })

});




