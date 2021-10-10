describe('0100_Birth_History_DI', () => {
    
  
  //Scenario 1# 006_Systemic Surgical History with "No previous systemic surgery" Unchecked.
  it('0100.01_Select_Birth_History', () => {

    //To get the Birth_History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {
  
        if (body.find('#manage-elements-Birth-History[class="added"]').length == 0)
        {
          cy.get("#manage-elements-Birth-History").should('be.visible').click()
        }
  
    })
  
    cy.get(".blue.hint.cols-full").should('be.visible').click()

  })

  it('0100.02__To_Validate_Birth_History_Section_is_Available', () => {
      //To_Validate_Pupils_Section_is_Available.
      cy.get("[data-element-type-name='Birth History'] > header > h3").scrollIntoView().should('be.visible')
      cy.get("[data-element-type-name='Birth History'] > header > h3").should('be.visible').should('contain',"Birth History")
      
  })
           
  it('0100.03_Click_on_Add_button', () => {
      //Click on Add button.
      cy.get("#add-birthhistory-btn").should("be.enabled").click()
    })

  it('0100.04_Click_on_Weight_Selection_Kgs/lbs', () => {
    //Weight Selection Kgs/lbs
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if (AddExaminationEvents_History.BirthHistory_Weight_kgs_Lbs == "kgs")
        {	//Click on an Element from Weight List for "Kgs"
          cy.get("[data-id='OEModule_OphCiExamination_models_BirthHistory_input_weight_mode'] > li").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_Weight_kgs_Lbs).click()
          cy.get("[data-id='OEModule_OphCiExamination_models_BirthHistory_input_weight_mode'] > li").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_Weight_kgs_Lbs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_kgs-number-digit-1").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_kgs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_kgs-number-digit-2").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_kgs1).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_kgs-number-digit-3").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_kgs2).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_kgs-number-digit-4").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_kgs3).click()
        }
      else
        
        {	//Click on an Element from Weight List for "lbs"
          cy.get("[data-id='OEModule_OphCiExamination_models_BirthHistory_input_weight_mode'] > li + li").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_Weight_kgs_Lbs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_lbs_portion-number-digit-1").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_lbs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_lbs_portion-number-digit-2").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_lbs2).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_ozs_portion-number-digit-1").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_ozs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_ozs_portion-number-digit-2").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_ozs2).click()

        }
      })

      
  })
  
  it('0100.05_Click_on_an_Element_from_Delivery_List', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
      //Click on an Element from list.
      cy.get("[data-id='OEModule_OphCiExamination_models_BirthHistory_birth_history_delivery_type_id'] ").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_Delivery).click()
    })
  })
  
  it('0100.06_Click_on_an_Element_from_Gestation_List', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {    
      //Click on an Element from list.
      cy.get("#OEModule_OphCiExamination_models_BirthHistory_gestation_weeks-number-digit-1").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_Gestation).click()
    })
  })

  it('0100.07_Click_on_an_Element_from_wks_List', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
      //Click on an Element from list.
      cy.get("#OEModule_OphCiExamination_models_BirthHistory_gestation_weeks-number-digit-2").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_wks).click()
    })
  })
    
  it('0100.08_Click_on_an_Element_from_SCBU_NSCU_List', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
      //Click on an Element from list.
      //cy.get("#OEModule_OphCiExamination_models_BirthHistory_had_neonatal_specialist_care").scrollIntoView().should('be.visible')
      cy.get("#OEModule_OphCiExamination_models_BirthHistory_had_neonatal_specialist_care > div").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_SCBU_NSCU).click()
    })
  })

  it('0100.09_Click_on_an_Element_from_Multiple_birth_List', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
      //Click on an Element from list.
      cy.get("#OEModule_OphCiExamination_models_BirthHistory_was_multiple_birth > div").should('be.visible').contains(AddExaminationEvents_History.BirthHistory_Multiple_Birth).click()
    })
  })
      
  it('0100.10_Click_on_Click_to_add_button', () => {
    //Click on Click to add button.*
     cy.get("#add-birthhistory-popup > div > div + div").contains('Click to add').should('be.visible').click()  
  })

  // it('0100.11_Input_Value_in_Comments_Textbox', () => {
  //   cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
  //     //To Input Value in Weight_Textbox
  //     cy.get("#add-birthhistory-popup > button").should('be.visible').click({ multiple: true})
  //     cy.wait(2000)
  //     cy.get("#OEModule_OphCiExamination_models_BirthHistory_comments").should('be.visible').clear().type(AddExaminationEvents_History.BirthHistory_CommentsTextBox)
  //   })  
  // })
  
     
  
})