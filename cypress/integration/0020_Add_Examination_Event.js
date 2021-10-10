///    <reference types="cypress" /> 

//To add examination event
describe('0020_Add_Examination_Event', () => {

    it('0020.1_Add_Examination_Event' , () => {
        cy.wait(2000)
        cy.get("#add-event").should('be.visible').click()
        cy.wait(2000)
    
        //Check and click the Add Correspondence Event link
        cy.get("#OphCiExamination-link").should('be.visible').click()
    
        cy.wait(2000)
    })
})
