import BasePage from "./BasePage";
import {faker} from '@faker-js/faker';

class registrationPage extends BasePage{
    visit(){
        cy.log('**Open registration page**')
        cy.visit('/');
        cy.get('#customer_menu_top').click();
        cy.get('#accountFrm button').click();
    }

    submitRegistrationForm(){

        let user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(), 
            email: faker.internet.email(),
            address: faker.address.streetAddress(),
            city: faker.address.city(), 
            postcode: faker.address.zipCode(),
            userName: faker.internet.userName(), 
            password: faker.internet.password(15)
          }

        cy.log("**Fill the registation form**");
        cy.get('#AccountFrm_firstname').type(user.firstName);
        cy.get('#AccountFrm_lastname').type(user.lastName);
        cy.get('#AccountFrm_email').type(user.email);
        cy.get('#AccountFrm_address_1').type(user.address);
        cy.get('#AccountFrm_city').type(user.city);
        cy.get('#AccountFrm_zone_id').select(1);
        cy.get('#AccountFrm_postcode').type(user.postcode);
        cy.get('#AccountFrm_country_id').select('United Kingdom');
        cy.get('#AccountFrm_loginname').type(user.userName);
        cy.get('#AccountFrm_password').type(user.password);
        cy.get('#AccountFrm_confirm').type(user.password);
        cy.get('#AccountFrm_newsletter0').click();
        cy.get('#AccountFrm_agree').check();
        cy.get('button[title="Continue"]').click();
    } 
    
    checkSuccessMessage(){
        cy.log("**Check the success message**");
        cy.get('h1.heading1').should('contain', ' Your Account Has Been Created!')
    }

}
export default new registrationPage();