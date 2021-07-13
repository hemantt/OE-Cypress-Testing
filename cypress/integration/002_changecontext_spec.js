///    <reference types="cypress" /> 

// Test starts now --> 
describe('002_ChangeContext', () => {
        
    // Before running the test, first perform login, then change-context and then search operations
    before(function() {  
            
        //Calling login operation, from command
        cy.login()
        
    })

    // Click on "Change" link
        it('2.1_User clicks on change link', () => { 
            
                    
            cy.get("#change-firm").should('be.visible').click()
            
    
        })
        
        // Check if the Pop up - Select a new Site and/or Context is displayed
        it('2.2_isPopUpDisplayed', () => { 
            
            cy.get(".oe-popup>.title").should('be.visible')
            .should('have.text','Select a new Site and/or Context')
                
                
        })
        
        // Select Context and Save the change by clicking Confirm
        it('2.3_User Selects Cataract as Context and Clicks Confirm Change', () => { 
            
            cy.fixture("context.json").then((context) => {
                    
                cy.get('select').then($Other => {$Other.val(context.OptionValue)})
    
                cy.get(".align-right > .green").click()                
            
            })
                
        })
    
        // The saved context should now be reflected on the homepage
        it('2.3_Is Chosen Context Visible on Homepage', () => { 
                
            cy.fixture("context.json").then((context) => {          
            
                cy.get('#change-firm').parent().should('contain',context.Name)
            
            })
                          
        })
    
})
    