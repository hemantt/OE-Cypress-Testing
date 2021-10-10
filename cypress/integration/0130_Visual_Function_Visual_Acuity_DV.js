  //Test suite for Add Examination Event
describe('0130_Visual_Function__Visual_Acuity_Scenario_2_DV', () => {
  
  it('0130.13__To_Validate_Visual_Acuity_Section_is_Available', () => {
    //To_Validate_Visual_Acuity_Section_is_Available.
    cy.get("[data-element-type-name='Visual Acuity'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Visual Acuity'] > header > h3").should('be.visible').should('contain',"Visual Acuity")
    cy.wait(700)
  })
    
  it('0130.14_To_Validate_Visual_Acuity_Section_Data_is_Available_of_Right_side', () => {
    //To_Validate_Visual_Acuity_Section_Data_is_Available.
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      cy.get("[data-element-type-name='Visual Acuity'] > div").should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Visual_Acuity_Value)
      cy.wait(700)
    })
  })  

  it('0130.15_To_Validate_Visual_Acuity_Section_Data_is_Available_of_Right_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //To_Validate_Visual_Acuity_Section_Data_is_Available.
      cy.get("[data-element-type-name='Visual Acuity'] > div").should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Visual_Acuity_Method)
      cy.wait(700)
    })
  }) 

  it('0130.16_To_Validate_Visual_Acuity_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //To_Validate_Visual_Acuity_Section_Data_is_Available.
      cy.get("[data-element-type-name='Visual Acuity'] > div").should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Visual_Acuity_Value2)
      cy.wait(700)
    })
  }) 

  it('0130.17_To_Validate_Visual_Acuity_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //To_Validate_Visual_Acuity_Section_Data_is_Available.
      cy.get("[data-element-type-name='Visual Acuity'] > div").should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Visual_Acuity_Method2)
      cy.wait(700)
    })
  }) 

  it('0130.18_Verify_Comments_for_Right_eye', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
        //To_Validate_Visual_Acuity_Section_Comments_is_Available.
        cy.get("[data-element-type-name='Visual Acuity'] > div > div > div + div").should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Visual_Acuity_Comments_R)
        cy.wait(2000)
        })
    })

  it('0130.19_Verify_Comments_for_Left_eye', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
          //To_Validate_Visual_Acuity_Section_Comments_is_Available.
          cy.get("[data-element-type-name='Visual Acuity'] > div > div > div + div").should('be.visible').should('contain',AddExaminationEvents_Visual_Functions.Visual_Acuity_Comments_L
          )
          cy.wait(2000)
          })
      })
})



