//Test script for saving Messaging event
describe('Save_Messaging_Event', () => {

    it('Save_Messaging_Event' , () => {
    cy.get('#et_save').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text','Message created.')
  }) 

})