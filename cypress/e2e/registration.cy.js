///<reference types="cypress"/>

import registrationPage from '../support/pages/registrationPage';


describe('Positive cases', () => {
  it.skip('Registration with Faker', () => {
  
    registrationPage.visit();

    registrationPage.submitRegistrationForm();

    registrationPage.checkSuccessMessage();

  })

  it.skip('Registration with hardcoded data (how NOT to do example)', () => {
    cy.visit('/');
    cy.get('#customer_menu_top').click();
    cy.get('#accountFrm button').click();

    cy.get('#AccountFrm_firstname').type('John');
    cy.get('#AccountFrm_lastname').type('Snow');
    cy.get('#AccountFrm_email').type('hrgrghfh@email.com');
    cy.get('#AccountFrm_address_1').type('Some address 1');
    cy.get('#AccountFrm_city').type('California');
    //обираємо перший елемент дропдауна
    cy.get('#AccountFrm_zone_id').select(1);
    cy.get('#AccountFrm_postcode').type('52032');
    cy.get('#AccountFrm_country_id').select('United Kingdom');
    cy.get('#AccountFrm_loginname').type('login23085405');
    cy.get('#AccountFrm_password').type('123456');
    cy.get('#AccountFrm_confirm').type('123456');
    cy.get('#AccountFrm_newsletter0').click();
    cy.get('#AccountFrm_agree').check();
    cy.get('button[title="Continue"]').click();

    cy.get('h1.heading1').should('contain', ' Your Account Has Been Created!')

  })
    //https://fakerjs.dev/guide/


})