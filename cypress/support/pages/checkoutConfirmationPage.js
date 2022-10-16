import BasePage from "./BasePage";

class checkoutConfirmationPage extends BasePage{
    clickConfirmOrder(){
        cy.log("**Click confirm button**");
        cy.get('#checkout_btn').click();
    }

    getHeadingMessage(){
        cy.log("**Get the message in h1**");
        return cy.get('h1.heading1');
    }

    getOrderSummary(){
        cy.log("**Get the order summary text**");
        return cy.get('.contentpanel');
    }
}
export default new checkoutConfirmationPage();