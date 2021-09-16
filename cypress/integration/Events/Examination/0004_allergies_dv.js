describe('0004_Allergies_Element_DI', () => {

it('0004.7_To_Validate_Allergies_Section_isAvailable' , () => {
    cy.get('[data-element-type-name="Allergies"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Allergies"] > header > h3').should('contain',  'Allergies')
})


it('0004.8_To_Validate_Saved_Data'  , () => {
  cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
   cy.get('[data-element-type-name="Allergies"] > div > div > div > div > table > tbody > tr > td >ul > li').eq(0).should('be.visible').should('contain', addexaminationevents.Allergies)
   cy.get('[data-element-type-name="Allergies"] > div > div > div > div > table > tbody > tr > td >ul > li > span').eq(0).should('be.visible').should('contain', addexaminationevents.Allergies_Reaction)
  })
})

})