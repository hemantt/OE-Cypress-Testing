///    <reference types="cypress" /> 

//To add Operation Booking event
describe('Add_Operation_Booking_Event', () => {

    it('Add_Operation_Booking_Event' , () => {
        cy.get("#add-event").should('be.visible').click()
    
        //Check and click the Add Operation Booking event link
        cy.get("#OphTrOperationbooking-link").should('be.visible').click()
    })
})