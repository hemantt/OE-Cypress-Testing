//Test script for Stereoacuity element
describe('0315_Stereoacuity_Element_DV', () => {

    it('0315.9_Validate_Stereoacuity_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Stereoacuity"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Stereoacuity"] > header > h3').should('be.visible').should('contain', 'Stereoacuity')
    }) 
  
    it('0315.10_Validate_Stereoacuity_Element_Details' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#js-listview-stereoacuity-pro > ul > li').should('be.visible').should('contain', orthoptictesting.Stereoacuity_Method + " - " + orthoptictesting.Stereoacuity_Has_Value + " (" + orthoptictesting.Stereoacuity_Correction + ", CHP " + orthoptictesting.Stereoacuity_CHP)
      })
    }) 
  
  })
  