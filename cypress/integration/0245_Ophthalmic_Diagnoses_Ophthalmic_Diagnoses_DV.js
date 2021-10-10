//Test suite for Ophthalmic Diagnoses element
describe('0245_Element_Ophthalmic_Diagnoses_DV', () => {

    it('0245.9_Validate_Ophthalmic_Diagnoses_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > header > h3').should('be.visible').should('contain', 'Eye Diagnoses')
    }) 
  
    it('0245.10_Validate_Ophthalmic_Diagnoses' , () => {
      
      cy.fixture("AddExaminationEvents_Ophthalmic_Diagnoses.json").then((ophthalmicdiagnoses) => {
          cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > div > div > div  > table > tbody > tr > td > strong').should('be.visible').should('contain', ophthalmicdiagnoses.Ophthalmic_Diagnoses)
      })
    }) 
    
  })
