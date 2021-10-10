describe('0135_Visual_Function_Near_Visual_Acuity_DV', () => {

    it('0135.13_To_Validate_Near_Visual_Acuity_Section_is_Available', () => {
        //Verify Title of page "Near_Visual_Acuity"
        cy.get("[data-element-type-name='Near Visual Acuity'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Near Visual Acuity'] > header > h3").should('be.visible').should('contain','Near Visual Acuity')
      })

    it('0135.14_Verify_Saved_messages', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
            cy.get("[data-element-type-name='Near Visual Acuity'] > div > div > div > span").eq(0).should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Value)
        })
    })  

    it('0135.15_Verify_Saved_messages', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
            cy.get("[data-element-type-name='Near Visual Acuity'] > div > div > div > span").eq(0).should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Method)
        })
    })  

    it('0135.16_Verify_Saved_messages', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
            cy.get("[data-element-type-name='Near Visual Acuity'] > div > div > div > span").eq(1).should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Value2)
        })
    }) 

    it('0135.17_Verify_Saved_messages', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
            cy.get("[data-element-type-name='Near Visual Acuity'] > div > div > div > span").eq(1).should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Method2)    
        })
    }) 
      
    
})