describe('Test get images', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io')
        cy.get('a')
        .contains("type")
        .click()
        cy.get(".action-email")
        .type("trungpham@gmail.com")
        .should('have.value','trungpham1@gmail.com')
    })
  })