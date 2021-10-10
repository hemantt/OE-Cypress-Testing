//Test suite for Add Examination Event
describe('0135_Visual_Function_Near_Visual_Acuity_DI', () => {
    
  
  //020_Visual_Function__Near_Visual_Acuity".
  it('0135.01_Visual_Function_Near_Visual_Acuity', () => {

      //To get the Visual_Function__Near_Visual_Acuity Page
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Near-Visual-Acuity[class="added"]').length == 0)
          {
            cy.get("#manage-elements-Near-Visual-Acuity").should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

   })
   
  it('0135.02_To_Validate_Near_Visual_Acuity_Section_is_Available', () => {
    //Verify Title of page "Near_Visual_Acuity"
    cy.get("[data-element-type-name='Near Visual Acuity'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Near Visual Acuity'] > header > h3").should('be.visible').should('contain','Near Visual Acuity')
  })

  it('0135.03_Click_on_Add_Button', () => {
      //Click on Add Button.
      cy.get("#add-NearVisualAcuity-reading-btn-right").should('be.visible').click()
      cy.wait(1000)
  })

  it('0135.04_Click_under_Value_List', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
          //Click under "Value" List
          cy.get("#right-add-NearVisualAcuity-reading> div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Value).click()
          })
      })
  
  it('0135.05_Click_under_Method_List', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
            //Click under "Method" List
            cy.get("#right-add-NearVisualAcuity-reading> div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Method).click()
        })
  
        })

  it('0135.06_Click_on_Click_to_add_button', () => {
          //Click on Click to add button.
          cy.get("#right-add-NearVisualAcuity-reading > div >div").should('be.visible').contains('Click to add').click()
          cy.wait(1000)            
       })

  it('0135.07_Add_Comments_for_Right_eye', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
        //Add Comments for Right eye  
        cy.get("#nearvisualacuity-right-comment-button").should('be.visible').click()
        cy.wait(1000)
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_NearVisualAcuity_right_notes").should('be.visible').clear().type(AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Comments_R)
        
        })
    })

  it('0135.08_Click_on_Add_Button_of_Left_side', () => {
      //Click on Add Button.
      cy.get("#add-NearVisualAcuity-reading-btn-left").should('be.visible').click()
      cy.wait(2000)
   })

  it('0135.09_Click_under_Value_List_of_Left_side', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //Click under "Value" List  of Left side
      cy.get("#left-add-NearVisualAcuity-reading> div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Value2).click()
      })
      })

  it('0135.10_Click_under_Method_List_of_Left_side', () => {
        cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
          //Click under "Method" List  of Left side
          cy.get("#left-add-NearVisualAcuity-reading> div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Method2).click()
            })
          })
  
  it('0135.11_Click_on_Click_to_add_button', () => {
          //Click on Click to add button.
          cy.get("#left-add-NearVisualAcuity-reading > div >div").should('be.visible').contains('Click to add').click()
          cy.wait(1000)            
       })

  it('0135.12_Add_Comments_for_left_eye', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {  
      //Click on Click to add button.
      cy.get("#nearvisualacuity-left-comment-button").should('be.visible').click()
      cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_NearVisualAcuity_left_notes").should('be.visible').clear().type(AddExaminationEvents_Visual_Functions.Near_Visual_Acuity_Comments_L)
    })            
   })

   
  
})
