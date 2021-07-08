///    <reference types="cypress" /> 

// Before starting the test, get to a required state
before(function() {  
        
    cy.login()
    cy.search()

})

// Test starts now --> 
describe('004_Search Patient', () => {
 
    
    it('4.1_User lands on Patient Overview Page post Successful Search', () => { 
       
       // Check Patient Overview has loaded after succesful search
        cy.get(".event-header-title").should('be.visible').should('have.text','Patient Overview')
    
    })

})
