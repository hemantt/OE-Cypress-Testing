describe('0105_Communication_Preference_Element_DI', () => {

    //To add  Communication_Prefrence_Element
      it('0105.1_To_Add_Communication_Preference_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()

        cy.get('body').then((body) => {
      
            if (body.find('#manage-elements-Communication-Preferences[class="added"]').length == 0)
            {
                cy.get('#manage-elements-Communication-Preferences').should('be.visible').click()
            }
      
        })
      
        cy.get(".blue.hint.cols-full").should('be.visible').click()
      
    }) 
     
     //Verify that Communication Preferences section is loaded successfully 
    it('0105.2_To_Validate_Communication_Preferences _Section_IsAvailable' , () => {
        cy.get('[data-element-type-name="Communication Preferences"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Communication Preferences"] > header > h3').should('contain' , 'Communication Preferences')
     })

    // Verify Labels
    it('0105.3_To_Verify_Labels_Are_Loaded_Successfully' , () => {
        cy.get('[data-element-type-name="Communication Preferences"] > table  > tbody > tr > td  > label').should('be.visible').scrollIntoView().should('contain', ' Large print for correspondence')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_correspondence_in_large_letters').scrollIntoView().should('be.visible')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_agrees_to_insecure_email_correspondence').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Communication Preferences"] > table > tbody > tr  + tr > td > div > div  > label').should('be.visible').should('contain', ' Agrees to insecure email correspondence')       

     
    })   
    // To select Large print for correspondence
    it('0105.4_To_Add_Large_Print_For_Correspondence' , () => {
    cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {

        //Get the value of Large_print_for_correspondence, as mentioned in the addexaminationevent json file
        const cntCommunication_Preferences_Large_Print_For_Correspondence = addexaminationevents.Communication_Preferences_Large_Print_For_Correspondence

        //If Large_print_for_correspondence is mentiond as Yes, in the addexaminationevent json file,
        //then click the "Large print for correspondence" checkbox, and verify the same
        if(cntCommunication_Preferences_Large_Print_For_Correspondence == "Yes")
        {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_correspondence_in_large_letters").should('be.visible').check()
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_correspondence_in_large_letters").should('be.visible').should('be.checked')
        }
    })

      // To select Agrees to insecure email correspondence
    it('0105.5_To_Add_Check_Agrees_To_Insecure_Email_Correspondence' , () => {
        cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
       cy.get('[data-element-type-name="Communication Preferences"] > table  > tbody > tr > td  >  div > div > label').should('be.visible').should('contain', addexaminationevents.Communication_Preferences_Agrees_To_Insecure_Email_Correspondence)
    })

    })
    })
})    






     
