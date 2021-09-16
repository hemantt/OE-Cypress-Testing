//Test script for Prism Reflex Test element
describe('0062_Prism_Reflex_Test_Element_DI', () => {

    //Add the Prism Reflex Test element
    it('0062.1_To_Add_Prism_Reflex_Test_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Prism-Reflex-Test').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Prism Reflex Test element is loaded successfully
    it('0062.2_To_Validate_Prism_Reflex_Test_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Prism Reflex Test"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Prism Reflex Test"] > header > h3').should('be.visible').should('contain', 'Prism Reflex Test')
    })

    //Verify that the labels are loaded successfully
    it('0062.3_To_Validate_Lables' , () => {
        cy.get('#OEModule_OphCiExamination_models_PrismReflex_entry_table > thead > tr > :nth-child(1)').should('be.visible').should('contain' , 'Dioptres')
        cy.get('#OEModule_OphCiExamination_models_PrismReflex_entry_table > thead > tr > :nth-child(2)').should('be.visible').should('contain' , 'Correction')
        cy.get('#OEModule_OphCiExamination_models_PrismReflex_entry_table > thead > tr > :nth-child(3)').should('be.visible').should('contain' , 'Prism')
        cy.get('#OEModule_OphCiExamination_models_PrismReflex_entry_table > thead > tr > :nth-child(4)').should('be.visible').should('contain' , 'Finding')
        cy.get('#OEModule_OphCiExamination_models_PrismReflex_entry_table > thead > tr > :nth-child(5)').should('be.visible').should('contain' , 'CHP')
      })

      //Add and verify the Prism Reflex Test details and values
    it('0062.4_To_Add_And_Verify_Details' , () => {
      cy.get('#add-prismreflex-popup > button + button').should('be.visible').click()

      //Add details
      cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
        cy.get('[data-id="OEModule_OphCiExamination_models_PrismReflex\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_prismdioptre_id"]').contains(orthoptictesting.Prism_Reflex_Test_Dioptres).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_PrismReflex\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_correctiontype_id_\\{\\{row_count\\}\\}"]').contains(orthoptictesting.Prism_Reflex_Test_Correction).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_PrismReflex\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_prismbase_id"]').contains(orthoptictesting.Prism_Reflex_Test_Prism).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_PrismReflex\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_finding_id"]').contains(orthoptictesting.Prism_Reflex_Test_Finding).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_PrismReflex\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_with_head_posture_\\{\\{row_count\\}\\}"]').contains(orthoptictesting.Prism_Reflex_Test_CHP).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-prismreflex-popup > div > div + div").should('be.visible').click()
      })
    })

    //To add comments
    it('0062.5_To_Add_and_Verify_Comments' , () => {
        cy.get('#add-prismreflex-popup > button').eq(0).should('be.visible').click()

        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
  
          //Add comments
          cy.get('#OEModule_OphCiExamination_models_PrismReflex_comments').should('be.visible').clear().type(orthoptictesting.Prism_Reflex_Test_Comments)
        })
    })
})
