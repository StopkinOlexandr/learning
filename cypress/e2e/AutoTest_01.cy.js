///
///<reference types="Cypress" />
/*
типа выбрать товар  с самой низкой ценой 
из категории summer dresses добавить в корзину 
и проверить что это именно он

выбираешь самый дешевый товар, сохраняешь в 
переменную и проверяешь что в корзине такой же товар

допили флоу до конца, с регистрацией юзера и оплатой (там заглушки на все)
*/

describe('automationpractice', () => {
    it('By', () => {
        cy.visit('http://automationpractice.com/')
        cy.get('#block_top_menu > ul > li:nth-child(2) > a')
            .trigger('mousemove')
            .wait(2000)
            .get('[title="Summer Dresses"]')
            .first()
            .click({ force: true })
        cy.get('#selectProductSort').select('price:asc')
        //.wait(2000)
        cy.get('#center_column > ul', { timeout: 30000 }).should('have.attr', 'style', 'opacity: 1;')

        //нужно добавить id товара в переменную что бы потом сравнить с корзиной
        // добавляем в корзину самый дешевый
        cy.get('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.right-block > h5 > a')
            .then(($btn) => {
                //const productName = $btn.text()
                const productName = $btn.text().trim()


                cy.get('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default', { timeout: 30000 })
                    .should('be.visible')
                    .click()
                cy.get('#layer_cart_product_title').should(($span) => {
                    expect($span.text()).eq(productName)
                })
            })

        //жмем оформить
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span', { timeout: 30000 })
            .should('be.visible')
            .click()

        //оформляем покупку
        cy.get('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium')
            .click()

        cy.get('#email_create')
            .type('slow.typin02g@email.com', { delay: 100 })
        cy.get('#SubmitCreate > span')
            .click()

        // заполняем форму
        cy.get('#id_gender1', { timeout: 30000 }).check()
        cy.get('#customer_firstname')
            .type('John')
        cy.get('#customer_lastname')
            .type('Smith')
        cy.get('#passwd')
            .type('Smith_John')
        cy.get('#days').select('10')
        cy.get('#months').select('10')
        cy.get('#years').select('1999')
        cy.get('#address1')
            .type('Washington str.42')
        cy.get('#city')
            .type('New York')
        cy.get('#id_state').select('California')
        cy.get('#postcode').type('78000')
        cy.get('#phone_mobile').type('123456789')
        cy.get('#submitAccount > span').click()

        //третья страничка
        cy.get('#center_column > form > p > button > span', { timeout: 30000 }).click()
        //четвертая страничка
        cy.get('#cgv', { timeout: 30000 }).check()
        cy.get('#form > p > button > span', { timeout: 30000 }).click()
        //пятая страничка
        cy.get('#HOOK_PAYMENT > div:nth-child(1) > div > p > a', { timeout: 30000 }).click()
        cy.get('#cart_navigation > button', { timeout: 30000 }).click()


        //cy.get('#categories_block_left > div > ul > li.last > a').click()
        //cy.get('#selectProductSort').select('price:asc')
        //cy.get('#center_column > ul')
        //cy.get('#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')

        //cy.get('#selectProductSort.selectProductSort.form-control')
        //#selectProductSort > option: nth - child(2)
    })
})

