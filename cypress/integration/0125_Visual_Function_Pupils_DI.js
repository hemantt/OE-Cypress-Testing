//Test suite for Add Examination Event
describe('0125_Visual_Function_Pupils_DI', () => {
    
    
  //Pupils under Visual Function.
  it('0125.01_Visual_Function_Pupils', () => {

    //To get the Medication_History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {
  
        if (body.find('#manage-elements-Pupils[class="added"]').length == 0)
        {
          cy.get("#manage-elements-Pupils").should('be.visible').click()
        }
  
    })
  
    cy.get(".blue.hint.cols-full").should('be.visible').click()
    
  })
  
  it('0125.02__To_Validate_Visual_Acuity_Section_is_Available', () => {
    //To_Validate_Pupils_Section_is_Available.
    cy.get("[data-element-type-name='Pupils'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Pupils'] > header > h3").should('be.visible').should('contain',"Pupils")
    
    })
       
  //to delete existing items
  it('0125.03_to_delete_existing_items', () => {

    cy.get('body').then(($body) => {
      const cnt = $body.find('#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_3_has_abnormality + td + td > i').length

      var i;
      for(i = 0; i <= cnt-1; i++)
      {
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_3_has_abnormality + td + td > i").should('be.visible').click()
        cy.wait(1000)

      }
    })

    cy.get('body').then(($body) => {
      const cnt = $body.find('#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_3_has_abnormality + td + td > i').length

      var i;
      for(i = 0; i <= cnt-1; i++)
      {
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_3_has_abnormality + td + td > i").should('be.visible').click()
        cy.wait(1000)

      }
    })




  }) 
 
  //For Right Side section
  it('0125.03_Click_on_Add_button_from_Right_Side_section', () => {
    //Click on Add button.
    cy.get("#add-abnormality-btn-right").should('be.visible').click()
    
  })

  it('0125.04_Click_on_Element_from_Right_side_List', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //Click on an Element from Right side list.
      cy.get("#pupillary_abnormalities_list_right").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Pupils_ListItems_R).click()
      
      })
    })

  it('0125.05_Click_on_Click_to_add_button', () => {
    //Click on Click to add button.
    cy.get("#history-abnormality-popup-right > div > div + div").should('be.visible').contains('Click to add').click()
                
    })

  it('0125.06_Add_Comments_for_Right_eye', () => {
    cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
      //Add Comments for Right eye  
      cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_3_comments_button").should('be.visible').click()
      
      cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_3_comments").should('be.visible').clear().type(AddExaminationEvents_Visual_Functions.Pupils_Comments_R)
      
      })
    })
    
  it('0125.07_Click_on_radio_button_RAPD_at_Right_side', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_0_has_abnormality").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Pupils_RAPD_R).click()
        
        })
      })
      
  it('0125.08_Click_on_radio_button_Poor_Dilator_at_Right_side', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_1_has_abnormality").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Pupils_Poor_Dilator_R).click()
        
        })
       })
       
    
  it('0125.09_Click_on_radio_button_PEARL_at_Right_side', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_2_has_abnormality").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Pupils_PEARL_R).click()
        
        })
     })


    //For Left Side section
    //-----------------------
  it('0125.10_Click_on_Add_button_at_left_side', () => {
      //Click on Add button at left side.
      cy.get("#add-abnormality-btn-left").should('be.visible').click()
      
      })
  
  it('0125.11_Click_on_Element_from_List_at_left_side', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {  
      //Click on an Element from list at left side.
      cy.get("[data-id='pupillary_abnormalities_list_left']").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Pupils_ListItems_L).click()
      
      })
    })
  
  it('0125.12_Click_on_"Click_to_add"_button_at_left_side', () => {
      //Click on Click to add button.
      cy.get("#history-abnormality-popup-left > div > div + div").should('be.visible').contains('Click to add').click()
                 
      })
  
  it('0125.13_Add_Comments_for_left_eye_at_left_side', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {
        //Verify Verify text  
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_3_comments_button").should('be.visible').click()
        
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_3_comments").should('be.visible').clear().type(AddExaminationEvents_Visual_Functions.Pupils_Comments_L)
        
        })
      })
    
  it('0125.14_Click_on_radio_button_RAPD_at_left_side', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_0_has_abnormality").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Pupils_RAPD_L).click()
        
        })
      })
      
  it('0125.15_Click_on_radio_button_Poor_Dilator_at_left_side', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_1_has_abnormality").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Pupils_Poor_Dilator_L).click()
        
        })
       })
       
    
  it('0125.16_Click_on_radio_button_PEARL_at_left_side', () => {
      cy.fixture("AddExaminationEvents_Visual_Functions.json").then((AddExaminationEvents_Visual_Functions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_2_has_abnormality").should('be.visible').contains(AddExaminationEvents_Visual_Functions.Pupils_PEARL_L).click()
        
        })
     })
      
    })


