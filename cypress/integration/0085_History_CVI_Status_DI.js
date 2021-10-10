//Test suite for Add Examination Event
describe('0085_CVI_status_DI', () => {
    
  //Scenario 1# 006_Systemic Surgical History with "No previous systemic surgery" Unchecked.
  it('0085.01_Select_CVI_status', () => {
    //To get the Medication_History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {
  
        if (body.find('#manage-elements-CVI-status[class="added"]').length == 0)
        {
          cy.get("#manage-elements-CVI-status").should('be.visible').click()
        }
  
    })
  
    cy.get(".blue.hint.cols-full").should('be.visible').click()

  })
    
  it('0085.02_To_Validate_CVI_status_Section_is_Available', () => {
    //To_Validate_CVI_status_Section_is_Available.
    cy.get("[data-element-type-name='CVI status'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='CVI status'] > header > h3").should('be.visible').should('contain',"CVI status")
        
  })  
    
    
  it('0085.03_Click_on_Add_button', () => {
    //Click on Add button.
    cy.get("#show-add-cvi-popup").should('be.visible').click()
    cy.wait(2000)
  })

  it('0085.04_Click_on_an_Element_from_List', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //Click on an Element from list.
      cy.get("#add-to-cvi-status > div > table > tbody > tr > td > div > div > ul").should('be.visible').contains(AddExaminationEvents_History.CviStatus_ListItem).click()
      cy.wait(2000)
    })
  })

  it('0085.05_Click_on_Click_to_add_button', () => {
    //Click on Click to add button.
    cy.get("#add-to-cvi-status > div > div + div").should('be.visible').contains('Click to add').click()
    cy.wait(2000)              
  })

    
  it('0085.06_Add_Date', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      //Click on an Element from list.
      cy.get("[name='OEModule_OphCiExamination_models_Element_OphCiExamination_CVI_Status[element_date]']").should('be.visible').clear().type(AddExaminationEvents_History.CviStatus_Date)
      cy.wait(2000)
    })

  })
    
})
