//Test script for Anterior Segment CCT
describe('0207_Anterior_Segment_CCT_DV', () => {

  it('0207.5_Validate_Anterior_Segment_CCT_Element_Header' , () => {
    
    cy.get('[data-element-type-name="CCT"] > header > h3').should('be.visible').should('contain', 'CCT')
  
  })

  it('0207.6_Validate_CCT_Details_Right_Eye' , () => {
            
    cy.fixture("anteriorsegment.json").then((anteriorsegment) => {
      
      // Validate CCT Right Eye Input Data
      cy.get('[data-element-type-name="CCT"]>div>div>div').eq(0)
      .should('be.visible')
      .should('contain', anteriorsegment.CCT_Right_Value)
      .should('contain',anteriorsegment.CCT_Right_Method_Id)
      
      // Validate Right Comment
      cy.get('[data-element-type-name="CCT"]>div>div>div').eq(0)
      .should('be.visible')
      .should('contain', anteriorsegment.CCT_Right_Comment)
    
    })
   
  })

  it('0207.6_Validate_CCT_Details_Left_Eye' , () => {
            
    cy.fixture("anteriorsegment.json").then((anteriorsegment) => {
      
      // Validate CCT Left Eye Input Data
      cy.get('[data-element-type-name="CCT"]>div>div>div').eq(1)
      .should('be.visible')
      .should('contain', anteriorsegment.CCT_Left_Value)
      .should('contain',anteriorsegment.CCT_Left_Method_Id)

      // Validate Left Comment
      cy.get('[data-element-type-name="CCT"]>div>div>div').eq(1)
      .should('be.visible')
      .should('contain', anteriorsegment.CCT_Left_Comment)
    
    })
   
  })

 
   
  
})
