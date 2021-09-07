//Test script for Stereoacuity element
describe('0064_Stereoacuity_Element_DI', () => {

    //Add the Stereoacuity element
    it('0064.1_To_Add_Stereoacuity_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Stereoacuity').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Prism Reflex Test element is loaded successfully
    it('0064.2_To_Validate_Stereoacuity_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Stereoacuity"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Stereoacuity"] > header > h3').should('be.visible').should('contain', 'Stereoacuity')
    })

    //Verify that the labels are loaded successfully
    it('0064.3_To_Validate_Lables' , () => {
        cy.get('.cols-10 > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Method')
        cy.get('.cols-10 > thead > tr > :nth-child(2)').should('be.visible').should('contain' , 'Result')
        cy.get('.cols-10 > thead > tr > :nth-child(3)').should('be.visible').should('contain' , 'Correction')
        cy.get('.cols-10 > thead > tr > :nth-child(4)').should('be.visible').should('contain' , 'CHP')
      })

      //Add and verify the Prism Reflex Test details and values
    it('0064.4_To_Add_And_Verify_Details' , () => {
      cy.get('#add-stereoacuity-popup').should('be.visible').click()

      //Add details
      cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
        cy.get('[data-id="OEModule_OphCiExamination_models_StereoAcuity\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_method_id"]').contains(orthoptictesting.Stereoacuity_Method).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_StereoAcuity\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_inconclusive"]').contains(orthoptictesting.Stereoacuity_Has_Value).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_StereoAcuity\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_correctiontype_id_\\{\\{row_count\\}\\}"]').contains(orthoptictesting.Stereoacuity_Correction).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_StereoAcuity\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_with_head_posture_\\{\\{row_count\\}\\}"]').contains(orthoptictesting.Stereoacuity_CHP).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-stereoacuity-popup > div > div + div").should('be.visible').click()
      })
    })

    /*
      //Add Result
      it('0064.5_To_Add_Result' , () => {
        //Add Result
        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
          cy.get('#OEModule_OphCiExamination_models_StereoAcuity\\[entries\\]\\[0\\]_result_0').should('be.visible').clear.type(orthoptictesting.Stereoacuity_Result)
        })
      })
    */

})
