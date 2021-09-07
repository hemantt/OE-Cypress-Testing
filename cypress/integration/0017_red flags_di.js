describe('0017_Red Flags_Element_ DI', () => {

    //Add the Red flags elements
   it('0017.1_To_add_Red Flags Element' , () => {
    cy.get("#js-manage-elements-btn").should('be.visible').click()
    cy.get('#manage-elements-Red-Flags').should('be.visible').click()
    cy.get('.blue').should('be.visible').click()
   })

   //Verify Red flags section is loaded successfully
   it('0017.2_To_Validate_Red flags_Section_isAvailable' , () => {
    cy.get('[data-element-type-name="Red Flags"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Red Flags"] > header > h3').should('be.visible').should('contain', 'Red Flags')

})

   // Verify the Lables
   it('0017.3_To_Verify_Labels_Loaded_successfully' , () => {
    cy.get('[data-element-type-name="Red Flags"] >  div  > div  > div  > label').scrollIntoView().should('contain', ' No red flags for current attendance')
    cy.get('#OEModule_OphCiExamination_models_Element_OphCiExamination_AE_RedFlags_nrf_check').should('be.visible')
     
})

  //Add and verify the Red Flags details 
  it('0017.4_Add_and_Verify _Red_Flags' , () => {
      cy.get('#show-add-rf-popup').should('be.visible').click()
    
  //Add details
  cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
      cy.get('#red_flag_list > div > ul').contains(addexaminationevents.Red_Flag_Data).click()

  //Click the button to close the popup, post the selections made on the popup window
      cy.get('[data-element-type-name="Red Flags"] >  div  > div + div + div  > div  + div').should('be.visible').click()


})

})
})
