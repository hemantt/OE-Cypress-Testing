describe('0009_Risks_Element_DV', () => {

    it('0009.8_Validate_Risks_Element_Header' , () => {
      
      cy.get('[data-element-type-name="Risks"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Risks"] > header > h3').should('be.visible').should('contain', 'Risks')
    }) 


    it('0009.10_Validate_Risks_Element_Present' , () => {
      
        cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
          cy.get('[data-element-type-name="Risks"] > div > div > div > div  > div > table > tbody > tr  > td > ul > li').eq(1).should('be.visible').should('contain', addexaminationevents.Risk1)
          cy.get('[data-element-type-name="Risks"] > div > div > div > div  > div > table > tbody > tr  > td > ul > li').eq(3).should('be.visible').should('contain', addexaminationevents.Risk2)
          cy.get('[data-element-type-name="Risks"] > div > div > div > div > div > table > tbody >  tr   > td > ul  > li + li + li + li  + li + li').should('be.visible').should('contain', addexaminationevents.Risk)
        })
    })
        // To be checked later 
        /*it('0009.11_Validate_Risks_Comments' , () => {
      
            cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
              cy.get('[data-element-type-name="Risks"] > div > div > div > div > div > table > tbody >  tr   > td > ul  > li + li + li + li + li + i').should('be.visible').should('contain', addexaminationevents.Risks_Comments).click()
            })
        }) */
    })    

     