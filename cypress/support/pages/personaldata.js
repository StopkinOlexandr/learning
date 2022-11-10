export class PersonData {
    firstnameData(firstname) {
        cy.xpath('//input[@data-test="firstName"]')
            .type(firstname)
    }
    lastnameData(lastname) {
        cy.xpath('//input[@data-test="lastName"]')
            .type(lastname)
    }
    zipPostCode(postcode) {
        cy.xpath('//input[@data-test="postalCode"]')
            .type(postcode)
    }
    continueCheckout() {
        cy.xpath('//input[@name="continue"]').click()
    }
}
export const personData = new PersonData