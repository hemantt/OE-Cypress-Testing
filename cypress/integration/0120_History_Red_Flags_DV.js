describe('0120_Red_Flags_Element_DV', () => {
    //Verify Red flags section is loaded successfully
    it('0120.5_Validate_Red_Flags_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Red Flags"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Red Flags"] > header > h3').should('be.visible').should('contain', 'Red Flags')
    })

    // Validate Red_Flags_Element_No_red_flags_for_current_attendance is set to NO
    it('0120.6_Validate_Red_Flags_Element_No_Red_Flags_For_Current_Attendance' , () => {
      
      cy.get('[data-element-type-name="Red Flags"] > div > table > tbody > tr > td + td > span').eq(0).should('be.visible').should('contain', 'No')
    })
      
    //Validate saved Data loaded successfully
    it('0120.7_Validate_Red_Flags' , () => {
        cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
        cy.get('[data-element-type-name="Red Flags"] > div > table > tbody > tr > td + td > ul > li').should('be.visible').should('contain', addexaminationevents.Red_Flag_Data)
      })
})
})