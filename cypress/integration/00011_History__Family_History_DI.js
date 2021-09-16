//Test suite for Add Examination Event
describe('011_Family_History_DI', () => {
    
    
  //Scenario 1# 006_Family History with "No previous systemic surgery" Unchecked.
  it('11.01_Select_Family_History', () => {
    //To get the Family History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()
    cy.wait(2000)
    cy.get("#manage-elements-Family-History").should('be.visible').click()
    cy.wait(2000)
    cy.get(".blue.hint.cols-full").should('be.visible').click()
    cy.wait(2000)
  })
    
  it('11.02__To_Validate_Family History_Section_is_Available', () => {
    //To_Validate_Family History_Section_is_Available.
    cy.get("[data-element-type-name='Family History'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Family History'] > header > h3").should('be.visible').should('contain',"Family History")
      
  })
    
  //to delete existing items
  it('11.03_Clear existing_record for_Family History', () => {
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
  
  
  it('11.04_Click on Add button', () => {
    //Click on Add button.
    cy.get("#add-family-history-button").should('be.visible').click()
    cy.wait(2000)
  })

  it('11.05_Click on an Element from Relative List', () => {
    cy.fixture("familyhstory.json").then((familyhstory) => {
     //Click on an Element from list.
     cy.get("#add-family-history > table > tbody > tr").should('be.visible').contains(familyhstory.Relative).click()
     cy.wait(2000)
    })
  })

  it('11.06_Click on an Element from Side List', () => {
    cy.fixture("familyhstory.json").then((familyhstory) => {
      //Click on an Element from list.
      cy.get("#add-family-history > table > tbody > tr").should('be.visible').contains(familyhstory.Side).click()
      cy.wait(2000)
    })
  })

  it('11.07_Click on Add an Element from Condition List', () => {
    cy.fixture("familyhstory.json").then((familyhstory) => {
     //Click on Add an Element from list.
      cy.get("#add-family-history > table > tbody > tr").should('be.visible').contains(familyhstory.Condition).click()
      cy.wait(2000)
    })
  })

  it('11.08_Click on Click to add button', () => {
    //Click on Click to add button.
    cy.get("#add-family-history > div + div").should('be.visible').contains('Click to add').click()
    cy.wait(2000)
  })

  it('11.09_Add comment', () => {
    cy.fixture("familyhstory.json").then((familyhstory) => {   
      //Click on an Element from list.
      cy.get("#OEModule_OphCiExamination_models_FamilyHistory_entries_0_comments_button").click({force: true})
      cy.get("#OEModule_OphCiExamination_models_FamilyHistory_entries_0_comments").clear().type(familyhstory.comments)
    })
  })
})
