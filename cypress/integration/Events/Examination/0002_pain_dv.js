describe('0002_Pain_Element_DV', () => {
    it('0002.10_Validate_Pain_Element_Header' , () => {
      cy.get('[data-element-type-name="Pain"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Pain"] > header > h3').should('contain', 'Pain')
   })


it('0002.11_To_Validate_Saved_Data' , () => {
   cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
      cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr > td + td + td + td + td + td').eq(0).should('be.visible').should('contain', addexaminationevents.Pain_Button)
      //Not validating Date
      //cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr > td + td + td + td + td + td').eq(9).should('be.visible').should('contain', addexaminationevents.Pain_Date)
      cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr > td + td + td + td + td + td +td + td + td + td + td + td + td+ td + td').eq(0).should('be.visible').should('contain', addexaminationevents.Pain_Time_At)
      cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr > td + td + td + td + td + td +td + td + td + td + td + td + td+ td + td + td').eq(0).should('be.visible').should('contain', addexaminationevents.Pain_Comments)


})


})


     






})