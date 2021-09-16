///    <reference types="cypress" /> 

// Test starts now --> 
describe('004_Search Patient', () => {
 
    // Before running the test, first perform login, then change-context and then search operations
    before(() => {  
            
        //Calling search operation, from command
        cy.search()
        
    })
    
    it('4.1_User lands on Patient Overview Page post Successful Search', () => { 

        cy.wait(5000)
       
        // Check Patient Overview has loaded after succesful search
        cy.get(".event-header-title").should('be.visible').should('have.text','Patient Overview')
    
    })

})
