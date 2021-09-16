//Test script for saving Operation Note event
describe('Save_Operation_Note_Event', () => {

    it('Save_Operation_Note_Event' , () => {
    cy.get('#et_save').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text','Operation note created.')
  }) 

})