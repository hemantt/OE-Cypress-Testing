
//Test suite for Add Examination Event
describe('00004_Select_Systemic_Diagnoses_DI', () => {
    
  //Scenario 2# 004_Systemic Diagnoses with "No systemic diagnoses" unchecked.
  it('04.01_Select_Systemic_Diagnoses', () => {
    //To get the Systemic Diagnoses element
    cy.get("#js-manage-elements-btn").should('be.visible').click()
    cy.get("#manage-elements-Systemic-Diagnoses").should('be.visible').click()
    cy.get(".blue.hint.cols-full").should('be.visible').click()
      
  })

  it('04.02__To_Validate_Systemic Diagnoses_Section_is_Available', () => {
    //To_Validate_Systemic Diagnoses_Section_is_Available.
    cy.get("[data-element-type-name='Systemic Diagnoses'] > header > h3").should('be.visible').scrollIntoView()
    cy.get("[data-element-type-name='Systemic Diagnoses'] > header > h3").should('be.visible').should('contain',"Systemic Diagnoses")
        
  })  


  //to delete existing items
  it('04.03_Clear existing_record for_Systemic_Diagnoses', () => {
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

  
  it('04.04_Verify_No_systemic_diagnoses_Checkbox', () => {

    //To Verify_No_systemic_diagnoses_Checkbox
    cy.get("#OEModule_OphCiExamination_models_SystemicDiagnoses_no_systemic_diagnoses").should('be.visible').should('not.be.checked')
    
    })

  it('04.05_Verify_Add item button', () => {
    //To click Add buton
    cy.get("#add-history-systemic-diagnoses").click()
    
  })

  it('04.06_Select value from search dropdown', () => {
    cy.fixture("systemicdiagnoses.json").then((systemicdiagnoses) => {
      //To Pick value from Search Dropdown
      cy.get('#OEModule_OphCiExamination_models_SystemicDiagnoses_element > div + table + div > div > table > tbody > tr > td + td > div > div > input').type(systemicdiagnoses.systemicdiagnoses_dropdownvalue)
      cy.wait(2000)
    })
  })
  
  it('04.07_Select desired value from list', () => {
    //Select desired value from search dropdown
    cy.get("#OEModule_OphCiExamination_models_SystemicDiagnoses_element > div + table + div > div > table > tbody > tr > td + td > div > div > ul > li").click()
    
  })

  it('04.08_Click on Click to add button', () => {
    //Click on Click to add button
    cy.get("#systemic-diagnoses-popup > div > div + div").should('be.visible').click()
    
  })
  
  it('04.09_Add date', () => {
    cy.fixture("systemicdiagnoses.json").then((systemicdiagnoses) => {
      //Add date
      cy.get("#OEModule_OphCiExamination_models_SystemicDiagnoses_diagnoses_table > tbody > tr > td + td + td + td + td > input").should('be.visible').type(systemicdiagnoses.systemicdiagnoses_date)
     
    })
  })

})