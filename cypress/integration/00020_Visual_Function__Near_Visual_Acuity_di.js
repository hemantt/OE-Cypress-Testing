//Test suite for Add Examination Event
describe('020_Visual_Function__Near_Visual_Acuity_DI', () => {
    
  
  //020_Visual_Function__Near_Visual_Acuity".
  it('20.01_Visual_Function__Near_Visual_Acuity', () => {

      //To get the Visual_Function__Near_Visual_Acuity Page
      cy.get("#js-manage-elements-btn").should('be.visible').click()
      cy.wait(1000)
      cy.get("#manage-elements-Near-Visual-Acuity").should('be.visible').click()
      cy.wait(1000)
      cy.get(".blue.hint.cols-full").should('be.visible').click()
      cy.wait(1000)
      
   })
   
  it('28.02_To_Validate_Near_Visual_Acuity_Section_is_Available', () => {
    //Verify Title of page "Near_Visual_Acuity"
    cy.get("[data-element-type-name='Near Visual Acuity'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Near Visual Acuity'] > header > h3").should('be.visible').should('contain','Near Visual Acuity')
  })

  it('20.02_Click on Add Button', () => {
      //Click on Add Button.
      cy.get("#add-NearVisualAcuity-reading-btn-right").should('be.visible').click()
      cy.wait(1000)
  })

  it('20.03_Click under "Value" List', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {
          //Click under "Value" List
          cy.get("#right-add-NearVisualAcuity-reading> div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.nvavalue).click()
          })
      })
  
  it('20.03_Click under "Method" List', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
            //Click under "Method" List
            cy.get("#right-add-NearVisualAcuity-reading> div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.nvaMethod).click()
        })
  
        })

  it('20.04_Click on "Click to add" button', () => {
          //Click on Click to add button.
          cy.get("#right-add-NearVisualAcuity-reading > div >div").should('be.visible').contains('Click to add').click()
          cy.wait(1000)            
       })

  it('20.05_Add Comments for Right eye', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
        //Add Comments for Right eye  
        cy.get("#nearvisualacuity-right-comment-button").should('be.visible').click()
        cy.wait(1000)
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_NearVisualAcuity_right_notes").should('be.visible').clear().type(visualfunctions.r_comments)
        
        })
    })

  it('20.06_Click on Add Button of Left side', () => {
      //Click on Add Button.
      cy.get("#add-NearVisualAcuity-reading-btn-left").should('be.visible').click()
      cy.wait(2000)
   })

  it('20.07_Click under "Value" List of Left side', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click under "Value" List  of Left side
      cy.get("#left-add-NearVisualAcuity-reading> div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.nvavalue2).click()
      })
      })

  it('20.07_Click under "Method" List of Left side', () => {
        cy.fixture("visualfunctions.json").then((visualfunctions) => {
          //Click under "Method" List  of Left side
          cy.get("#left-add-NearVisualAcuity-reading> div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(visualfunctions.nvaMethod2).click()
            })
          })
  
  it('20.08_Click on "Click to add" button', () => {
          //Click on Click to add button.
          cy.get("#left-add-NearVisualAcuity-reading > div >div").should('be.visible').contains('Click to add').click()
          cy.wait(1000)            
       })

  it('20.09_Add Comments for left eye', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {  
      //Click on Click to add button.
      cy.get("#nearvisualacuity-left-comment-button").should('be.visible').click()
      cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_NearVisualAcuity_left_notes").should('be.visible').clear().type(visualfunctions.l_comments)
    })            
   })

   
  
})
