describe('0070_Ophthalmic Surgical History_Element_DV', () => {

     //Verify that Opthalmic surgical history section is loaded successfully
    it('0070.5_Validate_Ophthalmic Surgical History_Element_Header' , () => {
      
        cy.get('[data-element-type-name="Ophthalmic Surgical History"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Ophthalmic Surgical History"] > header > h3').should('contain' , 'Eye Procedures')
    })
    
    //Validate saved Data is loaded successfully
    it('0070.6_Validate_Saved_Data' , () => {
      
        cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
         cy.get('[data-element-type-name="Ophthalmic Surgical History"] > div > div > div > table > tbody > tr  > td').eq(0).should('be.visible').should('contain', addexaminationevents.Ophthalmic_Surgical_History)
          cy.get('[data-element-type-name="Ophthalmic Surgical History"] > div > div > div > table > tbody > tr  > td + td + td + td ').eq(0).should('be.visible').should('contain',addexaminationevents.Ophthalmic_Surgical_History_Date_Validation)
    
        })
    
    })
    
    
    
    
    
    
    
    
    
    }) 