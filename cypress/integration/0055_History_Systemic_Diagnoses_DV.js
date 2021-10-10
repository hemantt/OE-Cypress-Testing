describe('0055_Element_Systemic_Diagnoses_DV', () => {

    it('0055.10__To_Validate_Systemic_Diagnoses_Section_is_Available', () => {
        //To_Validate_Systemic Diagnoses_Section_is_Available.
        cy.get("[data-element-type-name='Systemic Diagnoses'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Systemic Diagnoses'] > header > h3").should('be.visible').should('contain',"Systemic Diagnoses")
            
    })  
    

    it('0055.11_Verify_Disorder_value', () => {
        cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
          //Verify saved items
          cy.get("[data-element-type-name='Systemic Diagnoses'] > div > div > div > table > tbody > tr > td").eq(0).should('contain',AddExaminationEvents_History.SystemicDiagnoses_DropDownValue)

        })  
    })  
    
    // it('0055.12_Verify_Date', () => {
    //     cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
    //       //Verify saved items
    //       console.log(cy.get("[data-element-type-name='Systemic Diagnoses'] > div > div > div > table > tbody > tr > td > span + span > span.day"))//.should('contain',AddExaminationEvents_History.Systemic_Surgical_History_Date_Day))
    //       console.log(cy.get("[data-element-type-name='Systemic Diagnoses'] > div > div > div > table > tbody > tr > td > span + span"))//.should('contain',AddExaminationEvents_History.Systemic_Surgical_History_Date_Mth))
    //       console.log(cy.get("[data-element-type-name='Systemic Diagnoses'] > div > div > div > table > tbody > tr > td > span + span"))//.should('contain',AddExaminationEvents_History.Systemic_Surgical_History_Date_Yy))

    //     })  
    // })
})