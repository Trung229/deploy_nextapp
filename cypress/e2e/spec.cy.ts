describe('Test call video', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1')
  .contains('get')
  })
})