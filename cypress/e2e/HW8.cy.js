///<reference types="cypress"/>
import user from '../fixtures/user.json';
import {searchExistingProduct} from '../support/helper';

it('Placing order', () => {
    
  //авторизуємось задаючи збережене кукі юзера
  cy.setCookie("AC_SF_8CEFDA09D5", user.cookie)

  cy.visit('/');

  searchExistingProduct('a');

//get 20 titles
//take each one by one
//check the name
//if name eq click it
//else open next page
//if name eq click it
//else open next page
//if name eq click it
//else open next page
//if no more pages exist stop
  let length = {}

  cy.get('.col-md-3.col-sm-6.col-xs-12 a.prdocutname').invoke('attr', 'Title').then(productTitle => {
    console.log(`The products are: ${productTitle}`);
  });
  
  
  /*cy.get('.col-md-3.col-sm-6.col-xs-12 a.prdocutname').should('have.attr', 'Title').then(productTitle => {
  
    //cy.wrap(productTitle);
    //product.forEach((value) => {  
      console.log(`This is what we get: ${productTitle}`);
      
      if(productTitle == "Casual 3/4 Sleeve Baseball T-Shirt"){
        console.log('FOUND YOU!')
        //productTitle.click();
      }
    //});
  });*/
    
  
  cy.get('.pagination li>a').eq(-2).click();

  /*cy.get('#product_quantity').clear().type('1');
  cy.get('.productpagecart').click();
  cy.get('#cart_checkout1').click();
  cy.get('#checkout_btn').click();
  cy.get('h1.heading1').should('contain', " Your Order Has Been Processed!")
  cy.get('.contentpanel')
  .should('contain', "Thank you for shopping with us!")*/



})

let exampleArray = ['one', 'two', 'three'];
exampleArray.forEach(value => console.log(value));

let exampleObject = {
  name: 'Alina',
  job: 'QA'
};
//exampleObject.forEach((value) => {
//  console.log(value);
//});