//Test script for Van Herick element
describe('0185_Van_Herick_Element_DI', () => {

    //Add the Van Herick element
    it('0185.1_To_Add_Van_Herick_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Van-Herick[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Van-Herick').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Van Herick element is loaded successfully
    it('0185.2_To_Validate_Van_Herick_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Van Herick"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Van Herick"] > header > h3').should('be.visible').should('contain', 'Van Herick')
    })

    //Verify that the labels are loaded successfully
    it('0185.3_To_Validate_Lables' , () => {
        cy.get('.right-eye > .active-form > .cols-9 > .cols-10 > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Grade')
        cy.get('.left-eye > .active-form > .cols-9 > .cols-10 > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Grade')
      })

    //Enter Grade Right Eye
    it('0185.4_Enter_Grade_Right_Eye' , () => {
      cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((Anterior_Segment_Anterior_Segment) => {
        cy.get('#OEModule_OphCiExamination_models_VanHerick_right_van_herick_id').should('be.visible').select(Anterior_Segment_Anterior_Segment.Van_Herick_Grade_Right_Eye)
      })
    })

    //Add Comments Right Eye
    it('0185.5_Add_Comments_Right_Eye' , () => {
        cy.get('#van-herick-right-comment-button').should('be.visible').click()
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((Anterior_Segment_Anterior_Segment) => {
          cy.get('#OEModule_OphCiExamination_models_VanHerick_right_notes').should('be.visible').clear().type(Anterior_Segment_Anterior_Segment.Van_Herick_Right_Eye_Comments)
        })
      })

      it('0185.6_Enter_Grade_Left_Eye' , () => {
        cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((Anterior_Segment_Anterior_Segment) => {
          cy.get('#OEModule_OphCiExamination_models_VanHerick_left_van_herick_id').should('be.visible').select(Anterior_Segment_Anterior_Segment.Van_Herick_Grade_Left_Eye)
        })
      })
    
    //Add Comments Left Eye
    it('0185.7_Add_Comments_Left_Eye' , () => {
      cy.get('#van-herick-left-comment-button').should('be.visible').click()
      cy.fixture("AddExaminationEvents_Anterior_Segment.json").then((Anterior_Segment_Anterior_Segment) => {
        cy.get('#OEModule_OphCiExamination_models_VanHerick_left_notes').should('be.visible').clear().type(Anterior_Segment_Anterior_Segment.Van_Herick_Left_Eye_Comments)
      })
    })

})
