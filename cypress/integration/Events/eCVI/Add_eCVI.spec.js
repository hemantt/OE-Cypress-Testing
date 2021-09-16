///    <reference types="cypress" /> 

//To add eCVI event
describe('Add_eCVI_Event', () => {

    it('Add_eCVI_Event' , () => {
        cy.get("#add-event").should('be.visible').click()
    
        //Check and click the Add eCVI Event link
        cy.get("#OphCoCvi-link").should('be.visible').click()
    
    })
})