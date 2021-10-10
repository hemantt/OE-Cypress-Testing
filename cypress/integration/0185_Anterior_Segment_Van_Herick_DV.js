//Test script for Van Herick element
describe('0185_Van_Herick_Element_DV', () => {

    it('0185.9_Validate_Van_Herick_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Van Herick"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Van Herick"] > header > h3').should('be.visible').should('contain', 'Van Herick')
    }) 
  
    it('0185.10_Validate_Van_Herick_Grade_Right_Eye' , () => {
      
      cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((Anterior_Segment_Anterior_Segment) => {
        cy.get('[data-element-type-name="Van Herick"] > div > div > table > tbody > tr > td').should('be.visible').should('contain', Anterior_Segment_Anterior_Segment.Van_Herick_Grade_Right_Eye)
      })
    }) 

    it('0185.11_Validate_Van_Herick_Comments_Right_Eye' , () => {
      
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((Anterior_Segment_Anterior_Segment) => {
          cy.get('[data-element-type-name="Van Herick"] > div > div > table > tbody > tr + tr > td').should('be.visible').should('contain', Anterior_Segment_Anterior_Segment.Van_Herick_Right_Eye_Comments)
        })
      }) 

      it('0185.12_Validate_Van_Herick_Grade_Left_Eye' , () => {
      
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((Anterior_Segment_Anterior_Segment) => {
          cy.get('[data-element-type-name="Van Herick"] > div > div + div > table > tbody > tr > td').should('be.visible').should('contain', Anterior_Segment_Anterior_Segment.Van_Herick_Grade_Left_Eye)
        })
      }) 
  
      it('0185.13_Validate_Van_Herick_Comments_Left_Eye' , () => {
        
          cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((Anterior_Segment_Anterior_Segment) => {
            cy.get('[data-element-type-name="Van Herick"] > div > div + div > table > tbody > tr + tr > td').should('be.visible').should('contain', Anterior_Segment_Anterior_Segment.Van_Herick_Left_Eye_Comments)
          })
        }) 
      
  })
