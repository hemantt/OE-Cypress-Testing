///    <reference types="cypress" /> 

//To add examination event
describe('0040_Add_Examination_Event', () => {

    it('0040.1_Add_Examination_Event' , () => {
        cy.wait(2000)
        cy.get("#add-event").should('be.visible').click()
        cy.wait(2000)
    
        //Check and click the Add Examination Event link
        cy.get("#OphCiExamination-link").should('be.visible').click()
    
        cy.wait(2000)
    })
})
