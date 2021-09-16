///    <reference types="cypress" /> 

//To add Messaging event
describe('Add_Messaging_Event', () => {

    it('Add_Messaging_Event' , () => {
        cy.get("#add-event").should('be.visible').click()
    
        //Check and click the Add Messaging event link
        cy.get("#OphCoMessaging-link").should('be.visible').click()
    })
})