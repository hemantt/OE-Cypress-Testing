//Test script for Red Reflex element
describe('0065_Red_Reflex_Element_DV', () => {

    it('0065.9_Validate_Red_Reflex_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Red Reflex"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Red Reflex"] > header > h3').should('be.visible').should('contain', 'Red Reflex')
    }) 
  
    it('0065.10_Validate_Red_Reflex_Element_Details_Right_Eye' , () => {
      
      cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
        cy.get('[data-element-type-name="Red Reflex"] > div > div > div').should('be.visible').should('contain', orthoptictesting.Red_Reflex_Has_Red_Reflex_Right_Eye)
      })
    }) 

    it('0065.11_Validate_Red_Reflex_Element_Details_Left_Eye' , () => {
      
        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Red Reflex"] > div > div + div').should('be.visible').should('contain', orthoptictesting.Red_Reflex_Has_Red_Reflex_Left_Eye)
        })
    }) 
    
  })
