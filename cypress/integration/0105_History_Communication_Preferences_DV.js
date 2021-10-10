describe('0105_Communication_Preferences_Element_DV', () => {
    //Verify that Communication Preferences section is loaded successfully 
    it('0105.6_Validate_Communication_Preferences_Element_Header' , () => {
      
        cy.get('[data-element-type-name="Communication Preferences"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Communication Preferences"] > header > h3').should('contain' , 'Communication Preferences')
    }) 

    //Validate Saved Data
    it('0105.7_To _Validate_Large Print_For_Correspondence' , () => {
    cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
       cy.get('[data-element-type-name="Communication Preferences"] > div > table > tbody  > tr > td + td   > span').eq(0).should('be.visible').should('contain', addexaminationevents.Communication_Preferences_Large_Print_For_Correspondence)
       cy.get('[data-element-type-name="Communication Preferences"] > div > table > tbody  > tr > td + td   > span').eq(1).should('be.visible').should('contain', addexaminationevents.Communication_Preferences_Agrees_To_Insecure_Email_Correspondence)

    })
    })    
}) 
    