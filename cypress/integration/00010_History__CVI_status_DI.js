//Test suite for Add Examination Event
describe('010_CVI_status_DI', () => {
    
  //Scenario 1# 006_Systemic Surgical History with "No previous systemic surgery" Unchecked.
  it('10.01_Select_CVI_status', () => {
    //To get the Medication_History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()
    cy.get("#manage-elements-CVI-status").should('be.visible').click()
    cy.get(".blue.hint.cols-full").should('be.visible').click()
  })
    
  it('10.02__To_Validate_CVI_status_Section_is_Available', () => {
    //To_Validate_CVI_status_Section_is_Available.
    cy.get("[data-element-type-name='CVI status'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='CVI status'] > header > h3").should('be.visible').should('contain',"CVI status")
        
  })  
    
    
  it('10.03_Click on Add button', () => {
    //Click on Add button.
    cy.get("#show-add-cvi-popup").should('be.visible').click()
    cy.wait(2000)
  })

  it('10.04_Click on an Element from List', () => {
    cy.fixture("cvistatus.json").then((cvistatus) => {
      //Click on an Element from list.
      cy.get("#add-to-cvi-status > div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(cvistatus.list_item).click()
      cy.wait(2000)
    })
  })

  it('10.05_Click on Click to add button', () => {
    //Click on Click to add button.
    cy.get("#add-to-cvi-status > div > div + div").should('be.visible').contains('Click to add').click()
    cy.wait(2000)              
  })

    
  it('10.06_Add Date', () => {
    cy.fixture("cvistatus.json").then((cvistatus) => {   
      //Click on an Element from list.
      cy.get("[name='OEModule_OphCiExamination_models_Element_OphCiExamination_CVI_Status[element_date]']").should('be.visible').clear().type(cvistatus.date)
      cy.wait(2000)
    })

  })
    
})
