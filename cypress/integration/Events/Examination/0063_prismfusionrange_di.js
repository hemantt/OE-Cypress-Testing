//Test script for Prism Fusion Range element
describe('0063_Prism_Fusion_Range_Element_DI', () => {

    //Add the Prism Fusion Range element
    it('0063.1_To_Add_Prism_Reflex_Test_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Prism-Fusion-Range').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
    })

    //Verify that Prism Fusion Range element is loaded successfully
    it('0063.2_To_Validate_Prism_Fusion_Range_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Prism Fusion Range"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Prism Fusion Range"] > header > h3').should('be.visible').should('contain', 'Prism Fusion Range')
    })

    //Verify that the labels are loaded successfully
    it('0063.3_To_Validate_Lables' , () => {
        cy.get('.no-line > :nth-child(1)').should('be.visible').should('contain' , 'Prism over')
        cy.get('.no-line > :nth-child(2)').should('be.visible').should('contain' , 'Near')
        cy.get('.no-line > :nth-child(3)').should('be.visible').should('contain' , 'Distance')
        cy.get('.no-line > :nth-child(4)').should('be.visible').should('contain' , 'Correction')
        cy.get('.no-line > :nth-child(5)').should('be.visible').should('contain' , 'CHP')
      })

      //Add and verify the Prism Reflex Test details and values
    it('0063.4_To_Add_And_Verify_Details' , () => {
      cy.get('#add-prismfusionrange-popup > button + button').should('be.visible').click()

      //Add details
      cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
        cy.get('[data-id="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_prism_over_eye_id"]').contains(orthoptictesting.Prism_Fusion_Range_Prism_Over).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_correctiontype_id_\\{\\{row_count\\}\\}"]').contains(orthoptictesting.Prism_Fusion_Range_Correction).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[\\{\\{row_count\\}\\}\\]_with_head_posture_\\{\\{row_count\\}\\}"]').contains(orthoptictesting.Prism_Fusion_Range_CHP).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-prismfusionrange-popup > div > div + div").should('be.visible').click()
      })
    })

    //To add Near values
    it('0063.5_To_Add_Near_Values' , () => {
        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
  
          cy.get('[name="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[0\\]\\[near_bo\\]"]').should('be.visible').clear().type(orthoptictesting.Prism_Fusion_Range_Near_BO_Value)
          cy.get('[name="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[0\\]\\[near_bi\\]"]').should('be.visible').clear().type(orthoptictesting.Prism_Fusion_Range_Near_BI_Value)
          cy.get('[name="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[0\\]\\[near_bu\\]"]').should('be.visible').clear().type(orthoptictesting.Prism_Fusion_Range_Near_BU_Value)
          cy.get('[name="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[0\\]\\[near_bd\\]"]').should('be.visible').clear().type(orthoptictesting.Prism_Fusion_Range_Near_BD_Value)
        })
    })

    //To add Distance values
    it('0063.6_To_Add_Distance_Values' , () => {
        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
  
          cy.get('[name="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[0\\]\\[distance_bo\\]"]').should('be.visible').clear().type(orthoptictesting.Prism_Fusion_Range_Distance_BO_Value)
          cy.get('[name="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[0\\]\\[distance_bi\\]"]').should('be.visible').clear().type(orthoptictesting.Prism_Fusion_Range_Distance_BI_Value)
          cy.get('[name="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[0\\]\\[distance_bu\\]"]').should('be.visible').clear().type(orthoptictesting.Prism_Fusion_Range_Distance_BU_Value)
          cy.get('[name="OEModule_OphCiExamination_models_PrismFusionRange\\[entries\\]\\[0\\]\\[distance_bd\\]"]').should('be.visible').clear().type(orthoptictesting.Prism_Fusion_Range_Distance_BD_Value)
        })
    })

    //To add comments
    it('0063.7_To_Add_and_Verify_Comments' , () => {
        cy.get('#add-prismfusionrange-popup > button').eq(0).should('be.visible').click()

        cy.fixture("orthoptictesting.json").then((orthoptictesting) => {
  
          //Add comments
          cy.get('#OEModule_OphCiExamination_models_PrismFusionRange_comments').should('be.visible').clear().type(orthoptictesting.Prism_Fusion_Range_Comments)
        })
    })

})
