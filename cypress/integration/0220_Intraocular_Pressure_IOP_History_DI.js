//Test script for IOP History element
describe('0220_IOP_History_Element_DI', () => {

    //Add the IOP History element
    it('0220.1_To_Add_IOP_History_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-IOP-History[class="added"]').length == 0)
          {
            cy.get('#manage-elements-IOP-History').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that IOP History element is loaded successfully
    it('0220.2_To_Validate_IOP_History_isAvailable' , () => {
      cy.get('[data-element-type-name="IOP History"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="IOP History"] > header > h3').should('be.visible').should('contain', 'IOP History')
    })

      //Add and verify the IOP History details and values, for right eye
    it('0220.3_To_Add_And_Verify_Details_For_Right_Eye' , () => {
      cy.get('[data-element-type-name="IOP History"] > div > div > div > div > div > button').eq(0).should('be.visible').click()

        //Add IOP History information (Right eye), as mentioned in the intraocularpressure json file
        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {

          if (intraocularpressure.IOP_History_Instrument_Right_Eye != "Goldmann")
          {
            cy.get('.right-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="instrument"]').should('be.visible').contains(intraocularpressure.IOP_History_Instrument_Right_Eye).click()
          }

          cy.get('.right-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="reading_value"] > #reading_value > .lists-layout > :nth-child(1)').should('be.visible').contains(intraocularpressure.IOP_History_mm_Right_Eye).click()
          cy.get('.right-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="reading_value"] > #reading_value > .lists-layout > :nth-child(2)').should('be.visible').contains(intraocularpressure.IOP_History_Hg_Right_Eye).click()
          cy.get('.right-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="time"] > #time > .lists-layout > .list-wrap > #number-digit-0').should('be.visible').contains(intraocularpressure.IOP_History_Time_Right_Eye).click()
          cy.get('.right-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="time"] > #time > :nth-child(2)').should('be.visible').contains(intraocularpressure.IOP_History_Minutes_Right_Eye).click()

      })

      cy.get("#add-iop-value-to-historyIOP > div + div").eq(0).should('be.visible').click()

    })

    //Add IOP History date, for right eye
    it('0220.4_To_Add_Date_For_Right_Eye' , () => {

      //Add IOP History date (Right eye), as mentioned in the intraocularpressure json file
        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {

        cy.get("#OEModule_OphCiExamination_models_HistoryIOP_right_values_0_examination_date").should('be.visible').clear().type(intraocularpressure.IOP_History_Date_Right_Eye)
      })
    })

    //Add IOP History comment, for right eye
    it('0220.5_To_Add_Comments_For_Right_Eye' , () => {
      cy.get('#OEModule_OphCiExamination_models_HistoryIOP_right_values_0_comment_button').should('be.visible').click()

        //Add IOP History comments (Right eye), as mentioned in the intraocularpressure json file
        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {

        cy.get("#OEModule_OphCiExamination_models_HistoryIOP_right_values_0_right_comments").should('be.visible').clear().type(intraocularpressure.IOP_History_Comments_Right_Eye)
      })
    })

    //Add and verify the IOP History details and values, for left eye
      it('0220.6_To_Add_And_Verify_Details_For_Left_Eye' , () => {
        cy.get('[data-element-type-name="IOP History"] > div > div > div > div > div > button').eq(1).should('be.visible').click()
  
          //Add IOP History information (left eye), as mentioned in the intraocularpressure json file
          cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {
  
            if (intraocularpressure.IOP_History_Instrument_Left_Eye != "Goldmann")
            {
              cy.get('.left-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="instrument"]').should('be.visible').contains(intraocularpressure.IOP_History_Instrument_Left_Eye).click()
            }
  
            cy.get('.left-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="reading_value"] > #reading_value > .lists-layout > :nth-child(1)').should('be.visible').contains(intraocularpressure.IOP_History_mm_Left_Eye).click()
            cy.get('.left-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="reading_value"] > #reading_value > .lists-layout > :nth-child(2)').should('be.visible').contains(intraocularpressure.IOP_History_Hg_Left_Eye).click()
            cy.get('.left-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="time"] > #time > .lists-layout > .list-wrap > #number-digit-0').should('be.visible').contains(intraocularpressure.IOP_History_Time_Left_Eye).click()
            cy.get('.left-eye > .active-form > .add-data-actions > .flex-item-bottom > #add-iop-value-to-historyIOP > .select-options > tbody > tr > [data-adder-id="time"] > #time > :nth-child(2) > .add-options').should('be.visible').contains(intraocularpressure.IOP_History_Minutes_Left_Eye).click()
  
        })
  
        cy.get("#add-iop-value-to-historyIOP > div + div").eq(1).should('be.visible').click()
      })
  
    //Add IOP History date, for left eye
    it('0220.7_To_Add_Date_For_Left_Eye' , () => {

      //Add IOP History date (Right eye), as mentioned in the intraocularpressure json file
        cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {

        cy.get("#OEModule_OphCiExamination_models_HistoryIOP_left_values_0_examination_date").should('be.visible').clear().type(intraocularpressure.IOP_History_Date_Left_Eye)
      })
    })

    //Add IOP History comment, for left eye
      it('0220.8_To_Add_Comments_For_Left_Eye' , () => {
        cy.get('#OEModule_OphCiExamination_models_HistoryIOP_left_values_0_comment_button').scrollIntoView().should('be.visible')
        cy.get('#OEModule_OphCiExamination_models_HistoryIOP_left_values_0_comment_button').should('be.visible').click()
  
          //Add IOP History comments (left eye), as mentioned in the intraocularpressure json file
          cy.fixture("AddExaminationEvents_Intraocular_Pressure.json").then((intraocularpressure) => {

          cy.wait(2000)
  
          cy.get("#OEModule_OphCiExamination_models_HistoryIOP_left_values_0_left_comments").should('be.visible').clear().type(intraocularpressure.IOP_History_Comments_Left_Eye)
        })
      })
  
})
