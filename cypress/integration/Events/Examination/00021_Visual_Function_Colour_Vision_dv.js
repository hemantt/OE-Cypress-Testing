describe('21_Visual_Function__Colour_Vision_DV', () => {

  it('21.01_To_Validate_Colour_Vision_Section_Title_is_Available', () => {
    //To_Validate_Colour_Vision_Section_is_Available.
    cy.get("[data-element-type-name='Colour Vision'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Colour Vision'] > header > h3").should('be.visible').should('contain',"Colour Vision")
  })
  
  it('21.02_To_Validate_Method_Section_Data_is_Available_of_Right_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click under "Method" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(0).should('be.visible').contains(visualfunctions.cvMethod_R)
    })
  })

  it('21.03_To_Validate_Value_Section_Data_is_Available_of_Right_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click under "Value" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(0).should('be.visible').contains(visualfunctions.cvvalue_R)
    })
  })
  
  it('21.04_To_Validate_Correction_Section_Data_is_Available_of_Right_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click under "Correction" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(0).should('be.visible').contains(visualfunctions.cvCorrection_R)
    })
  })

  it('21.02__To_Validate_Method_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click under "Method" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(1).should('be.visible').contains(visualfunctions.cvMethod_L)
    })
  })

  it('21.03_To_Validate_Value_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click under "Value" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(1).should('be.visible').contains(visualfunctions.cvvalue_L)
    })
  })
  
  it('21.04_To_Validate_Correction_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click under "Correction" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(1).should('be.visible').contains(visualfunctions.cvCorrection_L)
    })
  })
})
