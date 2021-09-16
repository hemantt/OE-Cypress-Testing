//Test suite for Colour Vision element
describe('21_Visual_Function_Colour_Vision_DI', () => {
    
  //21_Visual_Function__Colour_Vision
  it('21.01_Visual_Function_Colour_Vision', () => {

      //To get the Visual_Function_Colour_Vision Page
      cy.get("#js-manage-elements-btn").should('be.visible').click()
      cy.get("#manage-elements-Colour-Vision").should('be.visible').click()
      cy.get(".blue.hint.cols-full").should('be.visible').click()
   })
  
  it('21.02_To_Validate_Colour_Vision_Section_is_Available', () => {
    //To_Validate_Colour_Vision_Section_is_Available.
    cy.get("[data-element-type-name='Colour Vision'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Colour Vision'] > header > h3").should('be.visible').should('contain',"Colour Vision")
  })

  it('21.03_Add_Colour_Vision_Details_Right_Eye', () => {
    cy.get("#right-add-colour_vision_reading").should('be.visible').click()

    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click under "Method" List
      cy.get("#right-add-colour_vision_reading > div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.cvMethod_R).click()
      cy.get("#right-add-colour_vision_reading > div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.cvvalue_R).click()
      cy.get("#right-add-colour_vision_reading > div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.cvCorrection_R).click()
    })

    cy.get("#right-add-colour_vision_reading > div > div + div").should('be.visible').contains('Click to add').click()
  })

   it('21.04_Add_Colour_Vision_Details_Left_Eye', () => {
    cy.get("#left-add-colour_vision_reading").should('be.visible').click()

    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click under "Method" List  of Left side
      cy.get("#left-add-colour_vision_reading > div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.cvMethod_L).click()
      cy.get("#left-add-colour_vision_reading > div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.cvvalue_L).click()
      cy.get("#left-add-colour_vision_reading > div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.cvCorrection_L).click()
    })

    cy.get("#left-add-colour_vision_reading > div > div + div").should('be.visible').contains('Click to add').click()
  })

})

