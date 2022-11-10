
export class OverView {
    finishCheckout() {
        cy.xpath('//button[@data-test="finish"]', { timeout: 30000 }).click()
    }
}
export const overView = new OverView