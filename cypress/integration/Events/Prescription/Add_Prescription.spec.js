///    <reference types="cypress" /> 

//To add Prescription event
describe('Add_Prescription_Event', () => {

    it('Add_Prescription_Event' , () => {
        cy.get("#add-event").should('be.visible').click()
    
        //Check and click the Add Prescription event link
        cy.get("#OphDrPrescription-link").should('be.visible').click()
    })
})