describe('0004_Allergies_Element_DV', () => {

    //Add the Allergies elements
    it('4.1_To_add_Allergires_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Allergies').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()

    })

    //Verify that Allergies section is loaded successfully
    it('0004.2_To_Validate_Allergies_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Allergies"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Allergies"] > header > h3').should('contain',  'Allergies')

      cy.get('body').then(($body) => {

        const cnt = $body.find('#OEModule_OphCiExamination_models_Allergies_entry_table > tbody > tr > td + td + td + td > i').length
        var i;
        for(i = 0; i <= cnt-1; i++)
        {
          cy.get('#OEModule_OphCiExamination_models_Allergies_entry_table > tbody > tr > td + td + td + td > i').click()
        }
      })
    })
    
    // Verify the Labels
      it('0004.3_To_ Validate_Labels' , () => {
      cy.get('#OEModule_OphCiExamination_models_Allergies_no_allergies').scrollIntoView().should('be.visible')
      cy.get('#OEModule_OphCiExamination_models_Allergies_no_allergies_wrapper > label').should('be.visible').scrollIntoView().should('contain', ' No allergies' )

      })

/*
  //To add and verify Allergies through Checkboxes
it('4.3_To_Verify_No_Allergies_Checkbox' , () => {
    
  cy.get('#OEModule_OphCiExamination_models_Allergies_no_allergies_label').should('be.visible').click()

   })

it('4.4_To save Allergies record and verify next page is loaded successfully' , () => {
    cy.get('#et_save').should('be.visible').click()

//Verify the next page header
cy.get('#flash-success').should('be.visible').should('contain.text', 'Examination created')
}) 
*/

    //Add and verify allergies through add button
    it('0004.4_To_Add_and_Verify_Allergies' , () => {
      cy.get('[data-element-type-name="Allergies"] > div > div + div > button').should('be.visible').click()

      //Select the Allergies value, as mentioned in the addexaminationevents file
      cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
        
        cy.get('#history-allergy-popup > div > table > tbody > tr > td > div > div > ul').contains(addexaminationevents.Allergies).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#history-allergy-popup > div > div + div").should('be.visible').click()
      })
    })

    //To add Reaction
    it('0004.5_To_Add_and_Verify_Reaction' , () => {
      cy.fixture("addexaminationevents.json").then((addexaminationevents) => {

        //Add reaction, as mentioned in the addexaminationevent file
        cy.get("#OEModule_OphCiExamination_models_Allergies_entry_table > tbody > tr > td + td > select").select(addexaminationevents.Allergies_Reaction)
      })
    })

    //To add comments
    it('0004.6_To_Add_and_Verify_Comments' , () => {
      cy.wait(1000)
      cy.get('#OEModule_OphCiExamination_models_Allergies_entries_0_comments_button').should('be.visible').click()

      cy.fixture("addexaminationevents.json").then((addexaminationevents) => {

        //Add comments to the Safeguarding , as mentioned in the addexaminationevents file
        cy.get('#OEModule_OphCiExamination_models_Allergies_entries_0_comments').should('be.visible').clear().type(addexaminationevents.Allergies_Comments)
      })
    })

})

  
  
