describe('001_Element_History_Scenario#1_DV', () => {

    it('01.01.01__To_Validate_History_Section_is_Available', () => {
        //To_Validate_History_Section_is_Available.
        cy.get("[data-element-type-name='History'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='History'] > header > h3").should('be.visible').should('contain',"History")
            
    })  
  

    it('01.01.02_Verify saved input on History panel ', () => {
        cy.fixture("history.json").then((history) => {
          //Verify texts in History Testbox 
          //cy.get("[data-element-type-name='History'] > div > div > span").should('contain',history.History + ", " + history.Eye + ", " + history.Duration + ", " + history.Onset + ", " + history.Severity + ", " + history.Impact + ", " + history.Phrases + ", " )
          cy.get("[data-element-type-name='History'] > div > div > span").should('be.visible').should('contain',history.History)
          cy.get("[data-element-type-name='History'] > div > div > span").should('be.visible').should('contain',history.Eye)
          cy.get("[data-element-type-name='History'] > div > div > span").should('be.visible').should('contain',history.Duration)
          cy.get("[data-element-type-name='History'] > div > div > span").should('be.visible').should('contain',history.Onset)
          cy.get("[data-element-type-name='History'] > div > div > span").should('be.visible').should('contain',history.Severity)
          cy.get("[data-element-type-name='History'] > div > div > span").should('be.visible').should('contain',history.Impact)
          cy.get("[data-element-type-name='History'] > div > div > span").should('be.visible').should('contain',history.Phrases)
          cy.wait(2000)
        })
       
    })
    
})