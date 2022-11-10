/// <reference types="cypress" />
/// <reference types="@cypress/xpath" />


import { loginPage } from "../support/pages/loginpage"
import { products } from "../support/pages/products"
import { checkoutFromCart } from "../support/pages/checkoutfromcart"
import { personData } from "../support/pages/personaldata"
import { overView } from "../support/pages/overview"

describe('automationpractice', () => {

    it('test Saucedemo', () => {
        //cy.visit('https://docs.cypress.io/guides/overview/why-cypress')

        cy.visit('https://www.saucedemo.com/')

        loginPage.chooseUser()
        loginPage.choosePassword()
        loginPage.pressLogin()

        products.sortProducts()

        products.checkSort()
        products.cooseCheepest()
        products.goToCart()

        checkoutFromCart.checkout()

        personData.firstnameData('John')
        personData.lastnameData('Smith')
        personData.zipPostCode('12345')
        personData.continueCheckout()

        overView.finishCheckout()
    })

})
