//Test script for saving Examination event
describe('0030_Save_Examination_Event', () => {

    it('0030.1_Save_Examination_Event' , () => {
    cy.get('#et_save').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text', 'Examination created')
  }) 

})
