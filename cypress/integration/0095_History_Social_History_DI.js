describe('0095_Social_History_DI', () => {
    
    
  //Scenario 1# 006_Systemic Surgical History with "No previous systemic surgery" Unchecked.
  it('0095.01_Select_Social_History', () => {

    //To get the Social_History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {
  
        if (body.find('#manage-elements-Social-History[class="added"]').length == 0)
        {
          cy.get("#manage-elements-Social-History").should('be.visible').click()
        }
  
    })
  
    cy.get(".blue.hint.cols-full").should('be.visible').click()

  })

  it('0095.02_To_Validate_Social_History_Section_is_Available', () => {
    //To_Validate_Social_History_Section_is_Available.
    cy.get("[data-element-type-class='OEModule_OphCiExamination_models_SocialHistory'] > header> h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-class='OEModule_OphCiExamination_models_SocialHistory'] > header> h3").should('be.visible').should('contain',"Social History")
      
  })
           
  it('0095.03_Input_data_for_Social_History', () => {
    //Click on Add button.
    cy.get("#add-social-history-btn").scrollIntoView().should('be.visible')
    cy.get("#add-social-history-btn").should('be.visible').click()

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      //Click on an Element from Employment List.
      cy.get("#occupation_id > div > ul").eq(0).should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Employment).click()
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {     
      //Click on an Element from Driving Status List.
      cy.get("#driving_statuses > div").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Driving_Status).click()
    })
    
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {     
      //Click on an Element from Smoking Status List.
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td +td").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Smoking_Status).click()
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      //Click on an Element from Accommodation List.
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td +td +td").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Accommodation).click()
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      //_Click on an Element from Carer List.
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td + td + td + td > div > div > ul").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Carer).click()
    })
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      //Click on an Element from Substance Misuse List
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td + td + td + td + td > div > div > ul").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Substance_Misuse).click()
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      //Click on an Element from Alcohol units List.
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td + td + td + td + td + td").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Alcohol_Units).click()
    })

    //Click on Click to add button.
    cy.get("#add-social-history-popup > div > div + div").should('be.visible').contains('Click to add').click()
  

  })

 
  //-------------------------Code to verify selection of data------------------------------//

  it('0095.04_Collect_variable_values_to_verify_selection', () => {  
    cy.get('body').then(($body) => {
    const cntEmployment = $body.find('#textField_occupation_id').text().trim()
    const cntDrivingStatus = $body.find('#textField_driving_statuses').text().trim()
    const cntSmokingStatus = $body.find('#textField_smoking_status_id').text().trim()
    const cntAccommodation = $body.find('#textField_accommodation_id').text().trim()
    const cntCarer = $body.find('#textField_carer_id').text().trim()
    const cntSubstanceMisuse = $body.find('#textField_substance_misuse_id').text().trim()
    const cntAlcoholUnits = $body.find('#textField_alcohol_intake').text().trim()
    
    //Click on Add button.
    cy.get("#add-social-history-btn").scrollIntoView().should('be.visible')
    cy.get("#add-social-history-btn").should('be.visible').click()

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      if (cntEmployment == "Nothing selected.")
      {
      //Click on an Element from list.
      cy.get("#occupation_id > div > ul").eq(0).should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Employment).click()
      }
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {     
      if (cntDrivingStatus == "Nothing selected.")
      {
      //Click on an Element from list.
      cy.get("#driving_statuses > div").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Driving_Status).click()
      }
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if (cntSmokingStatus == "Nothing selected.")
      {     
      //Click on an Element from list.
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td +td").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Smoking_Status).click()
      }
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
      if (cntAccommodation == "Nothing selected.")
      { 
      //Click on an Element from list.
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td +td +td").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Accommodation).click()
      }
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      if (cntCarer == "Nothing selected.")
      {
      //Click on an Element from list.
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td + td + td + td > div > div > ul").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Carer).click()
      }
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {
      if (cntSubstanceMisuse == "Nothing selected.")
      {
      //Click on an Element from list.
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td + td + td + td + td > div > div > ul").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Substance_Misuse).click()
      }
    })

    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {  
      if (cntAlcoholUnits == "Nothing selected.")
      { 
      //Click on an Element from list.
      cy.get("#add-social-history-popup > div > table > tbody > tr > td + td + td + td + td + td + td").should('be.visible').contains(AddExaminationEvents_History.SocialHistory_Alcohol_Units).click()
      }
    })

    //Click on Click to add button.
      cy.get("#add-social-history-popup > div > div + div").should('be.visible').contains('Click to add').click()  
    })
  
  
  })

  
  
  it('0095.05_Add_comment', () => {
    cy.fixture("AddExaminationEvents_History.json").then((AddExaminationEvents_History) => {   
      //Click on an Element from list.
      cy.get("#add-social-history-popup > button > i").eq(0).click({force : true})
      cy.get("#OEModule_OphCiExamination_models_SocialHistory_comments").should('be.visible').clear().type(AddExaminationEvents_History.SocialHistory_Comments)
    })
  })
   
})