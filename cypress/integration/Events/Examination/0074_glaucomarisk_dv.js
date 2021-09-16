//Test script for Glaucoma Risk element
describe('0074_Glaucoma_Risk_Element_DV', () => {

    it('0074.9_Validate_Glaucoma_Risk_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Glaucoma Risk"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Glaucoma Risk"] > header > h3').should('be.visible').should('contain', 'Glaucoma Risk')
    }) 
  
    it('0074.10_Validate_Glaucoma_Risk' , () => {
      
        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
          cy.get('[data-element-type-name="Glaucoma Risk"] > div > div > span').should('be.visible').should('contain', orthoptictesting.Glaucoma_Risk)
        })
    }) 
    
  })
