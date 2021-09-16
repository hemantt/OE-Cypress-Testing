describe('0014_Communication_Preference_Element', () => {

    //To add  element 
      it('0014.1_To_Add_Communication_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Communication-Preferences').should('be.visible').click()
        cy.get('.blue').should('be.visible').click() 
      
    }) 
     
     //Verify that Communication Preferences section is loaded successfully 
    it('0014.2_To_Validate_Communication_Preferences _Section_isAvailable' , () => {
        cy.get('[data-element-type-name="Communication Preferences"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Communication Preferences"] > header > h3').should('contain' , 'Communication Preferences')
     })

    // Verify Labels
    it('0014.3_To_Verify_Labels_are_Loaded_successfully' , () => {
        cy.get('[data-element-type-name="Communication Preferences"] > table  > tbody > tr > td  > label').should('be.visible').scrollIntoView().should('contain', ' Large print for correspondence')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_correspondence_in_large_letters').scrollIntoView().should('be.visible')
        cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_agrees_to_insecure_email_correspondence').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Communication Preferences"] > table > tbody > tr  + tr > td > div > div  > label').should('be.visible').should('contain', ' Agrees to insecure email correspondence')       

     
    })   
    // To select Large print for correspondence
    it('0014.6_To_Add_Large print for correspondence' , () => {
    cy.fixture("addexaminationevents.json").then((addexaminationevents) => {

        //Get the value of Large_print_for_correspondence, as mentioned in the addexaminationevent json file
        const cntLarge_print_for_correspondence = addexaminationevents.Large_print_for_correspondence

        //If Large_print_for_correspondence is mentiond as Yes, in the addexaminationevent json file,
        //then click the "Large print for correspondence" checkbox, and verify the same
        if(cntLarge_print_for_correspondence == "Yes")
        {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_correspondence_in_large_letters").should('be.visible').check()
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_correspondence_in_large_letters").should('be.visible').should('be.checked')
        }
    })

      // To select Agrees to insecure email correspondence
    it('0014.5_To_add_check_Agrees_to_insecure_email_correspondence' , () => {
        cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
       cy.get('[data-element-type-name="Communication Preferences"] > table  > tbody > tr > td  >  div > div > label').should('be.visible').should('contain', addexaminationevents.Agrees_to_insecure_email_correspondence)
    })

    })
    })
})    






     
