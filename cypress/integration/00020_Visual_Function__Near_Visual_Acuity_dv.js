describe('20_Visual_Function__Near_Visual_Acuity_DV', () => {

    it('28.01_To_Validate_Near_Visual_Acuity_Section_is_Available', () => {
        //Verify Title of page "Near_Visual_Acuity"
        cy.get("[data-element-type-name='Near Visual Acuity'] > header > h3").scrollIntoView().should('be.visible')
        cy.get("[data-element-type-name='Near Visual Acuity'] > header > h3").should('be.visible').should('contain','Near Visual Acuity')
      })

    it('20.02_Verify Saved messages', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
            cy.get("[data-element-type-name='Near Visual Acuity'] > div > div > div > span").eq(0).should('be.visible').should('contain',visualfunctions.nvavalue)
        })
    })  

    it('20.03_Verify Saved messages', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
            cy.get("[data-element-type-name='Near Visual Acuity'] > div > div > div > span").eq(0).should('be.visible').should('contain',visualfunctions.nvaMethod)
        })
    })  

    it('20.04_Verify Saved messages', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
            cy.get("[data-element-type-name='Near Visual Acuity'] > div > div > div > span").eq(1).should('be.visible').should('contain',visualfunctions.nvavalue2)
        })
    }) 

    it('20.05_Verify Saved messages', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
            cy.get("[data-element-type-name='Near Visual Acuity'] > div > div > div > span").eq(1).should('be.visible').should('contain',visualfunctions.nvaMethod2)    
        })
    }) 
      
    
})