describe('0100_Birth_History_DV', () => {

  it('0100.12_To_Validate_Birth_History_Section_is_Available', () => {
    //To_Validate_Pupils_Section_is_Available.
    cy.get("[data-element-type-name='Birth History'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Birth History'] > header > h3").should('be.visible').should('contain',"Birth History")
    cy.wait(700)
  })      
        
  it('0100.13_Verify_Delivery_Value ', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if (AddExaminationEvents_History.BirthHistory_Weight_kgs_Lbs == "kgs")
      {	//Verify an Element from Weight List for "Kgs"
        cy.get("[data-element-type-name='Birth History'] > div > div >div > ul.dot-list.large > li").eq(0).should('be.visible').should('contain',AddExaminationEvents_History.BirthHistory_DeliveryValue1)
      }
      else      
      {	//Verify an Element from Weight List for "lbs"
          cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',AddExaminationEvents_History.BirthHistory_DeliveryValue1_lbs)
      }
    })
  }) 

  it('0100.14_Verify_Delivery_Value ', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //Verify Delivery Value
      cy.get("[data-element-type-name='Birth History'] > div > div >div > ul.dot-list.large > li").eq(1).should('be.visible').should('contain',AddExaminationEvents_History.BirthHistory_DeliveryValue2)
    })  
  }) 

  it('0100.15_Verify_Delivery_Value ', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //Verify Delivery Value
      cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',AddExaminationEvents_History.BirthHistory_DeliveryValue3)
    })  
  }) 

  it('0100.16_Verify_Delivery_Value ', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //Verify Delivery Value
      cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',AddExaminationEvents_History.BirthHistory_DeliveryValue4)
    })  
  }) 

  it('0100.17_Verify_Delivery_Value ', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //Verify Delivery Value
      cy.get("[data-element-type-name='Birth History'] > div > div >div > ul").eq(0).should('be.visible').should('contain',AddExaminationEvents_History.BirthHistory_DeliveryValue5)
    })  
  }) 
})