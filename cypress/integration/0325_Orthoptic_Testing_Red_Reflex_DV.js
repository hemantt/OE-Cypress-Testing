//Test script for Red Reflex element
describe('0325_Red_Reflex_Element_DV', () => {

    it('0325.9_Validate_Red_Reflex_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Red Reflex"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Red Reflex"] > header > h3').should('be.visible').should('contain', 'Red Reflex')
    }) 
  
    it('0325.10_Validate_Red_Reflex_Element_Details_Right_Eye' , () => {
      
      cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Red Reflex"] > div > div > div').should('be.visible').should('contain', orthoptictesting.Red_Reflex_Has_Red_Reflex_Right_Eye)
      })
    }) 

    it('0325.11_Validate_Red_Reflex_Element_Details_Left_Eye' , () => {
      
        cy.fixture("AddExaminationEvents_Orthoptic_Testing.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Red Reflex"] > div > div + div').should('be.visible').should('contain', orthoptictesting.Red_Reflex_Has_Red_Reflex_Left_Eye)
        })
    }) 
    
  })
