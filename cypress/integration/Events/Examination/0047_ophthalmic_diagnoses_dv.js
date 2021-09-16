//Test suite for Ophthalmic Diagnoses element
describe('0047_Element_Ophthalmic_Diagnoses_DV', () => {

    it('0047.9_Validate_Ophthalmic_Diagnoses_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > header > h3').should('be.visible').should('contain', 'Eye Diagnoses')
    }) 
  
    it('0047.10_Validate_Further Findings' , () => {
      
      cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > div > div > div > table > tbody > tr > td > strong').scrollIntoView().should('be.visible')

      cy.fixture("ophthalmicdiagnoses.json").then((ophthalmicdiagnoses) => {
          cy.get('[data-element-type-name="Ophthalmic Diagnoses"] > div > div > div > table > tbody > tr > td > strong').should('be.visible').should('contain', ophthalmicdiagnoses.Ophthalmic_Diagnoses)
      })
    }) 
    
  })
