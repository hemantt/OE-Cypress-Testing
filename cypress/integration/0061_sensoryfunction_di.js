//Test script for Sensory Function element
describe('0061_Sensory_Function_Element_DI', () => {

    //Add the Sensory Function element
    it('0061.1_To_Add_Sensory_Function_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Sensory-Function').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Convergence & Accommodation element is loaded successfully
    it('0061.2_To_Validate_Convergence_Accommodation_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Sensory Function"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Sensory Function"] > header > h3').should('be.visible').should('contain', 'Sensory Function')
    })

    //Verify that the labels are loaded successfully
    it('0061.3_To_Validate_Lables' , () => {
        cy.get('.cols-10 > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Test Type')
        cy.get('.cols-10 > thead > tr > :nth-child(2)').should('be.visible').should('contain' , 'Distance')
        cy.get('.cols-10 > thead > tr > :nth-child(3)').should('be.visible').should('contain' , 'Correction')
        cy.get('.cols-10 > thead > tr > :nth-child(4)').should('be.visible').should('contain' , 'Result')
        cy.get('.cols-10 > thead > tr > :nth-child(5)').should('be.visible').should('contain' , 'CHP')
      })

      //Add and verify the Sensory Function details and values
    it('0061.4_To_Add_And_Verify_Details' , () => {
      cy.get('#add-sensoryfunction-popup').should('be.visible').click()

      //Add details
      cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
        cy.get('[data-id="OEModule_OphCiExamination_models_SensoryFunction\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_entry_type_id"]').contains(orthoptictesting.Sensory_Function_Test_Type).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_SensoryFunction\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_distance_id"]').contains(orthoptictesting.Sensory_Function_Distance).click()

        cy.get('[data-id="OEModule_OphCiExamination_models_SensoryFunction\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_correctiontypes"]').contains(orthoptictesting.Sensory_Function_Correction).click()

        cy.get('[data-id="OEModule_OphCiExamination_models_SensoryFunction\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_result_id"]').contains(orthoptictesting.Sensory_Function_Result).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_SensoryFunction\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_with_head_posture_\\{\\{row_count\\}\\}"]').contains(orthoptictesting.Sensory_Function_CHP).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-sensoryfunction-popup > div > div + div").should('be.visible').click()
      })
    })

})
