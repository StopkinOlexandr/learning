describe("Log in", function () {
    it("Sign in", function () {
        cy.visit("https://unsplash.com")
        cy.contains("Log in").click()
        cy.get('input[type="email"]').type('email_sdfsdf@gmail.com')
        cy.get('input[type="submit"]').click()


    })
})