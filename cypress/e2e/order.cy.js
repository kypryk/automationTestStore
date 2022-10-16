///<reference types="cypress"/>
import user from '../fixtures/user.json';
import {searchExistingProduct} from '../support/helper'
import checkoutConfirmationPage from '../support/pages/checkoutConfirmationPage';
import productPage from '../support/pages/productPage'
import shoppingCardPage from '../support/pages/shoppingCardPage'

it('Placing order', () => {
    
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

it('Placing order', () => {
    
  //авторизуємось задаючи збережене кукі юзера
  cy.setCookie("AC_SF_8CEFDA09D5", user.cookie)
  //cy.setCookie("customer", user.cookieCustomer)
  
  cy.visit('/');

  searchExistingProduct('Benefit Bella Bamba');
  productPage.addToCard('4');
  shoppingCardPage.clickCheckout();
  checkoutConfirmationPage.clickConfirmOrder();
  checkoutConfirmationPage.getHeadingMessage()
  .should('contain', " Your Order Has Been Processed!");
  checkoutConfirmationPage.getOrderSummary()
  .should('contain', "Thank you for shopping with us!")

})
