import BasePage from "./BasePage";

class shoppingCardPage extends BasePage{
    clickCheckout(){
        cy.log("**Click the checkout button**");
        cy.get('#cart_checkout1').click();
    }

}
export default new shoppingCardPage();