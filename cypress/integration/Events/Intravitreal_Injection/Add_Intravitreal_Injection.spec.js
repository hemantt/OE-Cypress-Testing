///    <reference types="cypress" /> 

//To add Intravitreal Injection event
describe('Add_Intravitreal_Injection_Event', () => {

    it('Add_Intravitreal_Injection_Event' , () => {
        cy.get("#add-event").should('be.visible').click()
    
        //Check and click the Add Intravitreal Injection event link
        cy.get("#OphTrIntravitrealinjection-link").should('be.visible').click()
    
    })
})