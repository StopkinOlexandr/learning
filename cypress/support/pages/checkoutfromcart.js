export class CheckoutFromCart {
    checkout() {
        cy.xpath('//button[@name="checkout"]').click()
    }
}
export const checkoutFromCart = new CheckoutFromCart