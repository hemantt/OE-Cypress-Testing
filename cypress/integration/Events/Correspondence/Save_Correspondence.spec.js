//Test script for saving Correspondence event
describe('Save_Correspondence_Event', () => {

    it('Save_Correspondence_Event' , () => {
    cy.get('"#et_saveprint"').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text', 'Correspondence created.')
  }) 

})