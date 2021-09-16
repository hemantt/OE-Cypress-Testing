//Test script for saving Intravitreal Injection event
describe('Save_Intravitreal_Injection_Event', () => {

    it('Save_Intravitreal_Injection_Event' , () => {
    cy.get('#et_save').should('be.visible').click()
    
    //Verify the next page header
    cy.get('#flash-success').should('be.visible').should('contain.text','Intravitreal injection created.')
  }) 

})