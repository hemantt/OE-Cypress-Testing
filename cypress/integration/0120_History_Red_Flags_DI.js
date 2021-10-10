describe('0120_Red_Flags_Element_DI', () => {

    //Add the Red flags elements
   it('0120.1_To_Add_Red_Flags_Element' , () => {
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {
  
        if (body.find('#manage-elements-Red-Flags[class="added"]').length == 0)
        {
            cy.get('#manage-elements-Red-Flags').should('be.visible').click()
        }
  
    })
  
    cy.get(".blue.hint.cols-full").should('be.visible').click()

   })

   //Verify Red flags section is loaded successfully
   it('0120.2_To_Validate_Red_Flags_Section_IsAvailable' , () => {
    cy.get('[data-element-type-name="Red Flags"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Red Flags"] > header > h3').should('be.visible').should('contain', 'Red Flags')

})

   // Verify the Lables
   it('0120.3_To_Verify_Labels_Loaded_Successfully' , () => {
    cy.get('[data-element-type-name="Red Flags"] >  div  > div  > div  > label').scrollIntoView().should('contain', ' No red flags for current attendance')
    cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_AE_RedFlags_nrf_check').should('be.visible')
     
})

  //Add and verify the Red Flags details 
  it('0120.4_Add_And_Verify_Red_Flags' , () => {
      cy.get('#show-add-rf-popup').should('be.visible').click()
    
  //Add details
  cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
      cy.get('#red_flag_list > div > ul').contains(addexaminationevents.Red_Flag_Data).click()

  //Click the button to close the popup, post the selections made on the popup window
      cy.get('[data-element-type-name="Red Flags"] >  div  > div + div + div  > div  + div').should('be.visible').click()


})

})
})
