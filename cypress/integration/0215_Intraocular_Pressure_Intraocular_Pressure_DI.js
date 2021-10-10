//Test script for Intraocular Pressure element
describe('0215_Intraocular_Pressure_Element_DI', () => {

    //Add the Cover Test element
    it('0215.1_To_Add_Intraocular_Pressure_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Intraocular-Pressure[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Intraocular-Pressure').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Intraocular Pressure element is loaded successfully
    it('0215.2_To_Validate_Intraocular_Pressure_isAvailable' , () => {
      cy.get('[data-element-type-name="Intraocular Pressure"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Intraocular Pressure"] > header > h3').should('be.visible').should('contain', 'Intraocular Pressure')
    })

      //Add and verify the Intraocular Pressure details and values, for right eye
    it('0215.3_To_Add_And_Verify_Details_For_Right_Eye' , () => {
      cy.get('#iop-right-comment-button + button').should('be.visible').click()

        //Add Intraocular Pressure information (Right eye), as mentioned in the intraocularpressure json file
        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {

          if (intraocularpressure.Intraocular_Pressure_Instrument_Right_Eye != "Goldmann")
          {
            cy.get("#instrument > div > ul").eq(0).contains(intraocularpressure.Intraocular_Pressure_Instrument_Right_Eye).click()
          }

          cy.get("#number-digit-0").eq(0).contains(intraocularpressure.Intraocular_Pressure_mm_Right_Eye).click()
          cy.get("#number-digit-1").eq(0).contains(intraocularpressure.Intraocular_Pressure_hg_Right_Eye).click()
      })

      cy.get("#add-to-iop > div + div").eq(0).should('be.visible').click()
    })

    //Add and verify the Intraocular Pressure details and values, for left eye
      it('0215.4_To_Add_And_Verify_Details_For_Left_Eye' , () => {
        cy.get('#iop-left-comment-button + button').should('be.visible').click()
  
          //Add Intraocular Pressure information (Left eye), as mentioned in the intraocularpressure json file
          cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
  
            if (intraocularpressure.Intraocular_Pressure_Instrument_Left_Eye != "Goldmann")
            {
              cy.get("#instrument > div > ul").eq(1).contains(intraocularpressure.Intraocular_Pressure_Instrument_Left_Eye).click()
            }
  
            cy.get('.left-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-to-iop > .select-options > tbody > tr > [data-adder-id="reading_value"] > #reading_value > .lists-layout > :nth-child(1)').contains(intraocularpressure.Intraocular_Pressure_mm_Left_Eye).click()
            cy.get('.left-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-to-iop > .select-options > tbody > tr > [data-adder-id="reading_value"] > #reading_value > .lists-layout > :nth-child(2)').contains(intraocularpressure.Intraocular_Pressure_hg_Left_Eye).click()
        })

        cy.get("#add-to-iop > div + div").eq(1).should('be.visible').click()
      })

      //Add Intraocular Pressure comment, for right eye
      it('0215.5_To_Add_Comments_For_Right_Eye' , () => {
        cy.get('#iop-right-comment-button').should('be.visible').click()
  
          //Add Intraocular Pressure comments (Right eye), as mentioned in the intraocularpressure json file
          cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
  
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_IntraocularPressure_right_comments").clear().type(intraocularpressure.Intraocular_Pressure_Comments_Right_Eye)
        })
      })

      //Add Intraocular Pressure comment, for left eye
      it('0215.6_To_Add_Comments_For_Left_Eye' , () => {
        cy.get('#iop-left-comment-button').scrollIntoView().should('be.visible')
        cy.get('#iop-left-comment-button').should('be.visible').click()
  
          //Add Intraocular Pressure comments (Left eye), as mentioned in the intraocularpressure json file
          cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
  
          cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_IntraocularPressure_left_comments").clear().type(intraocularpressure.Intraocular_Pressure_Comments_Left_Eye)
        })
      })

})
