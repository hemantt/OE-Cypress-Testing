//Test suite for Add Examination Event
describe('0090_Family_History_DI', () => {
    
    
  //Scenario 1# 006_Family History with "No previous systemic surgery" Unchecked.
  it('0090.01_Select_Family_History', () => {
    //To get the Family History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {
  
        if (body.find('#manage-elements-Family-History[class="added"]').length == 0)
        {
          cy.get("#manage-elements-Family-History").should('be.visible').click()
        }
  
    })
  
    cy.get(".blue.hint.cols-full").should('be.visible').click()

  })
    
  it('0090.02_To_Validate_Family_History_Section_is_Available', () => {
    //To_Validate_Family History_Section_is_Available.
    cy.get("[data-element-type-name='Family History'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Family History'] > header > h3").should('be.visible').should('contain',"Family History")
      
  })
    
  //to delete existing items
  it('0090.03_Clear_existing_record_for_Family_History', () => {
    cy.get('body').then(($body) => {
      const cnt = $body.find('#OEModule_OphCiExamination_models_FamilyHistory_entry_table > tbody > tr > td + td + td + td + td >i').length
      console.log("cnt - " + cnt)
      var i;
      for(i = 0; i <= cnt-1; i++)
      {
        cy.get("#OEModule_OphCiExamination_models_FamilyHistory_entry_table > tbody > tr > td + td + td + td + td >i").eq(0).should('be.visible').click()
        cy.wait(1000)

      }
    })
  }) 
  
  
  it('0090.04_Click_on_Add_button', () => {
    //Click on Add button.
    cy.get("#add-family-history-button").should('be.visible').click()
    cy.wait(2000)
  })

  it('0090.05_Click_on_an_Element_from_Relative_List', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
     //Click on an Element from list.
     cy.get("#add-family-history > table > tbody > tr").should('be.visible').contains(AddExaminationEvents_History.FamilyHistory_Relative).click()
     cy.wait(2000)
    })
  })

  it('0090.06_Click_on_an_Element_from_Side_List', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      //Click on an Element from list.
      cy.get("#add-family-history > table > tbody > tr").should('be.visible').contains(AddExaminationEvents_History.FamilyHistory_Side).click()
      cy.wait(2000)
    })
  })

  it('0090.07_Click_on_Add_an_Element_from_Condition_List', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
     //Click on Add an Element from list.
      cy.get("#add-family-history > table > tbody > tr").should('be.visible').contains(AddExaminationEvents_History.FamilyHistory_Condition).click()
      cy.wait(2000)
    })
  })

  it('0090.08_Click_on_Click_to_button', () => {
    //Click on Click to add button.
    cy.get("#add-family-history > div + div").should('be.visible').contains('Click to add').click()
    cy.wait(2000)
  })

  it('0090.09_Add_comment', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      //Click on an Element from list.
      cy.get("#OEModule_OphCiExamination_models_FamilyHistory_entries_0_comments_button").click({force: true})
      cy.get("#OEModule_OphCiExamination_models_FamilyHistory_entries_0_comments").clear().type(AddExaminationEvents_History.FamilyHistory_Comments)
    })
  })
})
