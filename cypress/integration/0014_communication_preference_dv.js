describe('0014_Communication_Preferences_Element_Dv', () => {

    it('0014.5_Validate_Communication_Preferences_Element_Header' , () => {
      
        cy.get('[data-element-type-name="Communication Preferences"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Communication Preferences"] > header > h3').should('contain' , 'Communication Preferences')
    }) 
    it('0014.6_To _Validate_Large Print_For_Correspondence' , () => {
    cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
       cy.get('[data-element-type-name="Communication Preferences"] > div > table > tbody  > tr > td + td   > span').eq(0).should('be.visible').should('contain', addexaminationevents.Large_print_for_correspondence)
       cy.get('[data-element-type-name="Communication Preferences"] > div > table > tbody  > tr > td + td   > span').eq(1).should('be.visible').should('contain', addexaminationevents.Agrees_to_insecure_email_correspondence)

    })
    })    
}) 
    