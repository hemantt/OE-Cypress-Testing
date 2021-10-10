///    <reference types="cypress" /> 

// Test starts now --> 
describe('0520_Logout', () => {
 
    it('0520.1_Logout', () => { 

        cy.get("#js-logout-btn").should('be.visible').click()

    })

})
