//Test suite for Add Examination Event
describe('0065_Systemic_Surgical_History_DI', () => {
  //Scenario 1# 006_Systemic Surgical History with "No previous systemic surgery" Unchecked.
  it('0065.01_Select_Systemic_Surgical_History', () => {
    //To get the Systemic_Surgical_History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {
  
        if (body.find('#manage-elements-Systemic-Surgical-History[class="added"]').length == 0)
        {
          cy.get("#manage-elements-Systemic-Surgical-History").click()
        }
  
    })
  
    cy.get(".blue.hint.cols-full").should('be.visible').click()

  })

  it('0065.02_To_Validate_Systemic_Surgical_History_Section_is_Available', () => {
    //To_Validate_Systemic Surgical History_Section_is_Available.
    cy.get("[data-element-type-name='Systemic Surgical History'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Systemic Surgical History'] > header > h3").should('be.visible').should('contain',"Systemic Surgical History")
          
  })  
   
  //to delete existing items for Systemic Surgical History
  it('0065.03_Clear_existing_record_for_Systemic_Surgical_History', () => {
    cy.get('body').then(($body) => {
      const cnt = $body.find("#OEModule_OphCiExamination_models_SystemicSurgery_operation_table > tbody > tr > td + td + td + td + td + td + td > i").length
      console.log("cnt - " + cnt)
      var i;
      for(i = 0; i <= cnt-1; i++)
      {
        cy.get("#OEModule_OphCiExamination_models_SystemicSurgery_operation_table > tbody > tr > td + td + td + td + td + td + td > i").eq(0).should('be.visible').click()
        cy.wait(1000)
      }
    })
  }) 

  
  it('0065.04_Verify_No_previous_systemic_surgery_Checkbox', () => {
    //To Verify_No previous systemic surgery_Checkbox
    cy.get("#OEModule_OphCiExamination_models_SystemicSurgery_no_systemicsurgery").should("be.enabled").should('be.not.checked')
    cy.wait(2000)
  })
    
  it('0065.05_Click_on_Add_button', () => {
    //Click on Add button.
    cy.get("#add-to-systemic-past-surgery > button + button").should("be.enabled").click()
  })

  it('0065.06_Click_on_an_Element_from_list', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //Click on an Element from list.
      cy.get("#add-to-systemic-past-surgery > div > table > tbody > tr > td > div > div > ul > li").get('[data-label=' + '"' +AddExaminationEvents_History.Systemic_Surgical_History_List + '"').click()//.should('contain',AddExaminationEvents_History.Systemic_Surgical_History_List,{ multiple: true }).click()
    })
  })

  it('0065.07_Click_on_Click_to_add_button', () => {
    //Click on Click to add button.
    cy.get("#add-to-systemic-past-surgery > div > div + div").contains('Click to add').click() 
  })

  it('0065.07.01_Add_Value_for_other_option', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      //Add text to textbox Other.
      if(AddExaminationEvents_History.Systemic_Surgical_History_List=="Other")
      {
        cy.get("#OEModule_OphCiExamination_models_SystemicSurgery_operations_0>td>input+input").clear().type(AddExaminationEvents_History.Systemic_Surgical_Other_Procedure_Name)
      }
      
    })
  })

  it('0065.08_Add_date', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //Add date
      cy.get("#systemic-past-surgery-datepicker-0").should("be.enabled").type(AddExaminationEvents_History.Systemic_Surgical_History_Date)
      cy.wait(3000)
    })
  })
    

})
