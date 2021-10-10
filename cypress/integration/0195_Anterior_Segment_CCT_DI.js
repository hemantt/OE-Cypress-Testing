//Test script for Anterior_Segment_CCT element
describe('0195_Anterior_Segment_CCT_DI', () => {

    //Add the Anterior_Segment_CCT element
    it('0195.1_To_Anterior_Segment_CCT' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-CCT[class="added"]').length == 0)
          {
            cy.get('#manage-elements-CCT').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Anterior_Segment_CCT element is loaded successfully
    it('0195.2_To_Validate_Anterior_Segment_CCT_SectionisAvailable' , () => {
      cy.get('[data-element-type-name="CCT"] > header > h3').should('be.visible').should('contain', 'CCT')
    })

    //Verify that the labels are loaded successfully
    it('0195.3_Validate_Labels' , () => {  
    

        
        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_CCT_right_value>span.field-info')
        .should('be.visible').should('contain','µm, using')

        cy.get('#div_OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_CCT_left_value>span.field-info')
        .should('be.visible').should('contain','µm, using')



    })

      //Add  CCT Details
    it('0195.4_To_Add_Details' , () => {
      cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((anteriorsegment) => {
      
      // RIGHT EYE DETAILS  
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_CCT_right_value')
      .clear().type(anteriorsegment.CCT_Right_Value)

      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_CCT_right_method_id')
      .select(anteriorsegment.CCT_Right_Method_Id,{force: true})

      cy.get('#cct-right-comment-button').should('be.visible').click()
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_CCT_right_notes').clear().type(anteriorsegment.CCT_Right_Comment)

      // LEFT EYE DETAILS
      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_CCT_left_value')
      .clear().type(anteriorsegment.CCT_Left_Value)

      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_CCT_left_method_id')
      .select(anteriorsegment.CCT_Left_Method_Id,{force: true})

      cy.get('#cct-left-comment-button').should('be.visible').click()

      cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_CCT_left_notes').clear().type(anteriorsegment.CCT_Left_Comment)
      

      })
      
     
      
    })


  

})
