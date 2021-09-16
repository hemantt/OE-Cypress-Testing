describe('0022_Contrast_Sensitivity_Element_DV', () => {

    it('0022.7_Validate_Contrast_Sensitivity_Element_Header' , () => {
      
        cy.get('[data-element-type-name="Contrast Sensitivity"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Contrast Sensitivity"] > header > h3').should('contain' , 'Contrast Sensitivity')
    })    

    it('0022.8_To _Validate_Contrast_Sensitivity_Element_Data' , () => {
     cy.fixture("contrastsensitivity.json").then((contrastsensitivity) => {
        cy.get('[data-element-type-name="Contrast Sensitivity"] > div > div > table >  tbody > tr  > td').eq(0).should('be.visible').should('contain', contrastsensitivity.Contrast_Sensitivity_Sensitivity)
        cy.get('[data-element-type-name="Contrast Sensitivity"] > div > div > table >  tbody > tr  > td + td').eq(0).should('be.visible').should('contain', contrastsensitivity.Contrast_Sensitivity_Value)
        //cy.get('[data-element-type-name="Contrast Sensitivity"] > div > div > table >  tbody > tr  > td + td + td').eq(0).should('be.visible').should('contain', contrastsensitivity.Contrast_Sensitivity_Laterality_Validation)
        cy.get('[data-element-type-name="Contrast Sensitivity"] > div > div > table >  tbody > tr  > td + td + td + td').eq(0).should('be.visible').should('contain', contrastsensitivity.Contrast_Sensitivity_Correction)
        cy.get('[data-element-type-name="Contrast Sensitivity"] > div > div > table >  tbody > tr  > td').eq(4).should('contain', contrastsensitivity.Contrast_Sensitivity_Comments) 
     })
    })  
})    