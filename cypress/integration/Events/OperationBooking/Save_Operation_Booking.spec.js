//Test script for saving Operation Booking event
describe('Save_Operation_Booking_Event', () => {

    it('Save_Operation_Booking_Event' , () => {
    cy.get('#et_save_and_schedule').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text','Operation booking created.')
  }) 

})