describe('0007_Ophthalmic Surgical History_Element_Dv', () => {

    it('0009.7_Validate_Ophthalmic Surgical History_Element_Header' , () => {
      
        cy.get('[data-element-type-name="Ophthalmic Surgical History"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Ophthalmic Surgical History"] > header > h3').should('contain' , 'Eye Procedures')
    })
    
    
    it('0007.8_Validate_Risks_Element_Present' , () => {
      
        cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
         cy.get('[data-element-type-name="Ophthalmic Surgical History"] > div > div > div > table > tbody > tr  > td').eq(0).should('be.visible').should('contain', addexaminationevents.Ophthalmic_Surgical_History)
          cy.get('[data-element-type-name="Ophthalmic Surgical History"] > div > div > div > table > tbody > tr  > td + td + td + td ').eq(0).should('be.visible').should('contain',addexaminationevents.Ophthalmic_Surgical_History_date_Validation)
    
        })
    
    })
    
    
    
    
    
    
    
    
    
    }) 