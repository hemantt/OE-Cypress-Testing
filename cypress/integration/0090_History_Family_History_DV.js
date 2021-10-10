describe('0090_Family_History_DV', () => {

    it('0090.10_To_Validate_Family_History_Section_is_Available', () => {
        //To_Validate_Family Social_Header_is_Available.
        cy.get("#tile-group-exam-patient > section > header > h3").eq(0).scrollIntoView().should('be.visible')
        cy.get("#tile-group-exam-patient > section > header > h3").eq(0).should('be.visible').should('contain',"Family")
    })
    
        
    it('0090.11_Verify_Family_History_saved_items', () => {
        cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
            //Verify saved items 
            cy.get("#tile-group-exam-patient > section > div > div > div > table > tbody > tr > td").eq(0).should('be.visible').should('contain',AddExaminationEvents_History.FamilyHistory_Side + " " + AddExaminationEvents_History.FamilyHistory_Relative + ": " + AddExaminationEvents_History.FamilyHistory_Condition + " (" + AddExaminationEvents_History.FamilyHistory_Comments +")")
        })
    }) 
    
       
})