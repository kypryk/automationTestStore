///<reference types="cypress"/>
import AuthorizationPage from '../support/pages/AuthorizationPage';
import AccountPage from '../support/pages/AccountPage';
import user from '../fixtures/user.json';

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
