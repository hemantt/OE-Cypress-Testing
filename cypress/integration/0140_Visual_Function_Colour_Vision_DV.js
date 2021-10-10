describe('0140_Visual_Function__Colour_Vision_DV', () => {

  it('0140.05_To_Validate_Colour_Vision_Section_Title_is_Available', () => {
    //To_Validate_Colour_Vision_Section_is_Available.
    cy.get("[data-element-type-name='Colour Vision'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Colour Vision'] > header > h3").should('be.visible').should('contain',"Colour Vision")
  })
  
  it('0140.06_To_Validate_Method_Section_Data_is_Available_of_Right_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //Click under "Method" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(0).should('be.visible').contains(AddExaminationEvents_Visual_Functions.Colour_Vision_Method_R)
    })
  })

  it('0140.07_To_Validate_Value_Section_Data_is_Available_of_Right_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //Click under "Value" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(0).should('be.visible').contains(AddExaminationEvents_Visual_Functions.Colour_Vision_Value_R)
    })
  })
  
  it('0140.08_To_Validate_Correction_Section_Data_is_Available_of_Right_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //Click under "Correction" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(0).should('be.visible').contains(AddExaminationEvents_Visual_Functions.Colour_Vision_Correction_R)
    })
  })

  it('0140.09_To_Validate_Method_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //Click under "Method" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(1).should('be.visible').contains(AddExaminationEvents_Visual_Functions.Colour_Vision_Method_L)
    })
  })

  it('0140.10_To_Validate_Value_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //Click under "Value" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(1).should('be.visible').contains(AddExaminationEvents_Visual_Functions.Colour_Vision_Value_L)
    })
  })
  
  it('0140.11_To_Validate_Correction_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //Click under "Correction" List
      cy.get("[data-element-type-name='Colour Vision'] > div > div > div > table > tbody").eq(1).should('be.visible').contains(AddExaminationEvents_Visual_Functions.Colour_Vision_Correction_L)
    })
  })
})
