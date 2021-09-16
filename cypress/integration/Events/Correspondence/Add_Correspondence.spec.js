///    <reference types="cypress" /> 

//To add Correspondence event
describe('Add_Correspondence_Event', () => {

    it('Add_Correspondence_Event' , () => {
        cy.get("#add-event").should('be.visible').click()
    
        //Check and click the Add Correspondence Event link
        cy.get("#OphCoCorrespondence-link").should('be.visible').click()
    
    })
})