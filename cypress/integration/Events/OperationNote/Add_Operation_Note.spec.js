///    <reference types="cypress" /> 

//To add Operation Note event
describe('Add_Operation_Note_Event', () => {

    it('Add_Operation_Note_Event' , () => {
        cy.get("#add-event").should('be.visible').click()
    
        //Check and click the Add Operation Note event link
        cy.get("#OphTrOperationnote-link").should('be.visible').click()
    })
})