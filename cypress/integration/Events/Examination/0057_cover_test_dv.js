//Test script for Cover Test element
describe('0057_Cover_Test_Element_DV', () => {

  it('0057.9_Validate_Cover_Test_Element_Header' , () => {
    
    cy.get('[data-element-type-name="Cover Test"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Cover Test"] > header > h3').should('be.visible').should('contain', 'Cover Test')
  }) 

  it('0057.10_Validate_Cover_Test_Element_Data_Distance_Correction_CHP_Comments_Prism1_Value1' , () => {
    
    cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
      cy.get('#js-listview-coverandprismcover-pro > ul > li').should('be.visible').should('contain',orthoptictesting.Cover_Test_Distance + ", " + orthoptictesting.Cover_Test_Correction + ", CHP: " + orthoptictesting.Cover_Test_CHP + ", " + orthoptictesting.Cover_Test_Short_Comments  + ", " + orthoptictesting.Cover_Test_Prism_1 + orthoptictesting.Cover_Test_Value_1)
    })
  }) 

  it('0057.11_Validate_Cover_Test_Element_Data_Prism001_Prism2_Value2' , () => {
    
    cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
      cy.get('#js-listview-coverandprismcover-pro > ul > li').should('be.visible').should('contain',orthoptictesting.Cover_Test_Prism_001 + ", " + orthoptictesting.Cover_Test_Prism_2 + orthoptictesting.Cover_Test_Value_2)
    })
  }) 

  it('0057.11_Validate_Cover_Test_Element_Data_Prism002' , () => {
    
    cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
      cy.get('#js-listview-coverandprismcover-pro > ul > li').should('be.visible').should('contain',orthoptictesting.Cover_Test_Prism_002)
    })
  }) 

  it('0057.13_Validate_Element_Data_Cover_Test_Comments' , () => {
    
    cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
      cy.get('[data-element-type-name="Cover Test"] > div > div > div > table > tbody > tr > td').should('be.visible').should('contain',orthoptictesting.Cover_Test_Long_Comments)
    })
  }) 
})
