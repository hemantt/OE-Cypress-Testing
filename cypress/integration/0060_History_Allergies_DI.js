describe('0060_Allergies_Element_DI', () => {

  
      //Add the Allergies elements
       it('0060.1_To_Add_Allergies_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Allergies[class="added"]').length == 0)
            {
              cy.get('#manage-elements-Allergies').should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()

      })

    //Verify that Allergies section is loaded successfully
    it('0060.2_To_Validate_Allergies_Section_IsAvailable' , () => {
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
    
    //Verify the Labels
      it('0060.3_To_Validate_Labels' , () => {
      cy.get('#OEModule_OphCiExamination_models_Allergies_no_allergies').scrollIntoView().should('be.visible')
      cy.get('#OEModule_OphCiExamination_models_Allergies_no_allergies_wrapper > label').should('be.visible').scrollIntoView().should('contain', ' No allergies' )

      })

/*
  //To add and verify Allergies through Checkboxes
it('0060.4_To_Verify_No_Allergies_Checkbox' , () => {
    
  cy.get('#OEModule_OphCiExamination_models_Allergies_no_allergies_label').should('be.visible').click()

   })

it('0060.5_To save Allergies record and verify next page is loaded successfully' , () => {
    cy.get('#et_save').should('be.visible').click()

//Verify the next page header
cy.get('#flash-success').should('be.visible').should('contain.text', 'Examination created')
}) 
*/

    //Add and verify allergies through add button
    it('0060.6_To_Add_And_Verify_Allergies' , () => {
      cy.get('#OEModule_OphCiExamination_models_Allergies_no_allergies').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Allergies"] > div > div + div > button').should('be.visible').click()

    //Select the Allergies value, as mentioned in the addexaminationevents file
      cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
      if(addexaminationevents.Allergies_Allergies == "Other") 
      {
        cy.get('#history-allergy-popup > div > table > tbody > tr > td > div > div > ul').should('be.visible').contains(addexaminationevents.Allergies_Allergies).click()
        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#history-allergy-popup > div > div + div").should('be.visible').click()
        cy.get('#OEModule_OphCiExamination_models_Allergies_entries_0_other').should('be.visible').clear().type(addexaminationevents.Allergies_Others)
      }
      else
      {
        cy.get('#history-allergy-popup > div > table > tbody > tr > td > div > div > ul').should('be.visible').contains(addexaminationevents.Allergies_Allergies).click()
        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#history-allergy-popup > div > div + div").should('be.visible').click()
      }
      
      })
    })

    //To add Reaction
    it('0060.7_To_Add_And_Verify_Reaction' , () => {
      cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {

    //Add reaction, as mentioned in the addexaminationevent file
        cy.get("#OEModule_OphCiExamination_models_Allergies_entry_table > tbody > tr > td + td > select").select(addexaminationevents.Allergies_Reaction)
      })
    })

    //To add comments
    it('0060.8_To_Add_Allergies_Comments' , () => {
      cy.wait(1000)
      cy.get('#OEModule_OphCiExamination_models_Allergies_entries_0_comments_button').should('be.visible').click()

      cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {

    //Add comments to the Safeguarding , as mentioned in the addexaminationevents file
        cy.get('#OEModule_OphCiExamination_models_Allergies_entries_0_comments').should('be.visible').clear().type(addexaminationevents.Allergies_Comments)
      })
    })
  })
