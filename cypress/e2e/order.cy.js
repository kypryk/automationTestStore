///<reference types="cypress"/>
import user from '../fixtures/user.json';
import {searchExistingProduct} from '../support/helper'
import {searchProduct} from '../support/helper'
import {searchProductWithRecursion} from '../support/helper'
import checkoutConfirmationPage from '../support/pages/checkoutConfirmationPage';
import productPage from '../support/pages/productPage'
import shoppingCardPage from '../support/pages/shoppingCardPage'

it.skip('Placing order', () => {
    
  //авторизуємось задаючи збережене кукі юзера
  cy.setCookie("AC_SF_8CEFDA09D5", user.cookie)
  //cy.setCookie("customer", user.cookieCustomer)

  cy.visit('/index.php?rt=product/product&product_id=52')

  productPage.addToCard('4');
  shoppingCardPage.clickCheckout();
  checkoutConfirmationPage.clickConfirmOrder();
  checkoutConfirmationPage.getHeadingMessage()
  .should('contain', " Your Order Has Been Processed!");
  checkoutConfirmationPage.getOrderSummary()
  .should('contain', "Thank you for shopping with us!");

})

it.skip('Placing order', () => {
    
  //авторизуємось задаючи збережене кукі юзера
  //cy.setCookie("AC_SF_8CEFDA09D5", user.cookie)
  //cy.setCookie("customer", user.cookieCustomer)
  
  cy.visit('/index.php?rt=account/login');
  cy.get('#loginFrm_loginname').type(user.userName);
  cy.get('#loginFrm_password').type(user.password);
  cy.get('button[title="Login"]').click();

  cy.get('#filter_keyword')
  .type("i")
  .closest('form')
  .submit();

  searchProductWithRecursion('Benefit Bella Bamba'); //Benefit Bella Bamba
  productPage.addToCard('4');
  shoppingCardPage.clickCheckout();
  checkoutConfirmationPage.clickConfirmOrder();
  checkoutConfirmationPage.getHeadingMessage()
  .should('contain', " Your Order Has Been Processed!");
  checkoutConfirmationPage.getOrderSummary()
  .should('contain', "Thank you for shopping with us!")

})


