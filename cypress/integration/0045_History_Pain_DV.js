//To validate Pain element     
describe('0045_Pain_Element_DV', () => {
    it('0045.10_Validate_Pain_Element_Header' , () => {
      cy.get('[data-element-type-name="Pain"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Pain"] > header > h3').should('contain', 'Pain')
   })

// To validate Saved Data
it('0045.11_To_Validate_Saved_Data_Is_Loaded_Successfully' , () => {
   cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
      cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr > td + td + td + td + td + td').eq(0).should('be.visible').should('contain', addexaminationevents.Pain_Button)
      
      //cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr > td + td + td + td + td + td').eq(9).should('be.visible').should('contain', addexaminationevents.Pain_Date)
      cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr > td + td + td + td + td + td +td + td + td + td + td + td + td+ td + td').eq(0).should('be.visible').should('contain', addexaminationevents.Pain_Time_At)
      cy.get('[data-element-type-name="Pain"] > div > div > table > tbody > tr > td + td + td + td + td + td +td + td + td + td + td + td + td+ td + td + td').eq(0).should('be.visible').should('contain', addexaminationevents.Pain_Comments)


})







})


     






})