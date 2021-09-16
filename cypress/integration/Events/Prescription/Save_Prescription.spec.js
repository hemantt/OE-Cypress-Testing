//Test script for saving Prescription event
describe('Save_Prescription_Event', () => {

    it('Save_Prescription_Event' , () => {
    cy.get('#et_save').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text','Prescription created.')
  }) 

})