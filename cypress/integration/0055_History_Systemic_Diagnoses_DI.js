
//Test suite for Add Examination Event
describe('0055_Element_Systemic_Diagnoses_DI', () => {
    
  //Scenario 2# 004_Systemic Diagnoses with "No systemic diagnoses" unchecked.
  it('0055.01_Select_Systemic_Diagnoses', () => {
    //To get the Systemic Diagnoses element
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {

      if (body.find('#manage-elements-Systemic-Diagnoses[class="added"]').length == 0)
      {
        cy.get("#manage-elements-Systemic-Diagnoses").should('be.visible').click()
      }

    })

    cy.get(".blue.hint.cols-full").should('be.visible').click()
      
  })

  it('0055.02_To_Validate_Systemic_Diagnoses_Section_is_Available', () => {
    //To_Validate_Systemic Diagnoses_Section_is_Available.
    cy.get("[data-element-type-name='Systemic Diagnoses'] > header > h3").should('be.visible').scrollIntoView()
    cy.get("[data-element-type-name='Systemic Diagnoses'] > header > h3").should('be.visible').should('contain',"Systemic Diagnoses")
        
  })  


  //to delete existing items
  it('0055.03_Clear_existing_record_for_Systemic_Diagnoses', () => {
    cy.get('body').then(($body) => {
      const cnt = $body.find("#OEModule_OphCiExamination_models_SystemicDiagnoses_diagnoses_table > tbody > tr > td + td + td + td + td + td + td >i").length
      console.log("cnt - " + cnt)
      var i;
      for(i = 0; i <= cnt-1; i++)
      {
        cy.get("#OEModule_OphCiExamination_models_SystemicDiagnoses_diagnoses_table > tbody > tr > td + td + td + td + td + td + td >i").eq(0).should('be.visible').click()
        cy.wait(1000)
      }
    })
  }) 

  
  it('0055.04_Verify_No_systemic_diagnoses_Checkbox', () => {

    //To Verify_No_systemic_diagnoses_Checkbox
    cy.get("#OEModule_OphCiExamination_models_SystemicDiagnoses_no_systemic_diagnoses").should('be.visible').should('not.be.checked')
    
    })

  it('0055.05_Verify_Add_item_button', () => {
    //To click Add buton
    cy.get("#add-history-systemic-diagnoses").click()
    
  })

  it('0055.06_Select_value_from_search_dropdown', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //To Pick value from Search Dropdown
      cy.get('#OEModule_OphCiExamination_models_SystemicDiagnoses_element > div + table + div > div > table > tbody > tr > td + td > div > div > input').type(AddExaminationEvents_History.SystemicDiagnoses_DropDownValue)
      cy.wait(2000)
    })
  })
  
  it('0055.07_Select_desired_value_from_list', () => {
    //Select desired value from search dropdown
    cy.get("#OEModule_OphCiExamination_models_SystemicDiagnoses_element > div + table + div > div > table > tbody > tr > td + td > div > div > ul > li").click()
    
  })

  it('0055.08_Click_on_Click_to_add_button', () => {
    //Click on Click to add button
    cy.get("#systemic-diagnoses-popup > div > div + div").should('be.visible').click()
    
  })
  
  it('0055.09_Add date', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //Add date
      cy.get("#OEModule_OphCiExamination_models_SystemicDiagnoses_diagnoses_table > tbody > tr > td + td + td + td + td > input").should('be.visible').type(AddExaminationEvents_History.SystemicDiagnoses_Date)
     
    })
  })

})