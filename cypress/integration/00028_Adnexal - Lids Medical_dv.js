//Test suite for Add Examination Event
describe('28_Adnexal - Lids Medical_DV', () =>  {

  it('0047.9_Validate_Lids Medical_Element_Header' , () => {
      
    cy.get('[data-element-type-name="Lids Medical"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Lids Medical"] > header > h3').should('be.visible').should('contain', 'Lids Medical')
  }) 

  it('28.01_Verify Saved messages', () => {
      cy.fixture("adnexal.json").then((adnexal) => {
          cy.get("[data-element-type-name='Lids Medical'] > div > div > div > div + div").eq(0).should('contain',adnexal.type_R + " conjunctivitis with " + adnexal.Hyperaemia_R + " hyperaemia")

          cy.get("[data-element-type-name='Lids Medical'] > div > div > div > div + div").eq(1).should('contain',adnexal.type_L + " conjunctivitis with " + adnexal.Hyperaemia_L + " hyperaemia")                                        

          cy.get("[data-element-type-name='Lids Medical'] > div > div > div > div + div").eq(0).should('contain',adnexal.Lids_Medical_Commentbox_R)

          cy.get("[data-element-type-name='Lids Medical'] > div > div > div > div + div").eq(1).should('contain',adnexal.Lids_Medical_Commentbox_R)

          
        })
        })  
    
    
})