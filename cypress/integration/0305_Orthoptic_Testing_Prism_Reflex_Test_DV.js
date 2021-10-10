//Test script for Prism Reflex Test element
describe('0305_Prism_Reflex_Test_Element_DV', () => {

    it('0305.9_Validate_Prism_Reflex_Test_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Prism Reflex Test"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Prism Reflex Test"] > header > h3').should('be.visible').should('contain', 'Prism Reflex Test')
    }) 
  
    it('0305.10_Validate_Prism_Reflex_Test_Element_Details' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#js-listview-prismreflex-pro > table > tbody > tr > td').should('be.visible').should('contain', orthoptictesting.Prism_Reflex_Test_Dioptres + ": " + orthoptictesting.Prism_Reflex_Test_Correction + ", CHP: " + orthoptictesting.Prism_Reflex_Test_CHP + ", " + orthoptictesting.Prism_Reflex_Test_Prism  + " - " + orthoptictesting.Prism_Reflex_Test_Finding)
      })
    }) 
  
    it('0305.11_Validate_Prism_Reflex_Test_Comments' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Prism Reflex Test"] > div > div + hr + div > span').should('be.visible').should('contain', orthoptictesting.Prism_Reflex_Test_Comments)
        })
      }) 
    })
