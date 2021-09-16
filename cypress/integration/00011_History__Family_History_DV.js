describe('011_Family_History_DV', () => {

    it('11.01__To_Validate_Family History_Section_is_Available', () => {
        //To_Validate_Family Social_Header_is_Available.
        cy.get("#tile-group-exam-patient > section > header > h3").eq(0).scrollIntoView().should('be.visible')
        cy.get("#tile-group-exam-patient > section > header > h3").eq(0).should('be.visible').should('contain',"Family Social")
    })
    
        
    it('11.02_Verify Family History saved items', () => {
        cy.fixture("familyhstory.json").then((familyhstory) => {
            //Verify saved items 
            cy.get("#tile-group-exam-patient > section > div > div > div > table > tbody > tr > td").eq(0).should('be.visible').should('contain',"Maternal " + familyhstory.Relative + ": " + familyhstory.Condition + " (" + familyhstory.comments +")")
        })
    }) 
    
       
})