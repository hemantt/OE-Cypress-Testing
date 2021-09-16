///    <reference types="cypress" /> 

//To add Laser event
describe('Add_Laser_Event', () => {

    it('Add_Laser_Event' , () => {
        cy.get("#add-event").should('be.visible').click()
    
        //Check and click the Add Laser event link
        cy.get("#OphTrLaser-link").should('be.visible').click()
    
    })
})