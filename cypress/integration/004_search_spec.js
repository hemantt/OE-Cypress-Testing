///    <reference types="cypress" /> 

// Test starts now --> 
describe('004_Search Patient', () => {
 
    // Before running the test, first perform login, then change-context and then search operations
    before(() => {  
            
        //Calling login operation, from command
        cy.login()
    
        //Calling change-context operation, from command
        cy.changecontext()
    
        //Calling search operation, from command
        cy.search()
        
    })
    
    it('4.1_User lands on Patient Overview Page post Successful Search', () => { 
       
       // Check Patient Overview has loaded after succesful search
        cy.get(".event-header-title").should('be.visible').should('have.text','Patient Overview')
    
    })

})
