//Test script for saving Consent Form event
describe('Save_Consent_Form_Event', () => {

    it('Save_Consent_Form_Event' , () => {
    cy.get('#et_save_print').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text', 'Consent form created.')
  }) 

})