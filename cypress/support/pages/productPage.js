import BasePage from "./BasePage";

class productPage extends BasePage{
    addToCard(quantity){
        cy.log(`**Add ${quantity} item(s) of product to the cart**`);
        cy.get('#product_quantity').clear().type(quantity);
        cy.get('.productpagecart').click();
    }

}
export default new productPage();