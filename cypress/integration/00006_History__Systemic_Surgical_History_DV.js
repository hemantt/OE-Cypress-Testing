describe('006_Systemic_Surgcal_History_DV', () => {

    it('06.01__To_Validate_Systemic Surgical History_Section_is_Available', () => {
        //To_Validate_Systemic Surgical History_Section_is_Available.
        cy.get("[data-element-type-name='Systemic Surgical History'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Systemic Surgical History'] > header > h3").should('be.visible').should('contain',"Systemic Procedures")
            
    })  
    

    it('06.02_Verify Disorder value', () => {
        cy.fixture("systemicsurgicalhistory.json").then((systemicsurgicalhistory) => {  
          //Verify saved items
          cy.get("[data-element-type-name='Systemic Surgical History'] > div > div > div > table > tbody > tr").should('contain',systemicsurgicalhistory.Systemic_Surgical_History_List)

        })  
    })  
    
    // it('06.03_Verify Date', () => {
    //     cy.fixture("systemicsurgicalhistory.json").then((systemicsurgicalhistory) => {  
    //       //Verify saved items
    //       cy.get("[data-element-type-name='Systemic Surgical History'] > div > div > div > table > tbody > tr > td > span + span > span.day").should('contain',systemicsurgicalhistory.date_day)
    //       cy.get("[data-element-type-name='Systemic Surgical History'] > div > div > div > table > tbody > tr > td > span + span").should('contain',systemicsurgicalhistory.date_mth)
    //       cy.get("[data-element-type-name='Systemic Surgical History'] > div > div > div > table > tbody > tr > td > span + span").should('contain',systemicsurgicalhistory.date_yy)

    //     })  
    // })
  
    
})