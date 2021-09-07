//Test suite for Add Examination Event
describe('27_Adnexal - Lids Surgical_DV', () =>  {

    it('27.9_Validate_Lids_Surgical_Element_Header' , () => {
      
        cy.get('[data-element-type-name="Lids Surgical"] > header > h3').scrollIntoView().should('be.visible')
        cy.get('[data-element-type-name="Lids Surgical"] > header > h3').should('be.visible').should('contain', 'Lids Surgical')
      }) 

      //Verification of saved values of Adnexal - Lids Surgical 
    it('27_Verify Saved messages', () => {
        cy.fixture("adnexal.json").then((adnexal) => {
            cy.get("[data-element-type-name='Lids Surgical'] > div > div > div > div > div + div").eq(0).should('contain',adnexal.Label_R)

            cy.get("[data-element-type-name='Lids Surgical'] > div > div > div > div > div + div").eq(1).should('contain',adnexal.Label_L)
            
          })
          })  


           
       
})