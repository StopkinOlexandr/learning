export class Products {
    sortProducts() {
        cy.xpath('//select[@class="product_sort_container"]').select('lohi')
    }
    checkSort() {
        cy.xpath('//div[@class="inventory_item"]').should('be.visible')
        cy.xpath('//div[@class="inventory_item_price"]').should('be.visible')

        cy.xpath('//div[@class="inventory_item_price"]').then(($prices) => {
            const innerText = (el) => el.innerText
            const firstWord = (text) => text.split(' ')[0]
            const justDigits = (str) => str.replace(/[^0-9.]/g, '')
            const prices = Cypress._.map($prices, (el) =>
                parseFloat(justDigits(firstWord(innerText(el)))),
            )
            // confirm the "prices" array is already sorted
            const sorted = Cypress._.sortBy(prices)
            expect(sorted).to.deep.equal(prices)
            return prices
        })
    }
    cooseCheepest() {
        cy.xpath('//div[@class="pricebar"]["Add to cart"]')
            .first()
            .click()
    }
    goToCart() {
        cy.xpath('//div[@class="inventory_item_name"]').first()
            .then(($itemName) => {
                const productName = $itemName.text().trim()
                cy.xpath('//a[@class="shopping_cart_link"]', { timeout: 30000 }).click()
                cy.xpath('//div[@class="inventory_item_name"]')
                    .should(($itemInCart) => {
                        expect($itemInCart.text())
                            .eq(productName)
                    })
            })
    }
}
export const products = new Products