//Test suite for Add Examination Event
describe('006_Systemic_Surgical_History_DI', () => {
  //Scenario 1# 006_Systemic Surgical History with "No previous systemic surgery" Unchecked.
  it('06.01_Select_Systemic_Surgical_History', () => {
    //To get the Systemic_Surgical_History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()
    cy.get("#manage-elements-Systemic-Surgical-History").click()
    cy.get(".blue.hint.cols-full").should('be.visible').click()
  })

  it('06.02__To_Validate_Systemic Surgical History_Section_is_Available', () => {
    //To_Validate_Systemic Surgical History_Section_is_Available.
    cy.get("[data-element-type-name='Systemic Surgical History'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Systemic Surgical History'] > header > h3").should('be.visible').should('contain',"Systemic Surgical History")
          
  })  
   
  //to delete existing items for Systemic Surgical History
  it('06.03_Clear existing_record for_Systemic Surgical History', () => {
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

  
  it('06.04_Verify_No previous systemic surgery_Checkbox', () => {
    //To Verify_No previous systemic surgery_Checkbox
    cy.get("#OEModule_OphCiExamination_models_SystemicSurgery_no_systemicsurgery").should("be.enabled").should('be.not.checked')
    cy.wait(2000)
  })
    
  it('06.05_Click on Add button', () => {
    //Click on Add button.
    cy.get("#add-to-systemic-past-surgery > button + button").should("be.enabled").click()
  })

  it('06.06_Click on an Element from list', () => {
    cy.fixture("systemicsurgicalhistory.json").then((systemicsurgicalhistory) => {
      //Click on an Element from list.
      cy.get("#add-to-systemic-past-surgery > div > table > tbody > tr > td > div > div > ul > li").eq(1).should('contain',systemicsurgicalhistory.Systemic_Surgical_History_List).click()
    })
  })

  it('06.07_Click on Click to add button', () => {
    //Click on Click to add button.
    cy.get("#add-to-systemic-past-surgery > div > div + div").contains('Click to add').click() 
  })

  it('06.08_Add date', () => {
    cy.fixture("systemicsurgicalhistory.json").then((systemicsurgicalhistory) => {
      //Add date
      cy.get("#systemic-past-surgery-datepicker-0").should("be.enabled").type(systemicsurgicalhistory.Systemic_Surgical_Date)
      cy.wait(3000)
    })
  })
    

})
