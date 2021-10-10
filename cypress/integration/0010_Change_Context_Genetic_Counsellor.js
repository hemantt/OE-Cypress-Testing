///    <reference types="cypress" /> 

// Test starts now --> 
describe('0010_ChangeContext', () => {
        
    // Click on "Change" link
        it('0010.1_User clicks on change link', () => { 
                    
            cy.get("#change-firm").should('be.visible').click()
        })
        
        // Check if the Pop up - Select a new Site and/or Context is displayed
        it('0010.2_isPopUpDisplayed', () => { 
            
            cy.get(".oe-popup>.title").should('be.visible').should('have.text','Select a new Site and/or Context')
        })
        
        // Select Context and Save the change by clicking Confirm
        it('0010.3_User Selects Cataract as Context and Clicks Confirm Change', () => { 
            
            cy.fixture("context_Genetic_Counsellor.json").then((context) => {
                    
                cy.get('select').then($Other => {$Other.val(context.OptionValue)})
                cy.get(".align-right > .green").click()                
            })
        })
    
        // The saved context should now be reflected on the homepage
        it('0010.4_Is Chosen Context Visible on Homepage', () => { 
                
            cy.fixture("context_Genetic_Counsellor.json").then((context) => {          
            
                cy.get('#change-firm').parent().should('contain',context.Name)
            })
        })
})
