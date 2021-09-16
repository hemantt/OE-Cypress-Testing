describe('0022_Contrast_Sensitivity_Element_DI', () => {

  

      //Add the  Contrast_Sensitivity elements
      it('22.1_To_add_Contrast_Sensitivity_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Contrast-Sensitivity').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
      })

      //Verify that  Contrast_Sensitivity is loaded successfully
      it('22.2_To_Validate_ Contrast_Sensitivity_isAvailable' , () => {
        cy.get('[data-element-type-name="Contrast Sensitivity"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Contrast Sensitivity"] > header > h3').should('contain' , 'Contrast Sensitivity')
      })
     
      //To validate Contrast Sensitivity Headers
      it('22.3_To_Check_Headers_Field' , () => {
        cy.get('#OEModule_OphCiExamination_models_ContrastSensitivity_entry_table > thead > tr > :nth-child(1)').should('have.text' , 'Sensitivity')
        cy.get('#OEModule_OphCiExamination_models_ContrastSensitivity_entry_table > thead > tr > :nth-child(2)').should('have.text' , 'Value')
        cy.get('#OEModule_OphCiExamination_models_ContrastSensitivity_entry_table > thead > tr > :nth-child(3)').should('have.text' , 'Laterality')
        cy.get('#OEModule_OphCiExamination_models_ContrastSensitivity_entry_table > thead > tr > :nth-child(4)').should('have.text' , 'Correction')

      })

    
      //Add and verify Contrast_Sensitivity 

      it('22.4_To_Add and verify Contrast Sensitivity' , () => {

        cy.get('#add-contrastsensitivity-popup > .hint').should('be.visible').click()
        
        //Add and verify Contrast_Sensitivity  as mentioned in the contrastsensitivity  file
    cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
        cy.get('[data-id="OEModule_OphCiExamination_models_ContrastSensitivity[results][{{row_count}}]_contrastsensitivity_type_id"]').eq(1).contains(contrastsensitivity.Contrast_Sensitivity_Sensitivity).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_ContrastSensitivity[results][{{row_count}}]_value"]').eq(1).contains(contrastsensitivity.Contrast_Sensitivity_Value).click()
        cy.get('[data-id="OEModule_OphCiExamination_models_ContrastSensitivity[results][{{row_count}}]_eye_id"]').eq(1).contains(contrastsensitivity.Contrast_Sensitivity_Laterality).parent().click()
        cy.get('[data-id="OEModule_OphCiExamination_models_ContrastSensitivity[results][{{row_count}}]_correctiontype_id"]').eq(1).contains(contrastsensitivity.Contrast_Sensitivity_Correction).click()
        
        //to click on the add button to close to popup window
        cy.get('#add-contrastsensitivity-popup >  div > div + div ').should('be.visible').click()
     })
    })
       //To add comments
       it('22.5_To_add_comments' , () => {
        cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
        cy.get('[data-comment-container="#OEModule_OphCiExamination_models_ContrastSensitivity_form .js-comment-container"]').should('be.visible').click()

      //Add comments to the contrast sensitivity, as mentioned in the contrastsensitivity file
       cy.get('#OEModule_OphCiExamination_models_ContrastSensitivity_comments').should('be.visible').clear().type(contrastsensitivity.Contrast_Sensitivity_Comments)
})

  })

})

