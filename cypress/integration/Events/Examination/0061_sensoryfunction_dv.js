//Test script for Sensory Function element
describe('0061_Sensory_Function_Element_DV', () => {

    it('0061.9_Validate_Sensory_Function_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Sensory Function"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Sensory Function"] > header > h3').should('be.visible').should('contain', 'Sensory Function')
    }) 
  
    it('0061.10_Validate_Sensory_Function_Element_Details' , () => {
      
      cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
        cy.get('#js-listview-sensoryfunction-pro > ul > li').should('be.visible').should('contain',orthoptictesting.Sensory_Function_Test_Type + ", " + orthoptictesting.Sensory_Function_Distance + ", " + orthoptictesting.Sensory_Function_Correction + ", CHP " + orthoptictesting.Sensory_Function_CHP  + ": " + orthoptictesting.Sensory_Function_Result)
      })
    }) 
  
  })
  