describe('0040_Element_History_Scenario#1_DV', () => {

    it('0040.01.12_To_Validate_History_Section_is_Available', () => {
        //To_Validate_History_Section_is_Available.
        cy.get("[data-element-type-name='History'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='History'] > header > h3").should('be.visible').should('contain',"History")
            
    })  
  

    it('0040.01.13_Verify_History_Data ', () => {
        cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
            if(AddExaminationEvents_History.History_Description_Free_Text == "")
            {
                cy.get("[data-element-type-name='History'] > div > div > span").should('contain',AddExaminationEvents_History.History_History + ", " + AddExaminationEvents_History.History_Eye + ", " + AddExaminationEvents_History.History_Duration + ", " + AddExaminationEvents_History.History_Onset + ", " + AddExaminationEvents_History.History_Severity + ", " + AddExaminationEvents_History.History_Impact + ", " + AddExaminationEvents_History.History_Phrases + ", " )
            }
            else
            {
                cy.get("[data-element-type-name='History'] > div > div > span").should('contain',AddExaminationEvents_History.History_Description_Free_Text)
            }

        })
       
    })
    
})