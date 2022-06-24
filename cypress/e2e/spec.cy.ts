import {add, minus, multi, divide} from '../../helper/math'

describe('Test call video', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('a')
  .contains('get')
  })
})

describe('Unit Test Application Code', function () {

  before(() => {
    // check if the import worked correctly
    expect(add, 'add').to.be.a('function')
  })

  context('math.js', function () {
    it('can add numbers', function () {
      expect(add(1, 2)).to.eq(3)
    })

    it('can subtract numbers', function () {
      expect(minus(5, 12)).to.eq(-7)
    })

    it('can divide numbers', function () {
      expect(divide(27, 9)).to.eq(3)
    })

    it('can muliple numbers', function () {
      expect(multi(5, 4)).to.eq(20)
    })
  })
})