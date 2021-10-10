//Test script for Convergence & Accommodation element
describe('0295_Convergence_Accommodation_Element_DV', () => {

    it('0295.9_Validate_Convergence_And_Accommodation_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Convergence \\& Accommodation"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Convergence \\& Accommodation"] > header > h3').should('be.visible').should('contain', 'Convergence & Accommodation')
    }) 

    it('0295.10_Validate_Convergence_And_Accommodation_Element_Data_Correction' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#js-listview-convergenceaccommodation-pro > ul > li').should('be.visible').should('contain', orthoptictesting.Convergence_Accommodation_Correction)
      })
    }) 

    it('0295.11_Validate_Convergence_And_Accommodation_Element_Data_CHP' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#js-listview-convergenceaccommodation-pro > ul > li + li').should('be.visible').should('contain', "CHP: " + orthoptictesting.Convergence_Accommodation_CHP)
      })
    }) 

    it('0295.12_Validate_Convergence_And_Accommodation_Element_Data_Description' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('#js-listview-convergenceaccommodation-pro > ul > li + li + li').should('be.visible').should('contain', orthoptictesting.Convergence_Accommodation_Description)
      })
    }) 
})
