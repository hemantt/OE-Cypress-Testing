//Test script for saving eCVI event
describe('Save_eCVI_Event', () => {

    it('Save_eCVI_Event' , () => {
    cy.get('#et_save').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text','CVI created.')
  }) 

})