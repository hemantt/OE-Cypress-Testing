describe('0065_Systemic_Surgcal_History_DV', () => {

    it('0065.09_To_Validate_Systemic_Surgical_History_Section_is_Available', () => {
        //To_Validate_Systemic Surgical History_Section_is_Available.
        cy.get("[data-element-type-name='Systemic Surgical History'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Systemic Surgical History'] > header > h3").should('be.visible').should('contain',"Systemic Procedures")
            
    })  
    

    it('0065.10_Verify_Disorder_value', () => {
        cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
          //Verify saved items
          cy.get("[data-element-type-name='Systemic Surgical History'] > div > div > div > table > tbody > tr").should('contain',AddExaminationEvents_History.Systemic_Surgical_History_List)

        })  
    })  
    
    // it('0065.11_Verify_Date', () => {
    //     cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
    //       //Verify saved items
    //       cy.get("[data-element-type-name='Systemic Surgical History'] > div > div > div > table > tbody > tr > td > span + span > span.day").should('contain',AddExaminationEvents_History.Systemic_Surgical_History_Date_Day)
    //       cy.get("[data-element-type-name='Systemic Surgical History'] > div > div > div > table > tbody > tr > td > span + span").should('contain',AddExaminationEvents_History.Systemic_Surgical_History_Date_Mth)
    //       cy.get("[data-element-type-name='Systemic Surgical History'] > div > div > div > table > tbody > tr > td > span + span").should('contain',AddExaminationEvents_History.Systemic_Surgical_History_Date_Yy)

    //     })  
    // })
  
    
})