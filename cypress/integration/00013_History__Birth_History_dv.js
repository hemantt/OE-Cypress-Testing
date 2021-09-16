
describe('13.1_Birth_History_DV', () => {
  it('13.01__To_Validate_Birth History_Section_is_Available', () => {
    //To_Validate_Pupils_Section_is_Available.
    cy.get("[data-element-type-name='Birth History'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Birth History'] > header > h3").should('be.visible').should('contain',"Birth History")
    cy.wait(700)
})      
        
  it('13.02_Verify Delivery Value ', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {
      if (birthhistory.Weight_kgs_lbs == "kgs")
      {	//Verify an Element from Weight List for "Kgs"
          cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',birthhistory.deliveryvalue1)
      }
      else      
      {	//Verify an Element from Weight List for "lbs"
          cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',birthhistory.deliveryvalue1_lbs)
           
      }
    })
  }) 

  it('13.03_Verify Delivery Value ', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {
      //Verify Delivery Value
      cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',birthhistory.deliveryvalue2)
    })  
  }) 

  it('13.04_Verify Delivery Value ', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {
      //Verify Delivery Value
      cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',birthhistory.deliveryvalue3)
    })  
  }) 

  it('13.05_Verify Delivery Value ', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {
      //Verify Delivery Value
      cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',birthhistory.deliveryvalue4)
    })  
  }) 

  it('13.06_Verify Delivery Value ', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {
      //Verify Delivery Value
      cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',birthhistory.deliveryvalue5)
    })  
  }) 
})