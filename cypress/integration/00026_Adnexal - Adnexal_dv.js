//Test suite for Add Examination Event
describe('26_Adnexal - Adnexal_DV', () => {

  it('26.9_Validate_Adnexal_Element_Header' , () => {
      
    cy.get('[data-element-type-name="Adnexal"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Adnexal"] > header > h3').should('be.visible').should('contain', 'Adnexal')
  }) 

  it('26.09_Verify Saved messages', () => {
      cy.fixture("adnexal.json").then((adnexal) => {
          cy.get("[data-element-type-name='Adnexal'] > div").should('contain',adnexal.Add)

          cy.get("[data-element-type-name='Adnexal'] > div").should('contain',adnexal.Add2)
          
      })
    })  
    
    
    }) 