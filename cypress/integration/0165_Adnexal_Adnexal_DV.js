//Test suite for Add Examination Event
describe('0165_Adnexal_Adnexal_DV', () => {

  it('0165.9_Validate_Adnexal_Element_Header' , () => {
      
    cy.get('[data-element-type-name="Adnexal"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Adnexal"] > header > h3').should('be.visible').should('contain', 'Adnexal')
  }) 

  it('0165.09_Verify_Saved_messages', () => {
      cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
          cy.get("[data-element-type-name='Adnexal'] > div").should('contain',AddExaminationEvents_Adnexal.Adnexal_Add)

          cy.get("[data-element-type-name='Adnexal'] > div").should('contain',AddExaminationEvents_Adnexal.Adnexal_Add2)
          
      })
    })  
    
    
    }) 