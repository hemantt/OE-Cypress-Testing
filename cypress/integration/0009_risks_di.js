describe('0009_Risks_Element_DI', () => {

    
    //To add risks element 
      it('0009.1_To_Add_Risks_Element' , () => {
        cy.get("#js-manage-elements-btn").should('be.visible').click()
        cy.get('#manage-elements-Risks').should('be.visible').click()
        cy.get('.blue').should('be.visible').click()
      }) 

    //Verify that Risks section is loaded successfully (removed should(be.visible)
     it('0009.2_To_Validate_Risks_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Risks"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Risks"] > header > h3').should('contain' , 'Risks')
    

      cy.get('body').then(($body) => {
        const cnt = $body.find('.oe-i.trash').length
  
        var i;
        for(i = 0; i <= cnt-1; i++)
        {
          cy.get('#OEModule_OphCiExamination_models_HistoryRisks_element > div > table > tbody > tr > td + td + td + td > i').click()
          cy.wait(1000)
  
        }
      })

  })
    //Test to verify that Risks values are pre-populated correctly
    it('0009.3_CheckRisks', () => { 
       
    //Scroll to the Risks section
      cy.get(".risk-display").eq(0).scrollIntoView().should('be.visible')

    //Add and verify Risks information, as mentioned in the addexaminationevents file
      cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
          cy.get(".risk-display").eq(0).should('be.visible').contains(addexaminationevents.Risk1)
      })
      

      cy.get(".OEModule_OphCiExamination_models_HistoryRisks_entry_table > tbody > [data-key='0'] > :nth-child(2) > :nth-child(2) > input").should('be.visible').check()
      cy.get(".OEModule_OphCiExamination_models_HistoryRisks_entry_table > tbody > [data-key='0'] > :nth-child(2) > :nth-child(2) > input").should('be.visible').should('be.checked')
    
        
      
      cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
          cy.get(".risk-display").eq(1).should('be.visible').contains (addexaminationevents.Risk2)
      })

      cy.get(".OEModule_OphCiExamination_models_HistoryRisks_entry_table > tbody > [data-key='1'] > :nth-child(2) > :nth-child(2) > input").check()
      cy.get(".OEModule_OphCiExamination_models_HistoryRisks_entry_table > tbody > [data-key='1'] > :nth-child(2) > :nth-child(2) > input").should('be.visible').should('be.checked')

  })

    //To add Risks

  it('0009.4_Add_Risks' , () => {
     cy.get('#show-add-risk-popup').should('be.visible').click()
    //Add and verify Risk as mentioned in the addexaminationevents file
    cy.fixture("addexaminationevents.json").then((addexaminationevents) => {
     cy.get('#risk_dialog_list > div > ul').should('be.visible').contains(addexaminationevents.Risk).click()

    //Click the button to close the popup, post the selections made on the popup window 
      cy.get('#OEModule_OphCiExamination_models_HistoryRisks_element > div > div + div').should('be.visible').click()
  })
})
    
    //Add comments 
    it('9.7_Add_Comments _For_Extreme_Fear' , () => {
  
    cy.fixture("addexaminationevents.json").then((addexaminationevents) => {

    //Add comments to the Risk , as mentioned in the addexaminationevents file  
     cy.get("#OEModule_OphCiExamination_models_HistoryRisks_element > div > table >  tbody > tr  > td + td + td > div  > div").eq(2).should('be.visible').type(addexaminationevents.Risks_Comments)
  }) 
})

})

