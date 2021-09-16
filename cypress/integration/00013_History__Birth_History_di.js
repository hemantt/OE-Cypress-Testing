describe('0013_Birth_History_DI', () => {
    
  
  //Scenario 1# 006_Systemic Surgical History with "No previous systemic surgery" Unchecked.
  it('13.01_Select_Birth_History', () => {

    //To get the Birth_History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()
    cy.wait(1000)
    cy.get("#manage-elements-Birth-History").should('be.visible').click()
    cy.wait(1000)
    cy.get(".blue.hint.cols-full").should('be.visible').click()
    cy.wait(1000)
  })

  it('13.02__To_Validate_Birth History_Section_is_Available', () => {
      //To_Validate_Pupils_Section_is_Available.
      cy.get("[data-element-type-name='Birth History'] > header > h3").scrollIntoView().should('be.visible')
      cy.get("[data-element-type-name='Birth History'] > header > h3").should('be.visible').should('contain',"Birth History")
      
  })
           
  it('13.03_Click on Add button', () => {
      //Click on Add button.
      cy.get("#add-birthhistory-btn").should("be.enabled").click()
    })

  it('13.04_Click on Weight Selection "Kgs/lbs"', () => {
    //Weight Selection Kgs/lbs
    cy.fixture("birthhistory.json").then((birthhistory) => {
      if (birthhistory.Weight_kgs_lbs == "kgs")
        {	//Click on an Element from Weight List for "Kgs"
          cy.get("[data-id='OEModule_OphCiExamination_models_BirthHistory_input_weight_mode'] > li").should('be.visible').contains(birthhistory.Weight_kgs_lbs).click()
          cy.get("[data-id='OEModule_OphCiExamination_models_BirthHistory_input_weight_mode'] > li").should('be.visible').contains(birthhistory.Weight_kgs_lbs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_kgs-number-digit-1").should('be.visible').contains(birthhistory.kgs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_kgs-number-digit-2").should('be.visible').contains(birthhistory.kgs1).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_kgs-number-digit-3").should('be.visible').contains(birthhistory.kgs2).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_kgs-number-digit-4").should('be.visible').contains(birthhistory.kgs3).click()
        }
      else
        
        {	//Click on an Element from Weight List for "lbs"
          cy.get("[data-id='OEModule_OphCiExamination_models_BirthHistory_input_weight_mode'] > li + li").should('be.visible').contains(birthhistory.Weight_kgs_lbs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_lbs_portion-number-digit-1").should('be.visible').contains(birthhistory.lbs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_lbs_portion-number-digit-2").should('be.visible').contains(birthhistory.lbs2).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_ozs_portion-number-digit-1").should('be.visible').contains(birthhistory.ozs).click()
          cy.get("#OEModule_OphCiExamination_models_BirthHistory_input_weight_ozs_portion-number-digit-2").should('be.visible').contains(birthhistory.ozs2).click()

        }
      })

      
  })
  
  it('13.05_Click on an Element from Delivery List', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {  
      //Click on an Element from list.
      cy.get("[data-id='OEModule_OphCiExamination_models_BirthHistory_birth_history_delivery_type_id'] ").should('be.visible').contains(birthhistory.delivery).click()
    })
  })
  
  it('13.06_Click on an Element from Gestation List', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {    
      //Click on an Element from list.
      cy.get("#OEModule_OphCiExamination_models_BirthHistory_gestation_weeks-number-digit-1").should('be.visible').contains(birthhistory.Gestation).click()
    })
  })

  it('13.07_Click on an Element from (wks) List', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {  
      //Click on an Element from list.
      cy.get("#OEModule_OphCiExamination_models_BirthHistory_gestation_weeks-number-digit-2").should('be.visible').contains(birthhistory.wks).click()
    })
  })
    
  it('13.08_Click on an Element from SCBU/NSCU List', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {  
      //Click on an Element from list.
      //cy.get("#OEModule_OphCiExamination_models_BirthHistory_had_neonatal_specialist_care").scrollIntoView().should('be.visible')
      cy.get("#OEModule_OphCiExamination_models_BirthHistory_had_neonatal_specialist_care > div").should('be.visible').contains(birthhistory.SCBU_NSCU).click()
    })
  })

  it('13.09_Click on an Element from Multiple birth List', () => {
    cy.fixture("birthhistory.json").then((birthhistory) => {  
      //Click on an Element from list.
      cy.get("#OEModule_OphCiExamination_models_BirthHistory_was_multiple_birth > div").should('be.visible').contains(birthhistory.Multiple_birth).click()
    })
  })
      
  it('13.10_Click on Click to add button', () => {
    //Click on Click to add button.*
     cy.get("#add-birthhistory-popup > div > div + div").contains('Click to add').should('be.visible').click()  
  })

  // it('13.11_Input Value in Comments_Textbox', () => {
  //   cy.fixture("birthhistory.json").then((birthhistory) => {
  //     //To Input Value in Weight_Textbox
  //     cy.get("#add-birthhistory-popup > button").should('be.visible').click({ multiple: true})
  //     cy.wait(2000)
  //     cy.get("#OEModule_OphCiExamination_models_BirthHistory_comments").should('be.visible').clear().type(birthhistory.commentstextbox)
  //   })  
  // })
  
     
  
})