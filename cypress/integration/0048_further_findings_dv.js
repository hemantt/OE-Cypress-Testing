//Test suite for Further Findings element
describe('0048_Element_Further_Findings_DV', () => {

    it('0048.9_Validate_Further_Findings_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Further Findings"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Further Findings"] > header > h3').should('be.visible').should('contain', 'Further Findings')
    }) 
  
    it('0048.10_Validate_Further Findings' , () => {
      
        cy.fixture("ophthalmicdiagnoses.json").then((ophthalmicdiagnoses) => {
          cy.get('[data-element-type-name="Further Findings"] > div > div > span').should('be.visible').should('contain', ophthalmicdiagnoses.Further_Findings + ": " + ophthalmicdiagnoses.Further_Findings_Other_Description)
        })
    }) 
    
  })
