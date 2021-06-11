describe('Login Tests', () => {
  before(() => {
    cy.visitSite()
  })
  it('Logs in to OpenEyes', () => {
    cy.loginTestUser()
    cy.contains('Cypress Tester').should('be.visible')
  })
  it('Logs out of OpenEyes', () => {
    cy.logout()
  })
})

describe('Basic Navigation Menu Tests', () => {
  before(() => {
    cy.visitSite()
  })
  beforeEach(() => {
    cy.loginTestUser()
  })
  it('Navigates to worklist page', () => {
    cy.navigateToWorklist()
    cy.contains('Worklists')
  })
  it('Toggles hotlist', () => {
    cy.toggleHotlist()
    cy.get('div.oe-hotlist-panel').should('be.visible')
    cy.toggleHotlist()
    cy.get('div.oe-hotlist-panel').should('not.be.visible')
  })
  afterEach(() => {
    cy.logout()
  })
})