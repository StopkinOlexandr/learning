describe('Assert', () => {
    it('Assert Web Tests', () => {
        cy.visit('https://unsplash.com')
        cy.viewport(1600, 800)
        cy.location('protocol').should('eq', 'https:')
        cy.title().should('eq', 'Beautiful Free Images & Pictures | Unsplash')
        cy.get()

    })
})