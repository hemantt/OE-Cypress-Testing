describe('0004_Allergies_Element_DI', () => {
//Verify that Allergies section is loaded successfully
it('0004.9_To_Validate_Allergies_Section_IsAvailable' , () => {
    cy.get('[data-element-type-name="Allergies"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Allergies"] > header > h3').should('contain',  'Allergies')
})

//Validate saved data is loaded successfully
it('0004.10_To_Validate_Saved_Data'  , () => {
  cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
   cy.get('[data-element-type-name="Allergies"] > div > div > div > div > table > tbody > tr > td >ul > li').eq(0).should('be.visible').should('contain', addexaminationevents.Allergies_Allergies)
   cy.get('[data-element-type-name="Allergies"] > div > div > div > div > table > tbody > tr > td >ul > li > span').eq(0).should('be.visible').should('contain', addexaminationevents.Allergies_Reaction)
  })
})

})