describe('00004_Select_Systemic_Diagnoses_DV', () => {

    it('04.01__To_Validate_Systemic Diagnoses_Section_is_Available', () => {
        //To_Validate_Systemic Diagnoses_Section_is_Available.
        cy.get("[data-element-type-name='Systemic Diagnoses'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Systemic Diagnoses'] > header > h3").should('be.visible').should('contain',"Systemic Diagnoses")
            
    })  
    

    it('04.02_Verify Disorder value', () => {
        cy.fixture("systemicdiagnoses.json").then((systemicdiagnoses) => {  
          //Verify saved items
          cy.get("[data-element-type-name='Systemic Diagnoses'] > div > div > div > table > tbody > tr > td").eq(0).should('contain',systemicdiagnoses.systemicdiagnoses_dropdownvalue)

        })  
    })  
    
    // it('04.03_Verify Date', () => {
    //     cy.fixture("systemicdiagnoses.json").then((systemicdiagnoses) => {  
    //       //Verify saved items
    //       console.log(cy.get("[data-element-type-name='Systemic Diagnoses'] > div > div > div > table > tbody > tr > td > span + span > span.day"))//.should('contain',systemicdiagnoses.systemicdiagnoses_date_day))
    //       console.log(cy.get("[data-element-type-name='Systemic Diagnoses'] > div > div > div > table > tbody > tr > td > span + span"))//.should('contain',systemicdiagnoses.systemicdiagnoses_date_mth))
    //       console.log(cy.get("[data-element-type-name='Systemic Diagnoses'] > div > div > div > table > tbody > tr > td > span + span"))//.should('contain',systemicdiagnoses.systemicdiagnoses_date_yy))

    //     })  
    // })
})