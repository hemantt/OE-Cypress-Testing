describe('0017_Red_Flags_Element_DV', () => {

    it('0017.5_Validate_Red_Flags_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Red Flags"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Red Flags"] > header > h3').should('be.visible').should('contain', 'Red Flags')
    }) 

    it('0017.6_Validate_Red_Flags_Element_No_red_flags_for_current_attendance' , () => {
      
      cy.get('[data-element-type-name="Red Flags"] > div > table > tbody > tr > td + td > span').eq(0).should('be.visible').should('contain', 'No')
    })
      

    it('0017.7_Validate_Red_Flags' , () => {
        cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
        cy.get('[data-element-type-name="Red Flags"] > div > table > tbody > tr > td + td > ul > li').should('be.visible').should('contain', addexaminationevents.Red_Flag_Data)
      })
})
})