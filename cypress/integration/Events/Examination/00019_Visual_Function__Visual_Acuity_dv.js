  //Test suite for Add Examination Event
describe('019_Visual_Function__Visual_Acuity_Scenario_2_DV', () => {
  
  it('19.01__To_Validate_Visual_Acuity_Section_is_Available', () => {
    //To_Validate_Visual_Acuity_Section_is_Available.
    cy.get("[data-element-type-name='Visual Acuity'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Visual Acuity'] > header > h3").should('be.visible').should('contain',"Visual Acuity")
    cy.wait(700)
  })
    
  it('19.02_To_Validate_Visual_Acuity_Section_Data_is_Available_of_Right_side', () => {
    //To_Validate_Visual_Acuity_Section_Data_is_Available.
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      cy.get("[data-element-type-name='Visual Acuity'] > div").should('be.visible').should('contain',visualfunctions.vavalue)
      cy.wait(700)
    })
  })  

  it('19.03_To_Validate_Visual_Acuity_Section_Data_is_Available_of_Right_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //To_Validate_Visual_Acuity_Section_Data_is_Available.
      cy.get("[data-element-type-name='Visual Acuity'] > div").should('be.visible').should('contain',visualfunctions.vaMethod)
      cy.wait(700)
    })
  }) 

  it('19.04_To_Validate_Visual_Acuity_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //To_Validate_Visual_Acuity_Section_Data_is_Available.
      cy.get("[data-element-type-name='Visual Acuity'] > div").should('be.visible').should('contain',visualfunctions.vavalue2)
      cy.wait(700)
    })
  }) 

  it('19.05_To_Validate_Visual_Acuity_Section_Data_is_Available_of_Left_side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //To_Validate_Visual_Acuity_Section_Data_is_Available.
      cy.get("[data-element-type-name='Visual Acuity'] > div").should('be.visible').should('contain',visualfunctions.vaMethod2)
      cy.wait(700)
    })
  }) 

  it('19.06_Verify Comments for Right eye', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
        //To_Validate_Visual_Acuity_Section_Comments_is_Available.
        cy.get("[data-element-type-name='Visual Acuity'] > div > div > div + div").should('be.visible').should('contain',visualfunctions.r_comments)
        cy.wait(2000)
        })
    })

  it('19.07_Verify Comments for Left eye', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {
          //To_Validate_Visual_Acuity_Section_Comments_is_Available.
          cy.get("[data-element-type-name='Visual Acuity'] > div > div > div + div").should('be.visible').should('contain',visualfunctions.l_comments)
          cy.wait(2000)
          })
      })
})



