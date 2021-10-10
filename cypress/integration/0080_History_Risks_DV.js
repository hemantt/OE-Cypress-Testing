describe('0080_Risks_Element_DV', () => {

    it('0080.6_Validate_Risks_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Risks"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Risks"] > header > h3').should('be.visible').should('contain', 'Risks')
    }) 


    it('0080.7_Validate_Risks_Element_Present' , () => {
      
        cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
          cy.get('[data-element-type-name="Risks"] > div > div > div > div  > div > table > tbody > tr  > td > ul > li').eq(1).should('be.visible').should('contain', addexaminationevents.Risk_Risk1)
          cy.get('[data-element-type-name="Risks"] > div > div > div > div  > div > table > tbody > tr  > td > ul > li').eq(3).should('be.visible').should('contain', addexaminationevents.Risk_Risk2)
          cy.get('[data-element-type-name="Risks"] > div > div > div > div > div > table > tbody >  tr   > td > ul  > li + li + li + li  + li + li').should('be.visible').should('contain', addexaminationevents.Risk_Risk_Added)
        })
    })
        // To be checked later ( it is a tooltip)
        /*it('0080.11_Validate_Risks_Comments' , () => {
      
            cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
              cy.get('[data-element-type-name="Risks"] > div > div > div > div > div > table > tbody >  tr   > td > ul  > li + li + li + li + li + i').should('be.visible').should('contain', addexaminationevents.Risks_Comments).click()
            })
        }) */
    })    

     