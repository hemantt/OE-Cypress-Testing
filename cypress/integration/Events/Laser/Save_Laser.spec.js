//Test script for saving Laser event
describe('Save_Laser_Event', () => {

    it('Save_Laser_Event' , () => {
    cy.get('#et_save').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text','Laser created.')
  }) 

})