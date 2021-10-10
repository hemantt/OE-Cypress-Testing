//Test suite for Add Examination Event
describe('0170_Adnexal_Lids_Surgical_DV', () =>  {

    it('0170.12_Validate_Lids_Surgical_Element_Header' , () => {
      
        cy.get('[data-element-type-name="Lids Surgical"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Lids Surgical"] > header > h3').should('be.visible').should('contain', 'Lids Surgical')
      }) 

      //Verification of saved values of Adnexal - Lids Surgical 
    it('0170.13_Verify_Saved_messages', () => {
        cy.fixture("AddExaminationEvents_Adnexal.json").then((AddExaminationEvents_Adnexal) => {
            cy.get("[data-element-type-name='Lids Surgical'] > div > div > div > div > div + div").eq(0).should('contain',AddExaminationEvents_Adnexal.Lids_Surgical_Label_R)

            cy.get("[data-element-type-name='Lids Surgical'] > div > div > div > div > div + div").eq(1).should('contain',AddExaminationEvents_Adnexal.Lids_Surgical_Label_L)
            
          })
          })  


           
       
})