//Test script for Cover Test element
describe('0057_Cover_Test_Element_DI', () => {

    //Add the Cover Test element
    it('0057.1_To_Add_Corrective_Head_Posture_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Cover-Test').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Cover Test element is loaded successfully
    it('0057.2_To_Validate_Corrective_Head_Posture_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Cover Test"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Cover Test"] > header > h3').should('be.visible').should('contain', 'Cover Test')
    })

    //Verify that the labels are loaded successfully
    it('0057.3_To_Validate_Lables' , () => {
        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover_entry_table > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Distance')
        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover_entry_table > thead > tr > :nth-child(2)').should('be.visible').should('contain' , 'Correction')
        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover_entry_table > thead > tr > :nth-child(3)').should('be.visible').should('contain' , 'Comments')
        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover_entry_table > thead > tr > :nth-child(4)').should('be.visible').should('contain' , 'Horizontal')
        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover_entry_table > thead > tr > :nth-child(5)').should('be.visible').should('contain' , 'Vertical')
        cy.get('thead > tr > :nth-child(6)').should('be.visible').should('contain' , 'CHP')
      })

      //Add and verify the Cover Test details and values
    it('0057.4_To_Add_And_Verify_Details' , () => {
      cy.get('#add-coverandprismcover-popup > button + button').should('be.visible').click()

      //Add details
      cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
        cy.get('[data-id="OEModule_OphCiExamination_models_CoverAndPrismCover\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_distance_id"]').contains(orthoptictesting.Cover_Test_Distance).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_CoverAndPrismCover\\[entries\\]\\[\\{\\{row_count\}\}\\]_correctiontype_id"]').contains(orthoptictesting.Cover_Test_Correction).click()

        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_horizontal_value-number-digit-1').contains(orthoptictesting.Cover_Test_Prism_1).click()
        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_horizontal_value-number-digit-2').contains(orthoptictesting.Cover_Test_Value_1).click()

        cy.get('[data-id="OEModule_OphCiExamination_models_CoverAndPrismCover\\[entries\\]\\[\\{\\{row_count\}\}\\]_horizontal_prism_id"]').contains(orthoptictesting.Cover_Test_Prism_001).click()

        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_vertical_value-number-digit-1').contains(orthoptictesting.Cover_Test_Prism_2).click()
        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_vertical_value-number-digit-2').contains(orthoptictesting.Cover_Test_Value_2).click()

        cy.get('[data-id="OEModule_OphCiExamination_models_CoverAndPrismCover\\[entries\\]\\[\\{\\{row_count\}\}\\]_vertical_prism_id"]').contains(orthoptictesting.Cover_Test_Prism_002).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_CoverAndPrismCover\\[entries\\]\\[\\{\\{row_count\}\}\\]_with_head_posture"]').contains(orthoptictesting.Cover_Test_CHP).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-coverandprismcover-popup > div > div + div").should('be.visible').click()
      })
    })

    //To add short comments
    it('0057.5_To_Add_and_Verify_Short_Comments' , () => {
        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover_entry_table > tbody > tr > td + td + td > button').eq(0).should('be.visible').click()

        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {

          //Add short comments
          cy.get('#CPC-comment-0').should('be.visible').clear().type(orthoptictesting.Cover_Test_Short_Comments)
      })
    })

    //To add long comments
    it('0057.6_To_Add_and_Verify_Long_Comments' , () => {
      cy.get('#add-coverandprismcover-popup > button').eq(0).should('be.visible').click()

      cy.fixture("orthoptictesting.json").then((orthoptictesting) => {

        //Add long comments
        cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover_comments').should('be.visible').clear().type(orthoptictesting.Cover_Test_Long_Comments)
      })
  })

  //Verify Edit button
    it('0057.7_To_Verify_Edit_Button' , () => {
      //Verify and click the Edit button
      cy.get('#OEModule_OphCiExamination_models_CoverAndPrismCover_entry_table > tbody > tr > td + td + td + td + td + td + td > button').should('be.visible').should('have.text', 'Edit').click()

      //Click the button to close the popup
      cy.get("#add-coverandprismcover-popup > div > div + div").should('be.visible').click()
  })

})
