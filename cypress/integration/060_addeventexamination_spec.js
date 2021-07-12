///    <reference types="cypress" /> 
// Triple Slash Directive for cypress auto suggestions

// Before running the test, first perform login, then change-context and then search operations
before(function() {  
        
    //Calling login operation, from command
    cy.login()
  
    //Calling change-context operation, from command
    cy.changecontext()
  
    //Calling search operation, from command
    cy.search()
    
  })
  
//Test suite for Add Examination Event
describe('060_Add Examination Event', () => {
    
    //Test to check and click the Add Event button
    it('060.1_AddEvent_Examination_isAvailable', () => { 
        
        //Check and click the Add Event button
        cy.get("#add-event").should('be.visible').click()
    })

    //Test to check and click the Add Examination Event link
    it('060.2_Check_Add_Examination_And_Click', () => { 

        //Check and click the Add Correspondence Event link
        cy.get("#OphCiExamination-link").should('be.visible').click()
    })

  //Test to check that the Examination Event page loaded successfully
  it('060.3_Check_Add_Examination_Page_Loaded_Successfully', () => { 
      
    //Check that the Examination Event page is loaded successfully, by verifying the page-header
    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

        //Verify the page header against the value of Add_Examination_Event_Nurse_Page_Header, in addexaminationevent json file
        cy.get('.event-title').should('contain',addexaminationevent.Add_Examination_Event_Nurse_Page_Header)
    })
  })

    //Verify that Drops section is loaded successfully
    it('060.4_Drops_Section_isAvailable', () => { 
        
        //Verify the Drops section
        cy.get(".element-header>.element-title").eq(0).should('have.text', 'Drops')
    })
        
    //Verify that History section is loaded successfully
    it('060.5_History_Section_isAvailable', () => { 
    
        //Verify the History section
        cy.get(".element-header>.element-title").eq(1).should('have.text', 'History')
    })

    //Verify that Diagnoses section is loaded successfully
    it('060.6_Systemic Diagnoses_Section_isAvailable', () => { 
    
        //Verify the Diagnoses section
        cy.get(".element-header>.element-title").eq(2).should('have.text', 'Systemic Diagnoses')
    })

    //Verify that Allergies section is loaded successfully
    it('060.7_Allergies_Section_isAvailable', () => { 
    
        //Verify the Allergies section
        cy.get(".element-header>.element-title").eq(3).should('have.text', 'Allergies')
    })

    //Verify that Surgical History section is loaded successfully
    it('060.8_Systemic Surgical History_Section_isAvailable', () => { 
    
        //Verify the Surgical History section
        cy.get(".element-header>.element-title").eq(4).should('have.text', 'Systemic Surgical History')
    })

    //Verify that Ophthalmic Surgical History section is loaded successfully
    it('060.9_Ophthalmic Surgical History_Section_isAvailable', () => { 
    
        //Verify the Ophthalmic Surgical History section
        cy.get(".element-header>.element-title").eq(5).should('have.text', 'Ophthalmic Surgical History')
    })

    //Verify that Medication History section is loaded successfully
    it('060.10_Medication History_Section_isAvailable', () => { 
    
        //Verify the Medication History section
        cy.get(".element-header>.element-title").eq(6).should('have.text', 'Medication History')
    })

    //Verify that Risks section is loaded successfully
    it('060.11_Risks_Section_isAvailable', () => { 
    
        //Verify the Risks section
        cy.get(".element-header>.element-title").eq(7).should('have.text', 'Risks')
    })

    //Verify that CVI Status section is loaded successfully
    it('060.12_CVI status_Section_isAvailable', () => { 
    
        //Verify the CVI Status section
        cy.get(".element-header>.element-title").eq(8).should('have.text', 'CVI status')
    })

    //Verify that Family History section is loaded successfully
    it('060.13_Family History_Section_isAvailable', () => { 
    
        //Verify the Family History section
        cy.get(".element-header>.element-title").eq(9).should('have.text', 'Family History')
    })

    //Verify that Social History section is loaded successfully
    it('060.14_Social History_Section_isAvailable', () => { 
    
        //Verify the Social History section
        cy.get(".element-header>.element-title").eq(10).should('have.text', 'Social History')
    })

    //Verify that Communication Preferences section is loaded successfully
    it('060.15_Communication Preferences_Section_isAvailable', () => { 
    
        //Verify the Communication Preferences section
        cy.get(".element-header>.element-title").eq(11).should('have.text', 'Communication Preferences')
    })

    //Verify that Intraocular Pressure section is loaded successfully
    it('060.16_Intraocular Pressure_Section_isAvailable', () => { 
    
        //Verify the Intraocular Pressure section
        cy.get(".element-header>.element-title").eq(12).should('have.text', 'Intraocular Pressure')
    })

    //Verify that Visual Acuity section is loaded successfully
    it('060.17_Visual Acuity_Section_isAvailable', () => { 
    
        //Verify the Visual Acuity section
        cy.get(".element-header>.element-title").eq(13).should('have.text', 'Visual Acuity')
    })

    //Verify that Pupils section is loaded successfully
    it('060.18_Pupils_Section_isAvailable', () => { 
    
        //Verify the Pupils section
        cy.get(".element-header>.element-title").eq(14).should('have.text', 'Pupils')
    })


    //Verify that the drops are addedd successfully to the right eye
    it('060.19_Add Drops to the Right Eye', () => { 
       
        //Click the button to invoke the popup to have values for selection
        cy.get("button.button.hint.green.js-add-select-search:nth-child(2)").eq(0).should('be.visible').click()
        
        //Select the drug-name for drop (right eye) value, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(0).contains(addexaminationevent.Drops_Right_Eye_Drug_Name).parent().click()
          })

        //Click the button to close the popup, post the selections made on the popup window        
        cy.get("#add-to-dilation-right > button").should('be.visible').click()

        //Verify the drug-name for drop (right eye) value, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".drugName").eq(0).should('have.text', addexaminationevent.Drops_Right_Eye_Drug_Name)
          })
        
    })

    //Verify that the drops are addedd successfully to the left eye
    it('060.20_Add Drops to the Left Eye', () => { 
       
        //Click the button to invoke the popup to have values for selection
        cy.get("button.button.hint.green.js-add-select-search:nth-child(2)").eq(1).should('be.visible').click()

        //Select the drug-name for drop (left eye) value, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(1).contains(addexaminationevent.Drops_Left_Eye_Drug_Name).parent().click()
          })

        //Click the button to close the popup, post the selections made on the popup window        
        cy.get("#add-to-dilation-left > button").should('be.visible').click()
        
        //Verify the drug-name for drop (left eye) value, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".drugName").eq(1).should('have.text', addexaminationevent.Drops_Left_Eye_Drug_Name)
          })

    })

    //Add time of drops successfully to the right eye
    it('060.21_Add Time of Drops for Right Eye', () => { 
       
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Add time of drops to the right eye, as mentioned in the addexaminationevent file
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Dilation_right_treatments_0_treatment_time").should('be.visible').clear().type(addexaminationevent.Drops_Right_Eye_Time)
          })

    })

    //Add time of drops successfully to the left eye
    it('060.22_Add Time of Drops for Left Eye', () => { 
       
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Add time of drops to the left eye, as mentioned in the addexaminationevent file
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Dilation_left_treatments_1_treatment_time").should('be.visible').clear().type(addexaminationevent.Drops_Left_Eye_Time)
          })

    })
  
    //Add comments successfully to the right eye
    it('060.23_Add Comments for Right Eye', () => { 
       
        //Click the icon (right eye) to open-up right-eye comments section
        cy.get("#dilation-right-comment-button").should('be.visible').click()

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Add comments to the right eye, as mentioned in the addexaminationevent file
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Dilation_right_comments").should('be.visible').clear().type(addexaminationevent.Drops_Right_Eye_Comments)
          })
        
    })

    //Add comments successfully to the left eye
    it('060.24_Add Comments for Left Eye', () => { 

        //Scroll to the left eye icon (which opens-up comments section for left eye)
        cy.get("#dilation-left-comment-button").scrollIntoView().should('be.visible')

        //Click the icon (right eye) to open-up right-eye comments section
        cy.get("#dilation-left-comment-button").should('be.visible').click()

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Add comments to the left eye, as mentioned in the addexaminationevent file
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_Dilation_left_comments").should('be.visible').clear().type(addexaminationevent.Drops_Left_Eye_Comments)
          })
  })


  //Add history and verify that it reflects correctly on the read-only field
  it('060.25_Add_And_Verify_History', () => { 
       
    //Click the button to invoke the popup to have values for selection
    cy.get("#show-add-to-history").should('be.visible').click()

    //Add History information, as mentioned in the addexaminationevent file
    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
        cy.get(".add-options").eq(2).contains(addexaminationevent.History).parent().click()
        cy.get(".add-options").eq(3).contains(addexaminationevent.Eye).parent().click()
        cy.get(".add-options").eq(4).contains(addexaminationevent.Duration).parent().click()
        cy.get(".add-options").eq(5).contains(addexaminationevent.Onset).parent().click()
        cy.get(".add-options").eq(6).contains(addexaminationevent.Severity).parent().click()

    })

    //Click the button to close the popup, post the selections made on the popup window
    cy.get(".add-icon-btn").eq(3).should('be.visible').click()

    //On the read-only field, verify the selections made, as mentioned in the addexaminationevent file
    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_History_description").should('be.visible').should('have.value', addexaminationevent.History + " " + addexaminationevent.Eye + " " + addexaminationevent.Duration + " " + addexaminationevent.Onset + " " + addexaminationevent.Severity + " " )
    })

})

    //Search, Add and Verify Systemic Diagnoses
    it('060.26_And_Verify_Systemic_Diagnoses', () => { 
       
        //Click the button to invoke the popup to have values for selection
        cy.get("#add-history-systemic-diagnoses").should('be.visible').click()
        
        //Search for Systemic Surgery value, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".search").eq(4).should('be.visible').type(addexaminationevent.Systemic_Diagnoses_Search_Term)
          })
        
          //Add for Systemic Surgery value, as mentioned in the addexaminationevent file
          cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(9).contains(addexaminationevent.Systemic_Diagnoses_Disorder).parent().click()
          })

        //Click the button to close the popup, post the selections made on the popup window
        cy.get(".add-icon-btn").eq(4).should('be.visible').click()

    })


    //Add and Verify Allergies
    it('060.27_Add_And_Verify_Allergies', () => { 

        //Click the button to invoke the popup to have values for selection
        cy.get("#add-allergy-btn").should('be.visible').click()

        //Select the Allergies value, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(10).contains(addexaminationevent.Allergies).parent().click()
          })

        //Click the button to close the popup, post the selections made on the popup window
        cy.get(".add-icon-btn").eq(5).should('be.visible').click()

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            //Verify allergies, as mentioned in the addexaminationevent file
            cy.get(".js-not-other-allergy").should('be.visible').should('contain', addexaminationevent.Allergies)

            //Add reaction, as mentioned in the addexaminationevent file
            cy.get("#0_reaction_selection").should('be.visible').select(addexaminationevent.Allergies_Reaction)
          })

    })

    //Test to verify that no previous systemic surgery_Opted
    it('060.28_Ensure_No_Previous_Systemic_Surgery_Opted', () => { 

        //Check the checkbox and verify the same
        cy.get("#OEModule_OphCiExamination_models_SystemicSurgery_no_systemicsurgery").should('be.visible').check()
        cy.get("#OEModule_OphCiExamination_models_SystemicSurgery_no_systemicsurgery").should('be.visible').should('be.checked')

    })

    //Test to verify that Medication History values are pre-populated correctly
    it('060.29_CheckMedication History', () => { 
       
        //Verify the Medication History is pre-populated, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".js-prepended_markup").eq(0).should('be.visible').contains (addexaminationevent.Medication_History_Drug_1)
            cy.get(".flex-meds-inputs").eq(0).should('be.visible').contains (addexaminationevent.Medication_History_Dose_frequency_route_start_stop_1)

            cy.get(".js-prepended_markup").eq(1).should('be.visible').contains (addexaminationevent.Medication_History_Drug_2)
            cy.get(".flex-meds-inputs").eq(2).should('be.visible').contains (addexaminationevent.Medication_History_Dose_frequency_route_start_stop_2)
        })

    })

    //Test to verify that Risks values are pre-populated correctly
    it('060.30_CheckRisks', () => { 
       
        //Scroll to the Risks section
        cy.get(".risk-display").eq(0).scrollIntoView().should('be.visible')

        //Add and verify Risks information, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".risk-display").eq(0).should('be.visible').contains(addexaminationevent.Risk1)
        })
        

        cy.get(".OEModule_OphCiExamination_models_HistoryRisks_entry_table > tbody > [data-key='0'] > :nth-child(2) > :nth-child(2) > input").should('be.visible').check()
        cy.get(".OEModule_OphCiExamination_models_HistoryRisks_entry_table > tbody > [data-key='0'] > :nth-child(2) > :nth-child(2) > input").should('be.visible').should('be.checked')

        
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".risk-display").eq(1).should('be.visible').contains (addexaminationevent.Risk2)
        })

        cy.get(".OEModule_OphCiExamination_models_HistoryRisks_entry_table > tbody > [data-key='1'] > :nth-child(2) > :nth-child(2) > input").check()
        cy.get(".OEModule_OphCiExamination_models_HistoryRisks_entry_table > tbody > [data-key='1'] > :nth-child(2) > :nth-child(2) > input").should('be.visible').should('be.checked')

    })

    //Test to add and verify CVI Status
    it('060.31_Add And Verify CVI Status', () => { 
       
        //Add CVI status date, as mentioned in the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_CVI_Status_element_date_0").should('be.visible').clear().type(addexaminationevent.CVI_status_date)
          })
        
        //Click the button to invoke the popup to have values for selection
        cy.get("#show-add-cvi-popup").should('be.visible').click()

        //Select the CVI Status, as mentioned in the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(18).contains(addexaminationevent.CVI_status).parent().click()
          })

          //Click the button to close the popup, post the selections made on the popup window
          cy.get(".add-icon-btn").eq(10).should('be.visible').click()

          //Verify the CVI status, as mentioned in the addexaminationevent file
          cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_CVI_Status_text").should('be.visible').should('have.text', addexaminationevent.CVI_status)
          })
    })


    //Test to add and verify Family History
    it('060.32_Add And Verify Family History', () => { 
        
        //Click the button to invoke the popup to have values for selection
        cy.get("#add-family-history-button").should('be.visible').click()

        //Add Family History information, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(19).contains(addexaminationevent.Family_History_Relative).parent().click()
            cy.get(".add-options").eq(20).contains(addexaminationevent.Family_History_Side).parent().click()
            cy.get(".add-options").eq(21).contains(addexaminationevent.Family_History_Condition).parent().click()
        })

        //Click the button to close the popup, post the selections made on the popup window
        cy.get(".add-icon-btn").eq(11).should('be.visible').click()

        //Verify Family History information, as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".row-0").children("td").should('be.visible').contains(addexaminationevent.Family_History_Relative)
            cy.get(".row-0").children("td").next().should('be.visible').contains(addexaminationevent.Family_History_Side)
            cy.get(".row-0").children("td").next().next().should('be.visible').contains(addexaminationevent.Family_History_Condition)
        })
    })

    //Test to choose and verify Communication Preferences
    it('060.33_Choose And Verify Communication Preferences', () => { 
       
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Get the value of Large_print_for_correspondence, as mentioned in the addexaminationevent json file
            const cntLarge_print_for_correspondence = addexaminationevent.Large_print_for_correspondence

            //If Large_print_for_correspondence is mentiond as Yes, in the addexaminationevent json file,
            //then click the "Large print for correspondence" checkbox, and verify the same
            if(cntLarge_print_for_correspondence == "Yes"){
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_correspondence_in_large_letters").should('be.visible').check()
                cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_CommunicationPreferences_correspondence_in_large_letters").should('be.visible').should('be.checked')
            }
        })
    })

    //Test to add and verify Intraocular Pressure
    it('060.34_Add And Verify Intraocular Pressure', () => { 
       
        //Click the button to invoke the popup to have values for selection
        cy.get("#iop-right-comment-button").next().should('be.visible').click()

        //Add Intraocular Pressure information (Right eye), as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            //This is commented on purpose, no impact
            //cy.get(".add-options").eq(29).contains(addexaminationevent.Intraocular_Pressure_Instrument_Right_Eye).parent().click()

            cy.get(".add-options").eq(30).contains(addexaminationevent.Intraocular_Pressure_mm_Right_Eye).click()
            cy.get(".add-options").eq(31).contains(addexaminationevent.Intraocular_Pressure_hg_Right_Eye).click()
        })

        //Click the button to close the popup, post the selections made on the popup window
        cy.get(".add-icon-btn").eq(13).should('be.visible').click()
        
        //Click the button to invoke the popup to have values for selection
        cy.get("#iop-left-comment-button").next().should('be.visible').click()

        //Add Intraocular Pressure information (Right eye), as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            //This is commented on purpose, no impact
            //cy.get(".add-options").eq(33).contains(Intraocular_Pressure_Instrument_Left_Eye).parent().click()

            cy.get(".add-options").eq(34).contains(addexaminationevent.Intraocular_Pressure_mm_Left_Eye).click()
            cy.get(".add-options").eq(35).contains(addexaminationevent.Intraocular_Pressure_hg_Left_Eye).click()
        })

        //Click the button to close the popup, post the selections made on the popup window
        cy.get(".add-icon-btn").eq(14).should('be.visible').click()
    })


    //Test to add and verify Visual Acuity
    it('060.35_Add And Verify Visual Acuity', () => { 
       
        //Click the button to invoke the popup to have values for selection, for Right eye
        cy.get("#add-VisualAcuity-reading-btn-right").should('be.visible').click()

        //Add Visual Acuity information (Right eye), as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(37).contains(addexaminationevent.Visual_Acuity_Value_Right_Eye).parent().click()
            cy.get(".add-options").eq(38).contains(addexaminationevent.Visual_Acuity_Method_Right_Eye).parent().click()
          })

        //Click the button to close the popup, post the selections made on the popup window
        cy.get(".add-icon-btn").eq(15).should('be.visible').click()
        
        //Click the button to invoke the popup to have values for selection, for Left eye
        cy.get("#add-VisualAcuity-reading-btn-left").should('be.visible').click()

        //Add Visual Acuity information (Left eye), as mentioned in the addexaminationevent file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(39).contains(addexaminationevent.Visual_Acuity_Value_Right_Eye).parent().click()
            cy.get(".add-options").eq(40).contains(addexaminationevent.Visual_Acuity_Method_Right_Eye).parent().click()
          })

        //Click the button to close the popup, post the selections made on the popup window
        cy.get(".add-icon-btn").eq(16).should('be.visible').click()
    })

    //Test to add and verify Pupils
    it('060.36_Add and Verify Pupils', () => { 
       
        //For, RAPD selection (right eye), under Pupils
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Get the value of Pupils_RAPD_Right, as mentioned in the addexaminationevent json file
            const cntPupils_RAPD_Right = addexaminationevent.Pupils_RAPD_Right
        
            //For the right eye, select accordingly, if the value for Pupils_RAPD_Right, in addexaminationevent json file, is "Not checked"
            if(cntPupils_RAPD_Right == "Not checked"){
            
            //click the "Not checked" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_0_has_abnormality > :nth-child(1)").should('be.visible').click()
            }
        
            //For the right eye, select accordingly, if the value for Pupils_RAPD_Right, in addexaminationevent json file, is "Yes"
            if(cntPupils_RAPD_Right == "Yes"){
        
            //click the "Yes" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_0_has_abnormality > :nth-child(2)").should('be.visible').click()
            }
        
            //For the right eye, select accordingly, if the value for Pupils_RAPD_Right, in addexaminationevent json file, is "No"
            if(cntPupils_RAPD_Right == "No"){
        
            //click the "No" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_0_has_abnormality > :nth-child(3)").should('be.visible').click()
            }
        })


        //For, "Poor Dilator" selection (right eye), under Pupils
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Get the value of Pupils_Poor_Dilator_Right, as mentioned in the addexaminationevent json file
            const cntPupils_Poor_Dilator_Right = addexaminationevent.Pupils_Poor_Dilator_Right
        
            //For the right eye, select accordingly, if the value for Pupils_Poor_Dilator_Right, in addexaminationevent json file, is "Not checked"
            if(cntPupils_Poor_Dilator_Right == "Not checked"){
            
            //click the "Not checked" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_1_has_abnormality > :nth-child(1)").should('be.visible').click()
            }
        
            //For the right eye, select accordingly, if the value for Pupils_Poor_Dilator_Right, in addexaminationevent json file, is "Yes"
            if(cntPupils_Poor_Dilator_Right == "Yes"){
        
            //click the "Yes" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_1_has_abnormality > :nth-child(2)").should('be.visible').click()
            }
        
            //For the right eye, select accordingly, if the value for Pupils_Poor_Dilator_Right, in addexaminationevent json file, is "No"
            if(cntPupils_Poor_Dilator_Right == "No"){
        
            //click the "No" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_1_has_abnormality > :nth-child(3)").should('be.visible').click()
            }
        })

        //For, PEARL selection (right eye), under Pupils
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Get the value of Pupils_PEARL_Right, as mentioned in the addexaminationevent json file
            const cntPupils_PEARL_Right = addexaminationevent.Pupils_PEARL_Right
        
            //For the right eye, select accordingly, if the value for Pupils_PEARL_Right, in addexaminationevent json file, is "Not checked"
            if(cntPupils_PEARL_Right == "Not checked"){
            
            //click the "Not checked" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_2_has_abnormality > :nth-child(1)").should('be.visible').click()
            }
        
            //For the right eye, select accordingly, if the value for Pupils_PEARL_Right, in addexaminationevent json file, is "Yes"
            if(cntPupils_PEARL_Right == "Yes"){
        
            //click the "Yes" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_2_has_abnormality > :nth-child(2)").should('be.visible').click()
            }
        
            //For the right eye, select accordingly, if the value for Pupils_PEARL_Right, in addexaminationevent json file, is "No"
            if(cntPupils_PEARL_Right == "No"){
        
            //click the "No" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_2_has_abnormality > :nth-child(3)").should('be.visible').click()
            }
        })
            
        //For, RAPD selection (left eye), under Pupils
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Get the value of Pupils_RAPD_Left, as mentioned in the addexaminationevent json file
            const cntPupils_RAPD_Left = addexaminationevent.Pupils_RAPD_Left
        
            //For the left eye, select accordingly, if the value for Pupils_RAPD_Left, in addexaminationevent json file, is "Not checked"
            if(cntPupils_RAPD_Left == "Not checked"){
            
            //click the "Not checked" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_0_has_abnormality > :nth-child(1)").should('be.visible').click()
            }
        
            //For the left eye, select accordingly, if the value for Pupils_RAPD_Left, in addexaminationevent json file, is "Yes"
            if(cntPupils_RAPD_Left == "Yes"){
        
            //click the "Yes" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_0_has_abnormality > :nth-child(2)").should('be.visible').click()
            }
        
            //For the left eye, select accordingly, if the value for Pupils_RAPD_Left, in addexaminationevent json file, is "No"
            if(cntPupils_RAPD_Left == "No"){
        
            //click the "No" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_0_has_abnormality > :nth-child(3)").should('be.visible').click()
            }
        })


        //For, "Poor Dilator" selection (left eye), under Pupils
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Get the value of Pupils_Poor_Dilator_Left, as mentioned in the addexaminationevent json file
            const cntPupils_Poor_Dilator_Left = addexaminationevent.Pupils_Poor_Dilator_Left
        
            //For the left eye, select accordingly, if the value for Pupils_Poor_Dilator_Left, in addexaminationevent json file, is "Not checked"
            if(cntPupils_Poor_Dilator_Left == "Not checked"){
            
            //click the "Not checked" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_1_has_abnormality > :nth-child(1)").should('be.visible').click()
            }
        
            //For the left eye, select accordingly, if the value for Pupils_Poor_Dilator_Left, in addexaminationevent json file, is "Yes"
            if(cntPupils_Poor_Dilator_Left == "Yes"){
        
            //click the "Yes" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_1_has_abnormality > :nth-child(2)").should('be.visible').click()
            }
        
            //For the left eye, select accordingly, if the value for Pupils_Poor_Dilator_Left, in addexaminationevent json file, is "No"
            if(cntPupils_Poor_Dilator_Left == "No"){
        
            //click the "No" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_1_has_abnormality > :nth-child(3)").should('be.visible').click()
            }
        })

        //For, PEARL selection (left eye), under Pupils
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Get the value of Pupils_PEARL_Left, as mentioned in the addexaminationevent json file
            const cntPupils_PEARL_Left = addexaminationevent.Pupils_PEARL_Left
        
            //For the left eye, select accordingly, if the value for Pupils_PEARL_Left, in addexaminationevent json file, is "Not checked"
            if(cntPupils_PEARL_Left == "Not checked"){
            
            //click the "Not checked" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_2_has_abnormality > :nth-child(1)").should('be.visible').click()
            }
        
            //For the left eye, select accordingly, if the value for Pupils_PEARL_Left, in addexaminationevent json file, is "Yes"
            if(cntPupils_PEARL_Left == "Yes"){
        
            //click the "Yes" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_2_has_abnormality > :nth-child(2)").should('be.visible').click()
            }
        
            //For the left eye, select accordingly, if the value for Pupils_PEARL_Left, in addexaminationevent json file, is "No"
            if(cntPupils_PEARL_Left == "No"){
        
            //click the "No" radio-button
            cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_2_has_abnormality > :nth-child(3)").should('be.visible').click()
            }
        })

    })

    //Save the examination and verify the header of the next page
    it('060.37_Click Save', () => { 
       
        //Click the Save button at the footer
        cy.get("#et_save_footer").should('be.visible').click()

        //Verify the next page header
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get("#flash-success").should('be.visible').should('contain',addexaminationevent.Examination_Created_Header_Nurse)
          })
          
    })

    //Click Doctor, at the top right, And Verify Next Page Load
    it('060.38_Click Doctor And Verify Next Page Load', () => { 

        //Clicking the Doctor
        cy.get(".buttons-right").children("a").eq(0).should('be.visible').click()

        //Check that the next page is loaded successfully, by verifying the page-header
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Verify the page header against the value of Examination_Created_Header_Doctor, in addexaminationevent json file
            cy.get('.event-title').should('contain',addexaminationevent.Examination_Created_Header_Doctor)
        })
    })

    //Test to add and verify Follow-up
    it('060.39_Add_And_Verify_Follow-up', () => { 
        
        //Click the button to invoke the popup to have values for selection
        cy.get("#show-follow-up-popup-btn").should('be.visible').click()

        //Select values for Follow-up, as mentioned in the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(0).contains(addexaminationevent.Follow_up_outcome_options).parent().click()
          })

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(1).contains(addexaminationevent.Follow_up_quantity_options).click()
        })
        
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(2).contains(addexaminationevent.Follow_up_period_options).parent().click()
        })

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".add-options").eq(3).contains(addexaminationevent.Follow_up_role_options).parent().click()
          })

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
        cy.get(".add-options").eq(4).contains(addexaminationevent.Follow_up_risk_status_options).parent().click()
        })

        //Click the button to close the popup, post the selections made on the popup window
        cy.get("#add-followup-btn").should('be.visible').click()

        cy.wait(3000)

        //Verify that the read-only field is populated with the correct values, as selected above
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            
        //Verify the full string gets populated with the correct values, as selected above
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_ClinicOutcome_entries_0 > td").eq(1).should('be.visible').should('contain', addexaminationevent.Follow_up_outcome_options + " " + addexaminationevent.Follow_up_quantity_options + " " + addexaminationevent.Follow_up_period_options + " " + "with" + " " + addexaminationevent.Follow_up_role_options)
        })
    })

    //Test to add and verify Anterior Segment elements and values
    it('060.40_Add_And_Verify_Anterior_Segment', () => { 

        //For Anterior Segment (Right) click the relevant image/icon, as mentioned in the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
          cy.get(".ed2-toolbar-panel.ed2-main-toolbar").eq(0).should('be.visible').contains(addexaminationevent.Anterior_Segment_Right).parent().click()
        })

        //Wait for 3 seconds
        cy.wait(3000)

        //For Anterior Segment (Left) click the relevant image/icon, as mentioned in the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".ed2-toolbar-panel.ed2-main-toolbar").eq(2).should('be.visible').contains(addexaminationevent.Anterior_Segment_Left).parent().click()
        })

        //Wait for 3 seconds
        cy.wait(3000)

        //Click at the comments icon for right-eye comments
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_right_comment_button").should('be.visible').click()

        //Add commment for Anterior Segment (Right), by lifting the values from the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_right_description").should('be.visible').clear().type(addexaminationevent.Anterior_Segment_Right_Comments)
        })

        //Click at the comments icon for left-eye comments
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_left_comment_button").should('be.visible').click()
        
        //Add commment for Anterior Segment (Left), by lifting the values from the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_AnteriorSegment_left_description").should('be.visible').clear().type(addexaminationevent.Anterior_Segment_Left_Comments)
        })
})

//Test to add and verify Systemic_Surgery
it('060.41_Add_And_Verify_Systemic_Surgery', () => { 
    
    //Un-check the "No Systemic Surgical History" checkbox
    cy.get("#OEModule_OphCiExamination_models_SystemicSurgery_no_systemicsurgery").should('be.visible').click()

    //Click the button to invoke the popup to have values for selection
    cy.get("#show-add-popup-systemic").should('be.visible').click()
    
    //Select the Systemic_Surgery value, as mentioned in the addexaminationevent file
    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
        cy.get(".add-options").eq(14).contains(addexaminationevent.Systemic_Surgery).parent().click()
    })
    
    //Click the button to close the popup, post the selections made on the popup window
    cy.get(".add-icon-btn").eq(5).should('be.visible').click()

})

//Test to search Examination Macula and add and verify details
it('060.42_Search_Examination_Macula_And_Add_And_Verify_Details', () => { 
    
    //Click the search icon at the top
    cy.get("#js-search-in-event").should('be.visible').click()
    
    //Type Examination Macula to the search field at the top
    cy.get("#js-search-event-input-right").should('be.visible').clear().type("Examination Macula")
    
    //Wait for 3 seconds
    cy.wait(3000)
    
    //Click the Examination Macula link
    cy.get(".search_highlight").should('be.visible').click()
    
    //Wait for 3 seconds
    cy.wait(3000)

    //Add Macula information below, lifting the values from the addexaminationevent json file
    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
      cy.get(".ed2-toolbar-panel.ed2-main-toolbar").eq(4).should('be.visible').contains(addexaminationevent.Macula_Right).parent().click()
      cy.get("#ed_canvas_edit_right_317_drusenType_control").should('be.visible').select(addexaminationevent.Drusen_Type_Right)

      cy.get(".ed2-toolbar-panel.ed2-main-toolbar").eq(7).should('be.visible').contains(addexaminationevent.Macula_Left).parent().click()
      cy.get("#ed_canvas_edit_left_317_drusenType_control").should('be.visible').select(addexaminationevent.Drusen_Type_Left)
    })

})

//Test to search Investigation and add and verify details
it('060.42_Search_Investigation_And_Add_And_Verify_Details', () => { 

    //Type Investigation to the search field at the top
    cy.get("#js-search-event-input-right").should('be.visible').clear().type("Investigation")

    //Wait for 3 seconds
    cy.wait(3000)
    
    //Click the Investigation link
    cy.get(".search_highlight").should('be.visible').click()

    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

        //Add Drusen comments for both Right and Left eyes, from addexaminationevent json file
        //Doing it here, so the fields come in the focus
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_PosteriorPole_right_description").clear().type(addexaminationevent.Drusen_Comments_Right)
        cy.get("#OEModule_OphCiExamination_models_Element_OphCiExamination_PosteriorPole_left_description").clear().type(addexaminationevent.Drusen_Comments_Left)
    })

    //Click the button to invokde popup values
    cy.get("#add-investigation-btn").should('be.visible').click()

    //Add Investigation information below, lifting the values from the addexaminationevent json file
    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
        cy.get(".add-options").eq(48).contains(addexaminationevent.Investigation_OCT).parent().click()
    })

    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
        cy.get(".add-options").eq(49).contains(addexaminationevent.Investigation_B_Scan).parent().click()
    })

    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
        cy.get(".add-options").eq(50).contains(addexaminationevent.Investigation_Add).parent().click()
    })

    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
        cy.get(".add-options").eq(51).contains(addexaminationevent.Investigation_Visual_Fields).parent().click()
    })

    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
        cy.get(".add-options").eq(52).contains(addexaminationevent.Investigation_Topography).parent().click()
    })

    //Click the button to close the popup, post the selections made on the popup window
    cy.get(".add-icon-btn").eq(20).should('be.visible').click()

})


//Save the doctor record and verify that (a) save happened successfully, and (b) next page is loaded successfully
it('060.43_Save_Doctor_Record_And_Verify_Next_Page_Loads', () => { 
    //validate the above selections in the text box, whose id is:
    //#OEModule_OphCiExamination_models_Element_OphCiExamination_Investigation_description
    
    //Save the record
    cy.get("#et_save_footer").should('be.visible').click()

    //Wait for 3 seconds
    cy.wait(5000)

    //Check that the next page is loaded successfully, by verifying the page-header
    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

        //Verify the page header against the value of Examination_Created_Header_Doctor, in addexaminationevent json file
        cy.get('.event-title').should('contain',addexaminationevent.Examination_Created_Header_Doctor)
    })

})

    //Test to go for editing the doctors examination data, and verify next page loads successfully
    it('060.44_Edit_Doctor_Examination_Data_And_Verify_Next_Page_Load', () => { 

        //Click at the Edit at the top
        cy.get(".button.header-tab").eq(1).should('be.visible').click()

        //Check that the next page is loaded successfully, by verifying the page-header
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Verify the page header against the value of Examination_Created_Header_Doctor, in addexaminationevent json file
            cy.get('.event-title').should('contain',addexaminationevent.Examination_Created_Header_Doctor)
        })
    })

    //Test to delete the Systemic Diagnoses data
    it('060.45_Delete_Systemic_Diagnoses_Data', () => { 

        //Scroll to the delete button
        cy.get(".oe-i.trash").eq(1).scrollIntoView().should('be.visible')

        //Click the delete button
        cy.get(".oe-i.trash").eq(1).should('be.visible').click()
        
        //Check the "No Systemic Diagnoses" checkbox
        cy.get("#OEModule_OphCiExamination_models_SystemicDiagnoses_no_systemic_diagnoses").should('be.visible').click()

    })

    //Save the doctors edited examination data and verify next page loads successfully
    it('060.46_Save_Doctors_Edited_Examination_Data_And_Verify_Next_Page_Load', () => { 

        //click at the save button
        cy.get("#et_save").should('be.visible').click()

        //Check that the next page is loaded successfully, by verifying the page-header
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Verify the page header against the value of Examination_Created_Header_Doctor, in addexaminationevent json file
            cy.get('.event-title').should('contain',addexaminationevent.Examination_Created_Header_Doctor)
        })

    })

  
    //Validattions start here
  
    //Validate History
    it('060.47_Validate History', () => { 

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //History information to be verified against the data in the addexaminationevent json file
            cy.get(".data-value > span").eq(0).should('be.visible').should('contain', addexaminationevent.History + " " + addexaminationevent.Eye + " " + addexaminationevent.Duration + " " + addexaminationevent.Onset + " " + addexaminationevent.Severity + " " )
        })
    })

    //Validate Eye Medications
    it('060.48_Validate Eye Medications', () => { 

        //Scroll to Eye Medications section
        cy.get("#view-Eye-Medications-Current > tbody > tr >td").eq(4).scrollIntoView().should('be.visible')

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            
            //Eye Medications information to be verified against the data in the addexaminationevent json file
            cy.get("#view-Eye-Medications-Current > tbody > tr >td").eq(4).should('be.visible').should('contain', addexaminationevent.Medication_History_Drug_1)
            cy.get("#view-Eye-Medications-Current > tbody > tr >td").eq(8).should('be.visible').should('contain', addexaminationevent.Medication_History_Drug_2)
        })
    })

    //Validate Systemic Procedures
    it('060.49_Validate Systemic Procedures', () => { 

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Systemic Procedures information to be verified against the data in the addexaminationevent json file
            cy.get(".tile-data-overflow").eq(2).should('be.visible').contains(addexaminationevent.Systemic_Surgery)
        })
    })

    //Validate Family
    it('060.50_Validate Family', () => { 

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            
            //Family information to be verified against the data in the addexaminationevent json file
            cy.get(".tile-data-overflow").eq(3).should('be.visible').contains(addexaminationevent.Family_History_Side + " " + addexaminationevent.Family_History_Relative + ": " + addexaminationevent.Family_History_Condition)
        })
        
    })

    //Validate Follow-up
    it('060.51_Validate Follow-up', () => { 

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            
            //Follow-up information to be verified against the data in the addexaminationevent json file
            cy.get(".tile-data-overflow > .last-left > tbody > tr > :nth-child(2)").should('be.visible').should('contain', addexaminationevent.Follow_up_outcome_options + " " + addexaminationevent.Follow_up_quantity_options + " " + addexaminationevent.Follow_up_period_options + " " + "with" + " " + addexaminationevent.Follow_up_role_options)
      })
})

//Validate Drops
    it('060.52_Validate Drops', () => { 
    
    cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

        //Drops (Right) information to be verified against the data in the addexaminationevent json file
        cy.get(".element-table.large").eq(0).should('be.visible').contains(addexaminationevent.Drops_Right_Eye_Drug_Name)
        cy.get(".right-eye > .element-table > tbody > tr > :nth-child(2)").should('be.visible').contains(addexaminationevent.Drops_Right_Eye_Time)
        cy.get(".OEModule_OphCiExamination_models_Element_OphCiExamination_Dilation > .element-data > .right-eye > div").should('be.visible').contains(addexaminationevent.Drops_Right_Eye_Comments)

        //Drops (Left) information to be verified against the data in the addexaminationevent json file
        cy.get(".element-table.large").eq(1).should('be.visible').contains(addexaminationevent.Drops_Left_Eye_Drug_Name)
        cy.get(".left-eye > .element-table > tbody > tr > :nth-child(2)").should('be.visible').contains(addexaminationevent.Drops_Left_Eye_Time)
        cy.get(".OEModule_OphCiExamination_models_Element_OphCiExamination_Dilation > .element-data > .left-eye > div").should('be.visible').contains(addexaminationevent.Drops_Left_Eye_Comments)
    })
})

    //Validate Allergies
    it('060.53_Validate Allergies', () => { 

        //Scroll to Allergies section
        cy.get(".dot-list").eq(0).scrollIntoView().should('be.visible')
        
        //Allergies text to be verified against the data in the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".dot-list").eq(0).children("li").should('be.visible').contains(addexaminationevent.Allergies)
            cy.get("li > .fade").should('be.visible').should('contain',addexaminationevent.Allergies_Reaction)
        })
    })

    //Validate Risks
    it('060.54_Validate Risks', () => { 

        //Scroll to Risks section
        cy.get(".element-data > .large > tbody > tr > :nth-child(1)").scrollIntoView().should('be.visible')

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Risks information to be verified against the data in the addexaminationevent json file
            cy.get(":nth-child(1) > :nth-child(2) > .dot-list > :nth-child(2)").should('be.visible').contains(addexaminationevent.Risk1)
            cy.get(".dot-list > :nth-child(4)").should('be.visible').should('contain',addexaminationevent.Risk2)
        })

    })

    //Validate CVI status
    it('060.55_Validate CVI status', () => { 

        //Scroll to CVI status
        cy.get(".element-data > .large > tbody > tr > :nth-child(1)").scrollIntoView().should('be.visible')

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //CVI status text to be verified against the data in the addexaminationevent json file
            cy.get(".element-data > .large > tbody > tr > :nth-child(1)").should('be.visible').should('contain',addexaminationevent.CVI_status)
        })
    })

    //Validate Communication Preferences
    it('060.56_Validate Communication Preferences', () => { 

        //Scroll to "Large print for correspondence" element
        cy.get("tbody > :nth-child(1) > :nth-child(2) > .data-value").scrollIntoView().should('be.visible')

        //Verify that the value is in accordance to the one mentioned in the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get("tbody > :nth-child(1) > :nth-child(2) > .data-value").should('be.visible').should('contain',addexaminationevent.Large_print_for_correspondence)
        })
    })

    //Validate Intraocular Pressure
    it('060.57_Validate Intraocular Pressure', () => { 

        //Intraocular Pressure information to be verified against the data in the addexaminationevent json file
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            cy.get(".OEModule_OphCiExamination_models_Element_OphCiExamination_IntraocularPressure > .element-data > .right-eye > .large > tbody > tr > :nth-child(1)").should('be.visible').contains(addexaminationevent.Intraocular_Pressure_mm_Right_Eye + addexaminationevent.Intraocular_Pressure_hg_Right_Eye + "mm Hg")
            cy.get(".OEModule_OphCiExamination_models_Element_OphCiExamination_IntraocularPressure > .element-data > .right-eye > .large > tbody > tr > :nth-child(3)").should('be.visible').should('contain',addexaminationevent.Intraocular_Pressure_Instrument_Right_Eye)

            cy.get(".OEModule_OphCiExamination_models_Element_OphCiExamination_IntraocularPressure > .element-data > .left-eye > .large > tbody > tr > :nth-child(1)").should('be.visible').contains(addexaminationevent.Intraocular_Pressure_mm_Left_Eye + addexaminationevent.Intraocular_Pressure_hg_Left_Eye + "mm Hg")
            cy.get(".OEModule_OphCiExamination_models_Element_OphCiExamination_IntraocularPressure > .element-data > .left-eye > .large > tbody > tr > :nth-child(3)").should('be.visible').should('contain',addexaminationevent.Intraocular_Pressure_Instrument_Left_Eye)
        })

    })

    //Validate Visual Acuity
    it('060.58_Validate Visual Acuity', () => { 

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Visual Acuity information to be verified against the data in the addexaminationevent json file
            cy.get(".element-title > small").should('be.visible').contains(addexaminationevent.Visual_Acuity_VA_Scale)

            cy.get(".right-eye > .data-value > .priority-text").should('be.visible').contains(addexaminationevent.Visual_Acuity_Value_Right_Eye + " " + addexaminationevent.Visual_Acuity_Method_Right_Eye)

            cy.get(".left-eye > .data-value > .priority-text").should('be.visible').contains(addexaminationevent.Visual_Acuity_Value_Left_Eye + " " + addexaminationevent.Visual_Acuity_Method_Left_Eye)
        })
    })

    //Validate Pupils
    it('060.59_Validate Pupils', () => { 

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Pupils (right eye) information to be verified
            cy.get(".right-eye > .last-left > tbody > :nth-child(1) > :nth-child(2) > .dot-list > li").should('be.visible').contains("RAPD")
            cy.get(".right-eye > .last-left > tbody > :nth-child(3) > :nth-child(2) > .dot-list > :nth-child(1)").should('be.visible').contains("Poor Dilator")
            cy.get(".right-eye > .last-left > tbody > :nth-child(3) > :nth-child(2) > .dot-list > :nth-child(2)").should('be.visible').contains("PEARL")

            //Pupils (left eye) information to be verified
            cy.get(".left-eye > .last-left > tbody > :nth-child(1) > :nth-child(2) > .dot-list > li").should('be.visible').contains("RAPD")
            cy.get(".left-eye > .last-left > tbody > :nth-child(3) > :nth-child(2) > .dot-list > :nth-child(1)").should('be.visible').contains("Poor Dilator")
            cy.get(".left-eye > .last-left > tbody > :nth-child(3) > :nth-child(2) > .dot-list > :nth-child(2)").should('be.visible').contains("PEARL")
        })
    })

    //Validate Anterior Segment
    it('060.60_Validate Anterior Segment', () => { 

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Anterior Segment comments to be verified against the data in the addexaminationevent json file
            cy.get(".data-value").eq(16).should('be.visible').contains(addexaminationevent.Anterior_Segment_Right_Comments)
            cy.get(".data-value").eq(20).should('be.visible').contains(addexaminationevent.Anterior_Segment_Left_Comments)
        })
    })

    //Validate Macula
    it('060.61_Validate Macula', () => { 

        //Scroll to the Macula section
        cy.get(".large-text").eq(6).scrollIntoView().should('be.visible')

        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {

            //Macula information to be verified against the data in the addexaminationevent json file
            
            cy.get(".data-value").eq(23).should('be.visible').contains(addexaminationevent.Drusen_Type_Right, { matchCase: false })
            cy.get(".data-value").eq(23).should('be.visible').contains(addexaminationevent.Macula_Right, { matchCase: false })

            cy.get(".data-value").eq(25).should('be.visible').contains(addexaminationevent.Drusen_Type_Left, { matchCase: false })
            cy.get(".data-value").eq(25).should('be.visible').contains(addexaminationevent.Macula_Left, { matchCase: false })

            //Macula comments to be verified against the data in the addexaminationevent json file
            cy.get(".data-value").eq(24).should('be.visible').contains(addexaminationevent.Drusen_Comments_Right, { matchCase: false })

            cy.get(".data-value").eq(26).should('be.visible').contains(addexaminationevent.Drusen_Comments_Left, { matchCase: false })

        })
    })

    //Validate Investigation
    it('060.62_Validate Investigation', () => { 

        //Scroll to the Investigation text
        cy.get(".large-text").eq(6).scrollIntoView().should('be.visible')
    
        cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            //Investigation text to be verified against the data in the addexaminationevent json file
            cy.get(".large-text").eq(6).should('be.visible').contains(addexaminationevent.Investigation_OCT + " " + addexaminationevent.Investigation_B_Scan + " " + addexaminationevent.Investigation_Add + " " + addexaminationevent.Investigation_Visual_Fields + " " + addexaminationevent.Investigation_Topography)
        })
    })

    //Validate Follow-up
    it('060.63_Validate Follow-up', () => { 
          
          cy.fixture("addexaminationevent.json").then((addexaminationevent) => {
            //Follow-up text to be verified against the data in the addexaminationevent json file
            cy.get(".large-text").eq(7).should('be.visible').should('contain', addexaminationevent.Follow_up_outcome_options + " " + addexaminationevent.Follow_up_quantity_options + " " + addexaminationevent.Follow_up_period_options + " " + "with" + " " + addexaminationevent.Follow_up_role_options)
        })
  })

    //Validattions end here
})