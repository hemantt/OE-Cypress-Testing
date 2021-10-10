//Test suite for Add Examination Event
describe('0175_Adnexal_Lids_Medical_DV', () =>  {

  it('0175.07_Validate_Lids_Medical_Element_Header' , () => {
      
    cy.get('[data-element-type-name="Lids Medical"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Lids Medical"] > header > h3').should('be.visible').should('contain', 'Lids Medical')
  }) 

  it('0175.08_Verify_Saved_messages', () => {
      cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
          cy.get("[data-element-type-name='Lids Medical'] > div > div > div > div + div").eq(0).should('contain',AddExaminationEvents_Adnexal.Lids_Medical_Type_R + " conjunctivitis with " + AddExaminationEvents_Adnexal.Lids_Medical_Hyperaemia_R + " hyperaemia")

          cy.get("[data-element-type-name='Lids Medical'] > div > div > div > div + div").eq(1).should('contain',AddExaminationEvents_Adnexal.Lids_Medical_Type_L + " conjunctivitis with " + AddExaminationEvents_Adnexal.Lids_Medical_Hyperaemia_L + " hyperaemia")                                        

          cy.get("[data-element-type-name='Lids Medical'] > div > div > div > div + div").eq(0).should('contain',AddExaminationEvents_Adnexal.Lids_Medical_CommentBox_R)

          cy.get("[data-element-type-name='Lids Medical'] > div > div > div > div + div").eq(1).should('contain',AddExaminationEvents_Adnexal.Lids_Medical_CommentBox_R)

          
        })
        })  
    
    
})