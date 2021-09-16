///    <reference types="cypress" /> 

//To add Consent Form event
describe('Add_Consent_Form_Event', () => {

    it('Add_Consent_Form_Event' , () => {
        cy.get("#add-event").should('be.visible').click()
    
        //Check and click the Add Consent Form Event link
        cy.get("#OphTrConsent-link").should('be.visible').click()
    
    })
})